/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withLinaria = require('next-linaria');

module.exports = withLinaria({
  linaria: {
    displayName: true,
    evaluate: true,
  },
  reactStrictMode: true,
});
