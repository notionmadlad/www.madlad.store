import { Copy, Search } from "lucide-react";
import { Suspense } from "react";

function Fallback() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center pt-36"
    >
      <div className="h-full w-full max-w-6xl">
        <div className="mx-10 flex flex-col gap-y-10 lg:flex-row">
          <div className="flex-[3]">
            <div className="flex flex-col gap-6">
              <h1 className="text-[40px] font-semibold md:text-[60px]">
                <Copy className="mb-1 inline-flex size-[30px] md:mb-2 md:size-[50px]" />{" "}
                Notion{" "}
                <span className="text-text-muted-foreground">Templates</span>
              </h1>
              <p className="text-[18px] font-medium text-muted-foreground md:text-[20px]">
                Find Notion templates to meet your needs for every area of life.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-6 md:flex-row">
              <label className="group relative flex w-full overflow-hidden rounded-lg border border-border md:max-w-lg">
                <Search className="absolute left-0 h-14 w-11 overflow-hidden py-2 pl-5 transition-all duration-500 group-focus-within:-left-11 group-focus-within:h-14" />
                <input
                  className="w-full bg-input py-4 pl-16 pr-9 outline-none transition-all duration-500 placeholder:text-foreground group-focus-within:pl-9"
                  placeholder="Search for templates..."
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductsLayout({ children }) {
  return <Suspense fallback={<Fallback />}>{children}</Suspense>;
}
