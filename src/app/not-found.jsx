import Link from "next/link";

export default async function Home() {
  return (
    <>
      <section
        id="404"
        className="z-10 relative flex items-center justify-center pt-36"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <h1 className="text-center text-[38px] font-semibold md:text-[58px]">
                  Page not found
                </h1>
                <p className="text-center text-[18px] font-medium text-muted-foreground md:text-[20px]">
                  Would you like to return back to Home?
                </p>
              </div>
              <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-6">
                <Link
                  href="/"
                  className="rounded-lg bg-primary px-9 py-4 text-center font-semibold text-primary-foreground transition-all duration-500"
                >
                  Go Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
