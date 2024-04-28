import fs from "fs";
import { Readable } from "stream";

const headers = { 'headers': { 'Authorization': `Bearer ${process.env.STRAPI_TOKEN}` } }

async function downloadUpload(uploadUrl) {
    // console.log("upload:", uploadUrl);
    const filepath = `static${uploadUrl}`;
    const resp = await fetch(`${process.env.STRAPI_URL}${uploadUrl}`, headers);
    if (!resp.ok && !resp.body) {
        console.error("Failed to download:", url);
    }
    // console.log("Writing to file:", filepath);
    let writer = fs.createWriteStream(filepath);
    Readable.fromWeb(resp.body).pipe(writer);
}

// Copy all files from API /uploads folder to /static/uploads
async function copyUploads() {
    const res = await fetch(`${process.env.STRAPI_URL}/api/upload/files`, headers);
    const uploads = await res.json();

    // clear static/uploads folder
    if (fs.existsSync('static/uploads')) {
        fs.rmdirSync('static/uploads', { recursive: true });
    }
    fs.mkdirSync('static/uploads');

    console.log("Copying uploads to static/uploads...")

    for (const upload of uploads) {
        downloadUpload(upload.url);
        if (upload.formats != null) {

            for (const [, value] of Object.entries(upload.formats)) {
                downloadUpload(value.url);
            }
        }
    }

    console.log("Uploads copied!")
}

copyUploads();