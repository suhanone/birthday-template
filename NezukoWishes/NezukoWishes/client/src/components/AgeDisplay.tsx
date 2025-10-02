import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Cake } from 'lucide-react';

function calculateAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

export default function AgeDisplay() {
  const birthDate = new Date(2008, 9, 9); // October 9, 2008 (month is 0-indexed)
  const [displayAge, setDisplayAge] = useState(0);
  const actualAge = calculateAge(birthDate);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < actualAge) {
        current++;
        setDisplayAge(current);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [actualAge]);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="relative overflow-hidden border-pink-500/30 bg-gradient-to-br from-card to-purple-950/20 p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          
          <div className="relative text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <Cake className="w-12 h-12 text-primary animate-float" />
              <h3 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="text-age-title">
                Sweet
              </h3>
            </div>
            
            <div 
              className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse"
              style={{ fontFamily: 'Righteous, sans-serif' }}
              data-testid="text-age-number"
            >
              {displayAge}
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground" data-testid="text-age-message">
              Another year of amazing adventures! 🎉
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
