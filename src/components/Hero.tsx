import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Giải pháp Marketing toàn diện</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Phát triển doanh nghiệp với{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                công nghệ số
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Chúng tôi cung cấp dịch vụ thiết kế website, SEO, quảng cáo trực tuyến, 
              marketing automation và quản lý mạng xã hội tự động để giúp doanh nghiệp 
              của bạn phát triển vượt trội.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Bắt đầu ngay
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Xem portfolio
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Dự án hoàn thành</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Khách hàng hài lòng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up lg:animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Autuna - Digital Marketing Services"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-soft animate-float">
              <div className="text-2xl font-bold text-primary">300%</div>
              <div className="text-sm text-muted-foreground">Tăng trưởng traffic</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-soft animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="text-2xl font-bold text-secondary">95%</div>
              <div className="text-sm text-muted-foreground">Conversion rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;