import { generateURL } from "@/lib/utils";
import { AppWindow, Banknote, Check, Mail, UserRoundCheck } from "lucide-react";
import Link from "next/link";

export const navLinks = {
  Home: "/",
  Products: "/products",
  About: "/about",
  Contact: "/contact",
};

export const stats = {
  Buyers: 100,
  Downloads: 200,
  Followers: 900,
};

export const faqs = {
  q1: {
    title: (
      <span>
        <AppWindow className="mr-1 inline-flex size-[26px]" /> What is Notion?
      </span>
    ),
    content: (
      <span>
        Notion is an all-in-one workspace that allows you to take notes, add
        tasks, manage projects, and get organized. Notion has a versatile design
        for getting things done, whether you&apos;re writing or planning.
      </span>
    ),
  },
  q2: {
    title: (
      <span>
        <Banknote className="mr-1 inline-flex size-[26px]" /> Will I need to pay
        for a Notion subscription?
      </span>
    ),
    content: (
      <span>
        No, Notion does offer a free personal plan with no strings attached.
      </span>
    ),
  },
  q3: {
    title: (
      <span>
        <Check className="mr-1 inline-flex size-[26px]" /> How will I receive a
        template?
      </span>
    ),
    content: (
      <span>
        After purchase, you&apos;ll receive a link to duplicate the Notion
        template to your workspace.
      </span>
    ),
  },
  q4: {
    title: (
      <span>
        <UserRoundCheck className="mr-1 inline-flex size-[26px]" /> How can I
        become an affiliate?
      </span>
    ),
    content: (
      <span>
        <Link
          href="https://gumroad.madlad.store/affiliates"
          className="underline"
        >
          Click here
        </Link>{" "}
        to fill out the affiliate form.
      </span>
    ),
  },
  q5: {
    title: (
      <span>
        <Mail className="mr-1 inline-flex size-[26px]" /> Have more questions?
      </span>
    ),
    content: (
      <span>
        Send your question at{" "}
        <Link
          href="mailto:martin.nicolai.online@gmail.com"
          className="underline"
        >
          martin.nicolai.online@gmail.com
        </Link>
        .
      </span>
    ),
  },
};

export const products = {
  p1: {
    title: "Basic Madness Bundle",
    content: "Get started with Notion with ready-to-use free templates.",
    price: "FREE",
    image: "/products/basic-bundle.png",
    banner: "/products/basic-bundle-banner.png",
    showcase: ["new", "popular", "bundles"],
    gumroad: "basic-bundle",
  },
  p2: {
    title: "ECommerce Madness",
    content: "Organize and manage your ECommerce business.",
    price: "FREE",
    image: "/products/ecommerce.png",
    showcase: ["new", "popular"],
    gumroad: "ecommerce",
  },
  p3: {
    title: "Project Madness",
    content: "Organize, manage and take control of all your projects.",
    price: "FREE",
    image: "/products/project.png",
    showcase: ["new"],
    gumroad: "project",
  },
  p4: {
    title: "Social Media Madness",
    content: "Create and organize all your Social Media accounts and posts.",
    price: "FREE",
    image: "/products/social-media.png",
    showcase: ["new"],
    gumroad: "social-media",
  },
  p5: {
    title: "Solopreneur Madness",
    content: "Organize and manage your Solopreneur business.",
    price: "FREE",
    image: "/products/solopreneur.png",
    showcase: ["new"],
    gumroad: "solopreneur",
  },
};

export const footerLinks = {
  Information: {
    "Terms of Service": generateURL("local:tos"),
    "Privacy Policy": generateURL("local:privacy"),
    FAQs: generateURL("local:faqs"),
  },
  Socials: {
    "Twitter (X)": generateURL("twitter"),
    Instagram: generateURL("linkedin"),
    LinkedIn: generateURL("linkedin"),
  },
  Store: {
    Gumroad: generateURL("gumroad"),
    Affiliates: generateURL("affiliates"),
  },
};
