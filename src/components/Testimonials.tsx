import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      position: "CEO, ABC Company",
      content: "Autuna đã giúp chúng tôi xây dựng website và chiến lược SEO tuyệt vời. Doanh số tăng 300% sau 6 tháng hợp tác.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Trần Thị B",
      position: "Marketing Director, XYZ Store",
      content: "Dịch vụ Facebook Ads của họ thật sự ấn tượng. ROI đạt 400% và chi phí lead giảm 60%. Tôi rất hài lòng!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b2ab?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lê Văn C", 
      position: "Founder, DEF Restaurant",
      content: "Nhờ SEO local của Autuna, nhà hàng luôn xuất hiện top 3 Google. Lượng khách tăng gấp đôi!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Phạm Thị D",
      position: "CEO, GHI Tech",
      content: "Marketing automation đã tiết kiệm 15 giờ/tuần cho team. Conversion rate tăng 200%. Đầu tư rất xứng đáng!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Khách hàng nói gì về{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              chúng tôi
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hơn 200+ doanh nghiệp đã tin tưởng và đạt được thành công cùng chúng tôi
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-gradient-card border-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-primary/30" />
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center space-x-3 pt-2">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Khách hàng tin tưởng</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-muted-foreground">Tỷ lệ hài lòng</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Năm kinh nghiệm</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Hỗ trợ khách hàng</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;