"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/config/main";
import { MailQuestion } from "lucide-react";

export default function Home() {
  return (
    <>
      <section
        id="faqs"
        className="relative flex justify-center items-center pt-36"
      >
        <div className="h-full max-w-6xl w-full">
          <div className="flex gap-10 mx-10 flex-col">
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <h1 className="font-semibold text-[40px] md:text-[60px] text-center">
                    <MailQuestion className="inline-flex size-[30px] md:size-[50px] mb-1 md:mb-2" />{" "}
                    Frequently Asked Question
                  </h1>
                  <p className="font-medium text-[18px] md:text-[20px] text-main-100 text-center">
                    Find the answers of common questions below.
                  </p>
                </div>
              </div>
            </div>
            <Accordion
              type="single"
              collapsible
              className="relative flex justify-center items-center gap-5 flex-col w-full"
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
