import ImageKit from 'imagekit';
import dotenv from 'dotenv';

// Load local env first (development). .env fallback handled elsewhere.
dotenv.config({ path: './.env.local' });

// Validate required ImageKit env vars before constructing the client
const required = [
  'IMAGEKIT_PUBLIC_KEY',
  'IMAGEKIT_PRIVATE_KEY',
  'IMAGEKIT_URL_ENDPOINT',
];

const missing = required.filter((k) => !process.env[k]);
if (missing.length) {
  throw new Error(
    `Missing required ImageKit environment variable(s): ${missing.join(', ')}`
  );
}

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

console.log('ImageKit connected successfully!');

export default imagekit;