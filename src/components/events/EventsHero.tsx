import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const EventsHero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 sm:pb-28 bg-ivory-canvas overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Header Breadcrumb */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-widest font-semibold text-teal-living">
              The Moments &bull; Gatherings & Retreats
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-midnight leading-[1.1] tracking-tight mb-8">
            Some moments are{" "}
            <span className="italic font-normal text-gold-harvest block sm:inline">
              better shared.
            </span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-charcoal/85 leading-relaxed font-normal">
            From sunrise virtual reflections that centre your week, to immersive London workshops and restorative annual retreats, our gatherings are curated to help you pause, reflect, and grow in sisterhood.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href="#gatherings" variant="primary">
              <span>Explore Our Gatherings</span>
              <ArrowRight className="size-4 text-gold-harvest" />
            </MagneticButton>

            <MagneticButton href="#rhythm" variant="outline">
              <span>View Gathering Rhythm</span>
            </MagneticButton>
          </div>
        </div>

        {/* Gathering Philosophy Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-ivory-surface border border-ivory-border shadow-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-96 opacity-20 pointer-events-none" aria-hidden="true">
            <PathRibbon variant="narrative-flow" />
          </div>

          <div className="max-w-2xl relative z-10">
            <span className="text-xs uppercase tracking-widest font-semibold text-teal-living block mb-3">
              Intentional Gatherings
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mb-4">
              Designed for stillness, clarity, and genuine connection.
            </h2>
            <p className="font-sans text-base text-charcoal/80 leading-relaxed font-normal">
              We deliberately cap attendance at our gatherings to preserve an environment where every woman can be seen and heard. No crowded seminar rooms, no passive lectures. Just honest conversation, mindful practice, and shared meals.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
