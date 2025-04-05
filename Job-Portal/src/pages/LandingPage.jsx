import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import company from "../data/companies.json";
import Autoplay from 'embla-carousel-autoplay';
import faq from '../data/faq.json';
// Import Card components
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; // Fixed import

const LandingPage = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-6 md:px-12 lg:px-16 xl:px-24 overflow-auto">
      
      {/* Hero Section */}
      <div className="text-center space-y-6 sm:space-y-10 py-12 sm:py-20 max-w-5xl w-full">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold flex flex-col items-center">
          Find Your Dream Job!
          <span className="flex items-center justify-center gap-2 sm:gap-4">
            <img
              src="/Logo.png"
              alt="logo"
              className="h-14 sm:h-20 md:h-24 lg:h-28 mt-4 drop-shadow-lg"
            />
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 px-4">
          Explore thousands of job opportunities and land the perfect role that matches your skills and aspirations.
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          <Link to="/jobs">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-md shadow-md transition-all duration-300 text-sm sm:text-base md:text-lg">
              Find Jobs
            </Button>
          </Link>
          <Link to="/post-job">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-md shadow-md transition-all duration-300 text-sm sm:text-base md:text-lg">
              Post a Job
            </Button>
          </Link>
        </div>
        
        {/* Carousel Section */}
        <div className="w-full flex justify-center">
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={() => plugin.current?.stop()}
            onMouseLeave={() => plugin.current?.play()}
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mt-10"
          >
            <CarouselContent className="flex gap-5 sm:gap-10 md:gap-16 lg:gap-20 items-center">
              {company.map(({ name, id, path }) => (
                <CarouselItem key={id} className="basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/8">
                  <img
                    src={path}
                    alt={name}
                    className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Banner */}
        <div>
          <img src="/banner/ban.png" alt="Banner" className="w-full object-cover rounded-lg" />
        </div>

        {/* Card Component */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="max-w-lg mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">For Job Seekers!</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Search and Apply for Jobs, track Applications, and More.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="max-w-lg mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">For Employers!</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Post Jobs, Manage Applications, and Find the best Candidates.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-10 w-full max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faq.map((faqItem, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{faqItem.question}</AccordionTrigger>
                <AccordionContent>{faqItem.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
