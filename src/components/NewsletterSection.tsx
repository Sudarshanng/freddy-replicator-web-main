
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this to your backend
      console.log('Submitted email:', email);
      setSubmitted(true);
      setEmail('');
      
      // Reset the submission state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-light mb-6 fade-in">JOIN OUR COMMUNITY</h2>
        <p className="text-white/80 mb-8 fade-in" style={{animationDelay: "0.1s"}}>
          Subscribe to our newsletter to receive updates on new collections, exclusive offers, and styling tips.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto fade-in" style={{animationDelay: "0.2s"}}>
          <Input 
            type="email" 
            placeholder="Your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-transparent border-white/30 text-white placeholder:text-white/50 focus:border-white rounded-none py-6"
          />
          <Button 
            type="submit" 
            className="bg-white text-black hover:bg-white/90 rounded-none py-6"
          >
            SUBSCRIBE
          </Button>
        </form>
        
        {submitted && (
          <p className="mt-4 text-green-400 fade-in">
            Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
