# AloKingz Landing Pages

A Next.js 14 landing page starter with three themed variations inspired by Zynga Poker. Built with TypeScript, Tailwind CSS, Framer Motion, and tsParticles for stunning animated backgrounds.

## Features

- **3 Landing Page Routes** - Each with 3 unique variations (9 total layouts)
- **Dark Theme** - Elegant dark backgrounds with light text
- **Animated Particles** - Multiple particle presets (gold, royal, crimson, casino, sparkle)
- **Responsive Design** - Mobile-first approach with smooth scaling
- **Modern Stack** - Next.js 14 App Router, TypeScript, Tailwind CSS
- **Framer Motion** - Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Add your images to the `public/` folder:
   - `logo-alokingz.png` - Your AloKingz mascot/logo image
   - `bg-casino.jpg` - Casino/carnival background image

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
alokingz-landing/
├── app/
│   ├── components/          # Shared UI components
│   │   ├── Navigation.tsx   # Top navigation bar
│   │   ├── Footer.tsx       # Site footer
│   │   ├── HeroSection.tsx  # Hero with CTA buttons
│   │   ├── FeatureGrid.tsx  # Feature cards grid
│   │   ├── StatsStrip.tsx   # Statistics banner
│   │   ├── AnimatedBackground.tsx  # Background layer
│   │   └── ParticlesBackground.tsx # tsParticles wrapper
│   ├── landing-1/           # Route 1 - Classic Zynga-inspired
│   ├── landing-2/           # Route 2 - Social proof focused
│   ├── landing-3/           # Route 3 - Experimental/flashy
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Redirects to /landing-1
│   └── globals.css          # Global styles & Tailwind
├── public/                  # Static assets (add your images here)
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## Landing Page Routes

### `/landing-1` - Classic Style
Inspired by Zynga Poker's layout with hero, features, and stats sections.

| Variation | Theme | Layout |
|-----------|-------|--------|
| `?v=1` | Gold | Centered hero |
| `?v=2` | Crimson | Left-aligned, stacked features |
| `?v=3` | Royal Blue | Right-aligned, full-width CTA |

### `/landing-2` - Social Proof
Focused on leaderboards, tournaments, and player progression.

| Variation | Theme | Layout |
|-----------|-------|--------|
| `?v=1` | Gold | Leaderboard prominent |
| `?v=2` | Casino | Compact feature grid |
| `?v=3` | Royal Blue | Billboard typography |

### `/landing-3` - Experimental
Dynamic visuals with steppers, carousels, and split-screen effects.

| Variation | Theme | Layout |
|-----------|-------|--------|
| `?v=1` | Sparkle | Full-screen centered with stepper |
| `?v=2` | Gold | Right-aligned with vertical CTA list |
| `?v=3` | Casino | Split-screen immersive hero |

## Switching Variations

Use the floating selector in the bottom-right corner, or navigate directly:

- `/landing-1?v=1`, `/landing-1?v=2`, `/landing-1?v=3`
- `/landing-2?v=1`, `/landing-2?v=2`, `/landing-2?v=3`
- `/landing-3?v=1`, `/landing-3?v=2`, `/landing-3?v=3`

## Customization

### Particles Presets

Available presets in `ParticlesBackground`:

```tsx
<ParticlesBackground 
  preset="gold"      // Gold particles with links
  // preset="royal"   // Blue particles with links
  // preset="crimson" // Red particles with links
  // preset="casino"  // Multi-color particles
  // preset="sparkle" // White/gold stars, no links
  density={80}       // Particle count (default: 80)
/>
```

### Theme Colors

Edit `tailwind.config.ts` to customize:

- `gold` - Primary brand accent
- `crimson` - Red variation
- `royal` - Blue variation
- `dark` - Background shades

### Button Styles

Available button classes in `globals.css`:

- `.btn-primary` - Gold gradient CTA
- `.btn-primary-red` - Crimson gradient
- `.btn-primary-blue` - Royal blue gradient
- `.btn-secondary` - Outlined button

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [tsParticles](https://particles.js.org/) - Particle effects
- [ESLint](https://eslint.org/) - Code linting

## Adding Your Images

1. **Logo** (`public/images/logo-alokingz.png`):
   - Recommended size: 400x400px or larger
   - PNG with transparent background
   - The mascot/character logo

2. **Background** (`public/bg-casino.jpg`):
   - Recommended size: 1920x1080px or larger
   - High-quality JPG
   - Casino, carnival, or city nightscape theme

## License

This project is for demonstration purposes.

---

Built with ❤️ for AloKingz

