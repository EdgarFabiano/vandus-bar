# Vandu's Bar Website - Agent Guidelines

## Project Overview
This is a single-page website for Vandu's Bar, a Brazilian bar/restaurant in Formosa, Goiás. The site is built with vanilla HTML, CSS, and JavaScript - no frameworks, bundlers, or build tools.

**Tech Stack:**
- HTML5
- CSS3 (vanilla, no preprocessor)
- Vanilla JavaScript (ES6+)
- External: Google Fonts (Lato), Font Awesome CDN

---

## Project Structure
```
vandus-bar/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── logic.js            # All JavaScript logic
├── images/             # All image assets
├── AGENTS.md           # This file
└── README.md           # Project documentation
```

---

## Commands

### Running Locally
Simply open `index.html` in a browser. No build process required.

### Development
No build tools are configured. For live reload during development:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

### Linting
No linters are configured. Code should follow the style guidelines below.

---

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements (`<nav>`, `<section>`, `<footer>`, `<main>`)
- Always include `lang="pt-BR"` on `<html>` tag
- Use `aria-label` on interactive elements without visible text
- Keep all content in Portuguese (Brazil)
- Place inline styles sparingly; prefer CSS classes

### CSS
- Use CSS custom properties (variables) for colors and spacing
- Follow BEM naming convention for complex components
- Organize CSS by section (nav, hero, about, menu, etc.)
- Use `var(--primary)` (#c8960c) for golden accent color
- Use `var(--bg-dark)` (#0d0d0d) for dark backgrounds
- Mobile-first approach with breakpoints at 768px and 1024px
- Avoid `!important` except for quick fixes

**Color Palette:**
```css
--bg-dark: #0d0d0d;
--bg-card: #1a1a1a;
--bg-card-alt: #222222;
--primary: #c8960c;
--primary-light: #e8b84b;
--text-white: #ffffff;
--text-gray: #cccccc;
--text-muted: #888888;
```

### JavaScript
- Use `const` and `let`; avoid `var`
- Use arrow functions where appropriate
- Use `DOMContentLoaded` event to ensure DOM is ready
- Use Intersection Observer for scroll animations
- Use event delegation where multiple elements are affected
- Keep all JS in `logic.js` (no inline `<script>` tags)

**Function Structure:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality here
});
```

### Naming Conventions
- CSS classes: kebab-case (`hero-section`, `menu-item`)
- JavaScript variables: camelCase (`navToggle`, `tabBtns`)
- HTML IDs: camelCase (matching JS usage)
- Event handlers: use descriptive names (`handleScroll`, `onTabClick`)

### Image Guidelines
- Store all images in `/images/` folder
- Use `background-size: cover` and `background-position: center` for hero/gallery images
- Optimize images before adding to the project
- Use gradient overlays for images without explicit photography

### Accessibility
- Use proper heading hierarchy (h1 → h2 → h3)
- Include `alt` text on all `<img>` elements
- Ensure color contrast meets WCAG guidelines
- Use `aria-label` on buttons with icons only
- Support keyboard navigation for interactive elements

---

## Design Guidelines

### Typography
- Body font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`
- Heading font: Same as body (no decorative fonts)
- Load Lato from Google Fonts for consistent styling

### Spacing
- Section padding: 100px vertical minimum
- Card padding: 25-40px
- Gap between grid items: 16-20px

### Responsive Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

---

## Common Tasks

### Adding a New Menu Tab
1. Add button in `tab-nav` with `data-tab` attribute
2. Create new `<div class="tab-content" id="tabName">`
3. Add menu items with `<div class="menu-item">` structure

### Adding New Images
1. Place image in `/images/` folder
2. Reference with `images/filename.ext`
3. Add gradient overlay via CSS pseudo-element when needed

### Modifying Colors
Update CSS custom properties in `:root` at top of `styles.css`

---

## Important Notes
- **No frameworks** - vanilla HTML/CSS/JS only
- **No build process** - edit files directly
- **Images folder** - all images must be in `/images/`
- **System fonts** - use system font stack, not Google Fonts for body
- **Portuguese content** - all visible text should be in Portuguese (Brazil)
