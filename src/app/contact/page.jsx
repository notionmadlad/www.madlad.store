"use client";

import { AtSign, Cog, List, Send, User } from "lucide-react";
import { Datalist, Input, Textarea } from "@/components/FormInputs";
import { useFormAction } from "@/lib/hooks";
import { useToast } from "@/components/ui/toast/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = async (formData) => {
    function getData(...a) {
      const o = {};
      a.map((i) => (o[i] = formData.get(i)));
      return JSON.stringify(o);
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: getData("name", "email", "reason", "details"),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      toast({
        description: "Successfully sent a contact request!",
      });
      return data;
    } catch (error) {
      toast({
        description: "Oops! Something went wrong!",
      });
      return error;
    }
  };

  const [formRef, state] = useFormAction(handleSubmit);

  return (
    <>
      <section
        id="contact"
        className="z-10 relative flex items-center justify-center pt-36"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div>
              <div className="flex flex-col gap-6">
                <h1 className="text-center text-[38px] font-semibold md:text-[58px]">
                  <Send className="mb-1 inline-flex size-[30px] md:mb-2 md:size-[50px]" />{" "}
                  Got Questions?
                </h1>
                <p className="text-center text-[18px] font-medium text-foreground md:text-[20px]">
                  Drop me a message and I&apos;ll try to reach you ASAP.
                </p>
              </div>
            </div>
            <form
              ref={formRef}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              <Input
                icon={User}
                inputProps={{
                  type: "text",
                  name: "name",
                  placeholder: "Enter your name...",
                  required: true,
                }}
              />
              <Input
                icon={AtSign}
                inputProps={{
                  type: "email",
                  name: "email",
                  placeholder: "Enter your email...",
                  required: true,
                }}
              />
              <Datalist
                icon={Cog}
                inputProps={{
                  type: "text",
                  name: "reason",
                  placeholder: "Enter your reason for contact...",
                  required: true,
                  id: "reason",
                }}
              >
                <option value="General" />
                <option value="Product inquiry" />
                <option value="Template request" />
                <option value="Did not receive link" />
                <option value="Support" />
                <option value="Affiliates" />
                <option value="Other inquiry" />
              </Datalist>
              <Textarea
                icon={List}
                inputProps={{
                  name: "details",
                  placeholder: "Enter the details for contact...",
                  required: true,
                }}
              />
              <button
                type="submit"
                disabled={state.pending}
                className="rounded-lg bg-primary px-9 py-4 font-semibold text-primary-foreground transition-all duration-500 hover:bg-primary disabled:bg-primary md:col-span-2 xl:col-span-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
