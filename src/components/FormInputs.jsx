import { cn } from "@/lib/utils";

export function Input({
  icon: Icon,
  inputProps: { className: inputClassName, ...inputProps },
  wrapperProps: { className: WrapperClassName, ...wrapperProps } = {},
}) {
  return (
    <label
      className={cn(
        "relative rounded-[10px] border border-main-600 group flex overflow-hidden w-full",
        WrapperClassName,
      )}
      {...wrapperProps}
    >
      <Icon className="absolute py-2 pl-5 h-14 w-11 left-0 group-focus-within:-left-11 group-focus-within:h-14 overflow-hidden transition-all duration-300" />
      <input
        className={cn(
          "py-4 pl-16 group-focus-within:pl-9 pr-9 w-full bg-main-800 outline-none group-hover:bg-main-700 transition-all duration-300 placeholder:text-main-50",
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
        "md:col-span-2 xl:col-span-1 relative rounded-[10px] border border-main-600 group flex overflow-hidden w-full",
        WrapperClassName,
      )}
      {...wrapperProps}
    >
      <Icon className="absolute py-2 pl-5 h-14 w-11 left-0 group-focus-within:-left-11 group-focus-within:h-14 overflow-hidden transition-all duration-300" />
      <input
        className={cn(
          "py-4 pl-16 group-focus-within:pl-9 pr-5 w-full bg-main-800 outline-none group-hover:bg-main-700 transition-all duration-300 placeholder:text-main-50",
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
        "md:col-span-2 xl:col-span-3 relative rounded-[10px] border border-main-600 group flex overflow-hidden w-full",
        WrapperClassName,
      )}
      {...wrapperProps}
    >
      <Icon className="absolute py-2 pl-5 h-14 w-11 left-0 group-focus-within:-left-11 group-focus-within:h-14 overflow-hidden transition-all duration-300" />
      <textarea
        className={cn(
          "py-4 pl-16 group-focus-within:pl-9 pr-9 w-full bg-main-800 outline-none group-hover:bg-main-700 transition-all duration-300 placeholder:text-main-50 min-h-14 h-28",
          inputClassName,
        )}
        {...inputProps}
      />
    </label>
  );
}
