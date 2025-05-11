import logo from "../assets/logo.svg"
import { Button } from "./button"
// import downArrow from "../assets/down-arrow.svg"

type NavbarTemplate = {
  children: React.ReactNode
}

const NavbarTemplate = ({ children }: NavbarTemplate) => {
  return (
    <div className="p-1 bg-white flex items-center justify-center gap-1 box-border border rounded-xl border-gray-300 shadow-[0_4px_6px_0_rgba(67,46,134,0.04)]">
      {children}
    </div>
  )
}

type NavbarButton = {
  buttonName: string
}

const NavbarButton = ({ buttonName }: NavbarButton) => {
  return (
    <button className="flex items-center justify-center text-md hover:bg-gray-100 py-2 px-2.5 rounded-lg cursor-pointer">
      <span className="text-sm text-[#24223e]">{buttonName}</span>
    </button>
  )
}

export const Navbar = () => {
  return (
    <div className="flex justify-center min-h-20 items-center sticky top-0 z-20">
      <div className="flex items-center justify-between w-[75%]">
        <div className="flex items-center justify-center gap-2">
          <NavbarTemplate>
            <div className="flex items-center justify-center gap-2 py-1.5 px-2.5">
              <div className="w-20">
                <img src={logo} alt="logo" />
              </div>
              <div className="w-23 border-l border-gray-300 leading-3">
                <p className="text-[10px] pl-2 ">The everything app, for work.</p>
              </div>
            </div>
          </NavbarTemplate>

          <NavbarTemplate>
            <NavbarButton buttonName="Product" />
            <NavbarButton buttonName="Solutions" />
            <NavbarButton buttonName="Resources" />
            <NavbarButton buttonName="Pricing" />
            <NavbarButton buttonName="Enterprise" />
          </NavbarTemplate>
        </div>

        <div className="flex items-center justify-center gap-2">
          <NavbarTemplate>
            <NavbarButton buttonName="Contact Sales" />
          </NavbarTemplate>
          <NavbarTemplate>
            <NavbarButton buttonName="Log in" />
            <Button href="#" text="Sign up" fontSize="16px" />
          </NavbarTemplate>
        </div>
      </div>
    </div>
  )
}
