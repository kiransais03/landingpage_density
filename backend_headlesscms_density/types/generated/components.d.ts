import type { Schema, Attribute } from '@strapi/strapi';

export interface HelloIntoduction extends Schema.Component {
  collectionName: 'components_hello_intoductions';
  info: {
    displayName: 'Intoduction';
    description: '';
  };
  attributes: {
    k2ba: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hello.intoduction': HelloIntoduction;
    }
  }
}
