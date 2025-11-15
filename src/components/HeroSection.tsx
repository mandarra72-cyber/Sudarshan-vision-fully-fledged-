import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Award } from "lucide-react";
import heroImage from "@/assets/college-hero.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sudarshan English Degree College Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary-glow/75" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-primary-foreground px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Accredited Excellence Since 1995</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Sudarshan English
            <span className="block text-secondary">Degree College</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Empowering minds, shaping futures. Where academic excellence meets holistic development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={() => document.getElementById("admissions")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Programs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-4 bg-background/10 backdrop-blur-sm rounded-lg p-4 hover:bg-background/20 transition-all hover:scale-105">
              <div className="bg-secondary rounded-full p-3">
                <GraduationCap className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">5000+</div>
                <div className="text-sm text-primary-foreground/80">Students Enrolled</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-background/10 backdrop-blur-sm rounded-lg p-4 hover:bg-background/20 transition-all hover:scale-105">
              <div className="bg-secondary rounded-full p-3">
                <Users className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">200+</div>
                <div className="text-sm text-primary-foreground/80">Expert Faculty</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-background/10 backdrop-blur-sm rounded-lg p-4 hover:bg-background/20 transition-all hover:scale-105">
              <div className="bg-secondary rounded-full p-3">
                <Award className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">98%</div>
                <div className="text-sm text-primary-foreground/80">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
