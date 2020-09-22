const config = {
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: process.env.NODE_ENV === 'development',
      },
    ],
  ],
  presets: ['next/babel'],
};

module.exports = config;
