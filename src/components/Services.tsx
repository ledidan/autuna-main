import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Search, Target, Zap, Share2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Thiết kế Website",
      description: "Thiết kế website chuyên nghiệp, responsive và tối ưu SEO, mang lại trải nghiệm người dùng tuyệt vời.",
      features: ["Responsive Design", "Tối ưu tốc độ", "SEO-friendly", "UI/UX hiện đại"],
      color: "text-primary"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Tối ưu hóa công cụ tìm kiếm để website của bạn xuất hiện ở top đầu Google và thu hút khách hàng tiềm năng.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Content Strategy"],
      color: "text-secondary"
    },
    {
      icon: Target,
      title: "Quảng cáo trực tuyến",
      description: "Chiến lược quảng cáo Google Ads, Facebook Ads hiệu quả với ROI cao và chi phí tối ưu.",
      features: ["Google Ads", "Facebook Ads", "Campaign Management", "ROI Tracking"],
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Tự động hóa quy trình marketing, nurture leads và chăm sóc khách hàng 24/7 với công nghệ AI.",
      features: ["Email Automation", "Lead Nurturing", "Workflow Setup", "CRM Integration"],
      color: "text-primary"
    },
    {
      icon: Share2,
      title: "Social Management",
      description: "Quản lý và phát triển mạng xã hội tự động, tăng engagement và xây dựng thương hiệu mạnh mẽ.",
      features: ["Content Planning", "Auto Posting", "Community Management", "Analytics"],
      color: "text-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dịch vụ của{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              chúng tôi
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Giải pháp marketing toàn diện giúp doanh nghiệp của bạn phát triển bền vững 
            trong thời đại số
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-gradient-card border-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <a href={`/${service.title === 'Thiết kế Website' ? 'website-design' : service.title === 'SEO Optimization' ? 'seo' : service.title === 'Quảng cáo trực tuyến' ? 'ads' : service.title === 'Marketing Automation' ? 'marketing-automation' : 'social-management'}`}>
                    Tìm hiểu thêm
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground animate-scale-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Sẵn sàng phát triển doanh nghiệp?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí về chiến lược 
            marketing phù hợp với doanh nghiệp của bạn.
          </p>
          <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
            Nhận tư vấn miễn phí
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;