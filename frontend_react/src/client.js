import sanityClient, { SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-05-08',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN
});
