import { Heart } from 'lucide-react';
import heroImage from 'figma:asset/5d5856970a9c088bfe330445eff4bcbc4b8382d7.png';

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
          <Heart className="w-8 h-8 text-pink-600" />
        </div>
        <h1 className="mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          EndoWell
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Empowering women with knowledge, support, and practical guidance for living well with endometriosis
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#what-is"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
          >
            Learn More
          </a>
          <a 
            href="#feedback"
            className="px-8 py-3 bg-white text-pink-600 rounded-full hover:bg-pink-50 transition-all shadow-md border border-pink-200"
          >
            Share Your Story
          </a>
        </div>
      </div>
    </section>
  );
}