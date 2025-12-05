// src/components/About.tsx
import AboutDivider from "../constant/AboutDivider";
import { useMobile } from "../hooks/useMobile";
import Card from "./Card";
import CooperativeCard from "./CooperativeCard";
import DigitalCard from "./DigitalCard";
import ImpactCard from "./ImpactCard";

export default function About() {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <section className="relative w-full bg-white overflow-visible">
        <div className="w-full mx-auto px-4 py-16 sm:py-20">
          {/* HEADING */}
          <p
            className="uppercase text-[#FF7562] text-[36px] sm:text-[48px] mb-6"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontWeight: 400,
              lineHeight: "1.1",
            }}
          >
            BEHIND THE CODE
          </p>

          {/* DESCRIPTION TEXT */}
          <p className="text-[#37344B] font-poppins font-semibold text-sm sm:text-base mb-12 leading-relaxed">
            At Folkware, every line of code carries more than logic — it carries
            collaboration. As a co-operative team, we share ideas, make
            collective decisions, and build solutions with people in mind.
          </p>

          {/* STACKED CARDS */}
          <div className="flex flex-col items-center gap-8">
            <Card
              variant="cooperative"
              title="Worker-Owned Cooperative"
              description="Built and run by the people who power it. Together, we share responsibility, decisions, and success."
            />
            <Card
              variant="digital"
              title="Digital Solutions That Empower"
              description="Websites, apps, and tools crafted for organizations of all sizes. Every solution is designed to be reliable, scalable & user-friendly."
            />
            <Card
              variant="impact"
              title="Driven by Social Impact"
              description="Technology that creates value for both communities & companies. Our work is guided by ethics, inclusivity, and long-term benefit."
            />
          </div>
        </div>
        <AboutDivider />
      </section>
    );
  }

  // DESKTOP LAYOUT (same heading + paragraph as you had)
  return (
    <section className="relative w-full  overflow-visible bg-white">
      <div className="w-full mx-auto pl-[79px] pt-[120px] pb-40 pr-[113px] ">
        {/* TOP ROW: HEADING + PARAGRAPH */}
        <div className="flex items-start gap-6 mb-24">
          <p
            className="uppercase text-[#FF7562]"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontWeight: 400,
              fontSize: "160px",
              lineHeight: "160px",
            }}
          >
            BEHIND THE CODE
          </p>

          <p className="text-#37344B font-poppins font-semibold text-[20px] mt-2">
            At Folkware, every line of code carries more than <br />
            logic — it carries collaboration. As a co-operative <br /> team, we
            share ideas, make collective decisions,
            <br /> and build solutions with people in mind.
          </p>
        </div>

        {/* BOTTOM ROW: CARDS – skewed shapes with 24px gaps */}
        <div
          className="flex items-stretch"
          style={{ height: "550px" }} // lock card height row to Figma
        >
          <CooperativeCard
            title="Worker-Owned Cooperative"
            description="Built and run by the people who power it. Together, we share responsibility, decisions, and success."
          />
          <DigitalCard
            title="Digital Solutions That Empower"
            description="Websites, apps, and tools crafted for organizations of all sizes. Every solution is designed to be reliable, scalable & user-friendly."
          />
          <ImpactCard
            title="Driven by Social Impact"
            description="Technology that creates value for both communities & companies. Our work is guided by ethics, inclusivity, and long-term benefit."
          />
        </div>
      </div>
      <AboutDivider />
    </section>
  );
}
