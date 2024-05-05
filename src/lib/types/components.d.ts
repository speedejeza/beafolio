import type { Schema, Attribute } from '@strapi/strapi';

export interface PhotographyPhotoRow extends Schema.Component {
  collectionName: 'components_photography_photo_rows';
  info: {
    displayName: 'Row';
    icon: 'picture';
    description: '';
  };
  attributes: {
    align: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'center'>;
    photos: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'photography.photo-row': PhotographyPhotoRow;
    }
  }
}
