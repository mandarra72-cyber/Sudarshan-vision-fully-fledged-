import { Card } from "@/components/ui/card";
import { CheckCircle2, Target, Heart, Lightbulb } from "lucide-react";
import libraryImage from "@/assets/library.jpg";
import { motion } from "framer-motion";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to academic and professional excellence in every endeavor",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building character through ethical practices and honest conduct",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering creative thinking and modern learning methodologies",
    },
  ];

  return (
    <motion.section 
      id="about" 
      className="py-24 bg-muted/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side with 3D Effect */}
          <div className="relative group perspective-1000">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 preserve-3d">
              <img
                src={libraryImage}
                alt="College Library"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground px-8 py-6 rounded-2xl shadow-2xl animate-float">
              <div className="text-4xl font-bold">28+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Building Tomorrow's
                <span className="block text-primary">Leaders Today</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Established in 1995, Sudarshan English Degree College has been a beacon of quality education, 
                nurturing thousands of students to become confident professionals and responsible citizens.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              {[
                "NAAC A+ Accredited Institution",
                "State-of-the-art Infrastructure & Facilities",
                "Industry-Integrated Curriculum",
                "100% Placement Assistance"
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <value.icon className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
