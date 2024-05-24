import Script from "next/script";
import Link from "next/link";

export default function Gumroad({ params }) {
  return (
    <>
      <section className="relative flex justify-center items-center pt-36">
        <div className="h-full max-w-6xl w-full">
          <div className="mx-10">
            <Script src="https://gumroad.com/js/gumroad-embed.js" />
            <div className="gumroad-product-embed">
              <Link href={`https://notionmadlad.gumroad.com/l/${params.id}`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
