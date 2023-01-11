import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'scpqq8zp',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skVsPk9aOzbD26lCMxkKFjRpFzmx59tY6NHPvavDWIHYnLeULjpobRMlGBzX3JmaVwKkJ5WLUTrcfpwDIFJL6BD1UPqX5cpbEv2teHkcTJ1VziSp3aDdIdeIYPPEaBqlt2xZh2A2ap2T7aoapBtawUGxBO2FDwL7fiUZGezeBmq7ptrxvE73',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);