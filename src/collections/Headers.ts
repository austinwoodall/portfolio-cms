import type { CollectionConfig } from 'payload'

export const Headers: CollectionConfig = {
  slug: 'headers',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true
    },
    {
      name: 'description',
      type: 'textarea',
      required: true
    }
  ],
}
