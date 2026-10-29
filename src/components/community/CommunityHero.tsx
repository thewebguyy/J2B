import React from "react";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const CommunityHero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 sm:pb-28 bg-ivory-canvas overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Header Breadcrumb */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-widest font-semibold text-teal-living">
              The Together &bull; Community Life
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-midnight leading-[1.1] tracking-tight mb-8">
            There is room for you{" "}
            <span className="italic font-normal text-gold-harvest block sm:inline">
              at this table.
            </span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-charcoal/85 leading-relaxed font-normal">
            You were never meant to walk this journey alone. In a world that often demands emotional detachment, Journey 2 Better creates spaces where women gather, speak truthfully, and rise in sisterhood.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href="#offerings" variant="primary">
              <span>Explore Our Offerings</span>
              <ArrowRight className="size-4 text-gold-harvest" />
            </MagneticButton>

            <MagneticButton href="#steps" variant="outline">
              <span>How To Join Us</span>
            </MagneticButton>
          </div>
        </div>

        {/* Community Atmosphere Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-ivory-surface border border-ivory-border shadow-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-96 opacity-20 pointer-events-none" aria-hidden="true">
            <PathRibbon variant="narrative-flow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-living block mb-2">
                Safe Sanctuary
              </span>
              <h3 className="font-serif text-xl font-bold text-midnight mb-2">
                Zero Judgment
              </h3>
              <p className="font-sans text-sm text-charcoal/75 leading-relaxed">
                Confidential, supportive environments where you can speak openly about your challenges without fear of being critiqued.
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-harvest block mb-2">
                Mutual Uplift
              </span>
              <h3 className="font-serif text-xl font-bold text-midnight mb-2">
                Sisterhood Over Rivalry
              </h3>
              <p className="font-sans text-sm text-charcoal/75 leading-relaxed">
                We believe that another woman&apos;s light does not diminish your own. Every success in our community is shared and celebrated.
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-midnight block mb-2">
                Consistent Care
              </span>
              <h3 className="font-serif text-xl font-bold text-midnight mb-2">
                Everyday Connection
              </h3>
              <p className="font-sans text-sm text-charcoal/75 leading-relaxed">
                Not just occasional meetings, but a continuous web of encouragement that keeps you anchored during demanding weeks.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
