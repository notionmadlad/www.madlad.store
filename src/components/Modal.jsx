"use client";

import { createPortal } from "react-dom";

export function Modal({ children }) {
  return createPortal(
    <div className="modal-backdrop">
      <div className="absolute bottom-0 left-0 right-0 top-0 overflow-y-scroll">
        {children}
      </div>
    </div>,
    document.getElementsByClassName("modal")[0],
  );
}
