import { footerLinks } from "@/config/main";
import Image from "next/image";
import Link from "next/link";
import { UserRoundPlus } from "lucide-react";
import dynamic from "next/dynamic";

const Newsletter = dynamic(() => import("./Newsletter"), { ssr: false });

export default function Footer() {
  return (
    <>
      <div className="relative flex items-center justify-center pt-24">
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div>
              <div className="flex flex-col gap-6">
                <h1 className="text-[26px] font-semibold xl:text-[30px]">
                  <UserRoundPlus className="mb-1 inline-flex size-[26px] md:mb-2 md:size-[30px]" />{" "}
                  Join my Newsletter
                </h1>
                <p className="max-w-3xl text-[18px] font-medium text-muted-foreground md:text-[20px]">
                  A place where you would have access to powerful Notion
                  templates, resources and much more.
                </p>
              </div>
            </div>
            <Newsletter />
          </div>
        </div>
      </div>
      <footer className="relative flex items-center justify-center pt-24">
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col flex-wrap justify-between gap-10 md:flex-row">
            <div className="max-w-lg flex-1">
              <div className="flex items-center gap-5">
                <Image
                  src="/madlad-logo.png"
                  alt="logo"
                  width={125}
                  height={25}
                  className="h-[50px] w-[50px] rounded-full border border-border"
                />
                <h1 className="text-[20px] font-semibold">The Madlad Store</h1>
              </div>
              <p className="mt-5 text-[20px] text-foreground">
                Boost Your Productivity with The Notion Madness
              </p>
              <p className="mt-5 text-muted-foreground">
                Discover the best Notion Templates to help you stay organized
                and productive.
              </p>
            </div>
            <div className="flex flex-1 flex-wrap justify-between gap-10 *:flex *:flex-col *:gap-2">
              {Object.keys(footerLinks).map((key, index) => (
                <div key={index}>
                  <h4 className="mb-2 text-[18px] font-medium">{key}</h4>
                  {Object.keys(footerLinks[key]).map((_key, index) => (
                    <Link
                      href={footerLinks[key][_key]}
                      className="text-muted-foreground"
                      key={index}
                    >
                      {_key}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mx-10 mt-5 font-mono border-t border-border pb-12 pt-5 text-[18px] font-semibold">
            ©️ Coding Madlad 2023 - {new Date().getFullYear()}. All right
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
