import { Card } from '@/components/ui/card';
import { Heart, Star } from 'lucide-react';
import cherryBlossom from '@assets/stock_images/cherry_blossom_sakur_8ef08a04.jpg';

export default function BirthdayMessage() {
  const messages = [
    {
      icon: Heart,
      title: "A Special Day",
      text: "Today we celebrate the wonderful person you are and all the joy you bring to everyone around you.",
    },
    {
      icon: Star,
      title: "Dreams & Wishes",
      text: "May all your dreams come true and may this year bring you endless happiness and success.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h3 
            className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
            style={{ fontFamily: 'Righteous, sans-serif' }}
            data-testid="text-wishes-title"
          >
            Birthday Wishes
          </h3>
          <p className="text-xl text-muted-foreground">桜の祝福 - Sakura Blessings</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {messages.map((message, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-pink-500/20 bg-card hover-elevate active-elevate-2 transition-all duration-300"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
              data-testid={`card-message-${index}`}
            >
              <div
                className="absolute inset-0 opacity-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${cherryBlossom})` }}
              />
              
              <div className="relative p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <message.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground" data-testid={`text-message-title-${index}`}>
                    {message.title}
                  </h4>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-message-content-${index}`}>
                  {message.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
