import { Moon, Droplets, Sparkles, Users, Brain, Sun } from 'lucide-react';
import { Card } from './ui/card';

export function LifestyleSection() {
  const lifestyleTips = [
    {
      icon: Moon,
      title: "Prioritize Sleep",
      color: "indigo",
      tips: [
        "Aim for 7-9 hours of quality sleep each night",
        "Maintain a consistent sleep schedule",
        "Create a calming bedtime routine",
        "Keep your bedroom cool and dark",
        "Avoid screens 1 hour before bed"
      ]
    },
    {
      icon: Droplets,
      title: "Stay Hydrated",
      color: "blue",
      tips: [
        "Drink at least 8 glasses of water daily",
        "Herbal teas can count toward hydration",
        "Limit caffeine and alcohol intake",
        "Eat water-rich foods like cucumbers and melons",
        "Carry a reusable water bottle"
      ]
    },
    {
      icon: Brain,
      title: "Manage Stress",
      color: "purple",
      tips: [
        "Practice mindfulness or meditation daily",
        "Try deep breathing exercises",
        "Journal your thoughts and feelings",
        "Set healthy boundaries in relationships",
        "Engage in hobbies you enjoy"
      ]
    },
    {
      icon: Sparkles,
      title: "Self-Care Rituals",
      color: "pink",
      tips: [
        "Take warm baths with Epsom salts",
        "Use heating pads for pain relief",
        "Practice gentle self-massage",
        "Schedule regular 'me time'",
        "Try aromatherapy with lavender or chamomile"
      ]
    },
    {
      icon: Users,
      title: "Build Support",
      color: "rose",
      tips: [
        "Connect with endometriosis support groups",
        "Educate close friends and family",
        "Find a healthcare team you trust",
        "Share your experiences when comfortable",
        "Don't hesitate to ask for help"
      ]
    },
    {
      icon: Sun,
      title: "Optimize Environment",
      color: "amber",
      tips: [
        "Reduce exposure to endocrine disruptors",
        "Choose organic foods when possible",
        "Use natural cleaning products",
        "Avoid plastic containers for food storage",
        "Get regular sunlight for vitamin D"
      ]
    }
  ];

  const colorVariants = {
    indigo: {
      bg: "bg-indigo-100",
      text: "text-indigo-600",
      border: "border-indigo-200",
      dot: "bg-indigo-500"
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      border: "border-blue-200",
      dot: "bg-blue-500"
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      border: "border-purple-200",
      dot: "bg-purple-500"
    },
    pink: {
      bg: "bg-pink-100",
      text: "text-pink-600",
      border: "border-pink-200",
      dot: "bg-pink-500"
    },
    rose: {
      bg: "bg-rose-100",
      text: "text-rose-600",
      border: "border-rose-200",
      dot: "bg-rose-500"
    },
    amber: {
      bg: "bg-amber-100",
      text: "text-amber-600",
      border: "border-amber-200",
      dot: "bg-amber-500"
    }
  };

  return (
    <section id="lifestyle" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-purple-900">Lifestyle Management</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Holistic lifestyle changes can significantly improve your quality of life and help manage endometriosis symptoms
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {lifestyleTips.map((category, index) => {
            const Icon = category.icon;
            const colors = colorVariants[category.color as keyof typeof colorVariants];
            
            return (
              <Card key={index} className={`p-6 border-2 ${colors.border} hover:shadow-lg transition-all`}>
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 ${colors.dot} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-sm text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
          <h3 className="mb-6 text-center text-purple-900">Creating Your Personal Wellness Plan</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="mb-3 text-pink-700">Step 1: Track Your Symptoms</h4>
              <p className="text-gray-700">
                Keep a daily journal noting pain levels, energy, diet, exercise, and emotional state. This helps identify patterns and triggers specific to your body.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="mb-3 text-purple-700">Step 2: Start Small</h4>
              <p className="text-gray-700">
                Choose 2-3 lifestyle changes to focus on initially. Overwhelming yourself with too many changes at once can be counterproductive. Build sustainable habits gradually.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="mb-3 text-rose-700">Step 3: Be Patient and Compassionate</h4>
              <p className="text-gray-700">
                Lifestyle changes take time to show benefits. Be kind to yourself on difficult days and celebrate small victories. Progress isn't always linear.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="mb-3 text-indigo-700">Step 4: Work with Healthcare Providers</h4>
              <p className="text-gray-700">
                Share your lifestyle plan with your doctor or specialist. They can provide personalized advice and ensure your approach complements any medical treatments.
              </p>
            </div>
          </div>
        </Card>

        <div className="mt-12 p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
          <p className="text-center text-gray-700">
            <strong className="text-purple-900">Remember:</strong> Every woman's experience with endometriosis is unique. What works for one person may not work for another. Listen to your body, be patient with yourself, and don't hesitate to adjust your approach as needed.
          </p>
        </div>
      </div>
    </section>
  );
}
