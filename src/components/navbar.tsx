import logo from "../assets/logo.svg"
import downArrow from "../assets/down-arrow.svg"
import { Button } from "./button"
import menuIcon from "../assets/menu.png"

type NavbarTemplateProps = {
  children: React.ReactNode
}

const NavbarTemplate = ({ children }: NavbarTemplateProps) => {
  return (
    <div className="p-1 bg-white flex items-center justify-center h-[47px] max-sm:h-[42px] gap-1 border rounded-[15px] border-[#ceceea] shadow-[0_4px_6px_0_rgba(67,46,134,0.04)]">
      {children}
    </div>
  )
}

type NavbarButtonProps = {
  buttonName: string
  hasDropdown?: boolean
  href?: string
  hideBelow?: "sm" | "md" | "lg" | "xl"
}

const NavbarButton = ({ buttonName, hasDropdown = false, href, hideBelow }: NavbarButtonProps) => {
  const content = (
    <>
      <span className="text-sm text-[#24223e]">{buttonName}</span>
      {hasDropdown && <img src={downArrow} alt="dropdown" className="w-5 h-5" />}
    </>
  )

  const baseClasses =
    "flex items-center justify-center text-md hover:bg-gray-100 px-[12px] whitespace-nowrap rounded-lg cursor-pointer gap-1"
  const responsiveClass = `max-${hideBelow}:hidden`;
  return href ? (
    <a href={href} className={`${baseClasses} ${responsiveClass}`}>
      {content}
    </a>
  ) : (
    <button className={baseClasses}>{content}</button>
  )
}

export const Navbar = () => {
  const navItems = [
    { name: "Product", hasDropdown: true },
    { name: "Solutions", hasDropdown: true },
    { name: "Resources", hasDropdown: true },
    { name: "Pricing", href: "#", hideBelow: "lg" },
    { name: "Enterprise", href: "#", hideBelow: "xl" },
  ]

  return (
    <div className="flex justify-center min-h-20 items-center w-full sticky top-0 z-20">
      <div className="flex items-center justify-between w-[72%] h-full max-xl:w-[90%]">
        <div className="flex items-center justify-center gap-2.5">
          <NavbarTemplate>
            <div className="flex items-center justify-center gap-2 px-2.5">
              <div className="w-21 max-sm:w-22">
                <img src={logo} alt="logo" />
              </div>
              <div className="border-l border-gray-300 max-sm:hidden">
                <p className="text-[10px] pl-2 w-22 leading-3">The everything app, for work.</p>
              </div>
            </div>
          </NavbarTemplate>

          <div className="max-lg:hidden">
            <NavbarTemplate>
              {navItems.map((item) => (
                <NavbarButton
                  key={item.name}
                  buttonName={item.name}
                  hasDropdown={item.hasDropdown}
                  href={item.href}
                  hideBelow={item.hideBelow as "sm" | "md" | "lg" | "xl"}
                />
              ))}
            </NavbarTemplate>
          </div>
        </div>

        <div className="flex max-lg:hidden items-center justify-center gap-2.5">
          <NavbarTemplate>
            <NavbarButton buttonName="Contact Sales" href="#" />
          </NavbarTemplate>
          <NavbarTemplate>
            <NavbarButton buttonName="Log in" href="#" />
            <Button href="#" text="Sign Up" fontSize="14px" />
          </NavbarTemplate>
        </div>
        <div className="hidden max-lg:flex items-center h-full justify-center gap-1">
          <Button href="#" text="Sign up" fontSize="14px" />
          <NavbarTemplate>
            <div className="px-2.5">
              <img src={menuIcon} alt="menu" className="w-4 h-4 " />
            </div>
          </NavbarTemplate>
        </div>
      </div>
    </div>
  )
}
