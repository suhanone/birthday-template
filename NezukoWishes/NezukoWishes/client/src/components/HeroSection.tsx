import { Sparkles } from 'lucide-react';
import bambooForest from '@assets/stock_images/bamboo_forest_japane_bf8b1b13.jpg';
import nezukoImg from '@assets/stock_images/anime_girl_pink_hair_9dd2da2d.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bambooForest})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-purple-900/60 to-background" />
      </div>

      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4 animate-fade-in-up">
              <h1 
                className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-300 to-purple-400 animate-glow"
                style={{ fontFamily: 'Righteous, sans-serif' }}
                data-testid="text-birthday-title"
              >
                Happy Birthday
              </h1>
              <h2 
                className="text-5xl md:text-7xl font-bold text-primary animate-float"
                data-testid="text-name"
              >
                Priya!
              </h2>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 text-xl md:text-2xl text-muted-foreground">
              <Sparkles className="w-6 h-6 text-primary animate-sparkle" />
              <span data-testid="text-date">October 9, 2008</span>
              <Sparkles className="w-6 h-6 text-primary animate-sparkle" />
            </div>

            <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto md:mx-0" data-testid="text-message">
              Wishing you a magical day filled with joy, laughter, and beautiful memories. 
              May your year ahead be as wonderful as you are! 🌸
            </p>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-30 blur-2xl animate-pulse" />
              <img
                src={nezukoImg}
                alt="Nezuko anime character"
                className="relative rounded-3xl border-4 border-pink-500/50 shadow-2xl w-full animate-float"
                data-testid="img-nezuko"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
