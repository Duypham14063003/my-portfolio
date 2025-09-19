"use client";
import React from "react";
import BackgroundBeams from "../components/ui/background-beams";
import ColourfulText from "@/components/ui/colourful-text";
import CardButton from "../components/Card-button";
import ThreeDCardDemo from "../components/CardImage3D";
import MyTimeline from "@/components/ui/MyTimeline";
import LayoutTextFlip from "@/components/LayoutTextFlip";
import { Github, Linkedin } from "lucide-react";
const page = () => {
  return (
    <div className="p-4">
      <div className="">
        <div className=" h-screen w-auto rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              Phạm <ColourfulText text={"Ngọc Duy"}></ColourfulText>
            </h1>
            <p className="text-neutral-500 md:text-xl lg:text-2xl w-auto max-w-lg mx-auto my-2 text-xl text-center relative z-10">
              <LayoutTextFlip />
            </p>
          </div>
          <div className="flex items-center justify-items-center gap-4 text-white h-10 w-auto  ">
            <CardButton
              Content={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-github-icon lucide-github hover:text-neutral-500"
                  onClick={() => {
                    window.open("https://github.com/Duypham14063003", "_blank");
                  }}
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              }
            ></CardButton>
            <CardButton
              Content={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-linkedin-icon lucide-linkedin  hover:text-neutral-500 hover:scale-110 transition-transform duration-300"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              }
            ></CardButton>
          </div>
        </div>
      </div>

      {/* <ThreeDMarquee /> */}

      <div className="p-4 h-full text-white">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <h1 className="relative z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              <ColourfulText text={"Programming Skills"}></ColourfulText>
            </h1>
            <div className="flex justify-center align-center">
              <div className="grid grid-cols-5 gap-4 mt-6 mx-auto">
                <CardButton Content={"NextJS"}></CardButton>
                <CardButton Content={"Nodejs"}></CardButton>
                <CardButton Content={"ReactJS"}></CardButton>
                <CardButton Content={"MongoDB"}></CardButton>
                <CardButton Content={"ExpressJS"}></CardButton>
                <CardButton Content={"NestJs"}></CardButton>
                <CardButton Content={"mySQL"}></CardButton>
                <CardButton Content={"FireBase"}></CardButton>
                <CardButton Content={"C# / .Net"}></CardButton>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="relative z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              TÔI LÀ ....
            </h1>
            <div className="flex justify-center align-center mt-[-70px]">
              <ThreeDCardDemo></ThreeDCardDemo>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="relative z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          MY JOURNEY IS STILL IN PROGRESS
        </h1>
        <div>
          <MyTimeline></MyTimeline>
        </div>
      </div>
      <BackgroundBeams className="z-0" />
    </div>
  );
};

export default page;
