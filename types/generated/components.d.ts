import type { Schema, Struct } from '@strapi/strapi';

export interface ColorColor extends Struct.ComponentSchema {
  collectionName: 'components_color_colors';
  info: {
    displayName: 'Color';
    icon: 'brush';
  };
  attributes: {
    Hex: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

export interface SizeSize extends Struct.ComponentSchema {
  collectionName: 'components_size_sizes';
  info: {
    displayName: 'Size';
    icon: 'stack';
  };
  attributes: {
    size_name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'color.color': ColorColor;
      'size.size': SizeSize;
    }
  }
}
