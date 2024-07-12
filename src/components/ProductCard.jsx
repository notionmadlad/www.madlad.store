"use client";

import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { useSearchParams } from "next/navigation";

function ProductCard({ product }) {
  const searchParams = useSearchParams();
  const productValue = JSON.stringify(Object.values(product)).toLowerCase();
  const dollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return (productValue.includes(searchParams.get("search"))) && (
    <CardContainer className="w-full">
      <CardBody className="group/card w-full group flex cursor-pointer flex-col rounded-lg border border-border bg-card">
        <Link className="flex md:flex-col" href={`/gumroad/${product.Slug[0].plain_text}`}>
          <CardItem
            translateZ={25}
            className="flex flex-1 md:flex-auto w-full justify-center transition-all duration-500 group-hover:bg-transparent md:group-hover:p-5"
          >
            <Image
              src={product.Image[0].file.url}
              width={264}
              height={264}
              alt="logo"
              className="w-full rounded-l-[10px] md:rounded-t-[10px] md:rounded-bl-none transition-all duration-500 group-hover:rounded-lg"
            />
          </CardItem>
          <CardItem translateZ={25} className="flex flex-1 md:flex-auto flex-col gap-5 p-6">
            <CardItem
              translateZ={25}
              className="flex flex-col justify-between gap-2 font-semibold"
            >
              <p className="text-[20px]">{product.Name[0].plain_text}</p>
              <p className="w-max rounded-md bg-secondary px-2.5 py-1 text-[16px]">
                {!product.Price ? "Free" : dollar(product.Price) }
              </p>
            </CardItem>
            <p className="text-muted-foreground">{product.Content[0].plain_text}</p>
          </CardItem>
        </Link>
      </CardBody>
    </CardContainer>
  );
}

export default ProductCard;
