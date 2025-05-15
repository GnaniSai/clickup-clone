import logo from "../assets/socials/logo-v3-clickup-symbol-only.svg";
import calendarClock from "../assets/socials/calendar-clock.png";
import padlock from "../assets/socials/padlock.png";
import dashboard from "../assets/socials/dashboard.png";
import flash from "../assets/socials/flash.png";
import facebook from "../assets/socials/facebook.svg";
import instagram from "../assets/socials/instagram.svg";
import twitter from "../assets/socials/twitter.svg";
import linkedin from "../assets/socials/linkedin.svg";
import apple from "../assets/socials/app-store-badge-black.svg";
import google from "../assets/socials/google-play-badge-black.svg";
import microsoft from "../assets/socials/app-store-microsoft-badge-black.svg";
const keyBenefitsData = [
    {
        logo: calendarClock,
        title: "24/7 support",
        link: "#"
    },
    {
        logo: flash,
        title: "Weekly updates",
        link: "#"
    },
    {
        logo: padlock,
        title: "Secure and compliant",
        link: "#"
    },
    {
        logo: dashboard,
        title: "99.9% uptime",
        link: "#"
    },
];

const KeyBenefits = () => {
    return (
        <div className="flex mx-50 max-md:flex-col max-xl:mx-20 max-sm:mx-5 max-md:gap-5 items-center md:divide-x divide-gray-300">
            <div className="flex items-center gap-3 pr-5 max-lg:px-3 max-sm:p-0">
                <img src={logo} alt="logo" className="w-5 h-5" />
                <span className="text-black font-bold text-[12px] text-sm">The everything app, for work.</span>
            </div>
            <div className="flex items-center max-sm:hidden divide-x divide-gray-300">
                {keyBenefitsData.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 px-10 max-lg:px-3">
                        <img src={item.logo} alt="logo" className="w-4 h-4" />
                        <a href={item.link} className="text-gray-500 text-[12px] hover:underline cursor-pointer font-medium text-sm">{item.title}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};


type FooterLinksSectionProps = {
    title: string;
    links: string[];
    subTitle?: string;
    subContent?: React.ReactNode;
};

const FooterLinksSection = ({ title, links, subTitle, subContent }: FooterLinksSectionProps) => {
    return (
        <div className="min-w-[150px] max-md:min-w-[60px]">
            <h4 className="text-black font-bold text-[13px] mb-2">{title}</h4>
            <ul className="space-y-3 mb-4">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href="#" className="text-[13px] text-[#514b81] font-medium hover:text-black transition-colors">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
            {subTitle && <h5 className="text-black mt-7 font-bold text-[13px] mb-2">{subTitle}</h5>}
            {subContent}
        </div>
    );
};



export const Footer = () => {
    const footerSections = [
        {
            title: "ClickUp",
            links: [
                "Download",
                "About Us",
                "Careers",
                "Customers",
                "Community",
                "Affiliate & Referrals",
                "Reviews",
                "Press",
                "Brand",
                "Product Roadmap",
                "Status",
            ],
        },
        {
            title: "Resources",
            links: [
                "Help Docs",
                "On-Demand Demo",
                "ClickUp University",
                "Webinars",
                "Events",
                "Templates",
                "Import",
                "API",
                "Consultants",
                "Partners",
                "Contact Us",
            ],
        },
        {
            title: "Features",
            links: [
                "Gantt Chart",
                "Dashboards",
                "Native Time Tracking",
                "Mind Maps",
                "Automations",
                "Notepad",
                "Integrations",
                "Email",
                "To-Do List",
                "Kanban Board",
                "Sprints"
            ],
        },
        {
            title: "Compare",
            links: [
                "vs Monday",
                "vs Asana",
                "vs Jira",
                "vs Trello",
                "vs Airtable",
                "vs Notion",
                "vs Basecamp",
                "vs Wrike",
                "vs MS Project",
                "vs Todoist",
                "vs Smartsheet"
            ],
        },
        {
            title: "Learn",
            links: ["Blog", "Software Team Hub", "Agency Hub"],
            subTitle: "Connect",
            subContent: (
                <div className="flex gap-2 mt-2">
                    <a href="#"><img src={linkedin} alt="linkedin" className="w-6 h-6 duration-200 ease-[cubic-bezier(0.5,0,0.5,1)] delay-0 transform hover:translate-y-[2px]" /></a>
                    <a href="#"><img src={facebook} alt="facebook" className="w-6 h-6 duration-200 ease-[cubic-bezier(0.5,0,0.5,1)] delay-0 transform hover:translate-y-[2px]" /></a>
                    <a href="#"><img src={instagram} alt="instagram" className="w-6 h-6 duration-200 ease-[cubic-bezier(0.5,0,0.5,1)] delay-0 transform hover:translate-y-[2px]" /></a>
                    <a href="#"><img src={twitter} alt="twitter" className="w-6 h-6 duration-200 ease-[cubic-bezier(0.5,0,0.5,1)] delay-0 transform hover:translate-y-[2px]" /></a>
                </div>
            ),
        },
    ];

    const storeLogos = [
        { src: apple, alt: "apple", link: "#" },
        { src: google, alt: "google", link: "#" },
        { src: microsoft, alt: "microsoft", link: "#" },
    ];

    const footerLinks = [
        { text: "Security", href: "#" },
        { text: "Privacy", href: "#" },
        { text: "Terms", href: "#" },
    ];


    return (
        <div className="mt-20 mb-7">
            <div>
                <hr className="border-gray-300 my-3" />
                <KeyBenefits />
                <hr className="border-gray-300 my-3" />
            </div>

            <div className="flex flex-wrap gap-20 max-md:gap-10 mx-50 max-xl:mx-20 max-sm:mx-5 max-md:mx-10 mt-10">
                {footerSections.map((section, index) => (
                    <FooterLinksSection key={index} title={section.title} links={section.links} subTitle={section.subTitle} subContent={section.subContent} />
                ))}
            </div>
            <hr className="border-gray-300 my-7" />


            <div className="flex justify-between max-sm:flex-col gap-5 max-sm:mx-5 items-center mx-50 max-md:mx-10 max-xl:mx-20">
                <div className="flex gap-2">
                    {storeLogos.map((store, index) => (
                        <a key={index} href={store.link} className="w-full cursor-pointer">
                            <img src={store.src} alt={store.alt} className="w-full h-10" />
                        </a>
                    ))}
                </div>
                <div className="flex gap-4">
                    <p className="text-gray-500 text-xs">© 2025 ClickUp</p>
                    {footerLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-gray-500 text-xs hover:text-black"
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>

        </div>
    );
};
