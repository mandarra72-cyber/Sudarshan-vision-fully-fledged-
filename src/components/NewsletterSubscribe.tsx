import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { newsletterApi } from "@/lib/api";
import { Loader2 } from "lucide-react";

const NewsletterSubscribe = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await newsletterApi.subscribe(email);

      toast({
        title: "Subscribed!",
        description: "You've been successfully subscribed to our newsletter.",
      });

      setEmail("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
      />
      <Button 
        type="submit" 
        variant="secondary" 
        disabled={loading}
        className="whitespace-nowrap"
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Subscribe
      </Button>
    </form>
  );
};

export default NewsletterSubscribe;
