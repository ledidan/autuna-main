import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Về chúng tôi", href: "/#about" },
    { label: "Liên hệ", href: "/#contact" },
  ];

  const serviceItems = [
    { label: "Thiết kế Website", href: "/website-design" },
    { label: "SEO Optimization", href: "/seo" },
    { label: "Quảng cáo trực tuyến", href: "/ads" },
    { label: "Marketing Automation", href: "/marketing-automation" },
    { label: "Social Management", href: "/social-management" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">NV</span>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Autuna
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-medium">
                Dịch vụ <ChevronDown className="ml-1 w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg">
                {serviceItems.map((service) => (
                  <DropdownMenuItem key={service.label}>
                    <a href={service.href} className="w-full text-foreground hover:text-primary">
                      {service.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:0388751370">0388751370</a>
            </Button>
            <Button variant="gradient" size="sm">
              Tư vấn miễn phí
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {serviceItems.map((service) => (
                <a
                  key={service.label}
                  href={service.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.label}
                </a>
              ))}
              <Button variant="outline" size="sm" className="w-full mt-4 flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:0388751370">0388751370</a>
              </Button>
              <Button variant="gradient" size="sm" className="w-full mt-2">
                Tư vấn miễn phí
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;