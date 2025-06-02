import React from "react";

export const YandexMetrika: React.FC = () => {
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

      ym(102354151, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
    `;
    document.head.appendChild(script);

    // noscript часть (для случаев без JS)
    const noscript = document.createElement("noscript");
    noscript.innerHTML = '<div><img src="https://mc.yandex.ru/watch/102354151" style="position:absolute; left:-9999px;" alt="" /></div>';
    document.body.appendChild(noscript);

    return () => {
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, []);

  return null;
};

// Если не используешь Google Analytics, можно удалить
/*
export const GoogleAnalytics: React.FC<{ measurementId: string }> = ({ measurementId }) => {
  React.useEffect(() => {
    const scriptGtag = document.createElement("script");
    scriptGtag.async = true;
    scriptGtag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(scriptGtag);

    const scriptInit = document.createElement("script");
    scriptInit.innerHTML = \`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    \`;
    document.head.appendChild(scriptInit);

    return () => {
      document.head.removeChild(scriptGtag);
      document.head.removeChild(scriptInit);
    };
  }, [measurementId]);

  return null;
};
*/

export const Analytics: React.FC = () => {
  return <YandexMetrika />;
};
