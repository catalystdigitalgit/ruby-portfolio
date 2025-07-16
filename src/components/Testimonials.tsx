import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      content: "Working with this developer was exceptional. They delivered a stunning marketing site that increased our conversions by 40%. The attention to detail and user experience is unmatched.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "E-commerce Manager",
      company: "Luxury Fashion Co.",
      content: "The custom Shopify theme they created for us perfectly captured our brand essence. Sales increased by 60% after launch, and customer feedback has been overwhelmingly positive.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Product Manager",
      company: "DataViz Inc.",
      content: "The dashboard they built for our analytics platform is both beautiful and functional. Our users love the intuitive interface, and it's made complex data accessible to everyone.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
    }
  ];

  return (
    <section className="py-20 bg-surface-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Testimonials from partners who've experienced the impact of thoughtful design and development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-surface-primary p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent-light/30" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>
              
              <p className="text-text-secondary mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-elevated rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gradient-from to-gradient-to"></div>
                </div>
                <div>
                  <p className="font-semibold text-text-primary">{testimonial.name}</p>
                  <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  <p className="text-sm font-medium text-accent">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;