"use client";

import { AtSign, Cog, List, Send, User } from "lucide-react";
import { Datalist, Input, Textarea } from "@/components/FormInputs";
import { useFormData } from "@/lib/hooks";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const { toast } = useToast();

  const handleSubmit = async (formData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          reason: formData.get("reason"),
          details: formData.get("details"),
        }),
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
      console.log(error);
      return error;
    }
  };

  const [formRef, state] = useFormData(handleSubmit);

  return (
    <>
      <section
        id="how-to"
        className="relative flex justify-center items-center pt-36"
      >
        <div className="h-full max-w-6xl w-full">
          <div className="flex gap-10 mx-10 flex-col">
            <div>
              <div className="flex flex-col gap-6">
                <h1 className="font-semibold text-[40px] md:text-[60px] text-center">
                  <Send className="inline-flex size-[30px] md:size-[50px] mb-1 md:mb-2" />{" "}
                  Got Questions?
                </h1>
                <p className="font-medium text-[18px] md:text-[20px] text-main-100 text-center">
                  Drop me a message and I&#39;ll try to reach you ASAP.
                </p>
              </div>
            </div>
            <form
              ref={formRef}
              className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
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
                className="disabled:bg-main-100 py-4 px-9 md:col-span-2 xl:col-span-3 bg-main-50 hover:bg-main-50 transition-all duration-500 rounded-[10px] font-semibold text-main-900"
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
