"use client";

import Incrementor from "@/components/Incrementor";
import Lazy from "@/components/Lazy";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BadgeCheck, Boxes, Laptop, ChevronsRight } from "lucide-react";
import { faqs, products, stats } from "@/config/main";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { PinContainer } from "@/components/ui/3d-pin";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";
import { Highlight } from "@/components/ui/hero-highlight";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Home() {
  const bundle = products.p1;

  return (
    <>
      <section
        id="home"
        className="relative flex items-center justify-center pt-36"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-y-10 lg:flex-row">
            <div className="z-[1] flex-[3]">
              <div className="flex flex-col gap-6">
                <h1 className="text-[40px] font-semibold md:text-[60px]">
                  <Laptop className="mb-1 inline-flex size-[30px] md:mb-2 md:size-[50px]" />{" "}
                  Boost Your <Highlight>Productivity</Highlight> with The Notion
                  Madness
                </h1>
                <p className="text-[18px] font-medium text-muted-foreground md:text-[20px]">
                  Discover the best Notion Templates to help you stay organized
                  and productive.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-6 md:flex-row">
                <Link
                  href="/products"
                  className="rounded-lg bg-primary px-9 py-4 text-center font-semibold text-primary-foreground transition-all duration-500"
                >
                  Explore Templates
                </Link>
                <Link
                  href="/gumroad/basic-bundle"
                  className="group hidden justify-center rounded-lg border border-border bg-card py-2 pl-9 pr-2 text-center font-semibold transition-all duration-500 hover:bg-secondary md:flex"
                >
                  <div className="mr-7 py-2">Get Full Bundle</div>
                  <div className="right-2 rounded-md border-border bg-red-600 px-3 py-2 font-mono transition-all duration-500 group-hover:bg-red-700 dark:bg-red-700 dark:group-hover:bg-red-800">
                    Free
                  </div>
                </Link>
                <Link
                  href="/gumroad/basic-bundle"
                  className="group rounded-lg border border-border bg-card text-center font-semibold transition-all duration-500 hover:bg-secondary md:hidden"
                >
                  <div className="px-9 pb-2 pt-4">Get Full Bundle</div>
                  <div className="mx-2 mb-2 rounded-md border-border bg-red-600 py-2 font-mono transition-all duration-500 group-hover:bg-red-700 dark:bg-red-700 dark:group-hover:bg-red-800">
                    Free
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-[2] items-center justify-center lg:justify-end">
              <motion.div
                initial="hidden"
                whileInView="enter"
                exit="exit"
                variants={{
                  hidden: { opacity: 0, x: 100, y: 0 },
                  enter: { opacity: 1, x: 0, y: 0 },
                  exit: { opacity: 0, x: -100, y: 0 },
                }}
                viewport={{ once: true }}
                transition={{ type: "linear", duration: 0.7 }}
                className="mr-[18px] mt-[70px] h-[450px] w-[335px]"
              >
                <PinContainer
                  title="The best Notion Templates await your arrival."
                  href="The best Notion Templates await your arrival."
                  className="h-[450px] w-[335px]"
                >
                  <Image
                    src="/madlad-pfp-transparent.png"
                    alt="madlad"
                    width={335}
                    height={450}
                    className="flip-y"
                  />
                </PinContainer>
              </motion.div>
              {/* <div className="absolute w-[40%] h-[35%] top-50 pink-gradient dark:opacity-[0.1] opacity-[0.4]" />
              <div className="absolute w-[80%] h-[80%] rounded-full white-gradient top-40 dark:opacity-[0.1] opacity-[0.3]" />
              <div className="absolute w-[50%] h-[50%] right-20 bottom-20 blue-gradient dark:opacity-[0.1] opacity-[0.2]" /> */}
              <div className="absolute left-0 right-0 top-0 h-screen">
                <SparklesCore
                  id="tsparticlesfullpage"
                  background="transparent"
                  minSize={0.3}
                  maxSize={1}
                  particleDensity={60}
                  className="h-full w-full"
                  particleColor="#777777"
                />
              </div>
              <BackgroundBeams />
            </div>
          </div>
        </div>
      </section>
      <section
        id="bundle"
        className="relative flex items-center justify-center pt-24"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <CardContainer divider={50}>
              <CardBody className="flex w-full flex-1 cursor-pointer rounded-lg border border-border bg-card group">
                <CardItem
                  translateZ={25}
                  className="flex flex-[7] flex-col justify-between p-10"
                >
                  <div className="flex flex-col gap-5">
                    <p className="w-max border-b border-border font-mono text-muted-foreground">
                      # Bestselling Template
                    </p>
                    <h1 className="text-[35px] font-semibold">
                      {bundle.title}
                    </h1>
                    <p className="text-[18px] font-medium text-muted-foreground md:text-[20px]">
                      {bundle.content}
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <Link
                      href="/gumroad/basic-bundle"
                      className="w-max rounded-lg bg-primary px-9 py-4 text-center font-semibold text-primary-foreground transition-all duration-500"
                    >
                      Get Full Bundle
                    </Link>
                    <div
                      href="/gumroad/basic-bundle"
                      className="w-max font-mono rounded-lg bg-red-600 dark:bg-red-700 px-4 py-4 text-center font-semibold text-foreground transition-all duration-500"
                    >
                      Free
                    </div>
                  </div>
                </CardItem>
                <CardItem translateZ={50} className="flex-[4]">
                  <div className="h-full w-full group-hover:p-5 transition-all duration-500">
                    <Image
                      src={bundle.image}
                      width={1080}
                      height={1080}
                      alt="Basic Madness Bundle"
                      className="rounded-r-lg group-hover:rounded-lg transition-all duration-500"
                    />
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>
      <section
        id="popular"
        className="relative flex items-center justify-center pt-24"
      >
        <div className="z-[5] h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div className="flex-1">
              <div className="flex flex-row items-center justify-between gap-6">
                <h1 className="text-[26px] font-semibold xl:text-[30px]">
                  <BadgeCheck className="mb-1 inline-flex size-[30px] md:mb-2 md:size-[32px]" />{" "}
                  Most Popular
                </h1>
                <Link href="/products">
                  <button className="group font-mono rounded-lg border border-border bg-card px-4 py-2 font-semibold transition-all duration-500 hover:bg-secondary">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
              {Object.keys(products).map(
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
        className="relative flex items-center justify-center pt-24"
      >
        <div className="z-[5] h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div className="flex-1">
              <div className="flex flex-row items-center justify-between gap-6">
                <h1 className="text-[26px] font-semibold xl:text-[30px]">
                  <Boxes className="mb-1 inline-flex size-[30px] md:mb-2 md:size-[32px]" />{" "}
                  Template Bundles
                </h1>
                <Link href="/products">
                  <button className="group font-mono rounded-lg border border-border bg-card px-4 py-2 font-semibold transition-all duration-500 hover:bg-secondary">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
              {Object.keys(products).map(
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
        className="relative flex items-center justify-center pt-24"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div>
              <div className="flex flex-col gap-6">
                <h1 className="text-center text-[35px] font-semibold md:text-[42px]">
                  Three Steps, Three Minutes
                </h1>
                <p className="text-center text-[18px] font-medium text-muted-foreground md:text-[20px]">
                  Start using Notion without having to setup everything from
                  scratch.
                </p>
              </div>
            </div>
            <div className="mx-10 flex flex-col items-center justify-between xl:mb-5 xl:flex-row">
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
                className="group mb-7 flex flex-col items-center gap-5 xl:mb-0"
              >
                <div className="w-max cursor-pointer font-mono text-[150px] font-semibold text-muted-foreground transition-all duration-500 group-hover:-translate-y-4">
                  1
                </div>
                <h3 className="text-[18px] font-semibold md:text-[20px]">
                  Pick a template
                </h3>
                <h3 className="max-w-[280px] text-center text-[14px] text-muted-foreground md:text-[16px]">
                  Browse for a template that fits your needs.
                </h3>
              </motion.div>
              <div>
                <ChevronsRight
                  className="h-20 w-20 rotate-90 xl:rotate-0"
                  color="var(--foreground)"
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
                className="group mb-7 flex flex-col items-center gap-5 xl:mb-0"
              >
                <div className="w-max cursor-pointer font-mono text-[150px] font-semibold text-muted-foreground transition-all duration-500 group-hover:-translate-y-4">
                  2
                </div>
                <h3 className="text-[18px] font-semibold md:text-[20px]">
                  Checkout securely
                </h3>
                <h3 className="max-w-[280px] text-center text-[14px] text-muted-foreground md:text-[16px]">
                  Put your email to receive a receipt and complete your
                  purchase.
                </h3>
              </motion.div>
              <div>
                <ChevronsRight
                  className="h-20 w-20 rotate-90 xl:rotate-0"
                  color="var(--foreground)"
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
                className="group mb-7 flex flex-col items-center gap-5 xl:mb-0"
              >
                <div className="w-max cursor-pointer font-mono text-[150px] font-semibold text-muted-foreground transition-all duration-500 group-hover:-translate-y-4">
                  3
                </div>
                <h3 className="text-[18px] font-semibold md:text-[20px]">
                  Duplicate to Notion
                </h3>
                <h3 className="max-w-[280px] text-center text-[14px] text-muted-foreground md:text-[16px]">
                  Open the link and duplicate it to your Notion account.
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="reviews"
        className="relative flex items-center justify-center pt-24"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <h1 className="text-center text-[35px] font-semibold md:text-[42px]">
                  My clients get results
                </h1>
                <p className="text-center text-[18px] font-medium text-muted-foreground md:text-[20px]">
                  Will you be the next one?
                </p>
              </div>
            </div>
            <div className="mx-10 flex flex-wrap items-center justify-center gap-10 md:flex-row md:gap-[15%]">
              {Object.keys(stats).map((key, index) => (
                <div className="flex flex-1 flex-col items-center" key={index}>
                  <div className="w-max font-mono text-[30px] font-semibold tabular-nums md:text-[35px]">
                    <Lazy fallback="0+">
                      <Incrementor
                        number={stats[key]}
                        add={stats[key] / 50}
                        interval={20}
                      />
                      +
                    </Lazy>
                  </div>
                  <h3 className="text-[18px] text-muted-foreground md:text-[20px]">
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
        className="relative flex items-center justify-center pt-24"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <h1 className="text-center text-[35px] font-semibold md:text-[42px]">
                  Frequently Asked Questions
                </h1>
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
      <section
        id="cta"
        className="relative flex items-center justify-center pt-24"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <h1 className="text-center text-[40px] font-semibold md:text-[60px]">
                  Boost your{" "}
                  <span className="text-muted-foreground">productivity</span>{" "}
                  and organization
                </h1>
                <p className="text-center text-[18px] font-medium text-muted-foreground md:text-[20px]">
                  Discover the best Notion Templates to help you stay organized
                  and productive.
                </p>
              </div>
              <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-6">
                <Link
                  href="/products"
                  className="rounded-lg border border-border bg-primary px-9 py-4 text-center font-semibold text-primary-foreground transition-all duration-500 md:text-[30px]"
                >
                  Explore Templates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
