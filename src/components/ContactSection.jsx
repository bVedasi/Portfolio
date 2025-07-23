import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../components/ui/use-toast";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import React from 'react';
const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send(
      'portfolio-vedasi',      
      'template_nn977ij',      
      formData,                
      '9aJJMwKLIfCcwRrDc'        
    )
    .then((result) => {
      console.log("Email successfully sent:", result.text);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
  
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Email sending error:", error);
      toast({
        title: "Error",
        description: "Something went wrong while sending your message. Please try again later.",
        variant: "destructive"
      });
    });
  };
  

  const fadeInVariants = {
    hidden: { opacity: 0, filter: 'blur(20px)' },
    visible: { opacity: 1, filter: 'blur(0)', transition: { duration: 1, ease: "easeOut" } },
  };

  // Intersection Observer for each section
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false, // Trigger animation every time the section enters the viewport
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-6 md:px-12 bg-black border-t border-white/10 relative overflow-hidden"
    >
      {/* Background effect */}
      <div className="absolute right-0 bottom-0 w-[800px] h-[600px] bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto">
        {/* Status/Available for Work Tag */}
        <motion.div
          className="flex justify-center mb-12"
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <div className="bg-secondary/50 backdrop-blur-sm text-white text-sm font-medium py-2 px-4 rounded-full flex items-center space-x-2">
            <span className="h-2 w-2 bg-green-500 rounded-full inline-block"></span>
            <span>Available For Work</span>
          </div>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-24"
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          Curious about what we can create together? Let's<br />
          bring something extraordinary to life!
        </motion.h2>

        <div className="max-w-lg  mx-auto relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 h-14 rounded-lg bg-input text-black placeholder:text-gray-500 font-mono text-lg border-none"
            required
          />
        </motion.div>

        {/* Email Input */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 h-14 rounded-lg bg-input text-black placeholder:text-gray-500 font-mono text-lg border-none"
            required
          />
        </motion.div>

        {/* Message Textarea */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            className="w-full p-3 rounded-lg bg-input text-black placeholder:text-gray-500 font-mono text-lg resize-none border-none"
            required
          />
        </motion.div>

        {/* Send Message Button */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <Button 
            type="submit" 
            className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg font-mono rounded-lg"
          >
            Send Message
          </Button>
        </motion.div>
        </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
