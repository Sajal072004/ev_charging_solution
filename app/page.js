// app/page.jsx
"use client";

import { useRef } from "react";
import { 
  Battery, 
  Clock, 
  MapPin, 
  CalendarCheck, 
  CheckCircle, 
  Navigation2, 
  BarChart3, 
  ChevronDown,
  Users,
  Phone,
  Search,
  ZapIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  const featuresRef = useRef(null);
  const solutionsRef = useRef(null);
  
  const scrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2">
            <ZapIcon size={28} className="text-emerald-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">EvGo</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo(featuresRef)} className="text-slate-600 hover:text-emerald-600 transition-colors">Features</button>
            <button onClick={() => scrollTo(solutionsRef)} className="text-slate-600 hover:text-emerald-600 transition-colors">Solutions</button>
            <a href="#" className="text-slate-600 hover:text-emerald-600 transition-colors">For Operators</a>
            <a href="#" className="text-slate-600 hover:text-emerald-600 transition-colors">About</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:flex">Log in</Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <Badge className="mb-4 bg-emerald-100 text-emerald-600 hover:bg-emerald-200">Reimagining EV Charging</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Seamless EV Charging Experience for Everyone
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl">
              Find, reserve, and navigate to compatible charging stations in real-time, eliminating the frustration of EV charging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                Download App
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                Learn More <ChevronDown size={16} />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className=" rounded-2xl">
              <img
                src="/ev_charging.jpg" 
                
                alt="EV Charging App Interface" 
                className="w-[60%] h-[60%] rounded-lg shadow-md"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-sm font-medium">Active Stations: 1,542</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The EV Charging Challenge</h2>
            <p className="text-slate-300 mb-8">
              As electric vehicle adoption increases, the current charging infrastructure 
              is struggling to keep up. EV users face difficulties locating available stations, 
              deal with long wait times, and encounter compatibility issues between vehicles and chargers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <MapPin className="h-8 w-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Finding Stations</h3>
                <p className="text-slate-300 text-sm">Difficulty locating available charging stations in convenient locations</p>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <Clock className="h-8 w-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Wait Times</h3>
                <p className="text-slate-300 text-sm">Unpredictable and often lengthy waiting periods at charging stations</p>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <CheckCircle className="h-8 w-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Compatibility</h3>
                <p className="text-slate-300 text-sm">Confusing compatibility between different vehicle models and charging stations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section ref={solutionsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-600 hover:bg-emerald-200">Our Solution</Badge>
            <h2 className="text-3xl font-bold text-slate-800">Comprehensive EV Charging Platform</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              We've developed a user-friendly digital and IoT-based solution that addresses the key challenges faced by EV users.
            </p>
          </div>

          <Tabs defaultValue="realtime" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="realtime">Real-Time Tracking</TabsTrigger>
              <TabsTrigger value="scheduling">Smart Scheduling</TabsTrigger>
              <TabsTrigger value="compatibility">Compatibility Check</TabsTrigger>
              <TabsTrigger value="navigation">Smart Navigation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="realtime" className="mt-6">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-slate-800">Live Availability Tracking</h3>
                  <p className="text-slate-600 mb-6">
                    Our platform provides real-time information on charging station availability, 
                    eliminating the frustration of arriving at occupied stations. See exactly which 
                    chargers are free, in use, or under maintenance before you arrive.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-emerald-100 p-1 rounded">
                        <MapPin className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-medium">Map-based visualization</span> of all nearby charging stations
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-emerald-100 p-1 rounded">
                        <Battery className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-medium">Live status updates</span> showing available, occupied, and out-of-service chargers
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-emerald-100 p-1 rounded">
                        <Clock className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-medium">Wait time estimates</span> for occupied chargers based on current usage
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-2/3 bg-slate-50 p-2 ml-12 rounded-xl shadow-sm">
                  <img 
                    src="/ev_maps.jpg" 
                    alt="Real-time tracking interface"
                    className="w-[150%] h-auto rounded-lg shadow border border-slate-200"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="scheduling" className="mt-6">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-slate-800">Smart Scheduling System</h3>
                  <p className="text-slate-600 mb-6">
                    Schedule your charging sessions in advance to ensure a charger is ready when you arrive. 
                    Our smart queue management system optimizes usage patterns and reduces congestion at popular stations.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-emerald-100 p-1 rounded">
                        <CalendarCheck className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-medium">Reserve charging slots</span> up to 7 days in advance
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-emerald-100 p-1 rounded">
                        <Clock className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-medium">Queue management</span> with notifications when your slot is approaching
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-emerald-100 p-1 rounded">
                        <BarChart3 className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-medium">Usage analytics</span> showing optimal charging times with lower wait periods
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 bg-slate-50 p-6 rounded-xl shadow-sm">
                  <img 
                    src="/ev_scheduling.jpg" 
                    alt="Smart scheduling interface" 
                    className="w-full h-auto rounded-lg shadow border border-slate-200"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="compatibility" className="mt-6">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-slate-800">Compatibility Verification</h3>
                  <p className="text-slate-600 mb-6">
                    Never arrive at an incompatible charging station again. Our system 
                    automatically matches your vehicle with compatible chargers, saving you 
                    time and preventing frustration.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-emerald-100 p-1 rounded">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-medium">Vehicle profile storage</span> for automatic compatibility matching
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-emerald-100 p-1 rounded">
                        <Search className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-medium">Filtering options</span> to show only compatible charging stations
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-emerald-100 p-1 rounded">
                        <ZapIcon className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-medium">Charging speed estimations</span> based on your specific vehicle model
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 bg-slate-50 p-6 rounded-xl shadow-sm">
                  <img 
                    src="/ev_compatibility.jpg" 
                    alt="Compatibility check interface" 
                    className="w-full h-auto rounded-lg shadow border border-slate-200"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="navigation" className="mt-6">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-slate-800">Intelligent Navigation</h3>
                  <p className="text-slate-600 mb-6">
                    Optimize your route with our intelligent navigation system. It considers your 
                    current battery level, driving conditions, and charger availability to plan 
                    the most efficient journey.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-emerald-100 p-1 rounded">
                        <Navigation2 className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-medium">Smart route planning</span> that incorporates charging stops as needed
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-emerald-100 p-1 rounded">
                        <Battery className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-medium">Real-time battery monitoring</span> with range predictions
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-emerald-100 p-1 rounded">
                        <Clock className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-medium">Traffic updates</span> integrated into ETA calculations
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 bg-slate-50 p-6 rounded-xl shadow-sm">
                  <img 
                    src="/ev_navigation.jpg" 
                    alt="Navigation interface" 
                    className="w-full h-auto rounded-lg shadow border border-slate-200"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* For Operators Section */}
      <section className="py-16 bg-gradient-to-b from-slate-100 to-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-600 hover:bg-emerald-200">For Station Operators</Badge>
            <h2 className="text-3xl font-bold text-slate-800">Empower Your Charging Operations</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Dedicated tools for charging station operators to streamline management and improve user satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-emerald-500" />
                  Analytics Dashboard
                </CardTitle>
                <CardDescription>Monitor station usage and performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Track utilization rates, peak times, user flow patterns, and revenue generation with 
                  our comprehensive analytics suite. Make data-driven decisions to optimize your operations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ZapIcon className="h-5 w-5 text-emerald-500" />
                  Maintenance Alerts
                </CardTitle>
                <CardDescription>Proactive fault monitoring and reporting</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Receive real-time notifications about hardware issues, maintenance needs, or 
                  compatibility problems. Address technical issues before they impact users.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-emerald-500" />
                  Queue Management
                </CardTitle>
                <CardDescription>Streamline user flow and reduce congestion</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Effectively manage reservations, walk-ins, and wait times with our smart queuing system. 
                  Improve customer satisfaction by minimizing conflicts and confusion.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button className="bg-emerald-500 hover:bg-emerald-600">Request Operator Access</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-600 hover:bg-emerald-200">Key Features</Badge>
            <h2 className="text-3xl font-bold text-slate-800">Everything You Need for Seamless EV Charging</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <MapPin className="h-6 w-6 text-emerald-500" />,
                title: "Real-Time Mapping",
                description: "Find available chargers instantly with live status updates"
              },
              {
                icon: <CalendarCheck className="h-6 w-6 text-emerald-500" />,
                title: "Slot Reservations",
                description: "Book charging sessions in advance to guarantee availability"
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-emerald-500" />,
                title: "Compatibility Matching",
                description: "Only see charging stations compatible with your vehicle"
              },
              {
                icon: <Navigation2 className="h-6 w-6 text-emerald-500" />,
                title: "Smart Navigation",
                description: "Plan efficient routes with optimal charging stops"
              },
              {
                icon: <Clock className="h-6 w-6 text-emerald-500" />,
                title: "Wait Time Estimates",
                description: "Know exactly how long before a charger becomes available"
              },
              {
                icon: <Battery className="h-6 w-6 text-emerald-500" />,
                title: "Battery Management",
                description: "Monitor your battery level and charging progress"
              },
              {
                icon: <BarChart3 className="h-6 w-6 text-emerald-500" />,
                title: "Usage Analytics",
                description: "Learn from your charging patterns to optimize future trips"
              },
              {
                icon: <Phone className="h-6 w-6 text-emerald-500" />,
                title: "Mobile Integration",
                description: "Seamless experience across mobile apps and in-car systems"
              }
            ].map((feature, index) => (
              <Card key={index} className="border border-slate-200 hover:border-emerald-200 transition-colors duration-300">
                <CardHeader>
                  <div className="mb-2 bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Persona Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-600 hover:bg-emerald-200">For Everyone</Badge>
            <h2 className="text-3xl font-bold text-slate-800">Tailored Solutions for Every EV User</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Our platform is designed to address the specific needs of different EV users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-emerald-600 flex items-center justify-center p-6">
                  <div className="text-white text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-bold">City Commuters</h3>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h4 className="font-semibold mb-2">For users like Ramesh, the tech-savvy commuter</h4>
                  <p className="text-slate-600 mb-4">
                    Navigate daily commutes with confidence by booking chargers in advance and 
                    checking live queue status to avoid delays during peak hours.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Peak-hour availability alerts</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Quick booking for regular routes</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Office location charger recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="bg-white border-0 shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-teal-600 flex items-center justify-center p-6">
                  <div className="text-white text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-bold">Eco-Conscious Parents</h3>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h4 className="font-semibold mb-2">For users like Anjali, the environmentally conscious parent</h4>
                  <p className="text-slate-600 mb-4">
                    A user-friendly experience that simplifies charging during school runs and 
                    errands, with guaranteed compatibility for your specific vehicle model.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Simplified interface with minimal technical jargon</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Vehicle compatibility verification</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Time-sensitive route planning for errands</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="bg-white border-0 shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-blue-600 flex items-center justify-center p-6">
                  <div className="text-white text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-bold">Gig Workers</h3>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h4 className="font-semibold mb-2">For users like Vikram, the delivery driver</h4>
                  <p className="text-slate-600 mb-4">
                    Find functional fast-chargers between deliveries without wasting time, 
                    maximizing your earning potential throughout the day.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Fast-charger prioritized search</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Quick top-up recommendations between deliveries</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Operational status verification before arrival</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="bg-white border-0 shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-indigo-600 flex items-center justify-center p-6">
                  <div className="text-white text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-bold">Station Operators</h3>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h4 className="font-semibold mb-2">For operators like Suresh, the station manager</h4>
                  <p className="text-slate-600 mb-4">
                    Gain powerful insights into station performance with a centralized dashboard for monitoring
                    and managing charger status, reservations, and maintenance needs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Centralized operational dashboard</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Real-time maintenance alerts</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>Usage analytics and optimization suggestions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your EV Charging Experience?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied EV drivers who have eliminated charging frustration with our comprehensive solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90">
              Download Now
            </Button>
            <Button size="lg" variant="outline" className="text-emerald-600 border-white hover:bg-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-600 hover:bg-emerald-200">Success Stories</Badge>
            <h2 className="text-3xl font-bold text-slate-800">What Our Users Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Ramesh",
                role: "Daily Commuter",
                image: "/user_placeholder.png",
                quote: "Finding available charging stations used to be a daily struggle. Now I can reserve slots in advance and never worry about waiting in line again!"
              },
              {
                name: "Anjali",
                role: "Ride-Share Driver",
                image: "/user_placeholder.png",
                quote: "The real-time updates and smart navigation have saved me countless hours. I can plan my routes efficiently and maximize my earnings while keeping my EV charged."
              },
              {
                name: "Vikram",
                role: "Station Operator",
                image: "/user_placeholder.png",
                quote: "The operator dashboard has transformed how we manage our stations. User complaints are down 70% and our station utilization has increased by 45%."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-600 hover:bg-emerald-200">FAQs</Badge>
            <h2 className="text-3xl font-bold text-slate-800">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How accurate is the real-time availability data?",
                answer: "Our system updates every 60 seconds through direct IoT integration with charging stations. Availability information is typically 98% accurate, accounting for network latency and station-specific reporting intervals."
              },
              {
                question: "What happens if I'm late for my reserved charging slot?",
                answer: "We provide a 15-minute grace period for all reservations. If you arrive within this window, your slot is still guaranteed. Beyond that, the system may release your slot to other users, though we'll still prioritize you for the next available charger."
              },
              {
                question: "Is my vehicle compatible with your system?",
                answer: "Our platform supports all major EV models and charging standards including CCS, CHAdeMO, Type 2, and Tesla connectors. You'll only be shown charging stations that are compatible with your specific vehicle model."
              },
              {
                question: "How do I become a station operator on the platform?",
                answer: "Station operators can register through our dedicated portal. We provide integration support for all major charging station hardware, and our team will guide you through the setup process."
              },
              {
                question: "Is there a cost to use the app?",
                answer: "The basic app features are free for all EV drivers. We offer premium subscription options with additional features like priority booking, enhanced analytics, and route optimization for frequent users."
              }
            ].map((faq, index) => (
              <Card key={index} className="border border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg font-medium flex items-center">
                    <span className="text-emerald-500 mr-2">Q:</span>
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    <span className="text-emerald-500 font-medium mr-2">A:</span>
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ZapIcon size={24} className="text-emerald-400" />
                <span className="text-xl font-bold text-white">EvGo</span>
              </div>
              <p className="text-slate-400 mb-4">
                Reimagining the EV charging experience with smart technology and user-centered design.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">For Operators</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">In-Car Integration</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">API</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-700 text-center">
            <p className="text-slate-400">© 2025 EvGo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}