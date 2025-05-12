import { SectionHighlight } from "./sectionHighlight"
import clickupBrain1 from "../assets/clickup-brain-1.avif"
import clickupBrain2 from "../assets/clickup-brain-2.avif"
import { Button } from "./button"
export const SmartTools = () => {
    const smartToolsData = [
        {
            image: clickupBrain1,
            subtitle: "ClickUp Brain",
            title: "One AI for all your work",
            description: "Instantly power up company-wide AI that connects every aspect of your work, across all your apps.",
            children: (
                <div className="flex gap-3 mt-10">
                    <Button href='/' text='Try for free' fontSize='15px'/>
                    <Button href='/' text='Learn more' fontSize='15px' bgColor='black' color='white'/>
                </div>
            )
        },
        {
            image: clickupBrain2,
            subtitle: "Connected Brain",
            title: "Search every app, from one place.",
            description: "Enterprise search plus with the power of Ask Al on all your apps. Instantly pull answers from Google Drive, GitHub, Salesforce, Figma, Dropbox, Confluence, Box, and more!",
            children: (
                <div className="flex gap-3 mt-10">
                    <Button href='/' text='Try Connected Brain' fontSize='15px'/>
                </div>
            )
        }
    ]
    return (
        <div className="flex flex-col items-center justify-center my-20 mx-50 max-md:mx-20">
            <div className="text-center">
                <SectionHighlight subtitle="10x your work with smarter tools" title="Smart tools for smarter workflows" description="Work smarter in every way." />
            </div>
            {smartToolsData.map((item, index) => {
                return (
                    <div className="px-10 mt-10" key={index}>
                        <div className={`flex justify-center max-lg:flex-col items-center gap-10 ${index % 2 !== 0 ? "flex-row-reverse" : "flex-row"}`}>
                            <div className="rounded-2xl flex-1 border border-[#7612fa52] w-full">
                                <img src={item.image} alt="clickup brain" className="w-full h-full rounded-2xl" />
                            </div>
                            <div className="flex-1">
                                <SectionHighlight subtitle={item.subtitle} title={item.title} description={item.description} children={item.children} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}