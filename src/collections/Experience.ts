import type { CollectionConfig } from 'payload'

export const Experience: CollectionConfig = {
  slug: 'experience',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
        name: 'title',
        type: 'text',
        required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    {
        name: 'dateRange',
        type: 'text',
        required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'skills',
      type: 'array',
      fields: [
        {name: 'name', type: 'text'}
      ],
      required: true,
    },
  ],
}
