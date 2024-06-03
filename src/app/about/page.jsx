import { Hand } from "lucide-react";

export default function Home() {
  return (
    <>
      <section
        id="how-to"
        className="relative flex items-center justify-center pt-36"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div>
              <div className="flex flex-col gap-6">
                <h1 className="text-center text-[40px] font-semibold md:text-[60px]">
                  <Hand className="mb-1 inline-flex size-[30px] md:mb-2 md:size-[50px]" />{" "}
                  Hello there, I&#39;m Martin
                </h1>
                <p className="text-center text-[35px] font-medium text-muted-foreground md:text-[42px]">
                  Creator of Coding Madlad
                </p>
                <br />
                <div className="flex flex-col gap-8">
                  <p className="text-[18px] text-foreground xl:text-[20px]">
                    I&#39;m High School student, currently sophmore, who found a
                    passion in programming and productivity. I had been a
                    programmer for over 4 years when I stumbled across Notion.
                  </p>
                  <p className="text-[18px] text-foreground xl:text-[20px]">
                    The power of this tool surprised me. I always liked building
                    websites and application to simplify our user&#39;s life.
                    Though coding is still my go-to option to build complex
                    projects, Notion is still a really important and useful tool
                    for my daily life.
                  </p>
                  <p className="text-[18px] text-foreground xl:text-[20px]">
                    Many struggle to be organized and productive, and I
                    understand why. So, if I can help hundreds of people, why
                    shouldn&#39;t I? This is why Coding Madlad was created.
                  </p>
                  <p className="text-[18px] text-foreground xl:text-[20px]">
                    My goal is to help individuals get organized with Notion. In
                    the past year I have helped over 100 people get organized
                    with Notion. Notion is designed to simplify your life. And
                    I&#39;m here to assist you.
                  </p>
                  <p className="text-[18px] text-foreground xl:text-[20px]">
                    As I mentioned earlier, along with Notion, I also build
                    websites and help clients display their work like a pro.
                  </p>
                  <p className="text-[18px] text-foreground xl:text-[20px]">
                    Let&#39;s work together to bring fullfillment in your life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
