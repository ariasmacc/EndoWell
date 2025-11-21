import { Info, AlertTriangle, Microscope, Stethoscope, Pill, Activity } from 'lucide-react';
import { Card } from './ui/card';

export function WhatIsSection() {
  return (
    <section id="what-is" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
            <Info className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="mb-4 text-purple-900">What is Endometriosis?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Explanation */}
        <div className="mb-12">
          <Card className="p-8 md:p-10 border-2 border-purple-100 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Endometriosis is a <strong>chronic and often complex medical condition</strong> where tissue that is similar to the lining of the uterus, known as the endometrium, begins to grow outside of the womb in places it does not belong, such as on the ovaries, fallopian tubes, and the tissue lining the pelvis.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To understand why this causes so much pain, you have to imagine that this misplaced tissue acts exactly like the normal lining inside the uterus: it listens to your hormones, thickens, breaks down, and bleeds with every menstrual cycle. However, unlike a normal period where the blood flows out of the body, <strong>the blood from these misplaced tissues has absolutely nowhere to go.</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This internal bleeding becomes trapped, causing the surrounding tissues to become irritated and inflamed. Over time, this constant cycle of internal bleeding and inflammation leads to the formation of scar tissue and adhesions—sticky bands of tissue that can make organs bind together—as well as cysts, like the "chocolate cysts" found on ovaries. Essentially, <strong>the body is trying to heal internal wounds that reopen every single month</strong>, creating a hostile environment in the pelvis that results in severe pain, inflammation, and potential damage to the reproductive organs.
            </p>
          </Card>
        </div>

        {/* The Problem */}
        <div className="mb-12">
          <div className="bg-rose-50 border-l-4 border-rose-400 p-6 md:p-8 rounded-r-xl">
            <h3 className="text-rose-900 mb-4">⚠️ The Problem:</h3>
            <p className="text-gray-700 mb-4">
              When you have your period, that misplaced tissue "bleeds" just like your normal period does. But unlike your period blood which leaves your body, this blood has nowhere to go. It gets trapped inside, causing:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Inflammation</strong> (swelling)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Pain</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Scar tissue</strong> (cysts and sticky areas)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Common Symptoms - Red Flags */}
        <div className="mb-12">
          <h3 className="text-center mb-8 text-pink-900">⚠️ Common Symptoms (The "Red Flags")</h3>
          <p className="text-center text-lg text-gray-700 mb-8">
            It is <strong>not "just a bad period."</strong> If you experience these, it might be endometriosis:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-2 border-red-100 hover:border-red-300 transition-colors">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <h4 className="mb-3 text-red-900">Killer Cramps</h4>
              <p className="text-gray-700">
                Pain that stops you from doing daily tasks (like going to school/work) and doesn't go away with normal medicine.
              </p>
            </Card>

            <Card className="p-6 border-2 border-orange-100 hover:border-orange-300 transition-colors">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
              </div>
              <h4 className="mb-3 text-orange-900">Chronic Pelvic Pain</h4>
              <p className="text-gray-700">
                Pain in your lower tummy or back, even when you don't have your period.
              </p>
            </Card>

            <Card className="p-6 border-2 border-yellow-100 hover:border-yellow-300 transition-colors">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
              </div>
              <h4 className="mb-3 text-yellow-900">Bathroom Pain</h4>
              <p className="text-gray-700">
                It hurts to pee or poop, especially during your period.
              </p>
            </Card>

            <Card className="p-6 border-2 border-pink-100 hover:border-pink-300 transition-colors">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-pink-600" />
              </div>
              <h4 className="mb-3 text-pink-900">Painful Sex</h4>
              <p className="text-gray-700">
                Deep pain during or after intimacy.
              </p>
            </Card>

            <Card className="p-6 border-2 border-purple-100 hover:border-purple-300 transition-colors">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="mb-3 text-purple-900">Bloating</h4>
              <p className="text-gray-700">
                Often called "Endo Belly"—where you look pregnant or swollen, especially after eating or during your period.
              </p>
            </Card>

            <Card className="p-6 border-2 border-rose-100 hover:border-rose-300 transition-colors">
              <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
              </div>
              <h4 className="mb-3 text-rose-900">Heavy Bleeding</h4>
              <p className="text-gray-700">
                Soaking through pads/tampons very quickly.
              </p>
            </Card>
          </div>
        </div>

        {/* Why does it happen */}
        <div className="mb-12">
          <Card className="p-8 border-2 border-blue-100 bg-blue-50/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Microscope className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="mb-4 text-blue-900">❓ Why does it happen?</h3>
                <p className="text-gray-700 mb-4">
                  Doctors still don't know the exact cause (it is a big mystery in medicine), but they know a few things that play a role:
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="text-blue-900 mb-2">Estrogen</h4>
                <p className="text-gray-700">
                  This hormone feeds the endometriosis. It acts like "fertilizer" that makes the tissue grow.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="text-blue-900 mb-2">Genetics</h4>
                <p className="text-gray-700">
                  If your mom or sister has it, you are more likely to have it too.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="text-blue-900 mb-2">Retrograde Menstruation</h4>
                <p className="text-gray-700">
                  One theory is that during your period, some blood flows backward through the tubes and lands in the tummy area instead of leaving the body.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* How is it Diagnosed */}
        <div className="mb-12">
          <Card className="p-8 border-2 border-teal-100 bg-teal-50/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="mb-4 text-teal-900">🩺 How is it Diagnosed?</h3>
                <p className="text-gray-700 mb-4">
                  It is hard to see endometriosis from the outside, which is why many women are ignored or misdiagnosed for years (just like your experience!).
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-teal-200">
                <h4 className="text-teal-900 mb-2">Ultrasound</h4>
                <p className="text-gray-700">
                  Can see large cysts (like the 9cm one you had).
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-teal-200">
                <h4 className="text-teal-900 mb-2">MRI</h4>
                <p className="text-gray-700">
                  Gives a detailed picture of deeper tissues.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-teal-200">
                <h4 className="text-teal-900 mb-2">Laparoscopy (The Gold Standard)</h4>
                <p className="text-gray-700">
                  A minor surgery where a doctor puts a tiny camera in your tummy to actually see and confirm the endometriosis.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* How is it Treated */}
        <div>
          <Card className="p-8 border-2 border-green-100 bg-green-50/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Pill className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="mb-4 text-green-900">💊 How is it Treated?</h3>
                <p className="text-gray-700 mb-4">
                  There is currently <strong>no "cure"</strong> (meaning it can't be fixed 100% forever), but it can be managed very well.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="text-green-900 mb-2">Hormonal Medication (like Dienogest)</h4>
                <p className="text-gray-700">
                  This stops your period or lowers estrogen levels. It "starves" the endometriosis so it shrinks or stops growing.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="text-green-900 mb-2">Surgery</h4>
                <p className="text-gray-700">
                  Doctors cut out the cysts or scar tissue.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="text-green-900 mb-2">Lifestyle Changes</h4>
                <p className="text-gray-700">
                  Since endometriosis is an inflammatory disease, an anti-inflammatory diet (like what you did!) helps a lot. This means less sugar, less red meat, and more veggies.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
