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
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Show loading state
    setSubmitStatus('sending');
  
    emailjs.send(
      'portfolio-vedasi',      
      'template_nn977ij',      
      formData,                
      '9aJJMwKLIfCcwRrDc'        
    )
    .then((result) => {
      console.log("Email successfully sent:", result.text);
      setSubmitStatus('success');
  
      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitStatus(null);
      }, 3000);
    })
    .catch((error) => {
      console.error("Email sending error:", error);
      setSubmitStatus('error');
      
      // Provide specific error messages based on error type
      let errorMessage = "Something went wrong while sending your message. Please try again later.";
      
      if (error.status === 412) {
        errorMessage = "Email service configuration issue. Please contact the site administrator.";
      } else if (error.status === 400) {
        errorMessage = "Invalid email format. Please check your details and try again.";
      } else if (error.status === 401) {
        errorMessage = "Email service authentication failed. Please try again later.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
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
            className="w-full p-3 h-14 rounded-lg bg-input text-white placeholder:text-gray-400 font-mono text-lg border-none"
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
            className="w-full p-3 h-14 rounded-lg bg-input text-white placeholder:text-gray-400 font-mono text-lg border-none"
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
            className="w-full p-3 rounded-lg bg-input text-white placeholder:text-gray-400 font-mono text-lg resize-none border-none"
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
            disabled={submitStatus === 'sending'}
            className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg font-mono rounded-lg disabled:opacity-50"
          >
            {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.div>

        {/* Status Messages */}
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-4"
          >
            {submitStatus === 'success' && (
              <div className="text-green-400 font-mono text-lg flex items-center justify-center space-x-2">
                <span className="h-2 w-2 bg-green-400 rounded-full"></span>
                <span>Message sent successfully!</span>
              </div>
            )}
            {submitStatus === 'sending' && (
              <div className="text-blue-400 font-mono text-lg flex items-center justify-center space-x-2">
                <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Sending your message...</span>
              </div>
            )}
          </motion.div>
        )}
        </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;