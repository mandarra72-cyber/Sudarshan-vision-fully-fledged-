import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, FileText, CheckCircle, Phone } from "lucide-react";
import classroomImage from "@/assets/classroom.jpg";
import studentsImage from "@/assets/students.jpg";
import ApplicationDialog from "./ApplicationDialog";
import CampusVisitDialog from "./CampusVisitDialog";
import { motion } from "framer-motion";

const AdmissionsSection = () => {
  const [applicationDialogOpen, setApplicationDialogOpen] = useState(false);
  const [campusVisitDialogOpen, setCampusVisitDialogOpen] = useState(false);
  const steps = [
    {
      icon: FileText,
      title: "Fill Application",
      description: "Complete the online application form with your details",
    },
    {
      icon: CheckCircle,
      title: "Document Verification",
      description: "Submit required documents for verification",
    },
    {
      icon: Calendar,
      title: "Personal Interview",
      description: "Attend a brief interaction with our admission team",
    },
    {
      icon: CheckCircle,
      title: "Confirmation",
      description: "Receive admission confirmation and enroll",
    },
  ];

  return (
    <motion.section 
      id="admissions" 
      className="py-24 bg-background relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

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
              Admissions Open
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Begin Your Journey
            <span className="block text-primary">With Us Today</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple and transparent admission process designed for your convenience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Steps */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">Admission Process</h3>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-4 group"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <div className="flex-shrink-0 text-3xl font-bold text-primary/20">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={classroomImage}
                alt="Modern Classroom"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
              <Card className="p-6 bg-primary text-primary-foreground hover:scale-105 transition-transform duration-300">
                <Calendar className="w-8 h-8 mb-3" />
                <h4 className="font-bold text-lg mb-2">Last Date</h4>
                <p className="text-sm opacity-90">June 30, 2025</p>
              </Card>
            </div>
            <div className="space-y-4 mt-8">
              <Card className="p-6 bg-secondary text-secondary-foreground hover:scale-105 transition-transform duration-300">
                <Phone className="w-8 h-8 mb-3" />
                <h4 className="font-bold text-lg mb-2">Contact Us</h4>
                <p className="text-sm">+91 98765 43210</p>
              </Card>
              <img
                src={studentsImage}
                alt="Happy Students"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <Card className="relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
          <div className="relative p-12 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have transformed their lives at SEDC. 
              Limited seats available for the upcoming academic year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => setApplicationDialogOpen(true)}
              >
                Apply Online Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => setCampusVisitDialogOpen(true)}
              >
                Schedule Campus Visit
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Dialogs */}
      <ApplicationDialog 
        open={applicationDialogOpen} 
        onOpenChange={setApplicationDialogOpen} 
      />
      <CampusVisitDialog 
        open={campusVisitDialogOpen} 
        onOpenChange={setCampusVisitDialogOpen} 
      />
    </motion.section>
  );
};

export default AdmissionsSection;
