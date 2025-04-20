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
      'portfolio-vedasi',       // Replace this with your actual service ID
      'template_nn977ij',      // Replace this with your actual template ID
      formData,                // This will match keys in your template like name, email, message
      '9aJJMwKLIfCcwRrDc'        // Replace with your actual public key (e.g., user_xxx)
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
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-24"
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          Curious about what we can create together? Let's<br />
          bring something extraordinary to life!
        </motion.h2>

        <div className="max-w-lg mx-auto relative z-10">
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
                className="bg-secondary/50 border-white/10 text-white placeholder:text-white/40"
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
                className="bg-secondary/50 border-white/10 text-white placeholder:text-white/40"
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
                className="bg-secondary/50 border-white/10 text-white placeholder:text-white/40 min-h-[150px]"
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
                className="w-full bg-white text-black hover:bg-white/90 transition-colors py-6"
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
