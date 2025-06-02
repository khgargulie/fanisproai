import React from "react";

export const YandexMetrika: React.FC<{ counterId: string }> = ({ counterId }) => {
  React.useEffect(() => {
    // Создаем скрипт Яндекс.Метрики
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(${counterId}, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
    `;
    document.head.appendChild(script);

    // Создаем noscript для Яндекс.Метрики
    const noscript = document.createElement("noscript");
    const img = document.createElement("img");
    img.src = `https://mc.yandex.ru/watch/${counterId}`;
    img.style.position = "absolute";
    img.style.left = "-9999px";
    noscript.appendChild(img);
    document.head.appendChild(noscript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(noscript);
    };
  }, [counterId]);

  return null;
};

export const GoogleAnalytics: React.FC<{ measurementId: string }> = ({ measurementId }) => {
  React.useEffect(() => {
    // Создаем скрипт Google Analytics (GA4)
    const scriptGtag = document.createElement("script");
    scriptGtag.async = true;
    scriptGtag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(scriptGtag);

    // Создаем скрипт инициализации Google Analytics
    const scriptInit = document.createElement("script");
    scriptInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
    document.head.appendChild(scriptInit);

    return () => {
      document.head.removeChild(scriptGtag);
      document.head.removeChild(scriptInit);
    };
  }, [measurementId]);

  return null;
};

export const Analytics: React.FC = () => {
  // Заменим XXXXXXXX на пустую строку, чтобы избежать ошибки
  // В реальном проекте здесь нужно указать настоящие ID счетчиков
  const yandexCounterId = "";  // Было: "XXXXXXXX"
  const googleMeasurementId = ""; // Было: "G-XXXXXXXXXX"

  // Не рендерим компоненты аналитики, если ID не указаны
  if (!yandexCounterId && !googleMeasurementId) {
    return null;
  }

  return (
    <>
      {yandexCounterId && <YandexMetrika counterId={yandexCounterId} />}
      {googleMeasurementId && <GoogleAnalytics measurementId={googleMeasurementId} />}
    </>
  );
};