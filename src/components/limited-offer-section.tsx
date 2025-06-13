import React from "react";
import { Icon } from "@iconify/react";

export const LimitedOfferSection: React.FC = () => {
  // Дата окончания акции - 20 июня 2025 года
  const endDate = new Date(2025, 5, 20, 23, 59, 59); // Месяцы в JavaScript начинаются с 0
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      // Устанавливаем дату окончания акции - 20 июня 2025 года
      const endDate = new Date(2025, 5, 20, 23, 59, 59);
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    };
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-6 bg-white border-t-4 border-red-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Icon icon="lucide:alert-triangle" className="text-red-600 text-2xl" />
            <div>
              <h3 className="font-bold text-deep-blue text-xl">Ограниченное предложение</h3>
              <p className="text-text-gray">До 20 июня или 10 участников</p>
            </div>
          </div>
          
          <div>
            <p className="text-text-gray mb-2 text-center md:text-right">
              Чтобы сохранить высокое качество обучения и не потерять фокус на каждом участнике.
            </p>
            
            <div className="flex justify-center md:justify-end gap-3">
              <div className="bg-light-gray p-2 rounded-lg w-16 text-center">
                <div className="text-xl font-bold text-deep-blue">{timeLeft.days}</div>
                <div className="text-xs text-text-gray">дней</div>
              </div>
              <div className="bg-light-gray p-2 rounded-lg w-16 text-center">
                <div className="text-xl font-bold text-deep-blue">{timeLeft.hours}</div>
                <div className="text-xs text-text-gray">часов</div>
              </div>
              <div className="bg-light-gray p-2 rounded-lg w-16 text-center">
                <div className="text-xl font-bold text-deep-blue">{timeLeft.minutes}</div>
                <div className="text-xs text-text-gray">минут</div>
              </div>
              <div className="bg-light-gray p-2 rounded-lg w-16 text-center">
                <div className="text-xl font-bold text-deep-blue">{timeLeft.seconds}</div>
                <div className="text-xs text-text-gray">секунд</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};