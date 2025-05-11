import type React from "react"

export const SectionHighlight = ({ subtitle, title, description, children }: { subtitle?: string, title: string, description: string, children?: React.ReactNode }) => {
    return (
        <div>
            <span className="font-shantell text-lg text-[#7612fa]">
                {subtitle}
            </span>
           <div className="mt-2">
           <h2 className="text-[43px] font-extrabold text-[#090c1d] leading-11">
                {title}
            </h2>
           </div>
            <div className="mt-3">
            <p className="text-lg">
                {description}
            </p>
            </div>
            <div className="mt-2">
                {children}
            </div>
        </div>
    )
}