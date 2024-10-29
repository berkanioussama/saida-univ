"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const About = () => {
  return (
    <div className="flex flex-col">
      <CardContainer className="inter-var w-full">
        <CardBody className=" flex flex-col md:flex-row gap-8 relative group/card border-black/[0.1] w-full h-auto rounded-xl p-6 border">
          <div className="md:w-1/2 flex flex-col items-center justify-center gap-4">
            <CardItem
              translateZ="50"
              className="text-3xl font-bold text-white"
            >
              About Our Club
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-300 max-w-sm mt-2 "
            >
              welcome to the computer science club . we are group on enthusistic individuals passionate about technology and innovation our portfolio showcases a variety of events,programs,and activities that aim to broaden knowledge and foster skills in computer science joins us to explore,learn,and create alongside like-minded peers.
            </CardItem>
          </div>
          <CardItem translateZ="100" className="md:w-1/2">
            <Image
              src="/first.jpg"
              height="1000"
              width="1000"
              className="h-[20rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var w-full">
        <CardBody className=" flex flex-col md:flex-row gap-8 relative group/card border-black/[0.1] w-full h-auto rounded-xl p-6 border">
          <CardItem translateZ="100" className="md:w-1/2">
            <Image
              src="/second.jpg"
              height="1000"
              width="1000"
              className="h-[20rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="md:w-1/2 flex flex-col items-center justify-center gap-4">
            <CardItem
              translateZ="50"
              className="text-3xl font-bold text-white"
            >
              Join our next event
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-300 max-w-sm mt-2 "
            >
              Don&apos;t miss out on the opportunity to grow
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
 
export default About;