import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const achievements = [
    { number: "500+", label: "Dự án thành công" },
    { number: "98%", label: "Khách hàng hài lòng" },
    { number: "5+", label: "Năm kinh nghiệm" },
    { number: "24/7", label: "Hỗ trợ khách hàng" }
  ];

  const values = [
    {
      icon: Users,
      title: "Đội ngũ chuyên nghiệp",
      description: "Gồm các chuyên gia giàu kinh nghiệm trong lĩnh vực marketing số và thiết kế web."
    },
    {
      icon: Award,
      title: "Chất lượng đảm bảo",
      description: "Cam kết mang đến sản phẩm và dịch vụ chất lượng cao, đúng tiến độ."
    },
    {
      icon: TrendingUp,
      title: "Kết quả rõ ràng",
      description: "Tập trung vào ROI, mọi chiến lược đều hướng đến kết quả kinh doanh cụ thể."
    },
    {
      icon: Heart,
      title: "Tận tâm với khách hàng",
      description: "Luôn đặt lợi ích và mục tiêu của khách hàng lên hàng đầu trong mọi quyết định."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Về{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Autuna
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong>Autuna</strong> là đơn vị hàng đầu trong lĩnh vực cung cấp 
              giải pháp marketing số và thiết kế website tại Việt Nam. Với đội ngũ chuyên gia 
              giàu kinh nghiệm và công nghệ hiện đại, chúng tôi đã giúp hàng trăm doanh nghiệp 
              chuyển đổi số thành công.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Chúng tôi tin rằng mỗi doanh nghiệp đều có câu chuyện riêng và xứng đáng 
              được kể một cách tuyệt vời. Sứ mệnh của chúng tôi là biến ước mơ số hóa 
              của bạn thành hiện thực với các giải pháp sáng tạo và hiệu quả.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.label} 
                  className="text-center p-4 rounded-lg bg-gradient-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            <Button variant="gradient" size="lg">
              Khám phá thêm về chúng tôi
            </Button>
          </div>

          {/* Values */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
              Giá trị cốt lõi
            </h3>
            
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust section */}
        <div className="mt-20 text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 mr-3" />
            <h3 className="text-2xl md:text-3xl font-bold">
              Đáng tin cậy & Chuyên nghiệp
            </h3>
          </div>
          <p className="text-primary-foreground/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Với hơn 5 năm kinh nghiệm và hàng trăm dự án thành công, chúng tôi tự hào 
            là đối tác tin cậy của các doanh nghiệp trong hành trình chuyển đổi số. 
            Mỗi dự án đều được thực hiện với tinh thần trách nhiệm cao và cam kết 
            mang lại giá trị thực cho khách hàng.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;