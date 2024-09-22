import Card from "@/app/components/projects/card";
import { projects } from "../../components/projects/data";
import HeroContentOm from "@/app/components/om/om";

export const metadata = {
    icons: {
        icon: "/favicon.ico?v=1",
        apple: "/apple-touch-icon.png?v=1",
    },
    title: "Om Kodee",
    description:
        "Kodee er et digitalt byrå ledet av Alan Brim, spesialisert på utvikling av skreddersydde nettsider og digitale løsninger. Vi kombinerer kreativitet, moderne teknologier og lang erfaring for å realisere din digitale visjon.",
    keywords: [
        "om Kodee",
        "Alan Brim",
        "frilanser i Norge",
        "starte bedrift i Norge",
        "digitalt byrå Norge",
        "webutvikling Norge",
        "front-end utvikler",
        "UI/UX design",
        "frilans webdesigner",
        "skreddersydd webdesign",
        "Next.js utvikling",
        "GraphQL",
        "Apollo Client",
        "Tailwind CSS",
        "starte firma i Norge",
        "gründervirksomhet",
        "digital strategi for startups",
        "webdesign for gründere",
        "kreative løsninger",
        "digitale tjenester",
        "Nettside utvikler",
        "utdanning innen IT",
        "freelancing i Norge",
        "profesjonelle nettsider",
        "utdannet webutvikler",
        "bedriftsetablering",
        "norske startups",
        "webdesign for små bedrifter",
        "frilans karriere",
        "teknologiutdanning",
        "digital markedsføring Norge",
        "gründerskap og freelancing",
    ],
};
export default function Page() {
    return (
        <main className="">
            <HeroContentOm />
        </main>
    );
}
