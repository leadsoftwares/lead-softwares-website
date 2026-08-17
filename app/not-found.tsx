import NotFoundContent from "@/components/not-found-content";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist on Lead Softwares.",
  path: "/not-found",
});

export default function NotFound() {
  return <NotFoundContent />;
}
