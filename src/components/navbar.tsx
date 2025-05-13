import logo from "../assets/logo.svg"
import downArrow from "../assets/down-arrow.svg"
import { Button } from "./button"
import menuIcon from "../assets/menu.png"

type NavbarTemplateProps = {
  children: React.ReactNode
}

const NavbarTemplate = ({ children }: NavbarTemplateProps) => {
  return (
    <div className="p-1 bg-white flex items-center justify-center h-[47px] max-md:h-[42px] max-md:rounded-[13px] gap-1 border rounded-[15px] border-[#ceceea] max-md:shadow-sm">
      {children}
    </div>
  )
}

type NavbarButtonProps = {
  buttonName: string
  hasDropdown?: boolean
  href?: string 
}

const NavbarButton = ({ buttonName, hasDropdown = false, href }: NavbarButtonProps) => {
  const content = (
    <>
      <span className="text-sm text-[#24223e]">{buttonName}</span>
      {hasDropdown && <div className="w-5 h-5 ">
        <img src={downArrow} alt="dropdown" className="w-full h-full"/>
      </div>}
    </>
  )
  const baseClasses =
    "flex items-center justify-center text-md h-full hover:bg-gray-100 px-[10px] box-border whitespace-nowrap rounded-lg cursor-pointer"
  return href ? (
    <a href={href} className={baseClasses}>
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
    { name: "Pricing", href: "#" },
    { name: "Enterprise", href: "#" },
  ]

  return (
    <div className="flex justify-center min-h-20 items-center w-full sticky top-0 z-20">
     <div className="flex items-center justify-between h-full gap-17 max-lg:gap-5 max-sm:mx-5 max-md:mx-7 max-lg:mx-10 mx-auto max-lg:w-full" >
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
