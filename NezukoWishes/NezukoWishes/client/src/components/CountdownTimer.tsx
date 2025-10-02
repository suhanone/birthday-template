import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let nextBirthday = new Date(currentYear, 9, 9); // October 9

      if (now > nextBirthday) {
        nextBirthday = new Date(currentYear + 1, 9, 9);
      }

      const isToday = now.getMonth() === 9 && now.getDate() === 9;
      setIsBirthday(isToday);

      const difference = nextBirthday.getTime() - now.getTime();

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  if (isBirthday) {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 text-center bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-pink-500/30">
            <h3 
              className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse"
              style={{ fontFamily: 'Righteous, sans-serif' }}
              data-testid="text-birthday-today"
            >
              🎉 It's Your Special Day! 🎂
            </h3>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-primary animate-spin-slow" />
            <h3 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-countdown-title">
              Next Birthday Countdown
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <Card
              key={unit}
              className="p-6 text-center hover-elevate border-pink-500/20"
              data-testid={`card-countdown-${unit}`}
            >
              <div 
                className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-purple-400 mb-2"
                data-testid={`text-countdown-${unit}-value`}
              >
                {value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider" data-testid={`text-countdown-${unit}-label`}>
                {unit}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
