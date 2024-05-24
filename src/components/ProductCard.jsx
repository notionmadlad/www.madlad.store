"ise client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCard({ delay, product }) {
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
        className="border border-main-600 bg-main-800 overflow-hidden flex flex-col rounded-[10px] cursor-pointer group"
      >
        <div className="w-full flex justify-center group-hover:p-5 group-hover:bg-main-700 transition-all duration-500">
          <Image
            src={product.image}
            width={264}
            height={264}
            alt="logo"
            className="w-full transition-all duration-300 group-hover:rounded-[5px]"
          />
        </div>
        <div className="flex flex-col gap-5 p-6">
          <div className="flex flex-col gap-2 justify-between font-semibold">
            <p className="text-[20px]">{product.title}</p>
            <p className="text-[16px] w-max px-2.5 py-1 bg-main-700 rounded-[5px]">
              {product.price}
            </p>
          </div>
          <p className="text-main-200">{product.content}</p>
        </div>
      </motion.div>
    </Link>
  );
}
