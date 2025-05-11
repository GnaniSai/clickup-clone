type Button = {
    href: string
    text: string
    fontSize?: string
    width?: string
}
export function Button({ href, text ,fontSize="14px",width="fit"}:Button) {
  const gradient =
    "linear-gradient(100deg, #40ddff -6.08%, #7612fa 25.08%, #fa12e3)";

  return (
    <a
      href={href}
      className={`${fontSize === "18px" ? "py-4 px-7" : "p-3"} ${width === "full" ? "w-full" : "w-fit"} transition-shadow duration-200 ease-in-out rounded-[10px] tracking-tight text-md font-bold whitespace-nowrap text-white`}
      style={{
        background: gradient,
        fontSize: fontSize,
        boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.15)",
        lineHeight: "1"
      }}
    >
      {text}
    </a>
  );
}

