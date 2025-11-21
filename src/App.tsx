import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MyStorySection } from './components/MyStorySection';
import { WhatIsSection } from './components/WhatIsSection';
import { DietSection } from './components/DietSection';
import { ExerciseSection } from './components/ExerciseSection';
import { LifestyleSection } from './components/LifestyleSection';
import { FeedbackSection } from './components/FeedbackSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <MyStorySection />
        <WhatIsSection />
        <DietSection />
        <ExerciseSection />
        <LifestyleSection />
        <FeedbackSection />
      </main>
      <Footer />
    </div>
  );
}