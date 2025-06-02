import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const ContactSection: React.FC = () => {
  const contacts = [
    {
      icon: "lucide:message-circle",
      title: "Telegram",
      value: "@fanis_khakimov",
      link: "https://t.me/fanis_khakimov"
    },
    {
      icon: "lucide:mail",
      title: "Email",
      value: (
        <>
          khakimow.fanis<br />
          @yandex.ru
        </>
      ),
      link: "mailto:khakimow.fanis@yandex.ru"
    },
    {
      icon: "lucide:clock",
      title: "Время ответа",
      value: "обычно в течение часа",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-deep-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Остались вопросы?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Свяжитесь со мной любым удобным способом
          </p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="bg-gold/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon={contact.icon} className="text-gold text-2xl" />
                </div>
                <h3 className="font-semibold mb-2">{contact.title}</h3>
                {contact.link && typeof contact.value !== 'object' ? (
                  <a 
                    href={contact.link} 
                    className="text-gold hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {contact.value}
                  </a>
                ) : contact.link ? (
                  <a 
                    href={contact.link} 
                    className="text-gold hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p>{contact.value}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="mb-6 text-lg">
            Путь Свободы уже начат. Присоединяйся к тем, кто выбирает осознанное развитие 
            и использует технологии для создания лучшей жизни.
          </p>
          
          <Button 
            color="secondary"
            size="lg"
            className="font-bold text-base"
            onPress={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            НАЧАТЬ ОБУЧЕНИЕ
          </Button>
        </div>
      </div>
    </section>
  );
};