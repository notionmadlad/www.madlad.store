import { Suspense } from "react";

export default function ProductsLayout({ children }) {
  return <Suspense>{children}</Suspense>;
}
