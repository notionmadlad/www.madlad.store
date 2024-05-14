import { footerLinks } from "@/config/main";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "./Newsletter";
import { UserRoundPlus } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="relative flex justify-center items-center pt-24">
        <div className="h-full max-w-6xl w-full">
          <div className="flex gap-10 mx-10 flex-col">
            <div>
              <div className="flex flex-col gap-6">
              <h1 className="font-semibold text-[26px] xl:text-[30px]">
                  <UserRoundPlus className="inline-flex size-[26px] md:size-[30px] mb-1 md:mb-2" /> Join my Newsletter
                </h1>
                <p className="font-medium text-[18px] md:text-[20px] text-main-200 max-w-3xl">
                  A place where you would have access to powerful
                  Notion templates, resources and much more.
                </p>
              </div>
            </div>
            <div>
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
      <footer className="relative flex justify-center items-center pt-24">
        <div className="h-full max-w-6xl w-full">
          <div className="flex flex-col md:flex-row flex-wrap gap-10 mx-10 justify-between">
            <div className="flex-1 max-w-lg">
              <div className="flex gap-5 items-center">
                <Image
                  src="/madlad-logo.png"
                  alt="logo"
                  width={125}
                  height={25}
                  className="w-[50px] h-[50px] rounded-full border border-main-600"
                />
                <h1 className="font-semibold text-[20px]">The Madlad Store</h1>
              </div>
              <p className="text-main-50 text-[20px] mt-5">
                Boost Your Productivity with The Notion Madness
              </p>
              <p className="text-main-200 mt-5">
                Discover the best Notion Templates to help you stay organized and productive.
              </p>
            </div>
            <div className="flex-1 justify-between flex flex-wrap gap-10 *:flex *:flex-col *:gap-2">
              {Object.keys(footerLinks).map((key, index) => (
                <div key={index}>
                  <h4 className="font-medium text-[18px] mb-2">{key}</h4>
                  {Object.keys(footerLinks[key]).map((_key, index) => (
                    <Link href={footerLinks[key][_key]} className="text-main-200" key={index}>{_key}</Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mx-10 border-t border-main-600 pt-5 mt-5 pb-12 text-[18px] font-semibold">
            ©️ Coding Madlad 2023 - {(new Date()).getFullYear()}. All right reserved.
          </div>
        </div>
      </footer>
    </>
  );
}