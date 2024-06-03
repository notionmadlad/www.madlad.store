import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

function ProductCard({ product }) {
  return (
    <CardContainer>
      <CardBody className="group/card overflow- group flex cursor-pointer flex-col rounded-lg border border-border bg-card">
        <Link href={`/gumroad/${product.gumroad}`}>
          <CardItem
            translateZ={50}
            className="flex w-full justify-center transition-all duration-500 group-hover:bg-transparent group-hover:p-5"
          >
            <Image
              src={product.image}
              width={264}
              height={264}
              alt="logo"
              className="w-full rounded-t-[10px] transition-all duration-500 group-hover:rounded-lg"
            />
          </CardItem>
          <CardItem translateZ={25} className="flex flex-col gap-5 p-6">
            <CardItem
              translateZ={25}
              className="flex flex-col justify-between gap-2 font-semibold"
            >
              <p className="text-[20px]">{product.title}</p>
              <p className="w-max rounded-md bg-secondary px-2.5 py-1 font-mono text-[16px]">
                {product.price}
              </p>
            </CardItem>
            <p className="text-muted-foreground">{product.content}</p>
          </CardItem>
        </Link>
      </CardBody>
    </CardContainer>
  );
}

export default ProductCard;
