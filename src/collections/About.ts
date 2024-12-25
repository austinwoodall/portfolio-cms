import type { CollectionConfig } from 'payload'

export const About: CollectionConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'paragraphs',
      type: 'array',
      fields: [
        {
          name: 'paragraph',
          type: 'textarea',
          required: true,
        },
      ],
      required: true,
    },
  ],
}
