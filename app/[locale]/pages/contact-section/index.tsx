import { MdMarkEmailRead } from "react-icons/md";
import { CardsBadge } from "../skills-section/cards-badge";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FormSection } from "../skills-section/form";

const cards = [
    {
        icon: <MdMarkEmailRead />,
        title: "Email",
        subtitle: "nathansmota@gmail.com",
        action: "Escrever para mim",
        link: "mailto:nathansmota@gmail.com"
    },
    {
        icon: <FaWhatsapp />,
        title: "Whatsapp",
        subtitle: "(16) 99993-6596",
        action: "Conversar no Whatsapp",
        link: "https://wa.me/5516999936596"
    },
    {
        icon: <FaLinkedin />,
        title: "LinkedIn",
        subtitle: "nathansmota",
        action: "Conectar no LinkedIn",
        link: "https://www.linkedin.com/in/nathansmota/"
    }
]

export const ContactSection = () => {
    return (
        <div className=" w-full h-full lg:h-screen bg-white dark:bg-black justify-center text-center pb-6 md:pt-12 pt-6">
            <div className="w-full">
                <h1 className=" text-black dark:text-white text-2xl md:text-3xl font-bold p-4">Contate-me</h1>
                <p className="md:text-lg text-base pb-4 md:pb-16">Entre em contato comigo</p>
            </div>
            <div className="md:container md:grid md:grid-cols-2">
                <div className="">
                    <h1 className="text-xl md:text-2xl pb-4 font-bold">Fale comigo</h1>
                    <div className="flex flex-col justify-center items-center gap-y-3">
                        {cards.map((card, index) => (
                            <CardsBadge
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                subtitle={card.subtitle}
                                action={card.action}
                                link={card.link}
                            />
                        ))}
                    </div>
                </div>
                <div className="pt-4 sm:pt-0">
                    <h1 className="text-xl md:text-2xl pb-4 font-bold">Descreva seu interesse</h1>
                    <div className="pt-2 lg:pt-10">
                        <FormSection />
                    </div>
                </div>
            </div>
        </div>
    )
}