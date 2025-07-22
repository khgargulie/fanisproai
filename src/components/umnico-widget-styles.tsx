import React, { useEffect, useState } from "react";

export const UmnicoWidgetStyles: React.FC = () => {
  const [showShine, setShowShine] = useState(false);

  useEffect(() => {
    // Добавляем стили для позиционирования виджета Umnico
    const style = document.createElement('style');
    style.textContent = `
      /* Стили для виджета Umnico */
      #umnico-widget-container {
        z-index: 40 !important;
        bottom: 20px !important;
        right: 150px !important;
      }
      
      /* Для мобильных устройств */
      @media (max-width: 768px) {
        #umnico-widget-container {
          bottom: 120px !important;
          right: 15px !important;
        }
      }
      
      /* Убеждаемся, что виджет не перекрывает кнопку наверх */
      .umnico-widget {
        z-index: 40 !important;
      }
      
      /* Дополнительные стили для корректного отображения */
      [id*="umnico"] {
        z-index: 40 !important;
      }

      /* Стили для эффекта блика */
      @keyframes shine {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      .shine-effect {
        position: relative;
        overflow: hidden;
      }
      
      .shine-effect::after {
        content: \'\';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        transform: translateX(-100%);
        animation: shine 1s ease-in-out;
      }
    `;
    document.head.appendChild(style);

    // Функция для корректировки позиции виджета после его загрузки
    const adjustWidgetPosition = () => {
      const widget = document.querySelector('#umnico-widget-container') as HTMLElement;
      if (widget) {
        widget.style.bottom = '100px';
        widget.style.right = '20px';
        widget.style.zIndex = '40';
      }
      
      // Также проверяем другие возможные селекторы виджета
      const widgets = document.querySelectorAll('[id*="umnico"]');
      widgets.forEach((w: any) => {
        if (w.style) {
          w.style.zIndex = '40';
        }
      });
    };

    // Проверяем позицию виджета через интервалы
    const interval = setInterval(adjustWidgetPosition, 1000);

    // Эффект блика каждые 10 секунд
    const shineInterval = setInterval(() => {
      setShowShine(true);
      setTimeout(() => setShowShine(false), 1000);
    }, 10000);

    // Очистка при размонтировании компонента
    return () => {
      clearInterval(interval);
      clearInterval(shineInterval);
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  // Добавляем обработчик клика для отправки цели Яндекс.Метрики
  useEffect(() => {
    const umnicoWidget = document.querySelector("#umnico-widget-container");
    if (umnicoWidget) {
      umnicoWidget.addEventListener("click", () => {
        if (typeof window !== "undefined" && (window as any).ym) {
          (window as any).ym(102643177, "reachGoal", "umnico");
        }
      });
    }
  }, []);

  return (
    <div className="fixed bottom-[107px] right-[15px] md:bottom-[107px] md:right-[15px] max-md:bottom-[110px] max-md:right-[15px] z-50 pointer-events-none transform rotate-[-15deg]">
      <div className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg ${showShine ? 'shine-effect' : ''}`}>
        Мы онлайн
      </div>
    </div>
  );
};


