import { Input } from "@/components/ui/input"
import { Button } from "../../components/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FiSend } from "react-icons/fi"

export const FormSection = () => {
    return (
        <div className="">
            <form action="" className="container flex flex-col justify-center items-center gap-y-4 lg:w-[65%]">
                <Label className="self-start">Nome</Label>
                <Input className="bg-gray-200/70 dark:bg-gray-800/85" placeholder="Seu nome completo" />
                <Label className="self-start">Email</Label>
                <Input className="bg-gray-200/70 dark:bg-gray-800/85" placeholder="Seu melhor e-mail" />
                <Label className="self-start">Mensagem</Label>
                <Textarea className="bg-gray-200/70 dark:bg-gray-800/85 size-48 w-full" placeholder="Escreva sua mensagem" />
                <Button>Enviar Mensagem <FiSend /></Button>
            </form>
        </div>
    )
}