import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className={`text-xl font-bold ${isScrolled ? "text-deep-blue" : "text-white"}`}>
            FanisProAI
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#problems" className={`${isScrolled ? "text-text-gray" : "text-white"} hover:text-gold transition-colors`}>
            Проблемы
          </a>
          <a href="#program" className={`${isScrolled ? "text-text-gray" : "text-white"} hover:text-gold transition-colors`}>
            Программа
          </a>
          <a href="#about" className={`${isScrolled ? "text-text-gray" : "text-white"} hover:text-gold transition-colors`}>
            Обо мне
          </a>
          <a href="#pricing" className={`${isScrolled ? "text-text-gray" : "text-white"} hover:text-gold transition-colors`}>
            Стоимость
          </a>
          <a href="#faq" className={`${isScrolled ? "text-text-gray" : "text-white"} hover:text-gold transition-colors`}>
            FAQ
          </a>
        </nav>

        <div className="hidden md:block">
          <Button
            color="secondary"
            className="font-bold"
            onPress={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Записаться
          </Button>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon 
            icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"} 
            className={isScrolled ? "text-deep-blue" : "text-white"} 
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full">
          <div className="flex flex-col space-y-4">
            <a
              href="#problems"
              className="text-text-gray hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Проблемы
            </a>
            <a
              href="#program"
              className="text-text-gray hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Программа
            </a>
            <a
              href="#about"
              className="text-text-gray hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Обо мне
            </a>
            <a
              href="#pricing"
              className="text-text-gray hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Стоимость
            </a>
            <a
              href="#faq"
              className="text-text-gray hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button
              color="secondary"
              className="font-bold w-full"
              onPress={() => {
                document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
            >
              Записаться
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};