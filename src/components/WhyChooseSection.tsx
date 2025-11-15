import { Card } from "@/components/ui/card";
import { Sparkles, Trophy, Users2, Rocket, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Trophy,
      title: "Award-Winning Faculty",
      description: "Learn from industry experts and research scholars with decades of experience",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Rocket,
      title: "Career Launch Pad",
      description: "100% placement assistance with connections to top companies and organizations",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      icon: Users2,
      title: "Vibrant Campus Life",
      description: "Join 50+ clubs, participate in cultural events, and build lifelong friendships",
      gradient: "from-green-400 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Holistic Development",
      description: "Focus on personality development, soft skills, and leadership training",
      gradient: "from-pink-400 to-rose-500",
    },
    {
      icon: Sparkles,
      title: "Modern Infrastructure",
      description: "State-of-the-art labs, digital libraries, and smart classrooms",
      gradient: "from-indigo-400 to-blue-500",
    },
    {
      icon: Star,
      title: "Global Exposure",
      description: "International collaborations, exchange programs, and industry tours",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <motion.section 
      className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
              Why Choose SEDC
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Experience the
            <span className="block text-primary">SEDC Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover what makes us the preferred choice for thousands of students
          </p>
        </motion.div>

        {/* Features Grid with 3D Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            <Card
              className="group relative p-8 border-2 border-border hover:border-primary/50 transition-all duration-500 preserve-3d hover:shadow-2xl"
              style={{
                transform: "translateZ(0)",
              }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl -z-10">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20`} />
              </div>

              {/* Icon with Gradient */}
              <div className="relative mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity rounded-2xl`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/20 animate-pulse" />
              </div>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseSection;
