import { useState } from 'react';
import { Send, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
// Import EmailJS
import emailjs from '@emailjs/browser';
import { toast } from 'sonner'; // Assuming you want to use the installed toast library for errors

export function FeedbackSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_b4zp44k'; 
    const TEMPLATE_ID = 'template_gaari5u'; 
    const PUBLIC_KEY = 'im2MYv7t-rK_Pxg5J';

    // Prepare the template parameters to match your EmailJS template
    const templateParams = {
      from_name: formData.name || 'Anonymous',
      from_email: formData.email || 'Not provided',
      category: formData.category,
      message: formData.message,
      to_email: 'banusingairacamille@gmail.com'
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      // Success handling
      console.log('Feedback submitted successfully');
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', category: 'general', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Failed to send feedback:', error);
      toast.error("Failed to send feedback. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="feedback" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
            <MessageSquare className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="mb-4 text-purple-900">Share Your Knowledge</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Help us improve this resource by sharing medically backed information, personal insights, or suggestions for content that would benefit our community
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        {isSubmitted ? (
          <Card className="p-12 text-center border-2 border-green-200 bg-green-50">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="mb-2 text-green-900">Thank You!</h3>
            <p className="text-gray-700">
              Your feedback has been sent to Aira. We truly appreciate your contribution to helping others in our community.
            </p>
          </Card>
        ) : (
          <Card className="p-8 bg-white/80 backdrop-blur border-2 border-purple-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name (Optional)</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-purple-200 focus:border-purple-400"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-purple-200 focus:border-purple-400"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
                  disabled={isSubmitting}
                >
                  <option value="general">General Feedback</option>
                  <option value="medical">Medical Information to Add</option>
                  <option value="diet">Diet & Nutrition Suggestion</option>
                  <option value="exercise">Exercise & Yoga Suggestion</option>
                  <option value="lifestyle">Lifestyle Tips</option>
                  <option value="personal">Personal Experience/Insight</option>
                  <option value="correction">Correction Needed</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Share your insights, suggestions, or experiences here. If sharing medical information, please include sources when possible."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="border-purple-200 focus:border-purple-400"
                  disabled={isSubmitting}
                />
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="text-sm text-gray-700">
                  <strong className="text-purple-900">Note:</strong> I review all submissions carefully and use your feedback to improve this resource. Medically backed information with credible sources is especially valuable. Your privacy is important - personal details are optional and will only be used if I need to follow up with you.
                </p>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Feedback
                  </>
                )}
              </Button>
            </form>
          </Card>
        )}

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center border-2 border-pink-100">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">🏥</span>
            </div>
            <h4 className="mb-2">Medical Insights</h4>
            <p className="text-sm text-gray-700">
              Share research studies, medical articles, or expert information
            </p>
          </Card>

          <Card className="p-6 text-center border-2 border-purple-100">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">💡</span>
            </div>
            <h4 className="mb-2">Personal Experiences</h4>
            <p className="text-sm text-gray-700">
              What has worked for you? Your story could help others
            </p>
          </Card>

          <Card className="p-6 text-center border-2 border-rose-100">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">🎯</span>
            </div>
            <h4 className="mb-2">Suggestions</h4>
            <p className="text-sm text-gray-700">
              Ideas for new sections, resources, or improvements
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}