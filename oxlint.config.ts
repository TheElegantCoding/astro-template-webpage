import { oxlintConfig } from '@stacklys/oxlint-config';

const config = oxlintConfig({
  astro: true,
  unicorn: true,
  vitest: true
});

export default config;