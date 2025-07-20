"use client"

import { Input } from "@/components/ui/input"
import { Button } from "../../components/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FiSend } from "react-icons/fi"
import { useTranslations } from "next-intl"
import { toast } from "@/components/ui/use-toast"
import { useRef } from "react"

export const FormSection = () => {
    const t = useTranslations("Form");
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = formRef.current;

        if (!form) return;

        const formData = new FormData(form);

        try {
            await fetch("https://formsubmit.co/ajax/nathansmota@gmail.com", {
                method: "POST",
                body: formData
            });

            toast({
                title: t("toast-success-title"),
                description: t("toast-success-description"),
            });

            form.reset();
        } catch (err) {
            toast({
                title: t("toast-error-title"),
                description: t("toast-error-description"),
                variant: "destructive"
            });
        }
    };

    return (
        <div>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="container flex flex-col justify-center items-center gap-y-4 lg:w-[65%]"
            >
                {/* Campos do Formulário */}
                <Label className="self-start">{t("name")}</Label>
                <Input
                    type="text"
                    name="name"
                    required
                    className="bg-gray-200/70 dark:bg-[#141414] focus-visible:ring-emerald-500"
                    placeholder={t("name-placeholder")}
                />

                <Label className="self-start">{t("email")}</Label>
                <Input
                    type="email"
                    name="email"
                    required
                    className="bg-gray-200/70 dark:bg-[#141414] focus-visible:ring-emerald-500"
                    placeholder={t("email-placeholder")}
                />

                <Label className="self-start">{t("message")}</Label>
                <Textarea
                    name="message"
                    required
                    className="bg-gray-200/70 dark:bg-[#141414] size-48 w-full focus-visible:ring-emerald-500"
                    placeholder={t("message-placeholder")}
                />

                <Button type="submit">
                    {t("button")} <FiSend />
                </Button>
            </form>
        </div>
    )
}