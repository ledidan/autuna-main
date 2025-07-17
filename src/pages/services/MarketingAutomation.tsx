import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serviceDetails } from "@/data/mockData";
import { ArrowLeft, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const MarketingAutomation = () => {
  const service = serviceDetails["marketing-automation"];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại
          </Link>
          <div className="text-center">
            <Zap className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Marketing Automation</h1>
            <p className="text-xl text-muted-foreground mb-8">Tự động hóa quy trình marketing để tăng hiệu quả và tiết kiệm thời gian</p>
            <Button variant="hero" size="lg">Tìm hiểu thêm</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MarketingAutomation;