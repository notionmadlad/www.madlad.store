"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }) {
  const router = useRouter();
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const onDismiss = () => {
    router.back();
  };

  return createPortal(
    <div className="modal-backdrop">
      <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-scroll">
        {children}
      </div>
    </div>,
    document.getElementsByClassName("modal")[0],
  );
}
