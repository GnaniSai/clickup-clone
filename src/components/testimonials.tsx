import { SectionHighlight } from "./sectionHighlight";
import diggs from "../assets/DIGGS.png"
import diggsLogo from "../assets/diggs-logo.png"
import award1 from "../assets/leader-on-g2.png"
import award2 from "../assets/awarded-by-the-press.png"
import award3 from "../assets/most-loved-on-truct-radius.png"
export const Testimonials = () => {
    const testimonials = [
        {
            image: diggs,
            logo: diggsLogo,
            quote: "ClickUp is serving us so we can serve our pet guardians.",
            name: "Samantha Dengate",
            title: "Sr. Project Manager"
        },
        {
            image: diggs,
            logo: diggsLogo,
            quote: "ClickUp is serving us so we can serve our pet guardians.",
            name: "Samantha Dengate",
            title: "Sr. Project Manager"
        },
        {
            image: diggs,
            logo: diggsLogo,
            quote: "ClickUp is serving us so we can serve our pet guardians.",
            name: "Samantha Dengate",
            title: "Sr. Project Manager"
        },
        {
            image: diggs,
            logo: diggsLogo,
            quote: "ClickUp is serving us so we can serve our pet guardians.",
            name: "Samantha Dengate",
            title: "Sr. Project Manager"
        },
        {
            image: diggs,
            logo: diggsLogo,
            quote: "ClickUp is serving us so we can serve our pet guardians.",
            name: "Samantha Dengate",
            title: "Sr. Project Manager"
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
            <div className="text-center mx-80 mt-15">
                <SectionHighlight subtitle="Testimonials" title="Don’t just take it from us" description="Loved by teams. Backed by awards. Trusted worldwide." />
            </div>

            <div className="flex items-center justify-center gap-5 w-full overflow-scroll scrollbar-hide px-5 my-10">
                {testimonials.map((testimonial, index) => (
                    <div className="flex items-center justify-center min-w-[340px] h-[600px] max-lg:min-w-[330px] max-lg:h-[550px] relative cursor-pointer" key={index}>
                        <div className="w-full h-full rounded-2xl border border-black">
                            <img src={testimonial.image} alt="" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="flex flex-col w-full items-start gap-2 absolute bottom-0 bg-[#ffffff00] backdrop-blur-xl left-0 p-5 rounded-b-2xl text-white">
                            <img src={testimonial.logo} alt="logo" className="w-30" />
                            <p className="text-lg font-medium py-3">"{testimonial.quote}"</p>
                            <span className="text-sm font-medium">
                                {testimonial.name} <br /> {testimonial.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-13">
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
