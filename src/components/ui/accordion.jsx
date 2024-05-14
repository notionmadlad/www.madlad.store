"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ delay, className, ...props }, ref) => {
  const MotionAccordionItem = motion(AccordionPrimitive.Item);
  return (
      <MotionAccordionItem 
        ref={ref} 
        className={cn("border border-main-600 bg-main-800 hover:bg-main-700 transition-all duration-500 rounded-[10px] text-[18px] w-full max-w-3xl", className)} 
        {...props} 
        initial="hidden"
        whileInView="enter"
        exit="exit"
        variants={{
          hidden: { opacity: 0, x: 0, y: 50 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: -50 }
        }}
        viewport={{ once: true }}
        transition={{ type: "linear", duration: 0.7, delay }}
      />
  )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "z-[1] p-5 flex flex-1 items-center justify-between duration-500 *:text-start transition-all text-[18px] md:text-[20px] font-semibold [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}>
      {children}
      <ChevronDown className="shrink-0 transition-transform duration-500" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="mx-5 mb-5 -mt-5 overflow-hidden text-[14px] md:text-[16px] text-main-200 duration-500 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pt-4", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
