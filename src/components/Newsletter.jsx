import { AtSign } from "lucide-react";

const dataOptions = {
  settings: {
    after_subscribe: {
      action: "message",
      success_message:
        "Success! Now check your email to confirm your subscription.",
      redirect_url: "",
    },
    analytics: {
      google: null,
      fathom: null,
      facebook: null,
      segment: null,
      pinterest: null,
      sparkloop: null,
      googletagmanager: null,
    },
    modal: {
      trigger: "timer",
      scroll_percentage: null,
      timer: 5,
      devices: "all",
      show_once_every: 15,
    },
    powered_by: {
      show: true,
      url: "https://convertkit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic",
    },
    recaptcha: {
      enabled: false,
    },
    return_visitor: {
      action: "show",
      custom_content: "",
    },
    slide_in: {
      display_in: "bottom_right",
      trigger: "timer",
      scroll_percentage: null,
      timer: 5,
      devices: "all",
      show_once_every: 15,
    },
    sticky_bar: {
      display_in: "top",
      trigger: "timer",
      scroll_percentage: null,
      timer: 5,
      devices: "all",
      show_once_every: 15,
    },
  },
  version: "5",
};

export default function Newsletter() {
  return (
    <form
      action="https://app.convertkit.com/forms/6443878/subscriptions"
      method="post"
      data-sv-form="6443878"
      data-uid="06d513978e"
      data-format="inline"
      data-version="5"
      data-options={JSON.stringify(dataOptions)}
      data-element="fields"
      data-stacked="false"
      className="w-full flex md:flex-row flex-col gap-5"
    >
      <label className="relative rounded-lg border border-border group flex overflow-hidden w-full md:max-w-lg">
        <AtSign className="absolute py-2 pl-5 h-14 w-11 left-0 group-focus-within:-left-11 group-focus-within:h-14 overflow-hidden transition-all duration-300" />
        <input
          type="email"
          name="email_address"
          required
          className="py-4 pl-16 group-focus-within:pl-9 pr-9 w-full bg-input outline-none transition-all duration-300 placeholder:text-foreground"
          placeholder="Enter your email..."
        />
      </label>
      <button
        data-element="submit"
        className="py-4 px-9 bg-primary transition-all duration-500 rounded-lg font-semibold text-primary-foreground"
      >
        Sign Up
      </button>
    </form>
  );
}
