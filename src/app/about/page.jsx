import { Hand } from "lucide-react";

export default function Home() {
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
                  <Hand className="inline-flex size-[30px] md:size-[50px] mb-1 md:mb-2" />{" "}
                  Hello there, I&#39;m Martin
                </h1>
                <p className="font-medium text-[35px] md:text-[42px] text-main-200 text-center">
                  Creator of Coding Madlad
                </p>
                <br />
                <div className="flex flex-col gap-8">
                  <p className="text-[18px] xl:text-[20px] text-main-100">
                    I&#39;m High School student, currently sophmore, who found a
                    passion in programming and productivity. I had been a
                    programmer for over 4 years when I stumbled across Notion.
                  </p>
                  <p className="text-[18px] xl:text-[20px] text-main-100">
                    The power of this tool surprised me. I always liked building
                    websites and application to simplify our user&#39;s life.
                    Though coding is still my go-to option to build complex
                    projects, Notion is still a really important and useful tool
                    for my daily life.
                  </p>
                  <p className="text-[18px] xl:text-[20px] text-main-100">
                    Many struggle to be organized and productive, and I
                    understand why. So, if I can help hundreds of people, why
                    shouldn&#39;t I? This is why Coding Madlad was created.
                  </p>
                  <p className="text-[18px] xl:text-[20px] text-main-100">
                    My goal is to help individuals get organized with Notion. In
                    the past year I have helped over 100 people get organized
                    with Notion. Notion is designed to simplify your life. And
                    I&#39;m here to assist you.
                  </p>
                  <p className="text-[18px] xl:text-[20px] text-main-100">
                    As I mentioned earlier, along with Notion, I also build
                    websites and help clients display their work like a pro.
                  </p>
                  <p className="text-[18px] xl:text-[20px] text-main-100">
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
