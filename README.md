# Ruby's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Modern design with dark/light mode toggle
- Responsive layout for all devices
- Smooth animations and transitions
- Reusable component system

## Reusable Icon Component

The portfolio includes a reusable Icon component that supports both Lucide React and React Icons libraries:

### Usage

```tsx
import Icon from './components/Icon';

// Basic usage
<Icon name="github" />

// With size
<Icon name="react" size="lg" />

// With custom styling
<Icon name="mail" size="sm" className="text-blue-500" />

// With custom color
<Icon name="download" color="#ff6b6b" />
```

### Available Sizes

- `xs` - 12x12px (w-3 h-3)
- `sm` - 16x16px (w-4 h-4)
- `md` - 20x20px (w-5 h-5) - default
- `lg` - 24x24px (w-6 h-6)
- `xl` - 32x32px (w-8 h-8)
- `2xl` - 40x40px (w-10 h-10)

### Supported Icons

The component supports all commonly used icons from both libraries:

**Lucide Icons:** download, mail, github, linkedin, chevron-left, chevron-right, external-link, globe, shopping-cart, bar-chart, zap, users, palette, code, rocket, menu, x, user, building, message-square, send

**React Icons:** react, typescript, javascript, storybook, tailwindcss, nodejs, git, figma, nextjs, bitbucket, github-si, playwright

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```
