import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack & Mobile Developer",
  description:
    "I'm Orkhai Dickson, a full-stack and mobile developer building scalable web and mobile applications using MERN stack, NestJS, SQL and Flutter.",
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
};

export default HomePage;
