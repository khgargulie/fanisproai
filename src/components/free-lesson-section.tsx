import React, { useState } from "react";
import { Button, Input } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";

export const FreeLessonSection: React.FC = () => {
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
      (window as any).ym(102643177, 'reachGoal', 'free_lesson_click');
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
      setFormData({ name: "", phone: "" });
    } catch (error) {
      console.error("Ошибка отправки:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Наконец-то поймешь, что такое текстовые ИИ и как они работают – без лишней воды и сложных терминов",
    "Увидишь, как ИИ уже используют в маркетинге, дизайне, продажах и даже HR – и найдешь свои точки роста",
    "Разберешься в главных платформах (ChatGPT, Claude, Gemini, DeepSeek и др.) – узнаешь их сильные стороны, отличия бесплатных и платных версий, а также актуальную доступность в России. Это сэкономит тебе часы на самостоятельный поиск!",
    "Получишь четкое понимание рисков ИИ и узнаешь, как их минимизировать – чтобы использовать ИИ безопасно и эффективно",
    "Выполнишь первое практическое задание – и сразу почувствуешь, как ИИ помогает тебе решать задачи",
    "Поймешь, как получить до 15 часов свободного времени каждую неделю – благодаря принципам, о которых я расскажу в уроке"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
            Твой первый шаг к свободе с ИИ: <br />
            смотри <span className="text-gold">вводный урок бесплатно! </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Мы знаем, как сложно бывает разобраться в мире искусственного интеллекта. 
            Именно поэтому я подготовил этот вводный урок – он даст тебе четкое понимание 
            и уверенность для старта. Тебя ждет не просто теория, а реальная дорожная карта применения ИИ.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-deep-blue mb-6">
              Что получишь в уроке:
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <Icon 
                    icon="lucide:check-circle" 
                    className="text-deep-blue text-xl mt-0.5 flex-shrink-0" 
                  />
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            {isSubmitted ? (
              <div className="text-center">
                <Icon icon="lucide:check-circle" className="text-deep-blue text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
                <p className="text-gray-600">
                  Спасибо за заявку! В ближайшее время мы свяжемся с вами по WhatsApp или Telegram.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-deep-blue mb-6 text-center">
                  Получить бесплатный урок
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
                    color="primary"
                    size="lg"
                    className="w-full font-bold"
                    isLoading={isSubmitting}
                    disabled={!formData.name || !formData.phone}
                  >
                    {isSubmitting ? "Отправляем..." : "Получить урок"}
                  </Button>
                </form>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с <a href="/privacy-policy" className="text-deep-blue hover:underline">политикой конфиденциальности</a>
                </p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

