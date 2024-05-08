import sanityClient, { SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
  projectId: '',
  dataset: '',
  apiversion: '',
  useCdn: true,
  token: ''
});
