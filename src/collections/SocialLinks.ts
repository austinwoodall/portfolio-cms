import type { CollectionConfig } from 'payload'

export const SocialLinks: CollectionConfig = {
  slug: 'socialLinks',
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
      name: 'url',
      type: 'text',
      required: true
    },
    
  ],
}
