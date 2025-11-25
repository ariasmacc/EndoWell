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
            <h3 className="text-rose-900 mb-4">The Problem:</h3>
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
          <h3 className="text-center mb-8 text-pink-900">Common Symptoms (The "Red Flags")</h3>
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
                <AlertTriangle className="w-5 h-5 text-purple-600" />
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
                <h3 className="mb-4 text-blue-900">Why does it happen?</h3>
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
              <div className="flex-1">
                <h3 className="mb-4 text-teal-900">How is it Diagnosed?</h3>
                <p className="text-gray-700 mb-6">
                  Diagnosing endometriosis is difficult because the tissue is inside your body and hard to see from the outside. Doctors use these three main tools to look for it.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-teal-200">
                <h4 className="text-teal-900 mb-3">1. Transvaginal Ultrasound</h4>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>What is it:</strong> This is not the kind of ultrasound where they just rub a gel on your tummy. For this test, the doctor covers a thin, wand-like device (called a transducer) with a plastic sheath and lubricating gel.
                  </p>
                  <p>
                    <strong>How it works:</strong> The wand is inserted about 2-3 inches into your vagina. It sends out sound waves to create pictures of your uterus and ovaries on a monitor.
                  </p>
                  <p>
                    <strong>What it feels like:</strong> It can feel like pressure or mild discomfort, similar to inserting a tampon or a speculum exam.
                  </p>
                  <p>
                    <strong>What it finds:</strong> It is best at finding large ovarian cysts (endometriomas). If you have big cysts, this machine will see them. However, it often cannot see small spots of endometriosis or flat scars.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-teal-200">
                <h4 className="text-teal-900 mb-3">2. MRI (Magnetic Resonance Imaging)</h4>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>What is it:</strong> This is a very large machine that looks like a giant donut or a long tube with a hole in the middle.
                  </p>
                  <p>
                    <strong>How it works:</strong> You lie down on a table that slides into the tube. You have to stay perfectly still while the machine makes loud tapping and thumping noises (you usually wear headphones). It uses magnets to take detailed slice-by-slice pictures of your insides.
                  </p>
                  <p>
                    <strong>What it finds:</strong> It gives a "map" of your pelvis. It is good at showing if endometriosis has grown deep into your bowel, bladder, or the ligaments behind your uterus. It helps the surgeon know what to expect before operating.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-teal-200">
                <h4 className="text-teal-900 mb-3">3. Laparoscopy (Keyhole Surgery)</h4>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>What is it:</strong> This is an actual surgery, not just a scan. You will be asleep (under general anesthesia) for this.
                  </p>
                  <p>
                    <strong>How it works:</strong> The doctor makes a small cut (incision) near your belly button and inserts a thin tube with a camera on the end. They fill your tummy with gas to inflate it so they can look around clearly.
                  </p>
                  <p>
                    <strong>What it finds:</strong> This is the only way to be 100% sure. The doctor looks directly at your organs with the camera. If they see endometriosis spots, they can cut them out or burn them off during the same surgery.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* How is it Treated */}
        <div className="mb-12">
          <Card className="p-8 border-2 border-green-100 bg-green-50/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Pill className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="mb-4 text-green-900">How is it Treated?</h3>
                <p className="text-gray-700 mb-6">
                  Currently, there is no absolute "cure" for endometriosis (meaning it cannot be fixed 100% forever for everyone). However, it can be managed very effectively to stop the pain and prevent it from getting worse.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h4 className="text-green-900 mb-3">1. Hormonal Medication (Suppression)</h4>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Common Types:</strong> Birth control pills, Progestins (like Dienogest), or GnRH agonists (injections).
                  </p>
                  <p>
                    <strong>How it works:</strong> Endometriosis feeds on the hormone estrogen. These medications work by lowering your estrogen levels or stopping your period altogether.
                  </p>
                  <p>
                    <strong>What it does to the disease:</strong> Think of it as "starving" the endometriosis. Without estrogen to fuel it, the active lesions and cysts stop bleeding, shrink, and become inactive.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h4 className="text-green-900 mb-3">2. Surgery (Laparoscopic Excision)</h4>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>What it is:</strong> The same "keyhole" surgery used for diagnosis is also used for treatment.
                  </p>
                  <p>
                    <strong>How it works:</strong> While the camera is inside, the surgeon uses specialized tools to carefully cut out (excise) the endometriosis implants, remove cysts (cystectomy), and untwist any organs stuck together by scar tissue.
                  </p>
                  <p>
                    <strong>Why it's done:</strong> This physically removes the disease from your body. It is often recommended if cysts are very large, if organs are damaged, or if medication alone isn't stopping the pain.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h4 className="text-green-900 mb-3">3. Lifestyle Changes (Anti-Inflammatory Approach)</h4>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>What it is:</strong> Changing your daily habits to lower inflammation in your whole body.
                  </p>
                  <p>
                    <strong>How it works:</strong> Endometriosis is an inflammatory disease. When you eat inflammatory foods (like sugar or red meat) or are highly stressed, your body creates chemicals that make your pain receptors more sensitive.
                  </p>
                  <p>
                    <strong>The Strategy:</strong> By eating an anti-inflammatory diet (more veggies, less processed food), exercising, and managing stress, you calm down your immune system. This doesn't "remove" the disease, but it significantly reduces the pain and bloating associated with it.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* My Survival Kit */}
        <div>
          <Card className="p-8 border-2 border-pink-100 bg-gradient-to-br from-pink-50/50 to-purple-50/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5 text-pink-600" />
              </div>
              <div className="flex-1">
                <h3 className="mb-4 text-pink-900">My Survival Kit: How I Manage the Pain</h3>
                <p className="text-gray-700 mb-6">
                  Living with Endometriosis means having a toolkit ready for when the flare-ups hit. Over the years, I've found a specific routine that helps me survive the worst days. Here is what I do:
                </p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white p-5 rounded-lg border border-pink-200">
                <h4 className="text-pink-900 mb-2">Intense Heat Therapy:</h4>
                <p className="text-gray-700">
                  I use a hot compress that is extremely hot sometimes I even use a glass bottle filled with boiling water wrapped in a cloth. Honestly, the water has to be scalding because the pain in my pelvis is so severe that I don't even feel the heat on my skin anymore; the cramps simply overpower everything else.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-pink-200">
                <h4 className="text-pink-900 mb-2">The "Hot-Cold" Rub:</h4>
                <p className="text-gray-700">
                  I apply a balm or oil containing Methyl Salicylate, Camphor, and Menthol. I usually rub this on my lower tummy and lower back right after taking a shower. It has this specific cooling effect that slowly turns into a deep, comforting heat over time, which really helps soothe the ache.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-pink-200">
                <h4 className="text-pink-900 mb-2">The Pillow Fortress:</h4>
                <p className="text-gray-700">
                  I always keep a lot of pillows around me. I use them to create a soft barrier, placing them firmly against my tummy or hugging them tight when the cramps come in waves.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-pink-200">
                <h4 className="text-pink-900 mb-2">Compression & Warmth:</h4>
                <p className="text-gray-700">
                  I wear fitted clothing that keeps my midsection warm. Sometimes, I even tie a cloth or band around my waist to apply pressure. That feeling of being "held" or compressed helps distract from the pain inside.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-pink-200">
                <h4 className="text-pink-900 mb-2">Legs Up the Wall:</h4>
                <p className="text-gray-700">
                  When I'm lying in bed, I scoot close to the wall and put my legs up (a yoga pose called Viparita Karani). This position helps relax my pelvic floor muscles and takes the pressure off my lower back.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-pink-200">
                <h4 className="text-pink-900 mb-2">Pain Medication:</h4>
                <p className="text-gray-700">
                  When natural remedies aren't enough, I rely on prescribed painkillers like Tramadol. (Other common options for Endo warriors include Mefenamic Acid, Naproxen, or Ibuprofen always ask your doctor what is safe for you!).
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-pink-200">
                <h4 className="text-pink-900 mb-2">Switching to Pads:</h4>
                <p className="text-gray-700">
                  Even though I am a menstrual cup user, I switch back to pads during my most painful flare-ups. When my body is that sensitive, I just need the most low-maintenance option possible.
                </p>
              </div>
            </div>
            
            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg">
              <p className="text-amber-900">
                <strong>Important Note:</strong> What you are about to read is what works for my body. Every woman's experience with Endometriosis is different. Please consult your doctor or OB-GYN before trying new pain management techniques or medications to make sure they are safe for you!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}