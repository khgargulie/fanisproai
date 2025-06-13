import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { FreeLessonSection } from "./components/free-lesson-section";
import { QuoteSection } from "./components/quote-section";
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
import { ChangeYourLiveCta } from "./components/change-your-live-cta";
import { CtaBlock2 } from "./components/cta-block2";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { PrivacyPolicy } from "./components/privacy-policy";
import { TermsOfService } from "./components/terms-of-service";
import { TelegramChannel } from "./components/telegram-channel";
import { ScrollToTop } from "./components/scroll-to-top";
import { ExitIntentPopup } from "./components/exit-intent-popup";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FreeLessonSection />
        <QuoteSection />
        <ProblemSection />
        <TelegramChannel />
        <SolutionSection />
        <AudienceSection />
        <BenefitsSection />
        <ChangeYourLiveCta />
        <FormatSection />
        <ProgramSection />
        <AboutSection />
        <ExpertiseSection />
        <PricingSection />
        {/*<CtaBlock2 /> */}
        <LimitedOfferSection /> 
        <CtaSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <ExitIntentPopup />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;