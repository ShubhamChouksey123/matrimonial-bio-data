# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page matrimonial biodata website built with pure HTML and CSS (no build tools or dependencies). The site is hosted on GitHub Pages and displays personal biodata information in a professional, print-friendly format.

Live URL: https://shubhamchouksey123.github.io/matrimonial-bio-data/

## Architecture

**Single-File Application**: All HTML, CSS, and content are contained in `index.html` (10,825 lines). The CSS is embedded in a `<style>` tag rather than in a separate file.

**Two-Column Layout**: The page uses CSS Grid to create a responsive two-column layout:
- **Left column** (`left-column`): Photo and personal details (background: `#faf8f5`, gold border on right)
- **Right column** (`right-column`): Education, work, family details, and business information

**Key CSS Architecture**:
- Uses CSS Grid for main layout (`content-wrapper` at index.html:71-75)
- Responsive breakpoints at 968px and 600px (index.html:219-247)
- Print-friendly styles remove background and shadows (index.html:249-259)
- Fixed background image with white overlay for readability (index.html:15-37)

## Asset Structure

All images are stored in the `img/` directory:
- `background.jpg` - Fixed background image
- `god-image.png` - Header deity image
- `img.jpeg` - Personal photograph
- `shubham_chouksey.png` - Exported PNG version of the complete page

## Deployment

The site auto-deploys to GitHub Pages via GitHub Actions on every push to `master` branch.

**Workflow**: `.github/workflows/deploy.yml` uploads the entire repository root as the Pages artifact.

**Manual deployment**: Can be triggered via GitHub Actions "workflow_dispatch" event.

## Common Development Tasks

### Local Preview
```bash
# Simply open the file in any browser
open index.html
```

### Testing Responsive Design
Open `index.html` in a browser and use browser DevTools to test:
- Desktop (>968px): Two-column layout
- Tablet (600px-968px): Single column with border transition
- Mobile (<600px): Compressed spacing and smaller fonts

### Verifying Deployment
After pushing to `master`, check the Actions tab on GitHub to confirm the deployment workflow completed successfully.

## Important Design Patterns

**Color Scheme**:
- Primary gold: `#d4af37` (used for headers, borders, accents)
- Secondary gold: `#b8962a` (gradient end)
- Background overlay: `rgba(255, 255, 255, 0.85)`

**Typography**:
- Headings: `'Cormorant Garamond', serif` (elegant, formal)
- Body text: `'Lato', sans-serif` (clean, readable)

**Detail Rows**: The `.detail-row` pattern (index.html:137-160) uses flexbox with fixed-width labels and a colon separator positioned absolutely.

## Content Updates

When updating biodata information, modify the HTML directly in `index.html`. All content is hardcoded - there is no CMS or data file.

**Personal details**: index.html:276-302
**Education/Work**: index.html:306-322
**Family details**: index.html:324-338
**Business information**: index.html:340-346
**Contact details**: index.html:350-356
