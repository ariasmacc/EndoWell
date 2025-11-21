import { Leaf, Fish, Apple, Sparkles, X, AlertTriangle, Utensils, ShoppingCart, Shield } from 'lucide-react';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import dietImage from 'figma:asset/3fac0e18fab1a564bf2013b983fb59483ff8ac8c.png';

export function DietSection() {
  return (
    <section id="diet" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-purple-900">Nutrition & Diet Plan</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A balanced, anti-inflammatory diet can help manage endometriosis symptoms and improve overall well-being
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="mb-12">
          <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
            <img 
              src={dietImage}
              alt="Healthy diet foods"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Foods to Embrace and Limit Tabs */}
        <Tabs defaultValue="embrace" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="embrace">🟢 Foods to Embrace</TabsTrigger>
            <TabsTrigger value="limit">🔴 Foods to Limit</TabsTrigger>
          </TabsList>
          
          {/* Foods to Embrace */}
          <TabsContent value="embrace">
            <div className="mb-8">
              <Card className="p-6 bg-green-50 border-2 border-green-200 mb-8">
                <p className="text-lg text-gray-700">
                  These foods act as <strong>natural medicine</strong>. They help your liver flush out excess estrogen and fight the inflammation that causes pain.
                </p>
              </Card>

              <div className="space-y-8">
                {/* 1. Fiber-Rich Vegetables */}
                <Card className="p-6 border-2 border-green-100 hover:border-green-300 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-green-900">1. Fiber-Rich Vegetables (The "Brooms" of the Body)</h3>
                      <p className="text-gray-700 mb-3">
                        Fiber acts like a broom that sweeps excess estrogen out of your body so it doesn't get recycled.
                      </p>
                      <p className="text-sm text-green-700 mb-3">
                        <strong>Why:</strong> Keeps your digestion moving (helps with the "Endo Belly").
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-green-200">
                        <h4 className="text-sm text-green-900 mb-2">What to eat:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">•</span>
                            <span><strong>Cruciferous Veggies:</strong> Broccoli, Cauliflower, Cabbage (Repolyo).</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">•</span>
                            <span><strong>Leafy Greens:</strong> Malunggay, Kangkong, Spinach, Pechay.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">•</span>
                            <span><strong>Root Crops:</strong> Sweet Potato (Kamote), Carrots, Cassava.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 2. Omega-3 Fatty Acids */}
                <Card className="p-6 border-2 border-blue-100 hover:border-blue-300 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Fish className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-blue-900">2. Omega-3 Fatty Acids (Natural Painkillers)</h3>
                      <p className="text-sm text-blue-700 mb-3">
                        <strong>Why:</strong> These healthy fats fight the chemicals (prostaglandins) that cause severe cramping.
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-blue-200">
                        <h4 className="text-sm text-blue-900 mb-2">What to eat:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">•</span>
                            <span><strong>Fish:</strong> Bangus (Milkfish), Tawilis, Tamban/Sardines (Fresh), Tuna (avoid the very big ones).</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">•</span>
                            <span><strong>Plant Sources:</strong> Chia seeds, Flax seeds, Walnuts, Avocado.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 3. Antioxidant-Rich Fruits */}
                <Card className="p-6 border-2 border-purple-100 hover:border-purple-300 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Apple className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-purple-900">3. Antioxidant-Rich Fruits</h3>
                      <p className="text-sm text-purple-700 mb-3">
                        <strong>Why:</strong> They reduce oxidative stress in the pelvis.
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-purple-200">
                        <h4 className="text-sm text-purple-900 mb-2">What to eat:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600">•</span>
                            <span><strong>Berries:</strong> Strawberries, Blueberries (if available).</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600">•</span>
                            <span><strong>Local Fruits:</strong> Papaya, Pineapple (contains Bromelain which is a natural pain reliever), Guava (Bayabas - high in Vitamin C).</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 4. Iron and Magnesium Rich Foods */}
                <Card className="p-6 border-2 border-pink-100 hover:border-pink-300 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-pink-900">4. Iron and Magnesium Rich Foods</h3>
                      <p className="text-sm text-pink-700 mb-3">
                        <strong>Why:</strong> You lose a lot of blood during heavy periods (iron) and magnesium helps relax the uterus muscles to stop cramping.
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-pink-200">
                        <h4 className="text-sm text-pink-900 mb-2">What to eat:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-pink-600">•</span>
                            <span><strong>Iron:</strong> Monggo (Mung beans), Tofu, dark leafy greens.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-pink-600">•</span>
                            <span><strong>Magnesium:</strong> Dark Chocolate (70% cocoa or higher), Banana, Cashews (Kasuy), Pumpkin seeds.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 5. Anti-Inflammatory Spices */}
                <Card className="p-6 border-2 border-orange-100 hover:border-orange-300 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-orange-900">5. Anti-Inflammatory Spices</h3>
                      <p className="text-sm text-orange-700 mb-3">
                        <strong>Why:</strong> These are powerful natural antibiotics and pain relievers.
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-orange-200">
                        <h4 className="text-sm text-orange-900 mb-2">What to use:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-orange-600">•</span>
                            <span><strong>Turmeric (Luyang Dilaw):</strong> Excellent for swelling.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-orange-600">•</span>
                            <span><strong>Ginger (Luya):</strong> Great for nausea and soothing the stomach.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-orange-600">•</span>
                            <span><strong>Garlic and Onion:</strong> Immune boosters.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Foods to Limit */}
          <TabsContent value="limit">
            <div className="mb-8">
              <Card className="p-6 bg-red-50 border-2 border-red-200 mb-8">
                <p className="text-lg text-gray-700">
                  These foods tend to trigger inflammation, increase estrogen, or upset the gut, making pain worse.
                </p>
              </Card>

              <div className="space-y-6">
                {/* 1. Trans Fats and Processed Oils */}
                <Card className="p-6 border-2 border-red-100 hover:border-red-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <X className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-red-900">1. Trans Fats and Processed Oils</h3>
                      <p className="text-sm text-red-700 mb-3">
                        <strong>Why:</strong> These are "inflammatory bombs." They make pain signals stronger.
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-red-200">
                        <h4 className="text-sm text-red-900 mb-2">What to limit:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-red-600">•</span>
                            <span>Fast food (fries, burgers).</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600">•</span>
                            <span>Deep-fried street food (Fishball, Kikiam, Kwek-kwek).</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600">•</span>
                            <span>Margarine and vegetable shortening.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600">•</span>
                            <span>Junk food (Chicharon, chips).</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 2. Red Meat */}
                <Card className="p-6 border-2 border-orange-100 hover:border-orange-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <X className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-orange-900">2. Red Meat</h3>
                      <p className="text-sm text-orange-700 mb-3">
                        <strong>Why:</strong> Some studies show red meat can increase prostaglandin production (pain) and estrogen levels.
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-orange-200">
                        <h4 className="text-sm text-orange-900 mb-2">What to limit:</h4>
                        <p className="text-gray-700 mb-2">Pork and Beef (especially fatty parts like Lechon or Liempo).</p>
                        <p className="text-sm text-green-700"><strong>Alternative:</strong> Stick to Chicken and Fish.</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 3. Refined Sugar and White Carbs */}
                <Card className="p-6 border-2 border-yellow-100 hover:border-yellow-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <X className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-yellow-900">3. Refined Sugar and White Carbs</h3>
                      <p className="text-sm text-yellow-700 mb-3">
                        <strong>Why:</strong> Sugar spikes your insulin. High insulin can trigger hormone imbalances and inflammation.
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-yellow-200">
                        <h4 className="text-sm text-yellow-900 mb-2">What to limit:</h4>
                        <ul className="space-y-2 text-gray-700 mb-3">
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-600">•</span>
                            <span>White bread (Pandesal), white pasta.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-600">•</span>
                            <span>Pastries, cakes, donuts.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-600">•</span>
                            <span>Soft drinks, milk tea, commercial fruit juices.</span>
                          </li>
                        </ul>
                        <p className="text-sm text-green-700"><strong>Alternative:</strong> Brown rice, Red rice, or Adlai.</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 4. Caffeine and Alcohol */}
                <Card className="p-6 border-2 border-purple-100 hover:border-purple-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <X className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-purple-900">4. Caffeine and Alcohol</h3>
                      <p className="text-sm text-purple-700 mb-3">
                        <strong>Why:</strong> Caffeine can increase estrogen levels in some women and constrict blood vessels (worsening cramps). Alcohol taxes the liver, making it harder for the liver to clean out old hormones.
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-purple-200">
                        <h4 className="text-sm text-purple-900 mb-2">What to limit:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600">•</span>
                            <span>Coffee (try to limit to 1 cup or switch to decaf/tea).</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600">•</span>
                            <span>Beer and hard liquor.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 5. Gluten */}
                <Card className="p-6 border-2 border-rose-100 hover:border-rose-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-rose-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-rose-900">5. Gluten (Optional/Observation-based)</h3>
                      <p className="text-sm text-rose-700 mb-3">
                        <strong>Why:</strong> Many women with Endo also have "Endo Belly" (bloating). Gluten (found in wheat) is a common trigger for this bloating.
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-rose-200">
                        <p className="text-gray-700">
                          <strong>What to try:</strong> Observe how you feel after eating pasta or bread. If you feel bloated, try cutting it out.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Simple Rule of Thumb */}
        <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Utensils className="w-8 h-8 text-purple-600" />
            <h3 className="text-center text-purple-900">💡 A Simple Rule of Thumb</h3>
          </div>
          <p className="text-center text-gray-700 mb-6">
            Imagine your plate is divided into four parts:
          </p>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <Card className="p-4 bg-white border-2 border-green-200 text-center">
              <div className="mb-2">
                <span className="text-3xl">🥗</span>
              </div>
              <h4 className="text-green-900 mb-2">1/2 of the plate:</h4>
              <p className="text-sm text-gray-700">Vegetables (Greens, Broccoli, Salad)</p>
            </Card>
            <Card className="p-4 bg-white border-2 border-blue-200 text-center">
              <div className="mb-2">
                <span className="text-3xl">🐟</span>
              </div>
              <h4 className="text-blue-900 mb-2">1/4 of the plate:</h4>
              <p className="text-sm text-gray-700">Protein (Fish, Chicken, Tofu)</p>
            </Card>
            <Card className="p-4 bg-white border-2 border-orange-200 text-center">
              <div className="mb-2">
                <span className="text-3xl">🍠</span>
              </div>
              <h4 className="text-orange-900 mb-2">1/4 of the plate:</h4>
              <p className="text-sm text-gray-700">Healthy Carb (Red Rice, Kamote)</p>
            </Card>
            <Card className="p-4 bg-white border-2 border-teal-200 text-center">
              <div className="mb-2">
                <span className="text-3xl">🫖</span>
              </div>
              <h4 className="text-teal-900 mb-2">Drink:</h4>
              <p className="text-sm text-gray-700">Water or Ginger tea</p>
            </Card>
          </div>
        </Card>

        {/* Endocrine Disruptors Section */}
        <div className="space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="mb-2 text-red-900">Endocrine Disruptors to Avoid</h3>
            <p className="text-gray-700">Suggested by OB-GYN: These introduce fake hormones into your body</p>
          </div>

          {/* 1. THE "AVOID" LIST */}
          <Card className="p-8 bg-red-50 border-2 border-red-200">
            <h3 className="mb-6 text-red-900">1. THE "AVOID" LIST</h3>
            <p className="text-gray-700 mb-6">
              These are the biggest culprits in daily routines that introduce fake hormones into your body.
            </p>

            <div className="space-y-6">
              {/* A. Hot Food in Plastic */}
              <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                <h4 className="text-red-900 mb-3">A. The "Hot Food in Plastic" Habit (Major Rule!)</h4>
                <p className="text-sm text-gray-700 mb-4">
                  <strong>Heat + Plastic = Leaking Chemicals (BPA/Phthalates) into your food.</strong>
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Buying food in plastic bags:</strong> Never accept hot soup or porridge poured directly into a thin plastic bag. Bring your own food container or ask them to put it in a paper cup.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Microwaving plastic containers:</strong> Even if it says "microwave safe," avoid it. Use glass or ceramic plates/bowls to heat your food.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Plastic water bottles in the sun:</strong> Don't drink bottled water that has been sitting in a hot car or direct sunlight.</span>
                  </li>
                </ul>
              </div>

              {/* B. High-Mercury Fish */}
              <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                <h4 className="text-red-900 mb-3">B. High-Mercury Fish</h4>
                <p className="text-sm text-gray-700 mb-4">
                  Mercury acts as a disruptor. In general, the bigger the fish, the higher the mercury content.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Avoid:</strong> Blue Marlin, huge Tuna, and large Grouper (Lapu-Lapu).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Limit:</strong> Canned Tuna (if you eat it, choose "Light" tuna over Albacore, but fresh is always better).</span>
                  </li>
                </ul>
              </div>

              {/* C. Canned & Processed Foods */}
              <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                <h4 className="text-red-900 mb-3">C. Canned & Processed Foods</h4>
                <p className="text-sm text-gray-700 mb-4">
                  The lining of tin cans often contains BPA (Bisphenol-A).
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Avoid:</strong> Canned sardines, corned beef, meat loaf, and spam.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Avoid:</strong> Processed meats like Hotdogs, Cured Pork (Tocino), and Sausages (Longganisa). These often contain nitrates and preservatives that can interfere with your hormones.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* 2. THE "ALLOWED" LIST */}
          <Card className="p-8 bg-green-50 border-2 border-green-200">
            <h3 className="mb-6 text-green-900">✅ 2. THE "ALLOWED" LIST (Eat These)</h3>

            <div className="space-y-6">
              {/* A. Safe Local Fish */}
              <div className="bg-white p-6 rounded-lg border-2 border-green-200">
                <h4 className="text-green-900 mb-3">A. Safe Local Fish (Small is Safe)</h4>
                <p className="text-sm text-gray-700 mb-4">
                  Small fish live shorter lives, so they don't accumulate as many toxins.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>✅ Safe to eat:</strong> Anchovies (Dilis), Tilapia, Milkfish (Bangus), Mackerel (Galunggong - smaller ones are safer), Catfish (Hito), Squid, and Shrimp.
                  </p>
                </div>
              </div>

              {/* B. Clean Fruits & Veggies */}
              <div className="bg-white p-6 rounded-lg border-2 border-green-200">
                <h4 className="text-green-900 mb-3">B. The "Clean" Fruits & Veggies (Low Pesticide)</h4>
                <p className="text-sm text-gray-700 mb-4">
                  Pesticides are strong hormone disruptors. If you can't buy organic (which is expensive), choose fruits with thick skins that you peel off.
                </p>
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>✅ Safe choices:</strong> Avocado, Pineapple, Papaya, Banana, Mango, Sweet Corn, and Sweet Potato (Kamote).
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>✅ Cruciferous Veggies:</strong> Cabbage (Repolyo), Broccoli, Cauliflower.
                    </p>
                    <p className="text-sm text-green-700 mt-2">
                      <strong>Note:</strong> These are special because they actually help your liver "flush out" excess estrogen!
                    </p>
                  </div>
                </div>
              </div>

              {/* C. Safer Carbs */}
              <div className="bg-white p-6 rounded-lg border-2 border-green-200">
                <h4 className="text-green-900 mb-3">C. Safer Carbs</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✅</span>
                    <span><strong>Rice:</strong> White or Brown rice is generally safe, but wash it very thoroughly before cooking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✅</span>
                    <span><strong>Root Crops:</strong> Sweet Potato and Cassava are great nutritious alternatives to processed bread.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* 3. PRACTICAL MARKET TIPS */}
          <Card className="p-8 bg-blue-50 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingCart className="w-8 h-8 text-blue-600" />
              <h3 className="text-blue-900">🛒 3. PRACTICAL MARKET TIPS</h3>
            </div>
            <p className="text-gray-700 mb-6">
              You don't need to be wealthy to follow this diet; you just need to be smart with preparation.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
                <h4 className="text-blue-900 mb-3">The "Baking Soda" Wash:</h4>
                <p className="text-gray-700">
                  Since we often buy vegetables from the open market and don't know if they were sprayed with pesticides, soak your leafy greens (like bok choy or water spinach) in water mixed with 1 teaspoon of Baking Soda (or vinegar) for 10-15 minutes. This removes a significant amount of chemical residue.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
                <h4 className="text-blue-900 mb-3">Glass over Plastic:</h4>
                <p className="text-gray-700">
                  Store your leftovers in the refrigerator using glass containers or old glass jars instead of plastic containers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
                <h4 className="text-blue-900 mb-3">Personal Care:</h4>
                <p className="text-gray-700 mb-3">
                  Your skin absorbs chemicals too. Many lotions and shampoos contain "Parabens" and "Phthalates" (artificial fragrance).
                </p>
                <p className="text-sm text-blue-700">
                  <strong>Tip:</strong> Look for products labeled "Paraben-Free." Avoid products with very strong artificial scents.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}