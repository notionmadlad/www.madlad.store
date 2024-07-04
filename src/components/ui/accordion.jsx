"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(
  ({ delay, className, ...props }, ref) => {
    const MotionAccordionItem = motion(AccordionPrimitive.Item);
    return (
      <MotionAccordionItem
        ref={ref}
        className={cn(
          "w-full max-w-3xl rounded-lg border border-border bg-card text-[18px] transition-all duration-500 hover:bg-secondary",
          className,
        )}
        {...props}
        initial="hidden"
        whileInView="enter"
        exit="exit"
        variants={{
          hidden: { opacity: 0, x: 0, y: 50 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: -50 },
        }}
        viewport={{ once: true }}
        transition={{ type: "linear", duration: 0.7, delay }}
      />
    );
  },
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between p-5 text-[18px] font-semibold transition-all duration-500 *:text-start md:text-[20px] [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown className="shrink-0 transition-transform duration-500" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ),
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="mx-5 -mt-5 mb-5 overflow-hidden text-[14px] text-muted-foreground transition-all duration-500 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down md:text-[16px]"
      {...props}
    >
      <div className={cn("pt-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  ),
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
