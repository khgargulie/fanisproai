import React, { useState } from "react";
import { Button, Input } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";

export const ChangeYourLiveCta: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Отправляем событие в Яндекс Метрику
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(102354151, 'reachGoal', 'cta_block1_click');
    }

    try {
      await emailjs.send(
        "service_bdp557t",
        "template_0kf4fbo",
        {
          from_name: formData.name,
          phone: formData.phone,
          to_name: "Фанис",
        },
        "8MWpFjP_52hJe3-O7"
      );
      setIsSubmitted(true);
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error("Ошибка отправки:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-deep-blue to-blue-600">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готов изменить свою жизнь с помощью ИИ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Не упусти возможность освоить навыки будущего уже сегодня. 
            Запишись на курс и получи доступ ко всем материалам и бонусам.
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md mx-auto">
            {isSubmitted ? (
              <div className="text-center">
                <Icon icon="lucide:check-circle" className="text-deep-blue text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
                <p className="text-gray-600">
                  Мы свяжемся с вами в ближайшее время для записи на курс.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Записаться на курс
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Ваше имя"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    size="lg"
                  />
                  <Input
                    label="Номер телефона"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    size="lg"
                  />                  
                  <Button
                    type="submit"
                    className="w-full font-bold bg-gold text-gray-600 hover:bg-gold/90"
                    size="lg"
                    isLoading={isSubmitting}
                    disabled={!formData.name || !formData.phone}
                  >
                    {isSubmitting ? "Отправляем..." : "Записаться на курс"}
                  </Button>
                </form>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с <a href="/privacy-policy" className="text-deep-blue hover:underline">политикой конфиденциальности</a>
                </p>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

