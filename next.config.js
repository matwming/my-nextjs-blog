module.exports = {
  images: {
    domains: ['gravatar.com']
  },
  eslint: {
    // dirs: ['components', 'layouts', 'lib', 'pages']
  },
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()'
          }
        ]
      }
    ]
  },
  transpilePackages: ['dayjs'],
  webpack: (config, { isServer }) => {
    // Add a rule to handle dayjs locale files
    config.module.rules.push({
      test: /dayjs[/\\]locale/,
      loader: 'ignore-loader'
    });

    return config;
  }
}
