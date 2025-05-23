import type React from "react"

export const SectionHighlight = ({ subtitle, title, description, children }: { subtitle?: string, title: string, description: string, children?: React.ReactNode }) => {
    return (
        <div>
            <span className="font-shantell max-lg:text-md text-lg text-[#7612fa]">
                {subtitle}
            </span>
            <div className="mt-2">
                <h2 className="text-[43px] max-lg:text-[35px] max-sm:text-[30px] font-extrabold text-[#090c1d] max-lg:leading-9 leading-12">
                    {title}
                </h2>
            </div>
            <div className="mt-3">
                <p className="text-lg max-lg:text-md max-sm:text-sm">
                    {description}
                </p>
            </div>
            <div className="mt-2">
                {children}
            </div>
        </div>
    )
}