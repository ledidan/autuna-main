import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serviceDetails } from "@/data/mockData";
import { ArrowLeft, Check, Star, Search, TrendingUp, Target, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const SEO = () => {
  const service = serviceDetails.seo;

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
            <span className="text-foreground">SEO Optimization</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-4">
                <Search className="w-4 h-4 mr-2" />
                SEO Optimization
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  Bắt đầu SEO ngay
                </Button>
                <Button variant="outline" size="lg">
                  Phân tích website miễn phí
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-soft">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">Top 3</div>
                    <div className="text-sm text-muted-foreground">Vị trí trung bình</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">300%</div>
                    <div className="text-sm text-muted-foreground">Tăng traffic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">6 tháng</div>
                    <div className="text-sm text-muted-foreground">Thời gian lên top</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">Website tối ưu</div>
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
              Dịch vụ SEO toàn diện
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chúng tôi áp dụng những kỹ thuật SEO hiện đại nhất để đưa website của bạn lên top Google
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
              Gói dịch vụ SEO
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Lựa chọn gói SEO phù hợp với mục tiêu và ngân sách của doanh nghiệp
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

      {/* Results Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kết quả SEO ấn tượng
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Những con số thực tế từ các dự án SEO mà chúng tôi đã thực hiện
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                metric: "350%",
                description: "Tăng trưởng traffic trung bình",
                details: "Trong vòng 6-12 tháng"
              },
              {
                icon: Target,
                metric: "85%",
                description: "Từ khóa đạt top 10",
                details: "Sau 6 tháng SEO"
              },
              {
                icon: BarChart,
                metric: "220%",
                description: "Tăng conversion rate",
                details: "Nhờ traffic chất lượng cao"
              }
            ].map((result, index) => (
              <Card key={result.metric} className="text-center group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-8">
                  <result.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl font-bold text-primary mb-2">{result.metric}</div>
                  <h3 className="text-lg font-semibold mb-2">{result.description}</h3>
                  <p className="text-sm text-muted-foreground">{result.details}</p>
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
            Sẵn sàng lên top Google?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Bắt đầu hành trình SEO của bạn ngay hôm nay. Chúng tôi sẽ phân tích website 
            miễn phí và đưa ra chiến lược SEO phù hợp nhất.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
              Phân tích website miễn phí
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Tư vấn chiến lược SEO
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEO;