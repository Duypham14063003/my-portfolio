"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import phamngocduy from "@/public/phamngocduy.jpg";
const ThreeDCardDemo = () => {
  return (
    <CardContainer className=" mt-0.5">
      <CardBody className="h-auto relative   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl border  ">
        <img
          src={phamngocduy.src}
          height="100%"
          width="100%"
          className="h-auto w-full object-fill rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCardDemo;
