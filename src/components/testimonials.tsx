import { SectionHighlight } from "./sectionHighlight";
import diggs from "../assets/testimonials/DIGGS.png"
import diggsLogo from "../assets/testimonials/diggs-logo.png"
import navigate from "../assets/testimonials/NAVIGATE.avif"
import finstra from "../assets/testimonials/FINASTRA.avif"
import padres from "../assets/testimonials/PADRES.avif"
import hawkmedia from "../assets/testimonials/HAWKE.avif"
import hawkmediaLogo from "../assets/testimonials/hawk-logo.png"
import padresLogo from "../assets/testimonials/padres-logo.png"
import navigateLogo from "../assets/testimonials/navigate-logo.png"
import finstraLogo from "../assets/testimonials/finastra-logo.png"
import award1 from "../assets/testimonials/leader-on-g2.png"
import award2 from "../assets/testimonials/awarded-by-the-press.png"
import award3 from "../assets/testimonials/most-loved-on-truct-radius.png"

export const Testimonials = () => {
    const testimonials = [
        {
            image: padres,
            logo: padresLogo,
            quote: "Using ClickUp, we're able to stay connected to each other.",
            name: "Ray Chan",
            title: "VP of IT"
        },
        {
            image: navigate,
            logo: navigateLogo,
            quote: "ClickUp has made collaboration really easy.",
            name: "Kelli Williams",
            title: "SVP Consumer Insights & Strategy"
        },
        {
            image: diggs,
            logo: diggsLogo,
            quote: "ClickUp is serving us so we can serve our pet guardians.",
            name: "Samantha Dengate",
            title: "Sr. Project Manager"
        },
        {
            image: finstra,
            logo: finstraLogo,
            quote: "It's a low-code platform that helps us automate processes.",
            name: "Joerg Klueckmann",
            title: "VP of Marketing"
        },
        {
            image: hawkmedia,
            logo: hawkmediaLogo,
            quote: "ClickUp is the best thing I've rolled out in the past two years.",
            name: "Lauren Makielski",
            title: "Chief of Staff"
        },
        {
            image: diggs,
            logo: diggsLogo,
            quote: "ClickUp is serving us so we can serve our pet guardians.",
            name: "Samantha Dengate",
            title: "Sr. Project Manager"
        }

    ]
    const awards = [
        {
            image: award1,
            title: "Leader on G2"
        },
        {
            image: award2,
            title: "Awarded by the Press"
        },
        {
            image: award3,
            title: "Most Loved on Trust Radius"
        }
    ]

    return (
        <div className="flex flex-col items-center justify-center my-20 max-md:hidden">
            <div className="text-center mt-15">
                <SectionHighlight subtitle="Testimonials" title="Don’t just take it from us" description="Loved by teams. Backed by awards. Trusted worldwide." />
            </div>

            <div className="flex items-center gap-5 w-full overflow-scroll scrollbar-hide px-5 my-10">
                {testimonials.map((testimonial, index) => (
                    <div className="flex items-center justify-center min-w-[340px] h-[600px] max-lg:min-w-[330px] max-lg:h-[550px] relative cursor-pointer" key={index}>
                        <div className="w-full h-full rounded-2xl border border-black">
                            <img src={testimonial.image} alt="" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="flex flex-col w-full items-start gap-2 absolute bottom-0 bg-[#ffffff00] backdrop-blur-xl left-0 p-5 rounded-b-2xl text-white">
                            <div className="h-6">
                                <img src={testimonial.logo} alt="logo" className="w-full h-full object-contain" />
                            </div>
                            <p className="text-lg font-medium py-3">"{testimonial.quote}"</p>
                            <span className="text-sm font-medium">
                                {testimonial.name} <br /> {testimonial.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center w-[70%]">
                {awards.map((award, index) => (
                    <div className="flex flex-col items-center gap-3" key={index}>
                        <p className="text-sm font-medium">{award.title}</p>
                        <img src={award.image} alt={award.title} className="w-75" />
                    </div>
                ))}
            </div>
        </div>
    )
};
