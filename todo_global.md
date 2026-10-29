# Global configuration for web development

## 1.- Basic packages and configurations

- [x] ⚙️ Editorconfig
- [x] 📦 Tsconfig
  - [x] 📦 Strict typescript config
  - [x] ⚙️ Absolute imports configuration
- [x] 📦 Browserlist
- [x] ⚙️ Package.json configuration
  - [x] ⚙️️️ Name
  - [x] ⚙️️️ Description
  - [x] ⚙️️️ Author
  - [x] ⚙️️️ Engines
  - [x] ⚙️️️ Version
  - [x] ⚙️️️ Scripts
  - [x] ⚙️️️ Keywords
  - [x] ⚙️️️ Repository
  - [x] ⚙️️️ Bugs
  - [x] ⚙️️️ Homepage
- [x] ⚙️ Package manager enforcement (Engines)
- [x] ⚙️ Npm configuration

## 2.- Linting and formatting

- [ ] 📦 ESLint configuration
- [ ] 📦 Oxlint configuration
- [ ] 📦 Prettier configuration
- [ ] 📦 Stylelint configuration

## 3.- Git and github

- [x] ⚙️ Git ignore
- [x] ⚙️ Git attributes
- [x] ⚙️ Pull request template configuration
- [x] ⚙️ Documentation request template
- [x] ⚙️ Feature request template
- [x] ⚙️ Issue template configuration
- [x] ⚙️ Question template configuration
- [ ] 📦 Git hooks configuration
  - [ ] 📦 Commit message convention configuration
  - [ ] 📦 Commit template configuration
  - [ ] 📦 Semantic release with changelog
  - [ ] 📦 Lint staged configuration

## 4.- VSCode and environment workspace

- [x] ⚙️ Recommended extensions configuration (extensions.json)
- [x] ⚙️ Default editor settings (settings.json)
- [x] ⚙️ Tasks configuration (tasks.json)
- [x] ⚙️ Launch configuration for debugging (launch.json)

## 5.- Environment configuration

- [ ] 📦 Environment variables configuration
  - [ ] 📦 .env file configuration
  - [ ] 📦 Environment-specific settings configuration
  - [ ] 📦 Env example generation

## 6.- Documentation

- [ ] ⚙️ README

## 7.- Project analysis

- [ ] 📦 Bundle analyzer
- [ ] 📦 Lighthouse performance analysis configuration
- [x] ⚙ Dependency audit configuration (npm audit automatizado en CI)

## 8.- Testing and quality assurance

- [ ] ⚙ Vitest configuration (Unit & integration testing)
- [ ] ⚙ Playwright configuration (End-to-End multi-browser testing)

## 9.- HTML and SEO best practices

- [ ] ⚙️ Base layout structure (index.html / layout component)
  - [ ] ⚙️ Doctype HTML configuration
  - [ ] ⚙️ Charset (UTF-8) setup
  - [ ] ⚙️ Viewport meta tag (responsive scaling)
  - [ ] ⚙️ Lang and direction attributes (`lang`, `dir`)
  - [ ] ⚙️ X-UA-Compatible header
- [ ] ⚙️ Color scheme meta tag configuration
- [ ] ⚙️ Theme color meta tag configuration
- [ ] ⚙️ Security and performance headers
  - [ ] ⚙️ Mandatory `noopener` and `noreferrer` on external `target="_blank"` links
  - [ ] ⚙️ Strict order of elements in `<head>` (charset -> viewport -> title -> styles -> scripts)
- [ ] 📦 Reusable SEO component / generator
  - [ ] ⚙️ Author metadata (name, email, web)
  - [ ] ⚙️ Title, description and keywords setup
  - [ ] ⚙️ Canonical URL configuration
  - [ ] ⚙️ RSS feed link integration
  - [ ] ⚙ Twitter Cards generation
  - [ ] 📦 Open Graph (OG) tags generation
  - [ ] 📦 JSON-LD structured data (Schema.org) generator
- [ ] ⚙️ Favicons and app icons setup
  - [ ] ⚙️ Standard favicon
  - [ ] ⚙️ Apple touch icon
  - [ ] ⚙️ Window tiles / Web manifest icons
- [ ] ⚙️ Architecture and fallback pages
  - [ ] ⚙️ Custom 404 error page template
  - [ ] ⚙️ Semantic HTML elements standard enforcement (header, nav, main, section, article, footer)
- [ ] 📦 Automated sitemap and robots generator
  - [ ] 📦 `robots.txt` configuration template
  - [ ] 📦 Automated `sitemap.xml` build script
- [ ] ⚙️ Content Security Policy (CSP)
  - [ ] ⚙️ Default-src configuration
  - [ ] ⚙️ Script-src configuration
  - [ ] ⚙️ Style-src configuration
  - [ ] ⚙️ Img-src configuration
  - [ ] ⚙️ Connect-src configuration
  - [ ] ⚙️ Font-src configuration
  - [ ] ⚙️ Frame-src configuration

## 10.- CSS and SASS architecture

- [ ] ⚙️ Base resets and normalizations
  - [ ] ⚙️ CSS Reset / Box-sizing global rule (`box-sizing: border-box`)
  - [ ] ⚙️ Body defaults (margin, antialiased font rendering)
  - [ ] ⚙️ Media defaults (responsive images, videos, svgs)
- [ ] ⚙️ SASS architectural structure (7-1 pattern / ITCSS)
  - [ ] ⚙️ Abstracts / Variables (Design tokens: colors, spacing, typography scales)
  - [ ] ⚙️ Mixins & Functions (breakpoints, fluid typography, helpers)
  - [ ] ⚙️ Base / Vendors (resets, fonts, third-party hooks)
  - [ ] ⚙️ Layouts (grid systems, page shells, containers)
  - [ ] ⚙️ Components (reusable atomic UI elements)
  - [ ] ⚙️ Utilities / Overrides (helper classes)
- [ ] ⚙️ Preload css (`<link rel="preload" as="style" ...>`) to improve render performance
- [ ] 📦 CSS optimization and compilation pipeline
  - [ ] ️⚙️️️️ Join media queries configuration (PostCSS / Bundler plugin)
  - [ ] ⚙ Remove unused CSS configuration (PurgeCSS / Dead code elimination)
  - [ ] 📦 Critical CSS extraction configuration (Above-the-fold performance)
  - [ ] 📦 Class name shortener / Obfuscation setup (Production build optimization)

## 11.- Image handling & optimization

- [ ] ⚙️ Always add descriptive `alt` attributes for accessibility
- [ ] ⚙️ Native lazy loading strategy (`loading="lazy"`)
- [ ] ⚙️ Prefer plain inline/external SVGs over complex raster formats
- [ ] ⚙️ Explicit aspect ratio enforcement (`width`, `height`, CSS `aspect-ratio` to prevent CLS)
- [ ] ⚙️ Responsive images implementation with `srcset` and `sizes` attributes
- [ ] ⚙️ Fetchpriority / Preload para imágenes críticas (Above-the-fold)
- [ ] 📦 SVG compression pipeline (SVGO / build scripts)
- [ ] 📦 Image compression setup (JPEG, PNG optimization)
- [ ] 📦 Automated transformation to modern formats on build (AVIF & WebP conversion pipeline)

## 12.- Fonts & Typography

- [ ] ⚙️ `@font-face` configuration in CSS (local sources, `font-display: swap` strategy)
- [ ] ⚙️ Font preloading in HTML (`<link rel="preload" as="font" ...>`) to eliminate render-blocking and layout shifts (CLS)
- [ ] ⚙️ Fallback font stack configuration (system font metrics fallback to match custom font sizes)
- [ ] 📦 Font subsetting & compression pipeline (Woff2 optimization, stripping unused glyphs/languages)

## 13.- Analytics

- [ ] ⚙️ Search Engine Monitoring & Analytics Setup
  - [ ] ⚙️ Google Search Console property verification & sitemap submission
  - [ ] ⚙️ Google Analytics / GTM base tracking configuration

## 14.- Internationalization (i18n) & Localization

- [ ] ⚙️ Architecture and routing strategy
  - [ ] ⚙️ Locale routing pattern design (subpath prefix e.g., `/es/`, `/en/` for SEO best practices)
  - [ ] ⚙️ Language negotiation and fallback handling (browser preference detection)
  - [ ] ⚙️ Locale persistence strategy (cookies / localStorage preferences)
- [ ] ⚙️ HTML & SEO internationalization tags
  - [ ] ⚙️ `hreflang` alternate link attributes setup (`rel="alternate" hreflang="x"`) for search engine crawlers
  - [ ] ⚙️ Dynamic or localized HTML `lang` attribute switching per locale layout
- [ ] 📦 Translation management and tooling
  - [ ] 📦 Structured translation dictionaries (JSON namespaces / nested key organization)
  - [ ] 📦 Framework i18n integration (e.g., Astro i18n routing, Next.js app router localization, or `i18next`)
  - [ ] 📦 Missing translation key detection & automated extraction pipeline

## 15.- Deployment, Infrastructure (IaC) & CI/CD

- [ ] ⚙️ Infrastructure as Code (Terraform Setup)
  - [ ] ⚙️ Remote State configuration (S3 Backend + DynamoDB state locking)
  - [ ] ⚙️ AWS S3 module for static hosting (bucket policies, CORS, security & privacy)
  - [ ] ⚙️ AWS CloudFront module (origin access control/identity, SSL via ACM, custom domains)
  - [ ] ⚙️ Custom HTTP Security Headers policies (HSTS, CSP, X-Frame-Options) in CloudFront
  - [ ] ⚙️ Route 53 / DNS record configuration pointing to CloudFront distribution
  - [ ] ⚙ Build & Deploy CD: Automated frontend build and `aws s3 sync` to the bucket
  - [ ] ⚙ Post-Deploy pipeline: CloudFront cache invalidation script (`aws cloudfront create-invalidation`)

# Packages to build

- [x] 📦 @stacklys/tsconfig
- [ ] 📦 @stacklys/eslint-config
- [x] 📦 @stacklys/oxlint-config
- [ ] 📦 @stacklys/stylelint-config
- [ ] 📦 @stacklys/prettier-config
- [x] 📦 @stacklys/browserlist-config

- [ ] 📦 @stacklys/git-hooks
- [ ] 📦 @stacklys/logger
- [ ] 📦 @stacklys/tokens-css
- [ ] 📦 @stacklys/environment-variables
- [ ] 📦 @stacklys/font-conversion
- [ ] 📦 @stacklys/image-compression
- [ ] 📦 @stacklys/performance-analyzer-with-lighthouse
- [ ] 📦 @stacklys/bundler-analyzer

- [ ] 📦 @stacklys/i18n
- [ ] 📦 @stacklys/i18n-astro
- [ ] 📦 @stacklys/astro-seo-engine
- [ ] 📦 @stacklys/astro-compression
- [ ] 📦 @stacklys/astro-inline-css
- [ ] 📦 @stacklys/astro-class-shortener
- [ ] 📦 @stacklys/sitemap-generator

- [ ] 📦 @stacklys/porkbun-terraform

- [ ] 📦 @stacklys/structured-types
- [ ] 📦 @stacklys/open-graph-types

- [ ] 📦 @stacklys/cli

# Boilerplate web

- [ ] 📦 astro-template
- [ ] 📦 react-template
- [ ] 📦 nextjs-template
  - [ ] sass version
  - [ ] tailwind version
- [ ] 📦 typescript-template
- [ ] 📦 bun-server-template

# CLI

- [ ] Generate gitignore files
- [ ] Generate package.json files
- [ ] Generate README files
- [ ] Generate LICENSE files

# Readme

- [ ] Information for git branch strategy
- [ ] Information for commit message conventions
- [ ] Information for pull request template
- [ ] Information for issue tracking and management
- [ ] Information for release management
- [ ] Information for package management
- [ ] Information for linters
- [ ] Information for tsconfig and absolute paths