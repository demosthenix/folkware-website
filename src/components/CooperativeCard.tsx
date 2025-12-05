// src/components/CooperativeCard.tsx
import WorkersOwned from "../assets/WorkersOwned.png";

interface CooperativeCardProps {
  title: string;
  description: string;
}

export default function CooperativeCard({ title, description }: CooperativeCardProps) {
  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: "440px",
        height: "550px",
        clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)", // Trapezoid: top wider, skews inward to bottom
      }}
    >
      {/* ORANGE CARD BACKGROUND */}
      <div className="w-full h-full relative overflow-hidden bg-[#FF7562] shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
        {/* IMAGE AREA (TOP) */}
        <div className="w-full h-[340px] flex items-center justify-center">
          <img src={WorkersOwned} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* BLACK TEXT BAND (BOTTOM) */}
        <div className="absolute inset-x-0 bottom-0 h-[210px] overflow-hidden">
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
