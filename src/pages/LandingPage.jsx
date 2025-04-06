import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import company from "../data/companies.json";
import Autoplay from 'embla-carousel-autoplay';
import faq from '../data/faq.json';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Briefcase, Building2 } from "lucide-react";

const LandingPage = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-6 md:px-12 lg:px-16 xl:px-24  overflow-auto">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6 sm:space-y-10 py-16 sm:py-24 max-w-5xl w-full"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold flex flex-col items-center">
          Find Your Dream Job!
          <motion.img
            src="/Logo.png"
            alt="logo"
            className="h-16 sm:h-24 md:h-28 mt-6 drop-shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          />
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
          Explore thousands of job opportunities and land the perfect role that matches your skills and aspirations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/jobs">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300">
              Find Jobs
            </Button>
          </Link>
          <Link to="/post-job">
            <Button className="bg-red-600 hover:bg-red-700 px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300">
              Post a Job
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Carousel */}
      <div className="w-full flex justify-center">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={() => plugin.current?.stop()}
          onMouseLeave={() => plugin.current?.play()}
          className="w-full max-w-6xl mt-6"
        >
          <CarouselContent className="flex gap-10 items-center">
            {company.map(({ name, id, path }) => (
              <CarouselItem key={id} className="basis-1/6 hover:scale-105 transition-transform duration-300">
                <img
                  src={path}
                  alt={name}
                  className="h-20 object-contain transition-all"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Banner */}
      <motion.div
        className="mt-12 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/banner/ban.png" alt="Banner" className="w-full object-cover rounded-xl shadow-xl" />
      </motion.div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Card className="bg-gray-800 text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="flex items-center gap-4">
            <Briefcase className="h-6 w-6 text-blue-400" />
            <CardTitle className="text-2xl">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-300 text-base">
              Search and apply for jobs, track applications, and manage your profile.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="flex items-center gap-4">
            <Building2 className="h-6 w-6 text-red-400" />
            <CardTitle className="text-2xl">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-300 text-base">
              Post jobs, manage candidates, and find top talent with ease.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 w-full max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          {faq.map((faqItem, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="hover:text-blue-400">{faqItem.question}</AccordionTrigger>
              <AccordionContent className="text-gray-300">{faqItem.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default LandingPage;
