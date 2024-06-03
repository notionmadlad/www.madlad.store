"use client";

import { useRouter } from "next/navigation";
import { Modal } from "@/components/Modal";
import { X } from "lucide-react";
import Script from "next/script";
import Link from "next/link";

export default function ModalParallel({ params }) {
  const router = useRouter();
  return (
    <Modal>
      <div className="px-30 gumroad-iframe relative py-20">
        <div
          className="fixed right-7 top-3 cursor-pointer rounded-lg border border-border bg-background p-2 hover:bg-secondary"
          onClick={router.back}
        >
          <X className="h-8 w-8" />
        </div>
        <Script src="https://gumroad.com/js/gumroad-embed.js" />
        <div className="gumroad-product-embed">
          <Link href={`https://notionmadlad.gumroad.com/l/${params.id}`} />
        </div>
      </div>
    </Modal>
  );
}
