import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-deep-blue text-white/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:feather" className="text-gold" />
              <span className="font-bold text-white">FanisProAI</span>
            </div>
            <p className="text-sm mt-2">
              © 2025 Все права защищены
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs">
          <p>
            Сайт создан для образовательных целей при помощи нейросетей ChatGPT, Claude, HeroUI. Это реальная демонстрация того, как технологии помогают людям. Все материалы курса являются интеллектуальной собственностью автора
          </p>
        </div>
      </div>
    </footer>
  );
};