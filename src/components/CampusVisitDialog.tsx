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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { campusVisitApi } from "@/lib/api";
import { Loader2 } from "lucide-react";

interface CampusVisitDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CampusVisitDialog = ({ open, onOpenChange }: CampusVisitDialogProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    numberOfVisitors: "1",
    programInterest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await campusVisitApi.schedule({
        ...formData,
        numberOfVisitors: parseInt(formData.numberOfVisitors),
      });

      toast({
        title: "Campus Visit Scheduled!",
        description: "We'll contact you soon to confirm your visit.",
      });

      onOpenChange(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        numberOfVisitors: "1",
        programInterest: "",
        message: "",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to schedule campus visit",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Schedule Campus Visit</DialogTitle>
          <DialogDescription>
            Choose your preferred date and time for campus visit
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="preferredDate">Preferred Date *</Label>
              <Input
                id="preferredDate"
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                value={formData.preferredDate}
                onChange={(e) =>
                  setFormData({ ...formData, preferredDate: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="preferredTime">Time Slot *</Label>
              <Select
                value={formData.preferredTime}
                onValueChange={(value) =>
                  setFormData({ ...formData, preferredTime: value })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12 PM - 3 PM)</SelectItem>
                  <SelectItem value="evening">Evening (3 PM - 6 PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="numberOfVisitors">Number of Visitors</Label>
              <Input
                id="numberOfVisitors"
                type="number"
                min="1"
                max="10"
                value={formData.numberOfVisitors}
                onChange={(e) =>
                  setFormData({ ...formData, numberOfVisitors: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="programInterest">Program Interest</Label>
              <Select
                value={formData.programInterest}
                onValueChange={(value) =>
                  setFormData({ ...formData, programInterest: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="General">General Visit</SelectItem>
                  <SelectItem value="BA">BA</SelectItem>
                  <SelectItem value="BSc">BSc</SelectItem>
                  <SelectItem value="BCom">BCom</SelectItem>
                  <SelectItem value="BBA">BBA</SelectItem>
                  <SelectItem value="BCA">BCA</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="message">Additional Notes</Label>
            <Textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any specific areas you'd like to see?"
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Schedule Visit
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

export default CampusVisitDialog;
