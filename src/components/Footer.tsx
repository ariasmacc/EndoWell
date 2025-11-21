import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6" />
              <span className="font-semibold">EndoWell</span>
            </div>
            <p className="text-purple-100 text-sm">
              Empowering women with knowledge and support for managing endometriosis through lifestyle, nutrition, and holistic care.
            </p>
          </div>

          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-purple-100">
              <li><a href="#what-is" className="hover:text-white transition-colors">What is Endometriosis</a></li>
              <li><a href="#causes" className="hover:text-white transition-colors">Causes & Risk Factors</a></li>
              <li><a href="#diet" className="hover:text-white transition-colors">Diet & Nutrition</a></li>
              <li><a href="#exercise" className="hover:text-white transition-colors">Exercise & Yoga</a></li>
              <li><a href="#lifestyle" className="hover:text-white transition-colors">Lifestyle Tips</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Important Notice</h3>
            <p className="text-purple-100 text-sm">
              This website provides general information and is not a substitute for professional medical advice. Always consult with qualified healthcare providers for diagnosis and treatment.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-700 text-center text-sm text-purple-200">
          <p>© 2025 EndoWell. Created with care for the endometriosis community.</p>
          <p className="mt-2">All medical information should be verified with healthcare professionals.</p>
        </div>
      </div>
    </footer>
  );
}