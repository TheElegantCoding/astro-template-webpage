# Global configuration for web development

## 1.- Basic packages and configurations

- [ ] ⚙️ Editorconfig
- [ ] 📦 Tsconfig
  - [ ] 📦 Strict typescript config
  - [ ] ⚙️ Absolute imports configuration
- [ ] 📦 Browserlist
- [ ] ⚙️ Package.json configuration
  - [ ] ⚙️️️ Name
  - [ ] ⚙️️️ Description
  - [ ] ⚙️️️ Author
  - [ ] ⚙️️️ Engines
  - [ ] ⚙️️️ Version
  - [ ] ⚙️️️ Scripts
  - [ ] ⚙️️️ Keywords
  - [ ] ⚙️️️ Repository
  - [ ] ⚙️️️ Bugs
  - [ ] ⚙️️️ Homepage
- [ ] ⚙️ Package manager enforcement (Corepack / engines rules)
- [ ] ⚙️ Npm configuration
- [ ] ⚙️ Node Version Manager configuration (.nvmrc / .node-version)

## 2.- Linting and formatting

- [ ] 📦 ESLint configuration
- [ ] 📦 Prettier configuration
- [ ] 📦 Stylelint configuration
- [ ] 📦 Markdownlint configuration

## 3.- Git and github

- [ ] ⚙️ Git ignore
- [ ] ⚙️ Git attributes
- [ ] ⚙️ Git branch strategy configuration
- [ ] ⚙️ Pull request template configuration
- [ ] ⚙️ Documentation request template
- [ ] ⚙️ Feature request template
- [ ] ⚙️ Issue template configuration
- [ ] ⚙️ Question template configuration
- [ ] 📦 Git hooks configuration
  - [ ] 📦 Commit message convention configuration
  - [ ] 📦 Commit template configuration
  - [ ] 📦 Semantic release with changelog
  - [ ] 📦 Lint staged configuration

## 4.- VSCode and environment workspace

- [ ] ⚙️ Recommended extensions configuration (extensions.json)
- [ ] ⚙️ Default editor settings (settings.json)
- [ ] ⚙️ Tasks configuration (tasks.json)
- [ ] ⚙️ Launch configuration for debugging (launch.json)

## 5.- Environment configuration

- [ ] 📦 Environment variables configuration
  - [ ] 📦 .env file configuration
  - [ ] 📦 Environment-specific settings configuration
  - [ ] 📦 Env example generation

## 6.- Documentation

- [ ] ⚙️ README template
- [ ] 📦 Readme generation tool
  - [ ] 📦 Multi block readme generation
  - [ ] 📦 i18n readme

## 7.- Project analysis

- [ ] 📦 Bundle analyzer
- [ ] 📦 Lighthouse performance analysis configuration
- [ ] ⚙ Detection of code dead (knip)
- [ ] ⚙ Dependency audit configuration (npm audit automatizado en CI)
- [ ] ⚙️ Secret detection / GitGuardian ignore configuration (para evitar filtrar tokens de AWS o NPM por error)

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

- [ ] 📦 @name/tsconfig
- [ ] 📦 @name/eslint-config
- [ ] 📦 @name/stylelint-config
- [ ] 📦 @name/prettier-config
- [ ] 📦 @name/markdown-config
- [ ] 📦 @name/browserlist-config

- [ ] 📦 @name/git-hooks

- [ ] 📦 @name/logger

- [ ] 📦 @name/tokens-css

- [ ] 📦 @name/i18n
- [ ] 📦 @name/i18n-astro
- [ ] 📦 @name/font-conversion
- [ ] 📦 @name/astro-seo-engine
- [ ] 📦 @name/astro-compression
- [ ] 📦 @name/astro-inline-css
- [ ] 📦 @name/astro-class-shortener
- [ ] 📦 @name/environment-variables
- [ ] 📦 @name/image-compression
- [ ] 📦 @name/sitemap-generator
- [ ] 📦 @name/performance-analyzer-with-lighthouse
- [ ] 📦 @name/bundler-analyzer
- [ ] 📦 @name/readme-generator

- [ ] 📦 @name/structured-types
- [ ] 📦 @name/open-graph-types
