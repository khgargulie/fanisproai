import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { ProblemSection } from "./components/problem-section";
import { SolutionSection } from "./components/solution-section";
import { AudienceSection } from "./components/audience-section";
import { BenefitsSection } from "./components/benefits-section";
import { FormatSection } from "./components/format-section";
import { ProgramSection } from "./components/program-section";
import { AboutSection } from "./components/about-section";
import { ExpertiseSection } from "./components/expertise-section";
import { PricingSection } from "./components/pricing-section";
import { LimitedOfferSection } from "./components/limited-offer-section";
import { CtaSection } from "./components/cta-section";
import { FaqSection } from "./components/faq-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { PrivacyPolicy } from "./components/privacy-policy";
import { TelegramChannel } from "./components/telegram-channel";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <TelegramChannel />
        <SolutionSection />
        <AudienceSection />
        <BenefitsSection />
        <FormatSection />
        <ProgramSection />
        <AboutSection />
        <ExpertiseSection />
        <PricingSection />
        <LimitedOfferSection />
        <CtaSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;