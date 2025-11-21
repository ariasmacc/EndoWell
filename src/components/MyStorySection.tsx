import { Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useState } from 'react';

export function MyStorySection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="my-story" className="py-20 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mb-6 shadow-lg">
            <Heart className="w-8 h-8 text-pink-600 fill-pink-600" />
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            My Journey with Endometriosis
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Hi everyone, I'm Aira Camille. I was diagnosed with Endometriosis at the age of 21, and I want to share my story with you.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-white/80 backdrop-blur-sm border-2 border-pink-100 shadow-xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700">
              <p>
                Let's go back to the beginning. I got my first period when I was 13, back in Junior High. Even then, my cycle was irregular—there were times I wouldn't get my period for three whole months. I thought it was normal, and honestly, I was too shy to open up to my family about it.
              </p>

              <p>
                For context, I was very active growing up. I played basketball throughout my five years in high school—morning practices, P.E. classes, and especially during intramurals. But when the pandemic hit and we went into quarantine, my active lifestyle completely stopped.
              </p>

              <p>
                Here's the thing: back then, I never really experienced dysmenorrhea. I was actually that girl who would tell her classmates, <em>"You're overreacting, it's not that painful!"</em> To me, a period was just a normal week of wearing pads/inserting cup (Yes, I'm a menstrual cup user), and that was it. But during the pandemic, everything changed.
              </p>

              {!isExpanded && (
                <div className="text-center py-6">
                  <Button
                    onClick={() => setIsExpanded(true)}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    <span className="mr-2">Read My Full Story</span>
                    <ChevronDown className="w-5 h-5 inline" />
                  </Button>
                </div>
              )}

              {isExpanded && (
                <>
                  <div className="space-y-6">
                    <div className="bg-rose-50 border-l-4 border-rose-400 p-6 rounded-r-lg">
                      <p className="text-rose-900">
                        Suddenly, I started feeling severe pelvic pain. At first, I disregarded it, thinking maybe it was just part of turning 18. But the pain wasn't normal. I'm talking about cold sweats, being paralyzed by agony, and lying in bed for days. Nothing worked except heavy painkillers.
                      </p>
                    </div>

                    <p>
                      By my first year of college, I would spend five days straight in bed—I couldn't even take a shower because of the pain. I struggled to use the bathroom, lost my appetite, and couldn't keep food down.
                    </p>

                    <p>
                      There were moments I genuinely felt like I was dying. I would vomit so much that I'd end up hugging the toilet bowl or falling asleep on the bathroom floor because I was too weak to stand up.
                    </p>

                    <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                      <p className="text-purple-900">
                        <strong>It all came to a head on August 18, 2024. I was rushed to the ER.</strong>
                      </p>
                    </div>

                    <p>
                      That day, despite the sun blazing outside, I was freezing. I was wearing thick blankets, jogging pants, a jacket, and a bonnet, but I was still shivering while sweating cold bullets. Hot compresses did nothing; my skin felt cold while the pain inside burned. I had vomited five times on an empty stomach (literally no food, no water). My mom eventually found me crawling down the stairs because I couldn't walk anymore.
                    </p>

                    <p>
                      When we got to the hospital, my heart broke for my mom. She had to fight with the staff because the attendants dismissed me, saying, <em>"It's just normal period pain, you don't need a doctor."</em> (Thinking about this situation that I literally encountered this kind of treatment especially as a woman makes me want to punch them in their face. They're just lucky that I'm too weak that day.) Meanwhile, I was being wheeled in, head hanging low, pale as a ghost, and drenched in sweat.
                    </p>

                    <div className="bg-pink-50 border-l-4 border-pink-400 p-6 rounded-r-lg">
                      <p className="text-pink-900">
                        Thankfully, an OB-GYN saw us amidst the commotion. She immediately took over, disregarded the dismissive comments from the staff, and gave me a pain reliever injection. She reassured my mom, and the guy pushing my wheelchair even apologized for how we were treated at the entrance. (As far as I can remember, this guy is a janitor and hopefully those women attendees should be ashamed because of what they've done.) I was out of it for a long time, but my mom told me the doctor kept checking on me until I woke up for tests and advised me to come back for a follow-up checkup to have an ultrasound test.
                      </p>
                    </div>

                    <p>
                      Fast forward, I came back to the hospital, took the test, and after the ultrasound, the reality hit: <strong>I had Endometriosis, and there was a cyst measuring 9cm.</strong>
                    </p>

                    <p>
                      The doctor explained that 9cm is huge. She warned me that if it didn't shrink, I might end up in the ER again or need expensive surgery. She also gently told me that with a cyst this size, there was a high chance I might struggle to have children later on. She prescribed me pills (Dienogest Vinca) to manage it.
                    </p>

                    <p>
                      Walking out of that hospital, I wanted to cry. I always thought I was healthy. The fear of taking pills and their side effects played on my mind, but I told myself, <em>"I can do this"</em>.
                    </p>

                    <p>
                      During a follow-up, surgery was suggested again because the pills weren't a guaranteed fix for a 9cm mass. I cried again—I didn't want surgery, not just because of the cost, but because the doctor said there was no guarantee the Endometriosis wouldn't come back.
                    </p>

                    <p>
                      After the diagnosis, I started connecting the dots. The constant bloating, the chin breakouts, the hair loss—it was all connected. So, I decided to take control.
                    </p>

                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-xl border-2 border-pink-200 my-8">
                      <h3 className="text-pink-900 mb-4">I did a complete lifestyle 180</h3>
                      <p className="mb-4">I was terrified of gaining weight from the pills, so I went on a strict diet.</p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h4 className="text-purple-900 mb-2">✅ My Routine:</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Every meal included blended apple and carrot juice</li>
                            <li>• Cut down on meat (especially pork) and stuck to vegetables</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-purple-900 mb-2">❌ What I Cut Out:</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Sweets, carbs, processed foods, fast food</li>
                            <li>• Coffee, milk, alcohol, and soft drinks</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-purple-900 mb-2">💪 The Focus:</h4>
                        <p className="text-gray-700">Low carb and low sugar (based on research I did in support groups).</p>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-purple-900 mb-2">🧘 Wellness:</h4>
                        <p className="text-gray-700">I started lifting weights, exercising, and prioritizing sleep. I even deactivated my main Facebook account to avoid stress and reduce screen time.</p>
                      </div>
                    </div>

                    <p>
                      For months, this was my life. When I started the pills, my period stopped completely (a known side effect), but my family didn't even know the extent of what I was going through. (I told them on a random day and they were all shocked HAHAHA—though, I explained to them that it was a side effect of my pills.) Physically, I changed a lot. I went from 54kg down to 44kg due to the strict "low carb" diet and exercise.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                      <p className="text-green-900">
                        <strong>Fast forward to a year later.</strong>
                      </p>
                    </div>

                    <p>
                      I went to a new OB-GYN. I told her my history, and she noted that the cyst was indeed huge for my age and that my weight loss was significant. I was so nervous getting scanned again, fearing the mass had grown.
                    </p>

                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-xl border-2 border-green-300 my-8 text-center">
                      <h3 className="text-green-900 mb-4">🎉 The Result?</h3>
                      <p className="text-xl text-green-800">
                        The doctor was shocked. My <strong>9cm cyst had shrunk to 5cm!</strong>
                      </p>
                    </div>

                    <p>
                      Although a new small cyst (3cm) appeared on the other ovary, the doctor said it was manageable. She told me to keep doing exactly what I was doing—continue the pills and my routine—and that surgery was no longer necessary since the risk of recurrence was high anyway.
                    </p>

                    <p>
                      I felt a massive wave of relief. I used to live in fear that the cyst would rupture and send me back to the ER. Sometimes I even missed my pills, but knowing that my hard work—the herbal remedies (Yes, my parents make me drink different teas like boiled moringa with ginger and lemongrass—it tastes like tinola; leaves of bitter melon and tamarind or serpentina because they're so bitter; garlic; and my favorite tea is sibukaw—but I'm not saying that these would help to shrink your cyst, it's just both of my parents believe in the healing of herbs and teas), the diet, the exercise—actually paid off makes me so happy.
                    </p>

                    <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-xl border-2 border-purple-300 my-8 text-center">
                      <p className="text-xl text-purple-900">
                        <strong>My Endometriosis isn't gone, but I am so proud of the progress.</strong>
                      </p>
                    </div>

                    <p className="text-xl text-center text-gray-800 py-6">
                      If you have Endometriosis, or know someone who does, I hope my story serves as an inspiration. It's a tough battle, but please, <strong>never lose hope</strong>. We can get through this. 💕
                    </p>
                  </div>

                  <div className="text-center pt-6">
                    <Button
                      onClick={() => setIsExpanded(false)}
                      variant="outline"
                      className="border-pink-300 text-pink-600 hover:bg-pink-50"
                    >
                      <ChevronUp className="w-5 h-5 mr-2" />
                      Show Less
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}