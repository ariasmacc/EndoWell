import { Play, Heart, Smile } from 'lucide-react';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import exerciseImage from 'figma:asset/2b0a876f2afc47fa337ed596e9d6cbee6fe274b2.png';

export function ExerciseSection() {
  const yogaVideos = [
    {
      title: "Gentle Yoga for Endometriosis",
      instructor: "Yoga with Adriene",
      videoId: "4JaCcp39iVI",
      duration: "30 min",
      description: "Slow, mindful stretches designed to release pelvic tension and calm inflammation. Perfect for flare-up days when you need gentle movement."
    },
    {
      title: "Restorative Yoga for Menstrual Pain",
      instructor: "Yoga Expert",
      videoId: "eZdwBl1yu14",
      duration: "25 min",
      description: "Deeply relaxing poses that open the hips and lower back. Helps ease cramping and promotes better circulation to the pelvic area."
    },
    {
      title: "Yoga for Pelvic Health",
      instructor: "Wellness Coach",
      videoId: "2X78NWuRfJU",
      duration: "20 min",
      description: "Gentle movements focused on strengthening and relaxing the pelvic floor. Supports reproductive health and reduces discomfort."
    }
  ];

  const exerciseVideos = [
    {
      title: "Low Impact Cardio Workout",
      instructor: "Fitness Instructor",
      videoId: "ptC6gK3QbLg",
      duration: "20 min",
      description: "Gentle cardiovascular exercises that get your blood flowing without putting stress on your pelvis. Safe for managing endometriosis symptoms."
    },
    {
      title: "Beginner-Friendly Strength Training",
      instructor: "Fitness Coach",
      videoId: "agvdkRc_img",
      duration: "30 min",
      description: "Build core stability and overall strength with exercises modified for endometriosis. Helps improve energy levels and reduces fatigue."
    },
    {
      title: "Gentle Walking Workout",
      instructor: "Walk at Home",
      videoId: "rosIwQajcaA",
      duration: "15 min",
      description: "Indoor walking routine that's easy on your body. Perfect for days when you want to stay active but need something very gentle."
    }
  ];

  const exerciseTips = [
    {
      icon: Heart,
      title: "Listen to Your Body",
      description: "Pay attention to pain signals and adjust intensity accordingly. It's okay to take breaks or modify exercises."
    },
    {
      icon: Smile,
      title: "Start Slowly",
      description: "Begin with gentle activities and gradually increase duration and intensity as your body adapts."
    },
    {
      icon: Play,
      title: "Consistency Over Intensity",
      description: "Regular, moderate exercise is more beneficial than occasional intense workouts for managing symptoms."
    }
  ];

  return (
    <section id="exercise" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-purple-900">Exercise & Yoga</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Gentle movement and yoga can help reduce pain, improve flexibility, and boost overall well-being
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="mb-12">
          <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
            <img 
              src={exerciseImage}
              alt="Woman exercising"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {exerciseTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card key={index} className="p-6 border-2 border-purple-100 hover:border-purple-300 transition-all text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="mb-3">{tip.title}</h3>
                <p className="text-gray-700">{tip.description}</p>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="yoga" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="yoga">Yoga Videos</TabsTrigger>
            <TabsTrigger value="exercise">Exercise Videos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="yoga">
            <div className="grid md:grid-cols-3 gap-6">
              {yogaVideos.map((video, index) => (
                <Card key={index} className="overflow-hidden border-2 border-pink-100 hover:border-pink-300 transition-all group">
                  <div className="relative aspect-video bg-gray-200 overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs">
                        {video.duration}
                      </span>
                    </div>
                    <h3 className="mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-purple-600 mb-2">{video.instructor}</p>
                    <p className="text-sm text-gray-700">{video.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="exercise">
            <div className="grid md:grid-cols-3 gap-6">
              {exerciseVideos.map((video, index) => (
                <Card key={index} className="overflow-hidden border-2 border-purple-100 hover:border-purple-300 transition-all group">
                  <div className="relative aspect-video bg-gray-200 overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                        {video.duration}
                      </span>
                    </div>
                    <h3 className="mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-purple-600 mb-2">{video.instructor}</p>
                    <p className="text-sm text-gray-700">{video.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card className="p-8 bg-white/80 backdrop-blur border-2 border-purple-200">
          <h3 className="mb-4 text-purple-900">Benefits of Regular Exercise</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="mb-3 text-pink-700">Physical Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Reduces inflammation throughout the body</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Improves circulation and oxygen flow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Releases endorphins for natural pain relief</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>Maintains healthy weight</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-purple-700">Mental & Emotional Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Reduces stress and anxiety</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Improves mood and emotional well-being</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Enhances sleep quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Builds confidence and body awareness</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}