import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { EnquiryForm } from "@/components/common/EnquiryForm";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";

export const metadata: Metadata = pageMetadata(
  "/contact",
  "Contact Journey 2 Better",
  "Get in touch with Journey2Better about the community, the memoir, resources, events, speaking or future plans."
);

export default function ContactPage() {
  return (
    <section className="relative py-16 sm:py-24 bg-ivory-canvas overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2.5 mb-5">
              <BotanicalMotif size={20} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                Get in touch
              </span>
            </div>
            <h1 className="font-serif editorial-h2 font-bold text-midnight mb-6 reveal-heading">
              A question, an idea, or{" "}
              <span className="italic font-normal text-gold-deep">a story to share.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed max-w-xl">
              Whether you are interested in the community, the memoir, future events or working
              with Sade, we would be glad to hear from you. Dates, prices and availability are not
              confirmed until we say so in writing.
            </p>
          </div>

          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>

        <div id="privacy" className="mt-16 lg:mt-20 max-w-3xl border-t border-ivory-border pt-10">
          <h2 className="font-serif text-2xl font-bold text-midnight mb-4">Privacy notice</h2>
          <div className="space-y-3 font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
            <p>
              When you contact us, we ask only for what we need to respond: your name, email
              address, and, if you choose, your country and a message. Your email address is used
              to reply to your enquiry and is never sold or used for unrelated marketing without
              your consent.
            </p>
            <p>
              You must confirm that you are happy for us to contact you before the form is sent.
              We keep enquiry messages only for as long as needed to respond to them.
            </p>
            <p>
              This form is for general enquiries. It is not monitored as an urgent, medical or
              crisis-response service. If your symptoms are severe, sudden, or do not improve,
              please speak to a healthcare professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
