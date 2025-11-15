import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Globe, Calculator, Briefcase, FlaskConical, Palette } from "lucide-react";
import { useState } from "react";
import ProgramDetailsDialog from "./ProgramDetailsDialog";
import { motion } from "framer-motion";

const ProgramsSection = () => {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const programs = [
    {
      icon: BookOpen,
      title: "Bachelor of Arts",
      description: "Comprehensive humanities education with diverse specializations",
      specializations: ["English Literature", "History", "Political Science", "Economics", "Sociology", "Psychology"],
      color: "from-blue-500 to-cyan-500",
      duration: "3 Years",
      eligibility: "10+2",
      seats: 120,
      overview: "The Bachelor of Arts program offers a comprehensive liberal arts education that develops critical thinking, communication, and analytical skills. Our curriculum combines traditional humanities with contemporary perspectives, preparing students for diverse career paths in education, public service, media, and more.",
      curriculum: [
        {
          year: "First Year",
          subjects: ["Foundation English", "Hindi/Regional Language", "Environmental Studies", "Core Subject I", "Core Subject II", "Elective Course"],
        },
        {
          year: "Second Year",
          subjects: ["Advanced English", "Core Subject III", "Core Subject IV", "Specialization I", "Specialization II", "Generic Elective"],
        },
        {
          year: "Third Year",
          subjects: ["Research Methodology", "Core Subject V", "Core Subject VI", "Specialization III", "Dissertation/Project", "Skill Enhancement Course"],
        },
      ],
      careerOpportunities: [
        "Civil Services Officer - Prepare for UPSC, State PSC and other competitive exams",
        "Journalist/Content Writer - Work with leading media houses and digital platforms",
        "HR Professional - Join corporate HR departments and consulting firms",
        "Social Worker/NGO Professional - Contribute to social development initiatives",
        "Teacher/Professor - Shape future generations through education",
        "Research Analyst - Work in think tanks and research organizations",
      ],
      highlights: [
        "UGC-approved curriculum with choice-based credit system (CBCS)",
        "Expert faculty with PhD qualifications from reputed universities",
        "Well-stocked library with over 50,000 books and digital resources",
        "Regular seminars, workshops, and guest lectures by industry experts",
        "Student exchange programs with partner institutions",
        "Placement assistance and career counseling services",
      ],
      skills: ["Critical Thinking", "Communication", "Research", "Analysis", "Writing", "Public Speaking"],
    },
    {
      icon: Calculator,
      title: "Bachelor of Commerce",
      description: "Industry-focused commerce and business education",
      specializations: ["Finance & Accounting", "Banking & Insurance", "Marketing", "E-Commerce", "Taxation", "International Business"],
      color: "from-green-500 to-emerald-500",
      duration: "3 Years",
      eligibility: "10+2",
      seats: 100,
      overview: "The Bachelor of Commerce program is designed to create business leaders and entrepreneurs. With a focus on practical learning, industry interaction, and contemporary business practices, this program prepares students for successful careers in commerce, finance, and management sectors.",
      curriculum: [
        {
          year: "First Year",
          subjects: ["Financial Accounting", "Business Organization", "Business Economics", "Business Mathematics", "Business Communication", "Environmental Studies"],
        },
        {
          year: "Second Year",
          subjects: ["Corporate Accounting", "Company Law", "Income Tax", "Cost Accounting", "Marketing Management", "Banking & Insurance"],
        },
        {
          year: "Third Year",
          subjects: ["Management Accounting", "Auditing", "Financial Management", "E-Commerce", "Project Work", "Entrepreneurship Development"],
        },
      ],
      careerOpportunities: [
        "Chartered Accountant - Pursue CA qualification and join Big 4 firms",
        "Financial Analyst - Work with investment banks and financial institutions",
        "Tax Consultant - Provide tax planning and compliance services",
        "Business Consultant - Help organizations improve performance and efficiency",
        "Investment Banker - Handle mergers, acquisitions, and corporate finance",
        "Entrepreneur - Start your own business venture with solid foundation",
      ],
      highlights: [
        "Industry-relevant curriculum aligned with current business trends",
        "Practical training through internships with leading companies",
        "Access to accounting software and business simulation tools",
        "Guest lectures by CA, CS, CMA, and industry professionals",
        "100% placement assistance with dedicated training and development cell",
        "Preparation support for professional courses like CA, CS, CMA",
      ],
      skills: ["Accounting", "Financial Analysis", "Business Strategy", "Taxation", "Digital Marketing", "Data Analysis"],
    },
    {
      icon: FlaskConical,
      title: "Bachelor of Science",
      description: "Advanced scientific education with modern laboratories",
      specializations: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science", "Biotechnology"],
      color: "from-purple-500 to-pink-500",
      duration: "3 Years",
      eligibility: "10+2 (PCM/PCB)",
      seats: 90,
      overview: "The Bachelor of Science program provides rigorous scientific training with hands-on laboratory experience. Students engage in cutting-edge research, develop analytical and problem-solving skills, and prepare for careers in science, technology, research, and higher studies.",
      curriculum: [
        {
          year: "First Year",
          subjects: ["Core Science I", "Core Science II", "Core Science III", "Mathematics", "Environmental Science", "Language Course"],
        },
        {
          year: "Second Year",
          subjects: ["Advanced Core I", "Advanced Core II", "Advanced Core III", "Applied Science", "Computer Applications", "Generic Elective"],
        },
        {
          year: "Third Year",
          subjects: ["Specialized Course I", "Specialized Course II", "Research Methodology", "Project Work", "Skill Enhancement", "Industrial Training"],
        },
      ],
      careerOpportunities: [
        "Research Scientist - Join ISRO, DRDO, CSIR and other research organizations",
        "Data Scientist - Work with tech giants and analytics companies",
        "Quality Control Analyst - Ensure product quality in pharmaceutical and manufacturing industries",
        "Lab Technician - Work in diagnostic centers and research laboratories",
        "Environmental Consultant - Contribute to sustainable development projects",
        "Science Educator - Teach in schools, colleges, and educational institutions",
      ],
      highlights: [
        "State-of-the-art laboratories with modern equipment and instruments",
        "Research opportunities and collaboration with premier institutions",
        "Field trips and industrial visits to scientific establishments",
        "Participation in national and international science competitions",
        "Specialized training in analytical and research techniques",
        "Preparation support for NET, GATE, and other entrance exams",
      ],
      skills: ["Scientific Research", "Laboratory Techniques", "Data Analysis", "Problem Solving", "Technical Writing", "Experimentation"],
    },
    {
      icon: Briefcase,
      title: "Bachelor of Business Administration",
      description: "Professional business management program",
      specializations: ["Management", "Entrepreneurship", "Human Resources", "Operations Management", "International Business", "Digital Marketing"],
      color: "from-orange-500 to-red-500",
      duration: "3 Years",
      eligibility: "10+2",
      seats: 60,
      overview: "The BBA program is a professional degree that develops future business leaders and managers. Through a blend of theoretical knowledge and practical training, students gain expertise in various aspects of business management, leadership, and strategic thinking.",
      curriculum: [
        {
          year: "First Year",
          subjects: ["Principles of Management", "Business Economics", "Business Communication", "Financial Accounting", "Business Statistics", "IT for Business"],
        },
        {
          year: "Second Year",
          subjects: ["Marketing Management", "Human Resource Management", "Financial Management", "Operations Management", "Business Law", "Organizational Behavior"],
        },
        {
          year: "Third Year",
          subjects: ["Strategic Management", "Entrepreneurship Development", "Business Analytics", "International Business", "Project Management", "Summer Internship Project"],
        },
      ],
      careerOpportunities: [
        "Management Trainee - Fast-track leadership programs in top companies",
        "Business Development Manager - Drive growth and expansion strategies",
        "HR Manager - Lead talent acquisition and employee development initiatives",
        "Marketing Manager - Create and execute marketing campaigns",
        "Operations Manager - Optimize business processes and supply chain",
        "Startup Founder - Launch and scale your own business venture",
      ],
      highlights: [
        "Industry-integrated curriculum with live projects and case studies",
        "Mandatory summer internships with leading organizations",
        "Soft skills training and personality development programs",
        "Regular industry visits and corporate interaction sessions",
        "Entrepreneurship incubation center support",
        "Strong alumni network across various industries",
      ],
      skills: ["Leadership", "Strategic Thinking", "Team Management", "Business Analysis", "Communication", "Decision Making"],
    },
    {
      icon: Globe,
      title: "Bachelor of Computer Applications",
      description: "Computer applications and IT specialization",
      specializations: ["Software Development", "Web Technologies", "Data Science", "Cloud Computing", "Mobile App Development", "Cybersecurity"],
      color: "from-indigo-500 to-blue-500",
      duration: "3 Years",
      eligibility: "10+2",
      seats: 80,
      overview: "The BCA program is designed to create skilled IT professionals ready for the digital age. With comprehensive coverage of programming, software development, and emerging technologies, students gain the technical expertise needed to excel in the rapidly evolving tech industry.",
      curriculum: [
        {
          year: "First Year",
          subjects: ["Programming in C", "Digital Electronics", "Computer Organization", "Mathematics for Computing", "Web Technologies", "Communication Skills"],
        },
        {
          year: "Second Year",
          subjects: ["Data Structures", "Database Management Systems", "Object-Oriented Programming", "Operating Systems", "Software Engineering", "Computer Networks"],
        },
        {
          year: "Third Year",
          subjects: ["Advanced Java", "Python Programming", "Cloud Computing", "Machine Learning", "Mobile App Development", "Major Project"],
        },
      ],
      careerOpportunities: [
        "Software Developer - Build applications for tech companies and startups",
        "Web Developer - Create websites and web applications for diverse clients",
        "Data Analyst - Analyze data and generate insights for business decisions",
        "System Administrator - Manage IT infrastructure and networks",
        "Cloud Engineer - Design and maintain cloud-based solutions",
        "Mobile App Developer - Develop iOS and Android applications",
      ],
      highlights: [
        "Advanced computer labs with latest hardware and software",
        "Industry certifications in emerging technologies",
        "Hackathons, coding competitions, and tech fest participation",
        "Internship opportunities with IT companies and startups",
        "Training in latest programming languages and frameworks",
        "Project-based learning with real-world applications",
      ],
      skills: ["Programming", "Software Development", "Problem Solving", "Database Management", "Web Development", "Debugging"],
    },
    {
      icon: Palette,
      title: "Bachelor of Fine Arts",
      description: "Creative arts and design programs",
      specializations: ["Painting", "Sculpture", "Digital Art", "Graphic Design", "Applied Arts", "Photography"],
      color: "from-pink-500 to-rose-500",
      duration: "3 Years",
      eligibility: "10+2",
      seats: 40,
      overview: "The Bachelor of Fine Arts program nurtures creative talent and artistic expression. Students explore various art forms, develop technical skills, and create a strong portfolio that prepares them for careers in the creative industries or further studies in specialized art fields.",
      curriculum: [
        {
          year: "First Year",
          subjects: ["Drawing & Composition", "History of Art", "Color Theory", "Clay Modeling", "Design Basics", "Art Appreciation"],
        },
        {
          year: "Second Year",
          subjects: ["Advanced Painting Techniques", "Sculpture", "Printmaking", "Digital Art & Design", "Photography", "Art History & Criticism"],
        },
        {
          year: "Third Year",
          subjects: ["Specialization Studio Work", "Contemporary Art Practices", "Portfolio Development", "Exhibition Design", "Thesis Project", "Professional Practices"],
        },
      ],
      careerOpportunities: [
        "Professional Artist - Exhibit and sell artwork through galleries and exhibitions",
        "Graphic Designer - Create visual content for brands and agencies",
        "Art Director - Lead creative teams in advertising and media companies",
        "Illustrator - Work on books, magazines, and digital publications",
        "Art Teacher - Inspire creativity in schools and art institutions",
        "Gallery Curator - Manage art exhibitions and museum collections",
      ],
      highlights: [
        "Spacious studios equipped with professional art materials",
        "Regular workshops by renowned artists and designers",
        "Annual art exhibitions showcasing student work",
        "Access to digital art labs with industry-standard software",
        "Field trips to museums, galleries, and art festivals",
        "Opportunities to participate in national and international competitions",
      ],
      skills: ["Creativity", "Visual Communication", "Technical Proficiency", "Artistic Expression", "Design Thinking", "Portfolio Management"],
    },
  ];

  return (
    <>
    <motion.section 
      id="programs" 
      className="py-24 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              Academic Programs
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your Path to
            <span className="block text-primary">Success</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive range of undergraduate programs designed to shape your future
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${program.color} text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <program.icon className="w-8 h-8" />
                  </div>
                  <div className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    3 Years
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Specializations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.specializations.map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  onClick={() => {
                    setSelectedProgram(program);
                    setDialogOpen(true);
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            Download Prospectus
          </Button>
        </div>
      </div>
    </motion.section>

      {/* Program Details Dialog */}
      <ProgramDetailsDialog 
        program={selectedProgram} 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
      />
    </>
  );
};

export default ProgramsSection;
