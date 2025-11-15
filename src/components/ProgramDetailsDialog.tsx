import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Clock, 
  Users, 
  Trophy, 
  BookOpen, 
  CheckCircle,
  Briefcase,
  TrendingUp,
  Award
} from "lucide-react";

interface ProgramDetail {
  icon: any;
  title: string;
  description: string;
  specializations: string[];
  color: string;
  duration: string;
  eligibility: string;
  seats: number;
  overview: string;
  curriculum: {
    year: string;
    subjects: string[];
  }[];
  careerOpportunities: string[];
  highlights: string[];
  skills: string[];
}

interface ProgramDetailsDialogProps {
  program: ProgramDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProgramDetailsDialog = ({ program, open, onOpenChange }: ProgramDetailsDialogProps) => {
  if (!program) return null;

  const Icon = program.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${program.color} text-white shadow-lg`}>
              <Icon className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-3xl">{program.title}</DialogTitle>
              <DialogDescription className="text-base mt-1">
                {program.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Quick Info */}
        <div className="grid grid-cols-3 gap-4 my-6">
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="font-semibold">{program.duration}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Total Seats</p>
                <p className="font-semibold">{program.seats}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Eligibility</p>
                <p className="font-semibold text-sm">{program.eligibility}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="highlights">Highlights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Program Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {program.overview}
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-4">Specializations Offered</h3>
              <div className="grid grid-cols-2 gap-3">
                {program.specializations.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-4">Key Skills Developed</h3>
              <div className="flex flex-wrap gap-2">
                {program.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="curriculum" className="space-y-4 mt-6">
            <h3 className="text-lg font-semibold mb-4">Course Structure</h3>
            {program.curriculum.map((year, idx) => (
              <Card key={idx}>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-primary mb-3">{year.year}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {year.subjects.map((subject, subIdx) => (
                      <div key={subIdx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {subject}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="career" className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Career Opportunities
              </h3>
              <div className="grid gap-3">
                {program.careerOpportunities.map((career, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="highlights" className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Program Highlights
              </h3>
              <div className="grid gap-3">
                {program.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-lg border-2 border-primary/20 hover:border-primary/40 transition-colors">
                    <Trophy className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex gap-3 mt-6">
          <Button className="flex-1" size="lg">
            Apply Now
          </Button>
          <Button variant="outline" size="lg" className="flex-1">
            Download Brochure
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProgramDetailsDialog;
