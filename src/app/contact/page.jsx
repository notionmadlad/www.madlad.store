"use client";

import { useFormData } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { AtSign, Cog, List, Send, User } from "lucide-react";

function Input({ icon: Icon, inputProps: { className: inputClassName, ...inputProps }, wrapperProps: { className: WrapperClassName, ...wrapperProps } = {} }) {
  return (
    <div className={cn("relative rounded-[10px] border border-main-600 group flex overflow-hidden w-full", WrapperClassName)} {...wrapperProps}>
      <Icon className="absolute py-2 pl-5 h-14 w-11 left-0 group-focus-within:-left-11 group-focus-within:h-14 overflow-hidden transition-all duration-300" />
      <input className={cn("py-4 pl-16 group-focus-within:pl-9 pr-9 w-full bg-main-800 outline-none group-hover:bg-main-700 transition-all duration-300 placeholder:text-main-50", inputClassName)} {...inputProps} />
    </div>
  );
}
function Datalist({ icon: Icon, inputProps: { className: inputClassName, id: inputId, ...inputProps }, wrapperProps: { className: WrapperClassName, ...wrapperProps } = {}, children }) {
  return (
    <div className={cn("relative rounded-[10px] border border-main-600 group flex overflow-hidden w-full", WrapperClassName)} {...wrapperProps}>
      <Icon className="absolute py-2 pl-5 h-14 w-11 left-0 group-focus-within:-left-11 group-focus-within:h-14 overflow-hidden transition-all duration-300" />
      <input className={cn("py-4 pl-16 group-focus-within:pl-9 pr-5 w-full bg-main-800 outline-none group-hover:bg-main-700 transition-all duration-300 placeholder:text-main-50", inputClassName)} list={inputId} {...inputProps} />
      <datalist id={inputId}>
        {children}
      </datalist>
    </div>
  );
}

function Textarea({ icon: Icon, inputProps: { className: inputClassName, ...inputProps }, wrapperProps: { className: WrapperClassName, ...wrapperProps } = {} }) {
  return (
    <div className={cn("relative rounded-[10px] border border-main-600 group flex overflow-hidden w-full", WrapperClassName)} {...wrapperProps}>
      <Icon className="absolute py-2 pl-5 h-14 w-11 left-0 group-focus-within:-left-11 group-focus-within:h-14 overflow-hidden transition-all duration-300" />
      <textarea className={cn("py-4 pl-16 group-focus-within:pl-9 pr-9 w-full bg-main-800 outline-none group-hover:bg-main-700 transition-all duration-300 placeholder:text-main-50 min-h-14 h-28", inputClassName)} {...inputProps} />
    </div>
  );
}

export default function Home() {
  const handleSubmit = async (formData) => {
    
  }

  const [formRef, state] = useFormData(handleSubmit);
  
  return (
    <>
      <section id="how-to" className="relative flex justify-center items-center pt-36">
        <div className="h-full max-w-6xl w-full">
          <div className="flex gap-10 mx-10 flex-col">
            <div>
              <div className="flex flex-col gap-6">
                <h1 className="font-semibold text-[40px] md:text-[60px] text-center">
                <Send
                    className="inline-flex size-[30px] md:size-[50px] mb-1 md:mb-2" 
                /> Got Questions?
                </h1>
                <p className="font-medium text-[18px] md:text-[20px] text-main-100 text-center">
                  Drop me a message and I&#39;ll try to reach you ASAP.
                </p>
              </div>
            </div>
            <form ref={formRef} className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              <Input
                icon={User}
                inputProps = {{
                  type: "text",
                  name: "name",
                  placeholder: "Enter your name...",
                  required: true
                }}
              />
              <Input
                icon={AtSign}
                inputProps = {{
                  type: "email",
                  name: "email",
                  placeholder: "Enter your email...",
                  required: true
                }}
              />
              <Datalist
                icon={Cog}
                inputProps = {{
                  type: "text",
                  name: "reason",
                  placeholder: "Enter your reason for contact...",
                  required: true,
                  id: "reason"
                }}
                wrapperProps={{
                  className: "md:col-span-2 xl:col-span-1"
                }}
              >
                <option value="" disabled>Select topic of concern...</option>
                <option value="General">General</option>
                <option value="Product inquiry" />
                <option value="Template request" />
                <option value="Did not receive link" />
                <option value="Support" />
                <option value="Affiliates" />
                <option value="Other inquiry" />
              </Datalist>
              <Textarea
                icon={List}
                inputProps = {{
                  name: "reason",
                  placeholder: "Enter the details for contact...",
                  required: true
                }}
                wrapperProps={{
                  className: "md:col-span-2 xl:col-span-3"
                }}
              />
              <button type="submit" disabled={state.pending} className="disabled:bg-main-100 py-4 px-9 md:col-span-2 xl:col-span-3 bg-main-50 hover:bg-main-50 transition-all duration-500 rounded-[10px] font-semibold text-main-900">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}