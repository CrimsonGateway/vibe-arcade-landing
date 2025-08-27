# 🚀 Vibe Arcade - Sexy Landing Page

The sexiest gaming ecosystem landing page built with cutting-edge web technologies. Features a stunning 3D particle background, sexy unicorn VB logo, and FOMO-inducing elements.

![Vibe Arcade Preview](https://via.placeholder.com/800x400/000000/ff6b6b?text=Vibe+Arcade+Preview)

## ✨ Features

- 🎨 **Sexy VB Unicorn Logo** - Custom SVG with 3D effects and floating animations
- 🌟 **3D Particle Background** - Three.js powered particle system with shaders
- 🔥 **FOMO Elements** - Live countdown, participant counter, and prize pool updates
- 🎯 **Modern Animations** - Framer Motion powered smooth transitions
- 📱 **Mobile Responsive** - Perfect on all devices
- 🎪 **Web3 Aesthetic** - Dark theme with gradient effects and glows

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Fonts**: Inter (Google Fonts)
- **Icons**: Custom SVG illustrations
- **Deployment**: Vercel (optimized)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/vibe-arcade-landing.git
cd vibe-arcade-landing

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
vibe-arcade-landing/
├── src/
│   ├── app/
│   │   ├── globals.css          # Custom styles & animations
│   │   ├── layout.tsx           # Root layout with SEO
│   │   └── page.tsx             # Main landing page
│   └── components/
│       ├── VBLogo.tsx           # Sexy unicorn logo component
│       ├── HeroSection.tsx      # Main hero with FOMO elements
│       └── ParticleBackground.tsx # 3D particle system
├── public/                      # Static assets
├── vercel.json                  # Vercel deployment config
└── tailwind.config.js          # Tailwind configuration
```

## 🎨 Design Features

### VB Logo
- Custom SVG unicorn with gradient fills
- Floating animation with sine wave motion
- Glowing effects and particle trail
- Horn with golden gradient and sparkle effects

### Particle Background
- 2000+ particles in 3D space
- Dynamic rotation and movement
- Color-coded particle system
- Floating spheres with emissive materials

### FOMO Elements
- Live countdown timer (7 days, 23:59:59)
- Real-time participant counter
- Growing prize pool display
- Pulsing "HOT" indicators

### Animations
- Staggered entrance animations
- Hover effects with scale transforms
- Gradient text animations
- Floating particle effects

## 🎯 Customization

### Colors
Edit the color variables in `src/app/globals.css`:

```css
:root {
  --accent-red: #ff6b6b;
  --accent-pink: #ff1493;
  --accent-purple: #9c27b0;
  --accent-blue: #48cae4;
  --accent-yellow: #feca57;
}
```

### Logo
Customize the VB unicorn in `src/components/VBLogo.tsx`:
- Change colors and gradients
- Modify horn design
- Adjust floating animation speed
- Add more particle effects

### Countdown Timer
Modify the countdown in `src/components/HeroSection.tsx`:
```typescript
const [timeLeft, setTimeLeft] = useState({
  days: 7,      // Change days
  hours: 23,    // Change hours
  minutes: 59,  // Change minutes
  seconds: 59   // Change seconds
});
```

### Particle System
Customize particles in `src/components/ParticleBackground.tsx`:
```typescript
const particlesCount = 2000;  // Change particle count
// Modify colors, sizes, and movement patterns
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

### Other Platforms
```bash
# Build the project
npm run build

# Deploy the .next folder or use static export
npm run build:static
```

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interactions
- Optimized particle count for mobile
- Fast loading with code splitting

## 🎪 Performance Features

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js built-in optimization
- **Font Loading**: Optimized Google Fonts loading
- **Bundle Analysis**: Webpack bundle analyzer support
- **Caching**: Aggressive caching strategies

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Environment Variables

Create a `.env.local` file for development:

```bash
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Three.js** for amazing 3D capabilities
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Next.js** for the incredible framework

## 🎮 About Vibe Arcade

Vibe Arcade is the sexiest gaming ecosystem on Solana, featuring:
- 🎯 Competitive tournaments
- 🏆 Massive prize pools
- 🚀 Community-driven mechanics
- 💎 Exclusive NFT rewards
- 🌟 Player engagement features

---

**Built with ❤️ for the Solana ecosystem**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/vibe-arcade-landing)