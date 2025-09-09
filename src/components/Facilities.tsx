import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Home, TreePine, Leaf, Package, Fish, Bug, TentTree } from "lucide-react";
import React from 'react'
import { div } from "framer-motion/client";

const Facilities = () => {
    return (
            <div className='container mx-auto p-6'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-500 mb-4 tracking-wider text-center'>mFarm Facilities & Activities</h1>
                <Tabs defaultValue="facilities" className="w-full flex justify-between">
                    <TabsList className="grid grid-cols-5 gap-6 mb-6">
                        <TabsTrigger value="facilities" className="bg-gray-300 cursor-pointer">
                            <Home className="w-4 h-4 mr-2 hidden md:block" />
                            Facilities
                        </TabsTrigger>
                        <TabsTrigger value="cultivation" className="bg-gray-300 cursor-pointer">
                            <TreePine className="w-4 h-4 mr-2 hidden md:block" />
                            Cultivation
                        </TabsTrigger>
                        <TabsTrigger value="farming" className="bg-gray-300 cursor-pointer">
                            <Leaf className="w-4 h-4 mr-2 hidden md:block" />
                            Farming
                        </TabsTrigger>
                        <TabsTrigger value="packing" className="bg-gray-300 cursor-pointer">
                            <Package className="w-4 h-4 mr-2 hidden md:block" />
                            Packing
                        </TabsTrigger>
                        <TabsTrigger value="tourism" className="bg-gray-300 cursor-pointer">
                            <TentTree className="w-4 h-4 mr-2 hidden md:block" />
                            Tourism
                        </TabsTrigger>
                    </TabsList>

                    {/* Facilities */}
                    <TabsContent value="facilities">
                        <div>
                            <Card>
                                <CardHeader><CardTitle>🏡 Residence</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="list-disc ml-5 space-y-1">
                                        <li>Main House: Two floors (675 sq. ft. each), 2 bedrooms per floor, hall & kitchen</li>
                                        <li>Front garden with buffalo grass, groundnut plants & fruit trees</li>
                                        <li>Small House: Used as packing center</li>
                                        <li>Labour Quarters: Neat and tidy accommodation</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle>🛣 Infrastructure</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="list-disc ml-5 space-y-1">
                                        <li>Fully tarred approach road</li>
                                        <li>Tiled road up to residential block</li>
                                        <li>Internal roads across 6 acres</li>
                                        <li>Water conservation: terraced levels & rock pond system</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    {/* Cultivation */}
                    <TabsContent value="cultivation">
                        <Card>
                            <CardHeader><CardTitle>🌴 Cultivation</CardTitle></CardHeader>
                            <CardContent>
                                <p className="mb-3">The land is fully cultivated with a wide range of crops:</p>
                                <ul className="grid md:grid-cols-2 list-disc ml-5 gap-y-1">
                                    <li>40 Coconut trees</li>
                                    <li>175 Jackfruit trees</li>
                                    <li>100 Coffee plants</li>
                                    <li>Banana (actively promoted)</li>
                                    <li>Rambutan</li>
                                    <li>Mangosteen</li>
                                    <li>Black Pepper (bush & climbers)</li>
                                    <li>Various fruit trees</li>
                                </ul>
                                <Separator className="my-4" />
                                <p className="text-green-700 font-medium">
                                    👉 Focus on bio-fertilizers instead of chemicals, making cultivation eco-friendly.
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Farming Activities */}
                    <TabsContent value="farming">
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader><CardTitle>🐝 Bee Farming</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="list-disc ml-5 space-y-1">
                                        <li>30 bee boxes</li>
                                        <li>Honey marketed locally & exported</li>
                                        <li>Plans for Honey Club with local farmers</li>
                                        <li>Honey is a signature product</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader><CardTitle>🐓 Poultry Farming</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="list-disc ml-5 space-y-1">
                                        <li>38 BO3 chickens</li>
                                        <li>Rare black chickens reared</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader><CardTitle>🐄 Dairy Farming</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="list-disc ml-5 space-y-1">
                                        <li>Currently 2 native Vechoor cows</li>
                                        <li>Plans to add more cows & buffalos</li>
                                        <li>14 HF cows reared in the past</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader><CardTitle>🐟 Fish Farming</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="list-disc ml-5 space-y-1">
                                        <li>Artificial pond with 5.5 lakh liter capacity</li>
                                        <li>Supports irrigation during summer</li>
                                        <li>Fish: Katla, Tilapia, planned Karimeen</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Packing Center */}
                    <TabsContent value="packing">
                        <Card>
                            <CardHeader><CardTitle>📦 M. FARM Packing Center</CardTitle></CardHeader>
                            <CardContent>
                                <p className="mb-3">Natural & traditional products are packed and marketed:</p>
                                <ul className="list-disc ml-5 space-y-1">
                                    <li>Honey</li>
                                    <li>Pepper</li>
                                    <li>Cardamom</li>
                                    <li>Dried Tapioca (boiled before drying)</li>
                                </ul>
                                <Separator className="my-4" />
                                <p className="font-medium">Upcoming Products:</p>
                                <ul className="list-disc ml-5 space-y-1">
                                    <li>Aval Vilayichathu (sweetened beaten rice)</li>
                                    <li>Other traditional local foods</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Tourism */}
                    <TabsContent value="tourism">
                        <Card>
                            <CardHeader><CardTitle>🌳 Farm Tourism </CardTitle></CardHeader>
                            <CardContent>
                                <ul className="list-disc ml-5 space-y-1">
                                    <li>Planned Home Stay facilities</li>
                                    <li>Nature walks & farming experience</li>
                                    <li>Farm-fresh food tasting</li>
                                    <li>A place of idyllic beauty, peace & harmony</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
    )
}

export default Facilities
