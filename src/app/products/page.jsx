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
import { faqs, stats } from "@/config/main";
import ProductCard from "@/components/ProductCard";
import { MotionDiv } from "@/components/Motion";
import { cache } from "@/lib/cache";
import { formatDatabase, queryDatabase } from "@/lib/notion";
import Searchbar from "@/components/Search";
import { Suspense } from "react";

const getProducts = cache(() => queryDatabase().then(formatDatabase), ["/products", "getProducts"], { revalidate: 60 * 60 });

export default async function Products() {
  const database = await getProducts();

  return (
    <>
      <section
        id="home"
        className="z-10 relative flex items-center justify-center pt-36"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-y-10 lg:flex-row">
            <div className="flex-[3]">
              <div className="flex flex-col gap-6">
                <h1 className="text-[38px] font-semibold md:text-[58px]">
                  <Copy className="mb-1 inline-flex size-[30px] md:mb-2 md:size-[50px]" />{" "}
                  Notion{" "}
                  <span className="text-text-muted-foreground">Templates</span>
                </h1>
                <p className="text-[18px] font-medium text-muted-foreground md:text-[20px]">
                  Find Notion templates to meet your needs for every area of
                  life.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-6 md:flex-row">
                <Suspense>
                  <Searchbar />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="new"
        className="z-10 relative flex items-center justify-center pt-24"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div className="flex-1">
              <div className="flex flex-row items-center justify-between gap-6">
                <h1 className="text-[26px] font-semibold xl:text-[30px]">
                  <Sparkles className="mb-1 inline-flex size-[30px] md:mb-2 md:size-[32px]" />{" "}
                  New Templates
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
              {database.map(
                (item) =>
                  item.Tags.find(tag => tag.name === "New") && (
                    <Suspense key={item.Id}>
                      <ProductCard product={item}/>
                    </Suspense>
                  ),
              )}
            </div>
          </div>
        </div>
      </section>
      <section
        id="popular"
        className="z-10 relative flex items-center justify-center pt-24"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div className="flex-1">
              <div className="flex flex-row items-center justify-between gap-6">
                <h1 className="text-[26px] font-semibold xl:text-[30px]">
                  <BadgeCheck className="mb-1 inline-flex size-[30px] md:mb-2 md:size-[32px]" />{" "}
                  Most Popular
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
              {database.map(
                (item) =>
                  item.Tags.find(tag => tag.name === "Popular") && (
                    <Suspense key={item.Id}>
                      <ProductCard product={item}/>
                    </Suspense>
                  ),
              )}
            </div>
          </div>
        </div>
      </section>
      <section
        id="bundles"
        className="z-10 relative flex items-center justify-center pt-24"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div className="flex-1">
              <div className="flex flex-row items-center justify-between gap-6">
                <h1 className="text-[26px] font-semibold xl:text-[30px]">
                  <Boxes className="mb-1 inline-flex size-[30px] md:mb-2 md:size-[32px]" />{" "}
                  Template Bundles
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
              {database.map(
                (item) =>
                  item.Tags.find(tag => tag.name === "Bundle") && (
                    <Suspense key={item.Id}>
                      <ProductCard product={item}/>
                    </Suspense>
                  ),
              )}
            </div>
          </div>
        </div>
      </section>
      <section
        id="how-to"
        className="z-10 relative flex items-center justify-center pt-24"
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
              <MotionDiv
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
                <div className="w-max cursor-pointer text-[150px] font-semibold text-muted-foreground transition-all duration-500 group-hover:-translate-y-4">
                  1
                </div>
                <h3 className="text-[18px] font-semibold md:text-[20px]">
                  Pick a template
                </h3>
                <h3 className="max-w-[280px] text-center text-[14px] text-muted-foreground md:text-[16px]">
                  Browse for a template that fits your needs.
                </h3>
              </MotionDiv>
              <div>
                <ChevronsRight
                  className="h-20 w-20 rotate-90 xl:rotate-0"
                  color="var(--foreground)"
                  width={64}
                  height={64}
                  alt="arrow"
                />
              </div>
              <MotionDiv
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
                <div className="w-max cursor-pointer text-[150px] font-semibold text-muted-foreground transition-all duration-500 group-hover:-translate-y-4">
                  2
                </div>
                <h3 className="text-[18px] font-semibold md:text-[20px]">
                  Checkout securely
                </h3>
                <h3 className="max-w-[280px] text-center text-[14px] text-muted-foreground md:text-[16px]">
                  Put your email to receive a receipt and complete your
                  purchase.
                </h3>
              </MotionDiv>
              <div>
                <ChevronsRight
                  className="h-20 w-20 rotate-90 xl:rotate-0"
                  color="var(--foreground)"
                  width={64}
                  height={64}
                  alt="arrow"
                />
              </div>
              <MotionDiv
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
                <div className="w-max cursor-pointer text-[150px] font-semibold text-muted-foreground transition-all duration-500 group-hover:-translate-y-4">
                  3
                </div>
                <h3 className="text-[18px] font-semibold md:text-[20px]">
                  Duplicate to Notion
                </h3>
                <h3 className="max-w-[280px] text-center text-[14px] text-muted-foreground md:text-[16px]">
                  Open the link and duplicate it to your Notion account.
                </h3>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>
      <section
        id="all"
        className="z-10 relative flex items-center justify-center pt-24"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div className="flex-1">
              <div className="flex flex-row items-center justify-between gap-6">
                <h1 className="text-[26px] font-semibold xl:text-[30px]">
                  <GalleryVerticalEnd className="mb-1 inline-flex size-[30px] md:mb-2 md:size-[32px]" />{" "}
                  All Templates
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
              {database.map(
                (item) => (
                  <Suspense key={item.Id}>
                    <ProductCard product={item}/>
                  </Suspense>
                )
              )}
            </div>
          </div>
        </div>
      </section>
      <section
        id="reviews"
        className="z-10 relative flex items-center justify-center pt-24"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <h1 className="text-center text-[35px] font-semibold md:text-[42px]">
                  Trusted by customers worldwide
                </h1>
              </div>
            </div>
            <div className="mx-10 flex flex-wrap items-center justify-center gap-10 md:flex-row md:gap-[15%]">
              {Object.keys(stats).map((key, index) => (
                <div className="flex flex-1 flex-col items-center" key={index}>
                  <div className="w-max text-[30px] font-semibold tabular-nums md:text-[35px]">
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
        className="z-10 relative flex items-center justify-center pt-24"
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
    </>
  );
}
