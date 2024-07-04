"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/config/main";
import { MailQuestion } from "lucide-react";

export default function Faqs() {
  return (
    <>
      <section
        id="faqs"
        className="z-10 relative flex items-center justify-center pt-36"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <h1 className="text-center text-[38px] font-semibold md:text-[58px]">
                    <MailQuestion className="mb-1 inline-flex size-[30px] md:mb-2 md:size-[50px]" />{" "}
                    Frequently Asked Question
                  </h1>
                  <p className="text-center text-[18px] font-medium text-foreground md:text-[20px]">
                    Find the answers of common questions below.
                  </p>
                </div>
              </div>
            </div>
            <Accordion
              type="single"
              collapsible
              className="relative flex w-full flex-col items-center justify-center gap-5"
            >
              {Object.keys(faqs).map((key, index) => (
                <AccordionItem delay={index * 0.2} value={key} key={index}>
                  <AccordionTrigger>{faqs[key].title}</AccordionTrigger>
                  <AccordionContent>{faqs[key].content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
