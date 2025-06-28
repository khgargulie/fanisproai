import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-gradient min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Освободи до 15 часов в неделю с помощью ИИ: <span className="text-gold">онлайн-курс</span> по использованию <span className="text-gold">ChatGPT, DeepSeek</span>, Claude и др.
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Научись делегировать рутину искусственному интеллекту <span className="text-gold"> за 14 дней </span>
            </p>
            <p className="text-lg mb-8 opacity-80">
              Пока другие тратят часы на задачи, ты будешь получать готовые результаты за минуты.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                color="secondary"
                size="lg"
                className="font-bold text-base"
                onPress={() => document.getElementById("change-your-live-cta")?.scrollIntoView({ behavior: "smooth" })}
              >
                Записаться на курс
              </Button>
              
              <Button 
                variant="bordered"
                className="font-bold text-white border-white text-base"
                onPress={() => document.getElementById("program")?.scrollIntoView({ behavior: "smooth" })}
              >
                Узнать программу
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Icon icon="lucide:check-circle" className="text-gold text-xl" />
                <span>7 модулей</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="lucide:check-circle" className="text-gold text-xl" />
                <span>5+ часов видео</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="lucide:check-circle" className="text-gold text-xl" />
                <span>50+ промтов</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-xl">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <img 
                  src="ai.jpeg" 
                  alt="ИИ интерфейс" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <Icon icon="lucide:calendar" />
                <span>{/*Старт курса: 20 июня. */} Автор курса Фанис Хакимов</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};