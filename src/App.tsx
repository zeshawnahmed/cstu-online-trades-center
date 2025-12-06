
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProgramDetail from "./pages/program/ProgramDetail";
import ApplicationForm from "./pages/ApplicationForm";
import ContactForm from "./pages/ContactForm";
import AboutUs from "./pages/AboutUs";
import ResearchHub from "./pages/ResearchHub";
import FinancialAid from "./pages/FinancialAid";
import EPA608Certification from "./pages/seo/EPA608Certification";
import HVACApprenticeship from "./pages/seo/HVACApprenticeship";
import AirConditioningTraining from "./pages/seo/AirConditioningTraining";
import VocationalTraining from "./pages/seo/VocationalTraining";
import HVACCareersSacramento from "./pages/seo/HVACCareersSacramento";
import FAQPage from "./pages/seo/FAQPage";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/programs/:slug" element={<ProgramDetail />} />
              <Route path="/apply" element={<ApplicationForm />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/research-hub" element={<ResearchHub />} />
              <Route path="/financial-aid" element={<FinancialAid />} />
              {/* SEO Landing Pages */}
              <Route path="/epa-608-certification-sacramento" element={<EPA608Certification />} />
              <Route path="/hvac-apprenticeship-sacramento" element={<HVACApprenticeship />} />
              <Route path="/air-conditioning-training-sacramento" element={<AirConditioningTraining />} />
              <Route path="/vocational-training-sacramento" element={<VocationalTraining />} />
              <Route path="/hvac-careers-sacramento" element={<HVACCareersSacramento />} />
              <Route path="/faq" element={<FAQPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
