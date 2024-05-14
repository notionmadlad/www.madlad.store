"use client";

import { Modal } from "@/components/Modal";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Script from "next/script";

export default function ModalRoute({ params }) {
  const router = useRouter();
  return (
    <Modal>
      <div className="py-20 px-30 gumroad-iframe relative">
        <div className="fixed top-3 right-7 p-2 bg-main-800 border border-main-600 rounded-[10px] cursor-pointer hover:bg-main-700" onClick={router.back}>
          <X className="w-8 h-8" />
        </div>
        <Script src="https://gumroad.com/js/gumroad-embed.js" />
        <div className="gumroad-product-embed"><Link href={`https://notionmadlad.gumroad.com/l/${params.id}`} /></div>
      </div>
    </Modal>
  );
}