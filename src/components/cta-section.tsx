import React from "react";
import { Button, Input, Textarea, Link } from "@heroui/react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Icon } from "@iconify/react";

export const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="py-20 hero-gradient text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Начни свой путь к мастерству ИИ сегодня
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Технологии будущего уже здесь. Научись использовать их на полную мощность.
          </p>
        </div>

        <motion.div 
          className="max-w-lg mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center py-8">
            <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon icon="lucide:message-circle" className="text-green-500 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Заинтересовал курс?</h3>
            <p className="mb-8 text-lg">
              Получи бесплатную 15-минутную консультацию: покажу, как ИИ может решить именно твои задачи
            </p>
            
            <Button 
              color="secondary"
              size="lg"
              className="font-bold text-base px-8"
              startContent={<Icon icon="lucide:message-circle" />}
              as="a"
              href="https://api.whatsapp.com/send/?phone=79047133714&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%A4%D0%B0%D0%BD%D0%B8%D1%81.%20%D0%9F%D0%B8%D1%88%D1%83%20%D0%B2%D0%B0%D0%BC%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D0%B2%D0%B0%D1%88%D0%B8%D1%85%20%D0%BA%D1%83%D1%80%D1%81%D0%BE%D0%B2%20%D0%BF%D0%BE%20%D0%98%D0%98.%20%D0%A3%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%BA%20%D0%B2%D0%B0%D0%BC%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81....&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).ym) {
                  (window as any).ym(98765432, 'reachGoal', 'whatsapp_click');
                }
              }}
            >
              Написать в WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};