// pages/contact.tsx

import MessageFormat from "@/app/components/send-message/message";

export const metadata = {
    icons: {
        icon: "/favicon.ico?v=1",
        apple: "/apple-touch-icon.png?v=1",
    },
    title: "Send oss en melding",
    description:
        "Send oss en melding for å starte et nytt prosjekt sammen. Vi hjelper deg med å skape en imponerende online tilstedeværelse for din bedrift, organisasjon, eller personlig merkevare.",
    keywords: [
        "send",
        "melding",
        "nytt",
        "prosjekt",
        "online",
        "tilstedeværelse",
        "bedrift",
        "organisasjon",
        "personlig",
        "merkevare",
        "digital",
        "utvikling",
        "webdesign",
        "webutvikling",
        "online",
        "digital løsninger",
    ],
};

const Contact = () => {
    return (
        <>
            <MessageFormat />
        </>
    );
};

export default Contact;
