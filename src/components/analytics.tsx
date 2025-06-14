import React from "react";

export const YandexMetrika: React.FC = () => {
  React.useEffect(() => {
    // Создаем скрипт Яндекс.Метрики с реальным ID счетчика
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(102643177, "init", {
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
    img.src = `https://mc.yandex.ru/watch/102643177`;
    img.style.position = "absolute";
    img.style.left = "-9999px";
    noscript.appendChild(img);
    document.head.appendChild(noscript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(noscript);
    };
  }, []);

  return null;
};

export const Analytics: React.FC = () => {
  return (
    <>
      <YandexMetrika />
    </>
  );
};