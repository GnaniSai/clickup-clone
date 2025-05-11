import headerBg from "../assets/header-bg.svg";
import cross from "../assets/banner-close-white.svg";
import { Button } from "./button";

export function TopBanner() {
  return (
    <div
      style={{ backgroundImage: `url(${headerBg})` }}
      className="w-full bg-cover bg-no-repeat bg-center"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center w-full gap-4 text-white py-[11px]">
          <h2 className="flex items-center justify-center gap-1.5 text-md font-bold">
            NEW:
            <p className="font-normal">
              Chat and work in one place, with AI superpowers.
            </p>
          </h2>
          <Button href={"#"} text={"Discover ClickUp Chat"} fontSize="16px" />
        </div>
        <div className="p-2">
          <img src={cross} alt="cross" />
        </div>
      </div>
    </div>
  );
}
