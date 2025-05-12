import logo from "../assets/logo.svg"
import downArrow from "../assets/down-arrow.svg"
import { Button } from "./button"
import menuIcon from "../assets/menu.png"

type NavbarTemplateProps = {
  children: React.ReactNode
}

const NavbarTemplate = ({ children }: NavbarTemplateProps) => {
  return (
    <div className="p-1 max-sm:px-4 bg-white flex items-center justify-center gap-1 box-border border rounded-xl border-gray-300 shadow-[0_4px_6px_0_rgba(67,46,134,0.04)]">
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
    "flex items-center justify-center text-md hover:bg-gray-100 py-2 px-2.5 rounded-lg cursor-pointer gap-1"
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
    { name: "Product", hasDropdown: true},
    { name: "Solutions", hasDropdown: true},
    { name: "Resources", hasDropdown: true},
    { name: "Pricing", href: "#", hideBelow: "lg" },
    { name: "Enterprise", href: "#", hideBelow: "xl" },
  ]

  return (
    <div className="flex justify-center min-h-20 items-center w-full sticky top-0 z-20 ">
      <div className="flex items-stretch justify-between w-[70%] max-xl:w-[90%]">
        <div className="flex items-center justify-center gap-3">
          <NavbarTemplate>
            <div className="flex items-center justify-center gap-2 py-1.5 px-2.5 max-sm:px-0">
              <div className="w-20 max-sm:w-22">
                <img src={logo} alt="logo" />
              </div>
              <div className="w-23 border-l border-gray-300 leading-3 max-sm:hidden">
                <p className="text-[10px] pl-2">The everything app, for work.</p>
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

        <div className="flex max-lg:hidden items-center justify-center gap-2">
          <NavbarTemplate>
            <NavbarButton buttonName="Contact Sales" href="#" />
          </NavbarTemplate>
          <NavbarTemplate>
            <NavbarButton buttonName="Log in" href="#" />
            <Button href="#" text="Sign Up" fontSize="15px" />
          </NavbarTemplate>
        </div>
        <div className="hidden max-lg:flex items-stretch justify-center gap-2">
            <Button href="#" text="Sign up" fontSize="14px" />
            <NavbarTemplate>
              <img src={menuIcon} alt="menu" className="w-4 h-4 " />
            </NavbarTemplate>
          </div>
      </div>
    </div>
  )
}
