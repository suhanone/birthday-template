import CherryBlossomParticles from '@/components/CherryBlossomParticles';
import AudioPlayer from '@/components/AudioPlayer';
import HeroSection from '@/components/HeroSection';
import AgeDisplay from '@/components/AgeDisplay';
import BirthdayMessage from '@/components/BirthdayMessage';
import CountdownTimer from '@/components/CountdownTimer';
import BambooDecoration from '@/components/BambooDecoration';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BambooDecoration />
      <CherryBlossomParticles />
      <AudioPlayer />
      
      <HeroSection />
      <AgeDisplay />
      <BirthdayMessage />
      <CountdownTimer />

      <footer className="relative py-12 text-center border-t border-border/50 mt-20">
        <p className="text-muted-foreground">
          Made with <span className="text-pink-500">♥</span> for Priya's Special Day
        </p>
        <p className="text-sm text-muted-foreground/60 mt-2">桜の祝福 - Sakura Blessings</p>
      </footer>
    </div>
  );
}
