import {HeroUIProvider, ToastProvider} from "@heroui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import "./index.css";

import { Analytics } from "./components/analytics";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <ToastProvider/>
      <App />
      <Analytics /> {/* Добавлен компонент аналитики */}
    </HeroUIProvider>
  </React.StrictMode>,
)