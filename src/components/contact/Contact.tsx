import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const Contact = () => {

    const { t } = useTranslation();

    const email = "jomaroru7@gmail.com"

    const notify = () =>
        toast(t("emailCopied"), {
            style: {
                backgroundColor: "#B900FF",
                color: "#E0E0E0",
            },
        });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const body = (event.currentTarget.elements.namedItem("body") as HTMLTextAreaElement).value;
        const subject = t('contactWith') + " José María";
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        notify();
    };

    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-between mb-5 gap-8 max-w-5xl p-8 bg-secondary rounded-4xl w-full m-4">
                <h1 className="text-5xl ">{t('contact')}</h1>
                <div className="flex items-baseline gap-4 flex-wrap">
                    <p className="text-lg font-medium">Email:</p>
                    <span>{email}</span>
                    <button
                        onClick={handleCopyEmail}
                        className="mt-4 px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow-md transition duration-300 text-center w-max hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105"
                    >
                        {t('copy')}
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label htmlFor="body" className="text-lg font-medium">{t('message')}:</label>
                    <textarea
                        id="body"
                        name="body"
                        rows={5}
                        className="p-2 border border-color-primary rounded-md resize-none bg-main"
                        placeholder={t('writeMessageHere')}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow-md transition duration-300 text-center w-max hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105"                    >
                        {t('sendEmail')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;