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
        <AppWindow className="inline-flex size-[26px] mr-1" /> What is Notion?
      </span>
    ),
    content: (
      <span>
        Notion is an all-in-one workspace that allows you to take notes, add
        tasks, manage projects, and get organized. Notion has a versatile design
        for getting things done, whether you&#39;re writing or planning.
      </span>
    ),
  },
  q2: {
    title: (
      <span>
        <Banknote className="inline-flex size-[26px] mr-1" /> Will I need to pay
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
        <Check className="inline-flex size-[26px] mr-1" /> How will I receive a
        template?
      </span>
    ),
    content: (
      <span>
        After purchase, you&#39;ll receive a link to duplicate the Notion
        template to your workspace.
      </span>
    ),
  },
  q4: {
    title: (
      <span>
        <UserRoundCheck className="inline-flex size-[26px] mr-1" /> How can I
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
        <Mail className="inline-flex size-[26px] mr-1" /> Have more questions?
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
    title: "Template",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: "Free",
    image: "/madlad-logo.png",
    showcase: ["new", "popular", "bundles"],
    gumroad: "ecommerce"
  }
};

export const footerLinks = {
  Information: {
    "Terms of Service": generateURL("local:tos"),
    "Privacy Policy": generateURL("local:privacy"),
    FAQs: generateURL("local:faqs")
  },
  Socials: {
    "Twitter (X)": generateURL("twitter"),
    Instagram: generateURL("linkedin"),
    LinkedIn: generateURL("linkedin"),
  },
  Store: {
    Gumroad: generateURL("gumroad"),
    Affiliates: generateURL("affiliates")
  }
};