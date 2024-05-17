"use client";

import Incrementor from "@/components/Incrementor";
import Lazy from "@/components/Lazy";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BadgeCheck,
  Boxes,
  ChevronsRight,
  Copy,
  GalleryVerticalEnd,
  Search,
  Sparkles,
} from "lucide-react";
import { faqs, products, stats } from "@/config/main";
import ProductCard from "@/components/ProductCard";
import { useSearchFilter } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Suspense } from "react";

export default function Products() {
  const [provider, filtered] = useSearchFilter(products);

  return (
    <Suspense>
      <section
        id="home"
        className="relative flex justify-center items-center pt-36"
      >
        <div className="h-full max-w-6xl w-full">
          <div className="flex gap-y-10 mx-10 flex-col lg:flex-row">
            <div className="flex-[3]">
              <div className="flex flex-col gap-6">
                <h1 className="font-semibold text-[40px] md:text-[60px]">
                  <Copy className="inline-flex size-[30px] md:size-[50px] mb-1 md:mb-2" />{" "}
                  Notion <span className="text-main-300">Templates</span>
                </h1>
                <p className="font-medium text-[18px] md:text-[20px] text-main-200">
                  Find Notion templates to meet your needs for every area of
                  life.
                </p>
              </div>
              <div className="flex gap-6 mt-10 flex-col md:flex-row">
                <label className="relative rounded-[10px] border border-main-600 group flex overflow-hidden w-full md:max-w-lg">
                  <Search className="absolute py-2 pl-5 h-14 w-11 left-0 group-focus-within:-left-11 group-focus-within:h-14 overflow-hidden transition-all duration-300" />
                  <input
                    className="py-4 pl-16 group-focus-within:pl-9 pr-9 w-full bg-main-800 outline-none group-hover:bg-main-700 transition-all duration-300 placeholder:text-main-50"
                    placeholder="Search for templates..."
                    {...provider}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="new"
        className="relative flex justify-center items-center pt-24"
      >
        <div className="h-full max-w-6xl w-full">
          <div className="flex gap-10 mx-10 flex-col">
            <div className="flex-1">
              <div className="flex flex-row justify-between items-center gap-6">
                <h1 className="font-semibold text-[26px] xl:text-[30px]">
                  <Sparkles className="inline-flex size-[30px] md:size-[32px] mb-1 md:mb-2" />{" "}
                  New Templates
                </h1>
              </div>
            </div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {Object.keys(filtered).map(
                (key, index) =>
                  products[key].showcase.includes("new") && (
                    <ProductCard
                      delay={index * 0.2}
                      product={products[key]}
                      key={index}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </section>
      <section
        id="popular"
        className="relative flex justify-center items-center pt-24"
      >
        <div className="h-full max-w-6xl w-full">
          <div className="flex gap-10 mx-10 flex-col">
            <div className="flex-1">
              <div className="flex flex-row justify-between items-center gap-6">
                <h1 className="font-semibold text-[26px] xl:text-[30px]">
                  <BadgeCheck className="inline-flex size-[30px] md:size-[32px] mb-1 md:mb-2" />{" "}
                  Most Popular
                </h1>
              </div>
            </div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {Object.keys(filtered).map(
                (key, index) =>
                  products[key].showcase.includes("popular") && (
                    <ProductCard
                      delay={index * 0.2}
                      product={products[key]}
                      key={index}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </section>
      <section
        id="bundles"
        className="relative flex justify-center items-center pt-24"
      >
        <div className="h-full max-w-6xl w-full">
          <div className="flex gap-10 mx-10 flex-col">
            <div className="flex-1">
              <div className="flex flex-row justify-between items-center gap-6">
                <h1 className="font-semibold text-[26px] xl:text-[30px]">
                  <Boxes className="inline-flex size-[30px] md:size-[32px] mb-1 md:mb-2" />{" "}
                  Template Bundles
                </h1>
              </div>
            </div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {Object.keys(filtered).map(
                (key, index) =>
                  products[key].showcase.includes("bundles") && (
                    <ProductCard
                      delay={index * 0.2}
                      product={products[key]}
                      key={index}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </section>
      <section
        id="how-to"
        className="relative flex justify-center items-center pt-24"
      >
        <div className="h-full max-w-6xl w-full">
          <div className="flex gap-10 mx-10 flex-col">
            <div>
              <div className="flex flex-col gap-6">
                <h1 className="font-semibold text-[35px] md:text-[42px] text-center">
                  Three Steps, Three Minutes
                </h1>
                <p className="font-medium text-[18px] md:text-[20px] text-main-200 text-center">
                  Start using Notion without having to setup everything from
                  scratch.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mx-10 xl:mb-5 xl:flex-row flex-col">
              <motion.div
                initial="hidden"
                whileInView="enter"
                exit="exit"
                variants={{
                  hidden: { opacity: 0, x: 0, y: 50 },
                  enter: { opacity: 1, x: 0, y: 0 },
                  exit: { opacity: 0, x: 0, y: -50 },
                }}
                viewport={{ once: true }}
                transition={{ type: "linear", duration: 0.7, delay: 0 }}
                className="flex flex-col items-center mb-7 xl:mb-0 gap-5"
              >
                <div className="w-max text-[150px] font-semibold text-main-200 hover:text-main-300 transition-all duration-500 cursor-pointer">
                  1
                </div>
                <h3 className="text-[18px] md:text-[20px] font-semibold">
                  Pick a template
                </h3>
                <h3 className="text-main-200 text-[14px] md:text-[16px] max-w-[280px] text-center">
                  Browse for a template that fits your needs.
                </h3>
              </motion.div>
              <div>
                <ChevronsRight
                  className="xl:rotate-0 rotate-90 w-20 h-20"
                  color="var(--main-400)"
                  width={64}
                  height={64}
                  alt="arrow"
                />
              </div>
              <motion.div
                initial="hidden"
                whileInView="enter"
                exit="exit"
                variants={{
                  hidden: { opacity: 0, x: 0, y: 50 },
                  enter: { opacity: 1, x: 0, y: 0 },
                  exit: { opacity: 0, x: 0, y: -50 },
                }}
                viewport={{ once: true }}
                transition={{ type: "linear", duration: 0.7, delay: 0.2 }}
                className="flex flex-col items-center mb-7 xl:mb-0 gap-5"
              >
                <div className="w-max text-[150px] font-semibold text-main-200 hover:text-main-300 transition-all duration-500 cursor-pointer">
                  2
                </div>
                <h3 className="text-[18px] md:text-[20px] font-semibold">
                  Checkout securely
                </h3>
                <h3 className="text-main-200 text-[14px] md:text-[16px] max-w-[280px] text-center">
                  Put your email to receive a receipt and complete your
                  purchase.
                </h3>
              </motion.div>
              <div>
                <ChevronsRight
                  className="xl:rotate-0 rotate-90 w-20 h-20"
                  color="var(--main-400)"
                  width={64}
                  height={64}
                  alt="arrow"
                />
              </div>
              <motion.div
                initial="hidden"
                whileInView="enter"
                exit="exit"
                variants={{
                  hidden: { opacity: 0, x: 0, y: 50 },
                  enter: { opacity: 1, x: 0, y: 0 },
                  exit: { opacity: 0, x: 0, y: -50 },
                }}
                viewport={{ once: true }}
                transition={{ type: "linear", duration: 0.7, delay: 0.4 }}
                className="flex flex-col items-center mb-7 xl:mb-0 gap-5"
              >
                <div className="w-max text-[150px] font-semibold text-main-200 hover:text-main-300 transition-all duration-500 cursor-pointer">
                  3
                </div>
                <h3 className="text-[18px] md:text-[20px] font-semibold">
                  Duplicate to Notion
                </h3>
                <h3 className="text-main-200 text-[14px] md:text-[16px] max-w-[280px] text-center">
                  Open the link and duplicate it to your Notion account.
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="all"
        className="relative flex justify-center items-center pt-24"
      >
        <div className="h-full max-w-6xl w-full">
          <div className="flex gap-10 mx-10 flex-col">
            <div className="flex-1">
              <div className="flex flex-row justify-between items-center gap-6">
                <h1 className="font-semibold text-[26px] xl:text-[30px]">
                  <GalleryVerticalEnd className="inline-flex size-[30px] md:size-[32px] mb-1 md:mb-2" />{" "}
                  All Templates
                </h1>
              </div>
            </div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {Object.keys(filtered).map((key, index) => (
                <ProductCard
                  delay={index * 0.2}
                  product={products[key]}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="reviews"
        className="relative flex justify-center items-center pt-24"
      >
        <div className="h-full max-w-6xl w-full">
          <div className="flex gap-10 mx-10 flex-col">
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <h1 className="font-semibold text-[35px] md:text-[42px] text-center">
                  Trusted by customers worldwide
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center mx-10 gap-10 md:gap-[15%] flex-wrap md:flex-row">
              {Object.keys(stats).map((key, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <div className="w-max text-[30px] md:text-[35px] font-semibold">
                    <Lazy fallback="0+">
                      <Incrementor
                        number={stats[key]}
                        add={stats[key] / 50}
                        interval={20}
                      />
                      +
                    </Lazy>
                  </div>
                  <h3 className="text-main-200 text-[18px] md:text-[20px]">
                    {key}
                  </h3>
                </div>
              ))}
            </div>
            <div
              className="senja-embed"
              data-id="fa4ed835-1c9d-49b4-af75-4c212ca3748e"
              data-lazyload="false"
            ></div>
          </div>
        </div>
      </section>
      <section
        id="faqs"
        className="relative flex justify-center items-center pt-24"
      >
        <div className="h-full max-w-6xl w-full">
          <div className="flex gap-10 mx-10 flex-col">
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <h1 className="font-semibold text-[35px] md:text-[42px] text-center">
                  Frequently Asked Questions
                </h1>
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
    </Suspense>
  );
}
