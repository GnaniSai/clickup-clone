type ButtonProps = {
  href: string
  text: string
  fontSize?: string
  width?: string
  withArrow?: boolean
  color?: string
  bgColor?: string
}

export const Button = ({
  href,
  text,
  fontSize = "14px",
  width = "fit",
  withArrow = false,
  color = "white",
  bgColor = "gradient",
}: ButtonProps) => {
  const defaultButtonStyle = `${fontSize === "18px" ? "py-4 px-7" : "p-3"} ${width === "full" ? "w-full" : "w-fit"
    } flex items-center gap-2 justify-center h-full rounded-[10px] text-${color} bg-${bgColor} whitespace-nowrap tracking-tight font-bold shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]`;


  const gradient =
    "linear-gradient(100deg, #40ddff -6.08%, #7612fa 25.08%, #fa12e3)";

  return (
    <a
      href={href}
      className={`${defaultButtonStyle} duration-200 ease-[cubic-bezier(0.5,0,0.5,1)] delay-0 transform hover:translate-y-[2px]`}
      style={{
        ...(bgColor === "gradient" ? { background: gradient } : {}),
        fontSize,
        lineHeight: "1",
      }}
    >
      {text}
      {withArrow && (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l5 5m0 0l-5 5m5-5H3"
          />
        </svg>
      )}
    </a>
  );
};
