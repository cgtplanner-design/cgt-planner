import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { base44 } from "@/api/base44Client";
import { 
  Calculator, 
  Zap, 
  Shield, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Clock
} from "lucide-react";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    await base44.entities.Subscriber.create({
      email,
      subscribed_at: new Date().toISOString()
    });
    setIsSubscribed(true);
    setIsSubmitting(false);
    toast.success("You're on the list!");
  };

  const features = [
    {
      icon: Clock,
      title: "Instant Results",
      description: "Calculate your CGT liability in minutes, not hours"
    },
    {
      icon: Shield,
      title: "Accurate & Compliant",
      description: "Stay up-to-date with the latest CGT regulations"
    },
    {
      icon: TrendingUp,
      title: "Maximize Savings",
      description: "Find legitimate ways to reduce your tax burden"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A2F5C]" style={{backgroundColor: '#0A2F5C'}}>
      {/* Coming Soon Badge */}
      <div className="relative z-10 pt-6 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <span className="inline-block px-6 py-2 rounded-full text-sm font-bold text-white border-2"
            style={{ backgroundColor: '#E87722', borderColor: '#E87722' }}>
            ...COMING SOON <span className="font-black">!</span>
          </span>
        </motion.div>
      </div>

      {/* Logo */}
      <div className="relative z-10 py-4 pb-2 sm:py-10 sm:pb-4">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968543ee20f71b51b000be4/1c09f6d13_Approvedlogo.png" 
            alt="CGT Calculator Logo" 
            className="h-44 w-auto"
          />
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-2 pb-12 sm:pt-4 sm:pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Decorative Brackets */}
          <div className="relative max-w-4xl mx-auto mt-2 sm:mt-4">
            {/* Top horizontal line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#5EBFB3]" />
            {/* Top Left vertical */}
            <div className="absolute top-0 left-0 w-1.5 h-20 bg-[#5EBFB3]" />
            {/* Top Right vertical */}
            <div className="absolute top-0 right-0 w-1.5 h-20 bg-[#5EBFB3]" />
            {/* Bottom horizontal line */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#5EBFB3]" />
            {/* Bottom Left vertical */}
            <div className="absolute bottom-0 left-0 w-1.5 h-20 bg-[#5EBFB3]" />
            {/* Bottom Right vertical */}
            <div className="absolute bottom-0 right-0 w-1.5 h-20 bg-[#5EBFB3]" />
            
            <div className="px-4 sm:px-16 py-6 sm:py-20 text-center">
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.2] mb-3 sm:mb-6"
              >
                CGT CHANGES
                <br />
                GOT YOU WORRIED?
              </motion.h1>

              {/* Subheadline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2]"
                style={{ color: '#E87722' }}
              >
                Calculate with us
                <br />
                ...in minutes
              </motion.h2>

              {/* Email Signup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 sm:mt-10"
              >
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 px-4 text-sm rounded-lg border-2 bg-white text-[#0A2F5C] placeholder:text-gray-400"
                      style={{ borderColor: '#5EBFB3' }}
                      required
                    />
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="h-12 px-6 text-sm font-bold rounded-lg text-white shadow-lg transition-all hover:shadow-xl"
                      style={{ backgroundColor: '#E87722' }}
                    >
                      {isSubmitting ? "Joining..." : "Notify Me"}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-lg border-2"
                    style={{ backgroundColor: '#5EBFB3', borderColor: '#5EBFB3' }}
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">You're on the list! We'll be in touch soon.</span>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}