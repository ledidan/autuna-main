import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const services = [
    "Thiết kế Website",
    "SEO Optimization", 
    "Quảng cáo trực tuyến",
    "Marketing Automation",
    "Social Management"
  ];

  const quickLinks = [
    { label: "Trang chủ", href: "#home" },
    { label: "Dịch vụ", href: "#services" },
    { label: "Về chúng tôi", href: "#about" },
    { label: "Liên hệ", href: "#contact" },
    { label: "Blog", href: "#" },
    { label: "Portfolio", href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">NV</span>
              </div>
              <span className="text-xl font-bold">Autuna</span>
            </div>
            
            <p className="text-background/80 leading-relaxed mb-6">
              Đối tác tin cậy trong hành trình chuyển đổi số của doanh nghiệp. 
              Chúng tôi mang đến giải pháp marketing toàn diện và hiệu quả.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Dịch vụ</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-background/80 hover:text-background transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/80 hover:text-background transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/80">
                  123 Nguyễn Huệ, Quận 1<br />
                  TP. Hồ Chí Minh, Việt Nam
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">+84 123 456 789</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">hello@nguoiviettech.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-3">Đăng ký nhận tin tức</h3>
            <p className="text-background/80 mb-4">
              Nhận thông tin mới nhất về marketing số và xu hướng công nghệ
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-gradient-primary rounded-lg font-medium hover:shadow-glow transition-all duration-300">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Autuna. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;