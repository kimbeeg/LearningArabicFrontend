# Arabic Learning Platform Template

This template provides a reusable UI framework for creating educational platforms, specifically designed for teaching Arabic to young children (ages 4-8).

## Features

- Responsive design optimized for all devices
- Child-friendly UI with large, clickable elements
- Sections for letters, vocabulary, games, and songs
- Customizable theme and configuration
- iframe-compatible for embedding
- Built with React, TypeScript, and Tailwind CSS

## Template Configuration

The template can be customized using the `TemplateConfig` interface:

```typescript
interface TemplateConfig {
  title: string;           // Platform title
  logo?: string;          // Custom logo URL
  primaryColor?: string;  // Primary theme color
  secondaryColor?: string; // Secondary theme color
  showLogin?: boolean;    // Toggle login button
  showNewsletter?: boolean; // Toggle newsletter section
}
```

## Usage Example

```typescript
import { TemplateWrapper } from './components/TemplateWrapper';

const config = {
  title: 'My Arabic Learning Platform',
  primaryColor: '255 159 28',
  secondaryColor: '106 76 219',
  showLogin: true,
  showNewsletter: true,
};

function MyApp() {
  return (
    <TemplateWrapper config={config}>
      <App />
    </TemplateWrapper>
  );
}
```

## Embedding in an iframe

The template is designed to work seamlessly within an iframe:

```html
<iframe 
  src="https://your-deployed-url.com" 
  width="100%" 
  height="100%" 
  frameborder="0"
  allow="fullscreen"
></iframe>
```

## Customization Guidelines

1. **Colors**: Use warm and inviting colors suitable for children
2. **Typography**: Maintain large, readable text
3. **Navigation**: Keep navigation simple and intuitive
4. **Content**: Ensure all content is age-appropriate
5. **Interactions**: Design for touch interfaces

## Page Structure

- **Home**: Landing page with featured content
- **Letters**: Arabic alphabet learning
- **Vocabulary**: Basic word categories
- **Games**: Interactive learning games
- **Songs**: Educational songs and rhymes

## Best Practices

1. Maintain responsiveness across all screen sizes
2. Keep animations smooth and non-distracting
3. Use clear, consistent navigation patterns
4. Ensure all interactive elements are easily clickable
5. Provide clear feedback for user actions

## Dependencies

- React
- React Router
- Tailwind CSS
- Lucide React (for icons)

## Getting Started

1. Clone the template
2. Install dependencies: `npm install`
3. Configure the template using `TemplateConfig`
4. Start development server: `npm run dev`