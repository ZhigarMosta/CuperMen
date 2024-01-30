"use client";
import React from "react";
import "./page.scss";
import SuperMen from "../img/superMen.jpg";
import MainText from "@/components/mainText/mainText";
import Btn from "@/components/btn/Btn";
import Image from "next/image";
import DescriptionText from "@/components/descriptionText/descriptionText";

export default function Home() {
  return (
    <div className="wrapper_container">
      <div className="contaier">
        <div className="left_side">
          <MainText />
          <DescriptionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </DescriptionText>
          <Btn>See Character</Btn>
        </div>
        <Image src={SuperMen} alt="" />
      </div>
    </div>
  );
}
