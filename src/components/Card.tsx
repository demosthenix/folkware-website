// src/components/Card.tsx
import Impact from "../assets/Impact.png";
import Solution from "../assets/Solution.png";
import WorkersOwned from "../assets/WorkersOwned.png";
import { useMobile } from "../hooks/useMobile";

interface CardProps {
  title: string;
  description: string;
  variant: "cooperative" | "digital" | "impact";
}

export default function Card({ title, description, variant }: CardProps) {
  const isMobile = useMobile();

  const imageMap: Record<CardProps["variant"], string> = {
    cooperative: WorkersOwned,
    digital: Solution,
    impact: Impact,
  };

  const image = imageMap[variant];

  // Mobile card styles
  if (isMobile) {
    return (
      <div
        className="relative w-full"
        style={{
          height: "auto",
        }}
      >
        {/* ORANGE CARD BACKGROUND */}
        <div className="w-full relative overflow-hidden bg-[#FF7562] shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
          {/* IMAGE AREA (TOP) */}
          <div className="w-full h-60 sm:h-[300px] flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* BLACK DIAGONAL TEXT BAND (BOTTOM) */}
          <div className="relative pt-6 pb-6 px-4 text-white bg-black">
            <h3
              className="uppercase"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: "24px",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}
            >
              {title}
            </h3>

            <p
              className="mt-2"
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: 1.4,
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Desktop card styles with skewed design
  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: "440px", // Figma: card width
        height: "550px", // Figma: card height
        transform: "rotate(-2deg)", // Skew effect
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "rotate(0deg) scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "rotate(-2deg)";
      }}
    >
      {/* ORANGE CARD BACKGROUND */}
      <div className="w-full h-full relative overflow-hidden bg-[#FF7562] shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
        {/* IMAGE AREA (TOP) */}
        <div className="w-full h-[340px] flex items-center justify-center">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* BLACK DIAGONAL TEXT BAND (BOTTOM) */}
        <div className="absolute inset-x-0 bottom-0 h-[210px] overflow-hidden">
          {/* Slanted black background */}

          <div className="relative z-10 px-6 pt-4 pb-6 text-white bg-[#0F0F0F] h-full">
            <h3
              className="uppercase"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: "36px",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}
            >
              {title}
            </h3>

            <p
              className="mt-2"
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: 1.4,
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
