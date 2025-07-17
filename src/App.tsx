import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebDesign from "./pages/services/WebDesign";
import SEO from "./pages/services/SEO";
import Ads from "./pages/services/Ads";
import MarketingAutomation from "./pages/services/MarketingAutomation";
import SocialManagement from "./pages/services/SocialManagement";
import Ecosystem from "./pages/Ecosystem";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Portfolio from "./pages/Portfolio";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/website-design" element={<WebDesign />} />
          <Route path="/web" element={<WebDesign />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/marketing-automation" element={<MarketingAutomation />} />
          <Route path="/social-management" element={<SocialManagement />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
