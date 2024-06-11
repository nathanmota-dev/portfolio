import { Input } from "@/components/ui/input"
import { Button } from "../../components/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FiSend } from "react-icons/fi"
import { useTranslations } from "next-intl"

export const FormSection = () => {

    const t = useTranslations("Form");

    return (
        <div>
            <form action="" className="container flex flex-col justify-center items-center gap-y-4 lg:w-[65%]">
                <Label className="self-start">{t("name")}</Label>
                <Input
                    type="text"
                    className="bg-gray-200/70 dark:bg-gray-800/85 focus-visible:ring-emerald-500"
                    placeholder={t("name-placeholder")}
                />

                <Label className="self-start">{t("email")}</Label>
                <Input
                    type="email"
                    className="bg-gray-200/70 dark:bg-gray-800/85 focus-visible:ring-emerald-500"
                    placeholder={t("email-placeholder")}
                />

                <Label className="self-start">{t("message")}</Label>
                <Textarea
                    className="bg-gray-200/70 dark:bg-gray-800/85 size-48 w-full focus-visible:ring-emerald-500"
                    placeholder={t("message-placeholder")}
                />

                <Button>{t("button")} <FiSend /></Button>
            </form>
        </div>
    )
}