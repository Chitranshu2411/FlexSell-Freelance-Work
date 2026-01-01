import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MessageCircle, Mail } from "lucide-react";

interface ApplyButtonProps {
  variant?: "hero" | "dark";
}

const ApplyButton = ({ variant = "hero" }: ApplyButtonProps) => {
  const whatsappNumber = "918982675004";
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in partnering with FlexSell.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const emailAddress = "abdulquadir@fakhriitservices.com";

  return (
    <Popover>
      <PopoverTrigger asChild>
        {variant === "hero" ? (
          <Button variant="hero" size="xl">
            Apply for FlexSell
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
        ) : (
          <Button
            size="xl"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
          >
            Apply for FlexSell
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2 bg-card border border-border shadow-lg z-50">
        <div className="flex flex-col gap-1">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent/10 transition-colors text-foreground"
          >
            <MessageCircle className="w-5 h-5 text-accent" />
            <span className="font-medium">WhatsApp</span>
          </a>
          <a
            href={`mailto:${emailAddress}`}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent/10 transition-colors text-foreground"
          >
            <Mail className="w-5 h-5 text-accent" />
            <span className="font-medium">Email</span>
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ApplyButton;
