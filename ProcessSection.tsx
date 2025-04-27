import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Register Online",
      description: "Fill out our simple application form with your details and academic background. Takes less than 5 minutes!",
    },
    {
      number: 2,
      title: "Shortlisting",
      description: "Our team reviews your application and matches you with the perfect internship opportunity based on your skills and preferences.",
    },
    {
      number: 3,
      title: "Internship Offer",
      description: "Receive your internship offer letter, complete the formalities, and prepare for your exciting journey with a leading tech company.",
    },
    {
      number: 4,
      title: "1-Month Experience",
      description: "Immerse yourself in real-world projects, learn from industry experts, and build valuable skills while expanding your professional network.",
    },
  ];

  return (
    <section id="process" className="py-16 lg:py-24 bg-background relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground special-title sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-foreground/70 mx-auto">
            Our simple process takes you from application to industry-ready in just four steps.
          </p>
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line - visible only on md and up */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-purple-500/30 via-accent/50 to-purple-500/30 -ml-px"></div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* For even steps */}
                {index % 2 === 0 ? (
                  <>
                    <div className="md:col-start-1">
                      <div className="mb-4 md:mb-0 flex md:justify-end group">
                        <div className="tech-card rounded-lg p-6 md:ml-12 hover-glow transition-all duration-300">
                          <div className="mt-2">
                            <h3 className="text-lg font-medium text-accent">Step {step.number}: {step.title}</h3>
                            <p className="mt-2 text-base text-foreground/70">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:col-start-2 relative">
                      <div className="h-12 w-12 rounded-full bg-accent text-white flex items-center justify-center -ml-6 ring-4 ring-background shadow-lg shadow-purple-900/30 hover-glow">
                        <span className="text-lg font-bold">{step.number}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:col-start-2">
                      <div className="mb-4 md:mb-0 flex md:justify-start group">
                        <div className="tech-card rounded-lg p-6 md:mr-12 hover-glow transition-all duration-300">
                          <div className="mt-2">
                            <h3 className="text-lg font-medium text-accent">Step {step.number}: {step.title}</h3>
                            <p className="mt-2 text-base text-foreground/70">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:col-start-1 relative md:flex md:justify-end">
                      <div className="h-12 w-12 rounded-full bg-accent text-white flex items-center justify-center -mr-6 ring-4 ring-background shadow-lg shadow-purple-900/30 hover-glow">
                        <span className="text-lg font-bold">{step.number}</span>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
