import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serviceDetails } from "@/data/mockData";
import { ArrowLeft, Check, Star, Globe, Zap, Search, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const WebDesign = () => {
  const service = serviceDetails.web;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Thiết kế Website</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-4">
                <Globe className="w-4 h-4 mr-2" />
                Thiết kế Website
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  Bắt đầu dự án
                </Button>
                <Button variant="outline" size="lg">
                  Xem portfolio
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-soft">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">150+</div>
                    <div className="text-sm text-muted-foreground">Website hoàn thành</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99%</div>
                    <div className="text-sm text-muted-foreground">Khách hàng hài lòng</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">&lt; 3s</div>
                    <div className="text-sm text-muted-foreground">Thời gian tải trang</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Hỗ trợ kỹ thuật</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tính năng nổi bật
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chúng tôi tập trung vào những yếu tố quan trọng nhất để mang lại thành công cho website của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, index) => (
              <Card key={feature.title} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bảng giá dịch vụ
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của doanh nghiệp bạn
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {service.packages.map((pkg, index) => (
              <Card 
                key={pkg.name} 
                className={`relative group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                  pkg.popular ? 'border-primary shadow-soft' : 'bg-gradient-card border-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Phổ biến nhất
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold mb-2">{pkg.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground ml-2">{pkg.period}</span>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={pkg.popular ? "hero" : "outline"} 
                    className="w-full"
                    size="lg"
                  >
                    Chọn gói {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quy trình làm việc
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quy trình chuyên nghiệp đảm bảo dự án được triển khai hiệu quả và đúng tiến độ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Tư vấn & Phân tích",
                description: "Tìm hiểu nhu cầu, mục tiêu và đối tượng khách hàng của bạn"
              },
              {
                step: "02", 
                title: "Thiết kế UI/UX",
                description: "Tạo wireframe và design mockup theo brand identity"
              },
              {
                step: "03",
                title: "Phát triển Website",
                description: "Coding và tích hợp các tính năng theo yêu cầu"
              },
              {
                step: "04",
                title: "Kiểm tra & Bàn giao",
                description: "Test toàn diện và training sử dụng cho khách hàng"
              }
            ].map((process, index) => (
              <div key={process.step} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4 mx-auto">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{process.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn sàng tạo website ấn tượng?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá chi tiết 
            cho dự án website của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
              Tư vấn miễn phí
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Xem portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDesign;