import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { applicationApi } from "@/lib/api";
import { Loader2 } from "lucide-react";

interface ApplicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ApplicationDialog = ({ open, onOpenChange }: ApplicationDialogProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    programInterested: "",
    address: {
      street: "",
      city: "",
      state: "",
      pincode: "",
    },
    previousEducation: {
      schoolName: "",
      board: "",
      percentage: "",
      yearOfPassing: "",
    },
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await applicationApi.create({
        ...formData,
        previousEducation: {
          ...formData.previousEducation,
          percentage: parseFloat(formData.previousEducation.percentage),
          yearOfPassing: parseInt(formData.previousEducation.yearOfPassing),
        },
      });

      toast({
        title: "Application Submitted!",
        description: `Your application number is: ${(response as any).applicationId || 'Pending'}`,
      });

      onOpenChange(false);
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: "",
        programInterested: "",
        address: { street: "", city: "", state: "", pincode: "" },
        previousEducation: { schoolName: "", board: "", percentage: "", yearOfPassing: "" },
        message: "",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply Online</DialogTitle>
          <DialogDescription>
            Fill in your details to start your admission process
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-semibold">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  required
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    setFormData({ ...formData, dateOfBirth: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="gender">Gender *</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) =>
                    setFormData({ ...formData, gender: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="font-semibold">Address</h3>
            <div>
              <Label htmlFor="street">Street</Label>
              <Input
                id="street"
                value={formData.address.street}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: { ...formData.address, street: e.target.value },
                  })
                }
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.address.city}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: { ...formData.address, city: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  value={formData.address.state}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: { ...formData.address, state: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="pincode">Pincode</Label>
                <Input
                  id="pincode"
                  value={formData.address.pincode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: { ...formData.address, pincode: e.target.value },
                    })
                  }
                />
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="space-y-4">
            <h3 className="font-semibold">Academic Information</h3>
            <div>
              <Label htmlFor="program">Program Interested *</Label>
              <Select
                value={formData.programInterested}
                onValueChange={(value) =>
                  setFormData({ ...formData, programInterested: value })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BA">Bachelor of Arts (BA)</SelectItem>
                  <SelectItem value="BSc">Bachelor of Science (BSc)</SelectItem>
                  <SelectItem value="BCom">Bachelor of Commerce (BCom)</SelectItem>
                  <SelectItem value="BBA">Bachelor of Business Administration (BBA)</SelectItem>
                  <SelectItem value="BCA">Bachelor of Computer Applications (BCA)</SelectItem>
                  <SelectItem value="MA">Master of Arts (MA)</SelectItem>
                  <SelectItem value="MSc">Master of Science (MSc)</SelectItem>
                  <SelectItem value="MCom">Master of Commerce (MCom)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="schoolName">Previous School/College</Label>
                <Input
                  id="schoolName"
                  value={formData.previousEducation.schoolName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      previousEducation: {
                        ...formData.previousEducation,
                        schoolName: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="board">Board/University</Label>
                <Input
                  id="board"
                  value={formData.previousEducation.board}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      previousEducation: {
                        ...formData.previousEducation,
                        board: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="percentage">Percentage</Label>
                <Input
                  id="percentage"
                  type="number"
                  step="0.01"
                  max="100"
                  value={formData.previousEducation.percentage}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      previousEducation: {
                        ...formData.previousEducation,
                        percentage: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="yearOfPassing">Year of Passing</Label>
                <Input
                  id="yearOfPassing"
                  type="number"
                  value={formData.previousEducation.yearOfPassing}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      previousEducation: {
                        ...formData.previousEducation,
                        yearOfPassing: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>

          {/* Additional Message */}
          <div>
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Any additional information you'd like to share..."
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit Application
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationDialog;
