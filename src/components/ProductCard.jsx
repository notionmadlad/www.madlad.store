"ise client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PinContainer } from "./ui/3d-pin";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

function ProductCard({ delay, product }) {
  return (
    <Link href={`/gumroad/${product.gumroad}`}>
      <motion.div
        initial="hidden"
        whileInView="enter"
        exit="exit"
        variants={{
          hidden: { opacity: 0, x: 0, y: 50 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: -50 },
        }}
        viewport={{ once: true }}
        transition={{ type: "linear", duration: 0.7, delay }}
        className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border border-border bg-card"
      >
        <div className="flex w-full justify-center transition-all duration-500 group-hover:bg-secondary group-hover:p-5">
          <Image
            src={product.image}
            width={264}
            height={264}
            alt="logo"
            className="w-full transition-all duration-300 group-hover:rounded-md"
          />
        </div>
        <div className="flex flex-col gap-5 p-6">
          <div className="flex flex-col justify-between gap-2 font-semibold">
            <p className="text-[20px]">{product.title}</p>
            <p className="w-max rounded-md bg-secondary px-2.5 py-1 text-[16px]">
              {product.price}
            </p>
          </div>
          <p className="text-muted-foreground">{product.content}</p>
        </div>
      </motion.div>
    </Link>
  );
}

function ProductCard3D({ delay, product }) {
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
              className="w-full rounded-t-[10px] transition-all duration-300 group-hover:rounded-lg"
            />
          </CardItem>
          <CardItem translateZ={25} className="flex flex-col gap-5 p-6">
            <CardItem
              translateZ={25}
              className="flex flex-col justify-between gap-2 font-semibold"
            >
              <p className="text-[20px]">{product.title}</p>
              <p className="w-max rounded-md bg-secondary px-2.5 py-1 text-[16px]">
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

export default ProductCard3D;
