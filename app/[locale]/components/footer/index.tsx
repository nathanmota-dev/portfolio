import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdMarkEmailRead } from "react-icons/md";
import { RoundedCards } from "./roudendCards";

const socialMediaIcons = [
    {
        icon: <FiGithub className="text-white w-6 h-6" />,
        link: "https://github.com/nathanmota-dev",
    },
    {
        icon: <FaLinkedinIn className="text-white w-6 h-6" />,
        link: "https://www.linkedin.com/in/nathansmota/",
    },
    {
        icon: <MdMarkEmailRead className="text-white w-6 h-6" />,
        link: "mailto:nathansmota@gmail.com",
    }
]

export const Footer = () => {
    return (
        <footer className="h-full w-full bg-gray-200 dark:bg-gray-800/85 p-10">
            <div className="flex flex-col justify-center items-center text-center h-full space-y-2">
                <div className="flex space-x-4 pb-2">
                    {socialMediaIcons.map((item, index) => (
                        <RoundedCards
                            key={index}
                            icon={item.icon}
                            link={item.link}
                        />
                    ))}
                </div>
                <p>2024 © Nathan Mota - Todos os direitos Reservados.</p>
                <p>Desenvolvido com Next, TailwindCSS, React Icons e Shadcn.ui</p>
            </div>
        </footer>
    );
}
