import { SectionHighlight } from "./sectionHighlight"
import launchCover1 from "../assets/launch-cover.avif"

export const UseCase = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 my-20">
    <div className="text-center">
    <SectionHighlight subtitle="The all-in-one workspace" title="Do your most important work, faster" description="From campaigns to operations and more, this is just the tip of the iceberg." children={<button className="text-white bg-black font-bold px-4 py-2 my-3 text-lg rounded-lg">
        See all use cases
      </button>} />
    </div>
      <div className="flex justify-center gap-10 mx-50">
        <div className="flex flex-col flex-1 my-2">
          <div className="border-l-2 border-[#7612fa] pl-5">
            <h3 className="text-lg text-[#7612fa] font-bold pt-2">Launch any campaign</h3>
            <p className="text-sm mt-1 text-[#090c1d] pb-2">From idea to execution, effortlessly plan, organize, and track campaigns that deliver results.</p>
          </div>
        </div>
        <div className="w-full flex-3 hover:brightness-95 transition-all duration-500 cursor-pointer">
          <img src={launchCover1} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}
