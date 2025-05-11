type Button = {
    href: string
    text: string
    fontSize: string
}
export function Button({ href, text ,fontSize}:Button) {
  const gradient =
    "linear-gradient(180deg, rgba(243, 238, 255, 0), rgba(243, 238, 255, 0.04)), linear-gradient(100deg, #7612fa -6.36%, #fa12e3 60.18%)";

  return (
    <a
      href={href}
      className={`py-1.5 px-2.5 rounded-lg font-semibold whitespace-nowrap text-white`}
      style={{
        background: gradient,
        fontSize: fontSize
      }}
    >
      {text}
    </a>
  );
}

