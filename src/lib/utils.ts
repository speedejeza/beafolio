export function getSrcSet(mediaAttributes) {
    let srcs: string[] = [`${mediaAttributes.url} ${mediaAttributes.width}w`];

    for (const [, value] of Object.entries(mediaAttributes.formats)) {
        srcs.push(`${value.url} ${value.width}w`);
    }

    return srcs.join(', ');
}