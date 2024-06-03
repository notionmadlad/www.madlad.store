import { cn } from "@/lib/utils";

export function Input({
  icon: Icon,
  inputProps: { className: inputClassName, ...inputProps },
  wrapperProps: { className: WrapperClassName, ...wrapperProps } = {},
}) {
  return (
    <label
      className={cn(
        "group relative flex w-full overflow-hidden rounded-lg border border-border",
        WrapperClassName,
      )}
      {...wrapperProps}
    >
      <Icon className="absolute left-0 h-14 w-11 overflow-hidden py-2 pl-5 transition-all duration-500 group-focus-within:-left-11 group-focus-within:h-14" />
      <input
        className={cn(
          "w-full bg-input py-4 pl-16 pr-9 outline-none transition-all duration-500 placeholder:text-foreground group-focus-within:pl-9 group-hover:bg-secondary",
          inputClassName,
        )}
        {...inputProps}
      />
    </label>
  );
}
export function Datalist({
  icon: Icon,
  inputProps: { className: inputClassName, id: inputId, ...inputProps },
  wrapperProps: { className: WrapperClassName, ...wrapperProps } = {},
  children,
}) {
  return (
    <label
      className={cn(
        "group relative flex w-full overflow-hidden rounded-lg border border-border md:col-span-2 xl:col-span-1",
        WrapperClassName,
      )}
      {...wrapperProps}
    >
      <Icon className="absolute left-0 h-14 w-11 overflow-hidden py-2 pl-5 transition-all duration-500 group-focus-within:-left-11 group-focus-within:h-14" />
      <input
        className={cn(
          "w-full bg-input py-4 pl-16 pr-5 outline-none transition-all duration-500 placeholder:text-foreground group-focus-within:pl-9 group-hover:bg-secondary",
          inputClassName,
        )}
        list={inputId}
        {...inputProps}
      />
      <datalist id={inputId}>{children}</datalist>
    </label>
  );
}

export function Textarea({
  icon: Icon,
  inputProps: { className: inputClassName, ...inputProps },
  wrapperProps: { className: WrapperClassName, ...wrapperProps } = {},
}) {
  return (
    <label
      className={cn(
        "group relative flex w-full overflow-hidden rounded-lg border border-border md:col-span-2 xl:col-span-3",
        WrapperClassName,
      )}
      {...wrapperProps}
    >
      <Icon className="absolute left-0 h-14 w-11 overflow-hidden py-2 pl-5 transition-all duration-500 group-focus-within:-left-11 group-focus-within:h-14" />
      <textarea
        className={cn(
          "h-28 min-h-14 w-full bg-input py-4 pl-16 pr-9 outline-none transition-all duration-500 placeholder:text-foreground group-focus-within:pl-9",
          inputClassName,
        )}
        {...inputProps}
      />
    </label>
  );
}
