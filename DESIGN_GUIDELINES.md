# Design System Guidelines - Brutalist Portfolio

## Overview
This portfolio uses a **bold, brutalist design aesthetic** with strong borders, high contrast, and yellow accent colors.

---

## Core Design Principles

### 1. **Color Palette**
- **Primary Background**: `bg-white`
- **Primary Text**: `text-black`
- **Accent Color**: `bg-yellow-400` (for highlights, badges, hover states)
- **Secondary Text**: `text-black/70` (70% opacity for descriptions)
- **Borders**: `border-black` (always 2px or 4px thickness)

### 2. **Typography**
- **Headings**: 
  - `font-bold`
  - `uppercase` (for section titles)
  - Sizes: `text-4xl sm:text-5xl lg:text-6xl`
  - Line height: `leading-tight`
  
- **Body Text**:
  - `text-lg sm:text-xl`
  - `text-black/70` for descriptions
  - `leading-relaxed`

- **Small Text/Labels**:
  - `text-sm`
  - `font-bold uppercase tracking-wide`

### 3. **Spacing**
- **Section Padding**: `py-16 sm:py-20 lg:py-24`
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Element Spacing**: `space-y-8 lg:space-y-12` or `gap-4`

### 4. **Borders (Brutalist Style)**
- **Primary Border**: `brutalist-border` (4px solid black)
- **Thin Border**: `brutalist-border-thin` (2px solid black)
- **Section Dividers**: `border-b-4 border-black`

---

## Component Patterns

### Section Header Pattern
```tsx
<div className="mb-12 lg:mb-16">
  {/* Badge Label */}
  <div className="inline-block px-4 py-2 bg-yellow-400 brutalist-border mb-4">
    <span className="font-bold text-black uppercase text-sm tracking-wide">
      Badge Text
    </span>
  </div>
  
  {/* Main Heading */}
  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
    SECTION TITLE
  </h2>
  
  {/* Description (Optional) */}
  <p className="text-lg sm:text-xl text-black/70 max-w-3xl">
    Section description text here
  </p>
</div>
```

### Card Pattern
```tsx
<div className="group brutalist-border bg-white p-6 hover:bg-black transition-all duration-300">
  {/* Content that changes color on hover */}
  <h3 className="text-xl font-bold text-black group-hover:text-white transition-colors">
    Card Title
  </h3>
  <p className="text-sm text-black/70 group-hover:text-white/70 transition-colors">
    Card description
  </p>
</div>
```

### Button Patterns

#### Primary CTA Button
```tsx
<button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-black brutalist-border hover:bg-yellow-400 hover:text-black transition-all duration-300">
  BUTTON TEXT →
</button>
```

#### Secondary Button
```tsx
<button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-white brutalist-border hover:bg-black hover:text-white transition-all duration-300">
  BUTTON TEXT
</button>
```

#### Icon-Only Button
```tsx
<button className="p-3 brutalist-border bg-white hover:bg-yellow-400 transition-all duration-300">
  <Icon className="w-5 h-5 text-black" />
</button>
```

### Badge/Tag Pattern
```tsx
<span className="px-3 py-1 text-xs font-bold bg-white text-black brutalist-border-thin group-hover:bg-yellow-400 transition-all">
  Tag Text
</span>
```

---

## Interactive States

### Hover Effects
- **Cards**: `hover:bg-black` with text color change to white
- **Buttons**: `hover:bg-yellow-400 hover:text-black`
- **Icons**: May translate or scale slightly
- **Duration**: `duration-300` for smooth transitions

### Focus States
- **Form Inputs**: `focus:bg-yellow-400/20 focus:outline-none`
- Visual feedback with subtle yellow tint

---

## Layout Structure

### Page Template
```tsx
<div className="relative min-h-screen bg-white pt-20">
  <div className="py-16 sm:py-20 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      {/* Content */}
    </div>
  </div>
</div>
```

### Section Template
```tsx
<section className="relative py-16 sm:py-20 lg:py-24 border-b-4 border-black bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    {/* Content Grid/Cards */}
  </div>
</section>
```

---

## Form Elements

### Input Fields
```tsx
<label className="block text-sm font-bold text-black uppercase tracking-wide mb-3">
  Label Text
</label>
<input 
  className="block w-full px-4 py-4 text-black placeholder-gray-400 bg-white brutalist-border focus:bg-yellow-400/20 focus:outline-none transition-colors duration-200"
  placeholder="Placeholder text"
/>
```

### Textarea
```tsx
<textarea 
  className="block w-full px-4 py-4 text-black placeholder-gray-400 bg-white brutalist-border focus:bg-yellow-400/20 focus:outline-none transition-colors duration-200 resize-none"
  rows={6}
/>
```

---

## Key Classes Reference

### Custom Classes (defined in globals.css)
- `brutalist-border` - 4px solid black border
- `brutalist-border-thin` - 2px solid black border  
- `btn-brutalist` - Button with 4px shadow offset
- `btn-brutalist-primary` - Primary button variant
- `card-brutalist` - Card with 4px shadow offset

### Hover Behavior
- Cards: `hover:bg-black` → text to white
- Buttons: `hover:bg-yellow-400` → text stays black
- Icons: May add `group-hover:translate-x-2` for movement

---

## Do's and Don'ts

### ✅ Do's
- Use **uppercase text** for labels and buttons
- Apply **tracking-wide** to uppercase text
- Use **yellow (#FACC15)** for accents and hover states
- Keep **black borders** thick (2px minimum, 4px preferred)
- Use **duration-300** for smooth transitions
- Maintain **consistent spacing** (py-16 sm:py-20 lg:py-24)
- Use **group hover patterns** for nested elements

### ❌ Don'ts
- Don't use rounded corners (keep everything sharp/rectangular)
- Don't use soft shadows (use hard offset shadows)
- Don't use gradient colors
- Don't use thin borders (<2px)
- Don't mix different accent colors (stick to yellow)
- Don't use lowercase for headings/buttons
- Don't forget transition durations

---

## Responsive Breakpoints

```
sm: 640px   - Small devices
md: 768px   - Medium devices  
lg: 1024px  - Large devices
xl: 1280px  - Extra large devices
```

### Responsive Text Sizing Pattern
```tsx
text-4xl sm:text-5xl lg:text-6xl  // Large headings
text-lg sm:text-xl                 // Body text
text-sm                            // Small text/labels
```

---

## Animation Examples

### Subtle Movement on Hover
```tsx
<div className="group-hover:translate-x-2 transition-transform duration-300">
  <ArrowRight />
</div>
```

### Pulsing Effect
```tsx
<span className="animate-pulse">●</span>
```

### Color Transitions
```tsx
<div className="group">
  <p className="text-black group-hover:text-white transition-colors duration-300">
    Text
  </p>
</div>
```

---

## Example: Complete Section

```tsx
<section className="relative py-16 sm:py-20 lg:py-24 border-b-4 border-black bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="mb-12 lg:mb-16">
      <div className="inline-block px-4 py-2 bg-yellow-400 brutalist-border mb-4">
        <span className="font-bold text-black uppercase text-sm tracking-wide">
          Section Label
        </span>
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
        SECTION HEADING
      </h2>
      <p className="text-lg sm:text-xl text-black/70 max-w-3xl">
        Section description goes here
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="group brutalist-border bg-white p-6 hover:bg-black transition-all duration-300">
        <h3 className="text-xl font-bold text-black group-hover:text-white transition-colors mb-3">
          Card Title
        </h3>
        <p className="text-sm text-black/70 group-hover:text-white/70 transition-colors">
          Card content
        </p>
      </div>
    </div>
  </div>
</section>
```

---

## Special Cases

### Full-Width Carousel (Companies Section)
- Header: Contained with max-w-7xl and padding
- Carousel: Full viewport width, no side padding
```tsx
<section>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
    {/* Header */}
  </div>
  <div className="relative">
    {/* Full-width carousel */}
  </div>
</section>
```

### Form Success/Error Messages
```tsx
{/* Success */}
<div className="p-4 bg-green-400 brutalist-border">
  <p className="text-black font-bold text-sm">
    ✓ Success message
  </p>
</div>

{/* Error */}
<div className="p-4 bg-red-500 brutalist-border">
  <p className="text-white font-bold text-sm">
    ✗ Error message
  </p>
</div>
```

---

## Inspiration Source
This design system was inspired by [Michał Skolak's Portfolio](https://michalskolak.pl/#home) while maintaining a unique brutalist aesthetic with bold borders, yellow accents, and high contrast.

---

## Implementation Checklist

When creating a new component or page:

- [ ] Use yellow badge for section label
- [ ] Use large uppercase heading (4xl-6xl)
- [ ] Add description with text-black/70
- [ ] Use py-16 sm:py-20 lg:py-24 spacing
- [ ] Add brutalist-border to cards/buttons
- [ ] Implement hover states with duration-300
- [ ] Use yellow for primary hover states
- [ ] Test responsive behavior on mobile
- [ ] Ensure all text is readable on white background
- [ ] Add transitions to interactive elements

---

Last Updated: 2024

