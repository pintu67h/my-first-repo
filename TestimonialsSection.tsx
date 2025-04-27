import { useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Users } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The structured learning approach helped me land my dream job! The mentors were incredibly supportive throughout my journey.",
      author: "Ravi K.",
      institution: "IIIT Bangalore",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4",
    },
    {
      quote: "Transformed my career trajectory completely. The real-world projects gave me confidence to tackle any technical challenge.",
      author: "Sneha P.",
      institution: "NIT Warangal",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anita&backgroundColor=ffdfbf",
    },
    {
      quote: "Best investment in my career! The industry connections and mentorship were invaluable for my professional growth.",
      author: "Aditya M.",
      institution: "IIT Kanpur",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=c0aede",
    },
    {
      quote: "This program exceeded my expectations. The practical skills I gained here were beyond what I learned in college.",
      author: "Priya R.",
      institution: "VIT Vellore",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie&backgroundColor=b6e3f4",
    },
    {
      quote: "The mentorship program was exactly what I needed to bridge the gap between academics and industry requirements.",
      author: "Rohan S.",
      institution: "BITS Pilani",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Max&backgroundColor=c0aede",
    },
    {
      quote: "Incredible learning experience! The hands-on projects helped me understand complex concepts easily.",
      author: "Neha T.",
      institution: "DTU Delhi",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucy&backgroundColor=ffdfbf",
    },
    {
      quote: "This internship opened doors to amazing opportunities. The industry exposure was priceless.",
      author: "Arjun P.",
      institution: "NSIT Delhi",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver&backgroundColor=c0aede",
    },
    {
      quote: "The project-based learning approach helped me build a strong portfolio that impressed my interviewers.",
      author: "Meera K.",
      institution: "MIT Manipal",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma&backgroundColor=b6e3f4",
    },
    {
      quote: "Worth every penny! The structured curriculum and industry insights were exactly what I needed.",
      author: "Vishaal R.",
      institution: "IIIT Hyderabad",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=ffdfbf",
    },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-card relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent hover-glow"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Users className="w-5 h-5" />
              <span className="font-semibold">2000+ Students Transformed</span>
            </motion.div>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-foreground special-title sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-foreground/70 mx-auto">
            Join thousands of students who have transformed their careers through our program
          </p>
        </motion.div>

        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <motion.div
                    className="h-full bg-gradient-to-br from-background/80 to-muted rounded-lg p-6 border border-purple-900/30 hover-glow transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <div className="text-accent flex">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-base text-foreground/90 mb-6">{testimonial.quote}</p>
                      </div>
                      <div className="flex items-center mt-4">
                        <img
                          className="h-10 w-10 rounded-full ring-2 ring-accent/30"
                          src={testimonial.avatar}
                          alt={testimonial.author}
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                          <p className="text-sm text-foreground/70">{testimonial.institution}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex text-foreground border-purple-900/30 bg-background/80 hover:bg-muted" />
            <CarouselNext className="hidden md:flex text-foreground border-purple-900/30 bg-background/80 hover:bg-muted" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}