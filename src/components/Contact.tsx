import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Điện thoại",
      content: "+84 123 456 789",
      description: "Liên hệ ngay để được tư vấn"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@nguoiviettech.com",
      description: "Gửi email, chúng tôi sẽ phản hồi nhanh"
    },
    {
      icon: MapPin,
      title: "Địa chỉ",
      content: "123 Nguyễn Huệ, Q1, TP.HCM",
      description: "Ghé thăm văn phòng của chúng tôi"
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      content: "8:00 - 18:00 (T2-T6)",
      description: "Sẵn sàng hỗ trợ bạn"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Liên hệ với{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              chúng tôi
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sẵn sàng bắt đầu dự án của bạn? Hãy liên hệ với chúng tôi để được tư vấn 
            miễn phí và nhận báo giá chi tiết.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Gửi tin nhắn cho chúng tôi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ và tên *</Label>
                    <Input id="name" placeholder="Nhập họ và tên của bạn" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input id="phone" placeholder="Nhập số điện thoại" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="Nhập địa chỉ email" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Tên công ty</Label>
                  <Input id="company" placeholder="Nhập tên công ty (không bắt buộc)" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Dịch vụ quan tâm</Label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                    <option value="">Chọn dịch vụ</option>
                    <option value="website">Thiết kế Website</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="ads">Quảng cáo trực tuyến</option>
                    <option value="automation">Marketing Automation</option>
                    <option value="social">Social Management</option>
                    <option value="package">Gói dịch vụ tổng thể</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Tin nhắn *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Mô tả chi tiết về dự án hoặc nhu cầu của bạn..."
                    rows={5}
                  />
                </div>
                
                <Button variant="gradient" className="w-full group" size="lg">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Gửi tin nhắn
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  * Chúng tôi sẽ phản hồi trong vòng 2 giờ làm việc
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-6">Thông tin liên hệ</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ qua 
                bất kỳ kênh nào thuận tiện nhất cho bạn.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title} 
                  className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-lg font-medium text-foreground mb-1">
                          {info.content}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-primary rounded-2xl p-6 text-primary-foreground text-center animate-float">
              <h4 className="text-xl font-bold mb-3">Tư vấn miễn phí 30 phút</h4>
              <p className="text-primary-foreground/90 mb-4">
                Đặt lịch tư vấn trực tiếp với chuyên gia của chúng tôi
              </p>
              <Button variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Đặt lịch tư vấn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;