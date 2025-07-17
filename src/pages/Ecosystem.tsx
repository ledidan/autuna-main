import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Building2, Receipt, Coffee, TrendingUp, Users, Shield, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Ecosystem = () => {
  const ecosystemProducts = [
    {
      name: "Autuna CRM",
      category: "Customer Relationship Management",
      description: "Hệ thống quản lý khách hàng toàn diện, tự động hóa quy trình bán hàng và chăm sóc khách hàng.",
      icon: Users,
      features: [
        "Quản lý lead và opportunity",
        "Tự động hóa email marketing",
        "Dashboard báo cáo realtime",
        "Tích hợp đa kênh bán hàng",
        "Mobile app iOS/Android"
      ],
      industries: ["Bán lẻ", "Dịch vụ", "B2B", "E-commerce"],
      color: "text-blue-600"
    },
    {
      name: "Autuna E-Invoice",
      category: "Electronic Invoice & Tax Declaration",
      description: "Giải pháp hóa đơn điện tử và khai báo thuế tự động, tuân thủ 100% quy định của Tổng cục Thuế.",
      icon: Receipt,
      features: [
        "Hóa đơn điện tử hợp pháp",
        "Khai báo thuế tự động",
        "Tích hợp kế toán",
        "Báo cáo thuế chi tiết",
        "API integration"
      ],
      industries: ["Tất cả ngành nghề", "Doanh nghiệp vừa và nhỏ", "Công ty lớn"],
      color: "text-green-600"
    },
    {
      name: "Autuna F&B",
      category: "Food & Beverage Management",
      description: "Phần mềm quản lý nhà hàng, quán café chuyên nghiệp với POS, quản lý kho và nhân sự.",
      icon: Coffee,
      features: [
        "POS bán hàng thông minh",
        "Quản lý thực đơn & combo",
        "Theo dõi tồn kho realtime",
        "Quản lý nhân viên ca làm",
        "Báo cáo doanh thu chi tiết"
      ],
      industries: ["Nhà hàng", "Quán café", "Fast food", "Food court"],
      color: "text-orange-600"
    },
    {
      name: "Autuna Business",
      category: "Multi-Industry Business Management",
      description: "Hệ thống ERP đa ngành nghề, quản lý toàn diện từ bán hàng, kho vận, tài chính đến nhân sự.",
      icon: TrendingUp,
      features: [
        "Quản lý bán hàng đa kênh",
        "Hệ thống kho vận thông minh",
        "Quản lý tài chính kế toán",
        "Nhân sự & chấm công",
        "Business intelligence"
      ],
      industries: ["Sản xuất", "Thương mại", "Dịch vụ", "Logistics"],
      color: "text-purple-600"
    }
  ];

  const benefits = [
    {
      title: "Tích hợp liền mạch",
      description: "Tất cả sản phẩm trong ecosystem đều có thể tích hợp với nhau, chia sẻ dữ liệu và đồng bộ hoạt động.",
      icon: Zap
    },
    {
      title: "Bảo mật cao cấp",
      description: "Áp dụng các tiêu chuẩn bảo mật quốc tế, mã hóa dữ liệu và backup tự động.",
      icon: Shield
    },
    {
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ kỹ thuật chuyên nghiệp hỗ trợ khách hàng 24/7 qua nhiều kênh.",
      icon: CheckCircle
    }
  ];

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
            <span className="text-foreground">Autuna Ecosystem</span>
          </div>
          
          <div className="text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              Autuna Ecosystem
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hệ sinh thái phần mềm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Autuna
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              Giải pháp công nghệ toàn diện cho doanh nghiệp hiện đại. Từ CRM, hóa đơn điện tử, 
              quản lý F&B đến ERP đa ngành - tất cả trong một hệ sinh thái thống nhất.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Khám phá ngay
              </Button>
              <Button variant="outline" size="lg">
                Tư vấn miễn phí
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sản phẩm trong hệ sinh thái
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bộ giải pháp phần mềm chuyên nghiệp, được thiết kế để đáp ứng mọi nhu cầu của doanh nghiệp
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {ecosystemProducts.map((product, index) => (
              <Card 
                key={product.name} 
                className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-gradient-card border-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <product.icon className={`w-6 h-6 ${product.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                          {product.name}
                        </CardTitle>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {product.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </CardDescription>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Tính năng chính:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-start">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Ngành nghề áp dụng:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.industries.map((industry) => (
                        <Badge key={industry} variant="secondary" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    Tìm hiểu thêm
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lợi ích của hệ sinh thái
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Khi sử dụng các sản phẩm trong ecosystem Autuna, doanh nghiệp sẽ có những lợi ích vượt trội
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title} 
                className="text-center group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn sàng chuyển đổi số cùng Autuna?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Liên hệ với chúng tôi để được tư vấn và demo miễn phí các sản phẩm trong hệ sinh thái Autuna. 
            Đội ngũ chuyên gia sẽ tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
              <a href="tel:0388751370" className="flex items-center">
                Gọi ngay: 0388751370
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Đăng ký demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ecosystem;