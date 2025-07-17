import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { portfolioItems } from "@/data/mockData";
import { ExternalLink, TrendingUp } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
            <p className="text-xl text-muted-foreground">Những dự án thành công chúng tôi đã thực hiện</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video bg-gradient-card rounded-t-lg mb-4"></div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{item.category}</Badge>
                  <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.client} • {item.year}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="space-y-2 mb-4">
                    {item.results.slice(0, 2).map((result) => (
                      <div key={result} className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        {result}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  {item.url && (
                    <div className="mt-4">
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                        <ExternalLink className="w-4 h-4" />
                        Xem website
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;