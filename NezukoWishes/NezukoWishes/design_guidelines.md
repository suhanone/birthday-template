# Birthday Website Design Guidelines - Nezuko Anime Theme for Priya

## Design Approach: Reference-Based (Anime/Demon Slayer Aesthetic)

**Primary Inspiration**: Demon Slayer anime visual style with Nezuko character theme
**Design Philosophy**: Immersive anime celebration experience with Japanese cultural elements

## Color Palette

**Primary Colors (Dark Mode)**:
- Nezuko Pink: 340 85% 65% - Main brand color for headers, CTAs, accents
- Bamboo Green: 140 40% 45% - Secondary color for supporting elements
- Deep Purple Night: 270 50% 15% - Primary background
- Soft Purple: 270 40% 25% - Section backgrounds

**Accent Colors**:
- Cherry Blossom: 350 80% 75% - Highlights and particle effects
- Golden Glow: 45 95% 65% - Special text emphasis, sparkles
- Pure White: 0 0% 100% - Text and contrast elements

**Japanese Traditional Touches**:
- Tatami Beige: 35 30% 85% - Decorative borders
- Ink Black: 0 0% 8% - Deep shadows, text

## Typography

**Primary Font**: "Poppins" (Google Fonts) - Clean, modern anime subtitle feel
**Accent Font**: "Luckiest Guy" or "Righteous" (Google Fonts) - Bold anime title style
**Japanese Elements**: Use decorative kanji/hiragana as visual elements (桜 - sakura, 誕生日 - birthday)

**Scale**:
- Hero Title: text-6xl md:text-8xl font-black
- Section Headers: text-4xl md:text-5xl font-bold
- Body: text-lg md:text-xl font-medium
- Accent Text: text-sm uppercase tracking-widest

## Layout System

**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24 for consistent rhythm

**Page Structure**:
1. **Full-Screen Hero** (100vh) - Immersive anime intro with Nezuko visuals
2. **Birthday Message Section** - Personalized greeting with age calculation
3. **Photo Gallery/Memory Wall** - Anime-style polaroid grid layout
4. **Interactive Wishes Section** - Animated cards with birthday messages
5. **Countdown/Age Display** - Dynamic numbers with particle effects
6. **Audio Player Section** - Stylized music control interface

**Container Strategy**:
- Full-bleed hero and footer
- Content sections: max-w-6xl centered
- Cards/components: Asymmetric grid (avoid standard 3-column)

## Component Library

**Hero Section**:
- Fullscreen background with Nezuko illustration overlay
- Animated cherry blossom particles falling continuously
- Glowing text "Happy Birthday Priya" with neon anime effect
- Bamboo frame border decorative elements
- Age display: "Sweet 16" in bold anime typography

**Interactive Elements**:
- Play/Pause audio button (top-right) with vinyl record icon animation
- Floating cherry blossom petals (CSS keyframe animations)
- Sparkle trail following cursor on hero section
- Parallax scroll effects for layered depth

**Card Components**:
- Polaroid-style photo frames with anime sticker overlays
- Soft glow effects on hover (0 0 20px currentColor)
- Rounded corners: rounded-2xl to rounded-3xl
- Pink gradient borders (border-2 with gradient overlay)

**Birthday Message Cards**:
- Nezuko bamboo pattern background texture
- Handwritten-style text with slight rotation (-2 to 2 degrees)
- Anime speech bubble styling for quotes
- Floating animation on scroll-in (translateY)

**Navigation/Audio Player**:
- Minimalist sticky audio controls (top-right corner)
- Vinyl record spinning animation when playing
- Volume slider with Nezuko pink gradient
- Waveform visualization bars (subtle, 5-8 bars)

## Animations & Effects

**Entry Animations**:
- Hero text: Fade + scale up (0.9 to 1) with 0.8s duration
- Sections: Stagger fade-in from bottom (100ms delay between elements)
- Particles: Continuous rain effect with varying speeds

**Interaction Animations**:
- Cards: Gentle lift on hover (translateY(-8px), scale(1.02))
- Buttons: Glow pulse effect on primary CTAs
- Sparkles: Random appearance/disappearance (1-3s intervals)

**Scroll Effects**:
- Parallax background layers (Nezuko illustration moves slower than foreground)
- Progressive reveal: Sections fade in at 70% viewport visibility
- Number counters: Animated count-up for age display

**Performance Note**: Use transform and opacity only, limit to 3-4 concurrent animations

## Images

**Required Images** (use placeholders or Nezuko fan art):

1. **Hero Background** (1920x1080): Nezuko in bamboo forest scene, soft focus with depth of field, pink cherry blossom overlay
2. **Nezuko Portrait** (800x800): Circular frame, cute chibi-style Nezuko holding bamboo, used as decorative element in hero
3. **Cherry Blossom Pattern** (seamless tile): Subtle background texture for sections
4. **Decorative Elements**: Bamboo stalks, traditional Japanese wave patterns (as SVG or PNG overlays)

**Hero Section**: YES - Large hero image with Nezuko bamboo forest scene as primary visual anchor

**Image Treatment**:
- Apply pink color overlay (mix-blend-mode: multiply, opacity 0.2)
- Soft vignette edges for depth
- Polaroid frames for any personal photos of Priya

## Audio Integration

**Player Design**:
- Floating widget (fixed top-right, z-50)
- Glass morphism background (backdrop-blur-lg, bg-purple/20)
- Pink accent for active states
- Auto-play disabled (user initiates via visible play button)
- Smooth fade-in/fade-out on play/pause

**Visual Feedback**:
- Pulsing glow when music plays
- Vinyl record rotation synchronized to playback
- Volume represented by vertical bar fill (Nezuko pink gradient)

## Accessibility Considerations

- Maintain dark mode throughout with sufficient contrast (4.5:1 minimum)
- Pause animation option for motion-sensitive users
- Audio controls clearly labeled with ARIA
- Focus states visible with pink outline (ring-2 ring-pink-400)
- Alt text for all Nezuko illustrations describing the scene

## Unique Design Elements

- **Bamboo Dividers**: Use stylized bamboo stalks between sections
- **Japanese Lanterns**: Floating red lanterns as decorative accents
- **Demon Slayer Symbols**: Incorporate checkered pattern (Nezuko's kimono) subtly
- **Age Badge**: Circular seal with "16" in traditional Japanese calligraphy style
- **Sakura Cursor Trail**: Cherry blossom petals follow mouse movement on desktop

This design creates an immersive anime birthday experience that celebrates Priya's special day with Nezuko's beloved character aesthetic.