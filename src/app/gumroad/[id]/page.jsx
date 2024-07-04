import Script from "next/script";
import Link from "next/link";

export default function Gumroad({ params }) {
  return (
    <>
      <section className="z-10 relative flex items-center justify-center pt-36">
        <div className="h-full w-full max-w-6xl">
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
