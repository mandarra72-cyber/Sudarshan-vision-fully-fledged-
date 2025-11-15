import { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import NewsletterSubscribe from "./NewsletterSubscribe";
import ContactDialog from "./ContactDialog";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const footerLinks = {
    "Quick Links": [
      { name: "About Us", href: "#about" },
      { name: "Programs", href: "#programs" },
      { name: "Admissions", href: "#admissions" },
      { name: "Faculty", href: "#" },
      { name: "Campus Life", href: "#" },
    ],
    "Resources": [
      { name: "Student Portal", href: "#" },
      { name: "Library", href: "#" },
      { name: "E-Learning", href: "#" },
      { name: "Scholarships", href: "#" },
      { name: "Career Services", href: "#" },
    ],
    "Support": [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#contact" },
      { name: "FAQs", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">SEDC</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Sudarshan English Degree College - Empowering students with quality education and 
              holistic development since 1995.
            </p>
            
            {/* Newsletter Section */}
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3">Subscribe to Our Newsletter</h4>
              <p className="text-primary-foreground/80 text-sm mb-3">
                Get the latest updates, events, and news delivered to your inbox.
              </p>
              <NewsletterSubscribe />
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-secondary" />
                <p className="text-primary-foreground/80">
                  Plot No 9/3, Jewel Rock Industries Building,<br />
                  Near Hub Mall, Cama Estate, Wallbhat Road,<br />
                  Goregaon East-400063
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-secondary" />
                <a href="tel:+918591928362" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +91 85919 28362
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-secondary" />
                <a 
                  href="mailto:mandarra71@gmail.com"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  mandarra71@gmail.com
                </a>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-6">
              <div className="rounded-lg overflow-hidden border-2 border-primary-foreground/20 hover:border-secondary transition-colors">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8352624999676!2d72.86111227503726!3d19.16245398205384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b0e0000001%3A0x0!2zMTnCsDA5JzQ0LjgiTiA3MsKwNTEnNTEuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  title="SEDC Location"
                ></iframe>
              </div>
            </div>
            
            <Button 
              variant="secondary" 
              className="mt-4 w-full"
              onClick={() => setContactDialogOpen(true)}
            >
              Contact Us
            </Button>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-bold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Sudarshan English Degree College. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Additional Links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <ContactDialog 
        open={contactDialogOpen} 
        onOpenChange={setContactDialogOpen} 
      />
    </footer>
  );
};

export default Footer;
