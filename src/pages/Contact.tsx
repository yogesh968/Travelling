import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Message required",
        description: "Please enter your message",
        variant: "destructive"
      });
      return false;
    }

    if (formData.message.length < 10) {
      toast({
        title: "Message too short",
        description: "Please enter at least 10 characters",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Send to backend API - saves to file and sends email
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Contact from TravelX',
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success! Data saved and email sent
        toast({
          title: "Message sent successfully! ✓",
          description: `Thank you ${formData.name}! We've received your message and will get back to you at ${formData.email} within 24 hours.`,
          duration: 5000,
        });

        console.log('✅ Submission successful:', {
          submissionId: data.submissionId,
          name: formData.name,
          email: formData.email
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }

    } catch (error) {
      console.error('❌ Error sending message:', error);
      
      toast({
        title: "Unable to send message",
        description: "Please make sure the backend server is running or email us directly at yogakumar221@gmail.com",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: "yogakumar221@gmail.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      content: "+91 9667781329",
      description: "Mon-Fri, 9am-6pm IST"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      content: "Pune, India",
      description: "Available for consultations"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Response Time",
      content: "24 hours average",
      description: "Usually much faster!"
    }
  ];

  const faqs = [
    {
      question: "How do I create an itinerary?",
      answer: "Simply browse our destinations, add attractions, hotels, and restaurants to your itinerary, then organize them by day using our drag-and-drop planner."
    },
    {
      question: "Is the service free?",
      answer: "Yes! Our basic itinerary planning tools are completely free. We make money through affiliate partnerships with hotels and attractions."
    },
    {
      question: "Can I share my itinerary?",
      answer: "Absolutely! You can export your itinerary as a PDF or text file, or share it directly with travel companions."
    },
    {
      question: "Do you offer travel booking?",
      answer: "We focus on planning, but we partner with trusted booking platforms to help you reserve hotels, flights, and activities."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-tropical text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-up">
            Have questions about planning your trip? We're here to help make your travel dreams come true.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2 text-primary" />
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        maxLength={255}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      maxLength={200}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you plan your perfect trip..."
                      rows={6}
                      required
                      maxLength={1000}
                      className="resize-none"
                    />
                    <div className="text-right text-sm text-muted-foreground mt-1">
                      {formData.message.length}/1000
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-ocean hover:scale-105 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="animate-slide-up">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={info.title} className="hover-lift">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="text-primary mt-1">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">{info.title}</h3>
                          <p className="text-foreground font-medium">{info.content}</p>
                          <p className="text-muted-foreground text-xs">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-sm mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-sunset text-white animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-white/90 text-sm mb-4">
                  Get travel tips and destination updates delivered to your inbox.
                </p>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter your email"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                  <Button variant="secondary" size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;