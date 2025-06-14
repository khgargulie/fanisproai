import React from "react";
import { Icon } from "@iconify/react";

export const StickyMobileFooter: React.FC = () => {
  // Adjust scroll-to-top button position to avoid overlap with sticky footer
  const adjustScrollToTopPosition = () => {
    const scrollToTopButton = document.querySelector('[aria-label="Прокрутить наверх"]') as HTMLElement;
    if (scrollToTopButton) {
      // Move the button up to avoid overlap with sticky footer (height ~60px + padding)
      scrollToTopButton.style.bottom = '80px';
    }
  };

  React.useEffect(() => {
    // Adjust scroll-to-top button position on mount
    const timer = setTimeout(adjustScrollToTopPosition, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToSection = () => {
    const element = document.getElementById("change-your-live-cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTelegramClick = () => {
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(102643177, 'reachGoal', 'sticky-footer-telegram');
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(102643177, 'reachGoal', 'sticky-footer-whatsapp');
    }
  };

  const handleRequestClick = () => {
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(102643177, 'reachGoal', 'sticky-footer-request');
    }
    handleScrollToSection();
  };

  // WhatsApp message template
  const whatsappMessage = encodeURIComponent("Добрый день. Заинтересовал ваш курс по ИИ ....");
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=79047133714&text=${whatsappMessage}&type=phone_number&app_absent=0`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left side - Messenger icons */}
        <div className="flex items-center space-x-4">
          {/* Telegram */}
          <a
            href="https://t.me/fanis_khakimov"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleTelegramClick}
            className="flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-200"
            aria-label="Написать в Telegram"
          >
            <Icon icon="ic:baseline-telegram" className="w-5 h-5" />
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors duration-200"
            aria-label="Написать в WhatsApp"
          >
            <Icon icon="ic:baseline-whatsapp" className="w-5 h-5" />
          </a>
        </div>

        {/* Right side - Register button */}
        <button
          onClick={handleRequestClick}
          className="bg-deep-blue hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
        >
          Записаться
        </button>
      </div>
    </div>
  );
};

