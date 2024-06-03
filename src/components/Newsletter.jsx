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
      className="flex w-full flex-col gap-5 md:flex-row"
    >
      <label className="group relative flex w-full overflow-hidden rounded-lg border border-border md:max-w-lg">
        <AtSign className="absolute left-0 h-14 w-11 overflow-hidden py-2 pl-5 transition-all duration-500 group-focus-within:-left-11 group-focus-within:h-14" />
        <input
          type="email"
          name="email_address"
          required
          className="w-full bg-input py-4 pl-16 pr-9 outline-none transition-all duration-500 placeholder:text-foreground group-focus-within:pl-9"
          placeholder="Enter your email..."
        />
      </label>
      <button
        data-element="submit"
        className="rounded-lg bg-primary px-9 py-4 font-semibold text-primary-foreground transition-all duration-500"
      >
        Sign Up
      </button>
    </form>
  );
}
