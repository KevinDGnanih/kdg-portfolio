import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'scpqq8zp',
  dataset: 'production',
  apiVersion: '2023-01-10',
  useCdn: true,
  token: 'skrNhKu4x9uVis5rxynZaYR1SesAkItt2GlUgs9VSK03MRHrH4NYd1wBLOIl4jMYpKjJ0MXwfhyFd6KLVDBsvYslLKOntyRvvOrk1w9sziS5dzizjmTwklhE5G1fBuYTJNa6NvY0CmXAzE1Z6LgKcSGB3g6p3SLny2n1m3RnpihV4tzl6Gtg',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);