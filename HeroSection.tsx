import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="tech-gradient pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-primary/30 blur-3xl"></div>
      </div>
      
      {/* Darkened corners */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-10 -left-10 w-96 h-96 rounded-full bg-black opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-black opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full bg-black opacity-20 blur-3xl"></div>
        <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-black opacity-20 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div 
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl special-title">
              <span className="block">Kickstart Your Tech Career</span>
              <span className="block text-accent mt-1">1-Month Internships at Top Companies!</span>
            </h1>
            <p className="mt-5 text-base text-purple-100 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
              Transform Your Career Trajectory | Join 2000+ Successful Graduates | Limited Time Opportunity
            </p>
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#apply"
                  className="w-full flex items-center justify-center px-8 py-3 border border-accent/50 text-base font-medium rounded-md text-white bg-accent hover:bg-accent/80 hover-glow md:py-4 md:text-lg md:px-10 transition-all duration-300"
                >
                  Apply Now
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#about"
                  className="w-full flex items-center justify-center px-8 py-3 border border-purple-400/20 text-base font-medium rounded-md text-white bg-background/50 backdrop-blur-sm hover:bg-background/80 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="tech-card rounded-lg shadow-xl shadow-purple-900/30 overflow-hidden hover-glow">
              <img 
                className="w-full" 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Students collaborating on a tech project" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
