import React, { useState, useEffect } from "react";
import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";

export const ExitIntentPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Проверяем, что курсор покидает верхнюю часть окна
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        // Предотвращаем закрытие страницы на короткое время
        e.preventDefault();
        e.returnValue = '';
      }
    };

    // Показать попап через 30 секунд
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 30000);

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("beforeunload", handleBeforeUnload);
    
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearTimeout(timer);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Отправляем событие в Яндекс Метрику
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(102643177, 'reachGoal', 'popup_free_click');
    }

    try {
      await emailjs.send(
      "service_bdp557t",
      "template_s2kbrd8",
      {
        from_name: formData.name,
        email: formData.email,        // ← Изменить на email
        to_name: "Фанис",
        page_url: window.location.href,
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

  const bonuses = [
    "Промт для написания писем за 30 секунд",
    "Промт для анализа конкурентов",
    "Промт для создания контент-плана",
    "+ 7 других готовых решений"
  ];

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={() => setIsOpen(false)}
      size="xl"
      scrollBehavior="inside"
      classNames={{
        backdrop: "bg-black/50 backdrop-blur-sm",
        base: "border-none mx-4 my-4 max-h-[90vh]",
        header: "border-b-[1px] border-gray-200 px-4 py-3",
        body: "px-4 py-4 max-h-[70vh] overflow-y-auto",
        closeButton: "top-3 right-3 z-10"
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-center">
          <div className="text-4xl mb-2">🎁</div>
          <h2 className="text-2xl font-bold text-gray-900">БЕСПЛАТНЫЙ БОНУС</h2>
          <p className="text-xl font-semibold text-blue-600">
            ТОП-10 промтов, которые сэкономят 2 часа каждый день
          </p>
        </ModalHeader>
        <ModalBody>
          {isSubmitted ? (
            <motion.div 
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Icon icon="lucide:check-circle" className="text-deep-blue text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Спасибо!</h3>
              <p className="text-gray-600">
                Промты отправлены на указанную почту. Проверьте входящие сообщения.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Что получишь:
                </h3>
                <div className="space-y-3">
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Icon 
                        icon="lucide:check" 
                        className="text-deep-blue text-lg mt-0.5 flex-shrink-0" 
                      />
                      <span className="text-gray-700 text-sm">{bonus}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800 font-medium">
                    ⚡ Получи готовые решения, которые сэкономят тебе 10+ часов работы 
                    уже в первую неделю использования!
                  </p>
                </div>
              </div>
              
              <div>
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
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    size="lg"
                  />
                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    className="w-full font-bold"
                    isLoading={isSubmitting}
                    disabled={!formData.name || !formData.email}
                  >
                    {isSubmitting ? "Отправляем..." : "Получить бесплатно"}
                  </Button>
                </form>
                <p className="text-xs text-gray-500 text-center mt-3">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

