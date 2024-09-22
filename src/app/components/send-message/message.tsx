// pages/contact.tsx
"use client";

import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const MessageFormat = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [statusMessage, setStatusMessage] = useState<JSX.Element | null>(
        null
    );

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.success) {
            // Set the success message in the state
            setStatusMessage(
                <div className="backdrop-blur-sm bg-black/80 h-screen w-full absolute top-0 left-0 flex items-center justify-center">
                    <div className="backdrop-blur-sm bg-black/50 mx-auto  top-0 left-0 h-fit p-4 border-brand-primary border rounded-lg">
                        <p className="py-2">
                            Vi har mottatt din melding og vil sende en svar så
                            fort som mulig.
                        </p>
                        <p className="text-brand-primary text-end">
                            Takk for at du tok kontakt!
                        </p>
                        <div className="flex items-center justify-center pb-4 pt-8">
                            <Link
                                href="/projects"
                                className="border py-2 px-5 rounded-md hover:border-brand-primary duration-300 focus:bg-brand-light focus:text-brand-dark"
                            >
                                Se Våre Projektor
                            </Link>
                        </div>
                    </div>
                </div>
            );
        } else {
            // Set the error message in the state
            setStatusMessage(
                <div className="backdrop-blur-sm bg-black/80 h-screen w-full absolute top-0 left-0 flex items-center justify-center">
                    <div className="backdrop-blur-sm bg-black/50 mx-auto  top-0 left-0 h-fit p-4 border-brand-primary border rounded-lg">
                        <p className="py-2">
                            Det har oppstått en feil. Prøv igjen senere.
                        </p>
                        <p className="text-brand-primary text-end">
                            Du kan også sende en epost til oss eller ringe på:
                            <br />
                            hello@kodee.no
                            <br />
                            Tlf.+47 98 69 84 78{" "}
                        </p>
                        <div className="flex items-center justify-center pb-4 pt-8">
                            <Link
                                href="/projects"
                                className="border py-2 px-5 rounded-md hover:border-brand-primary duration-300 focus:bg-brand-light focus:text-brand-dark"
                            >
                                Se Våre Projektor
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="mb-auto">
            <h1 className="py-12">Kontakt Oss!</h1>
            <form onSubmit={handleSubmit}>
                <div className=" w-full max-w-4xl">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-brand-dark block w-full border border-brand-primary m-1"
                    />
                </div>
                <div className=" w-full max-w-4xl">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-brand-dark block w-full border border-brand-primary m-1"
                    />
                </div>
                <div className=" w-full max-w-4xl">
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-brand-dark block w-full border border-brand-primary m-1"
                    />
                </div>
                <div className="flex items-center justify-center py-8">
                    <button type="submit" className="primary-btn">
                        Send Message
                    </button>
                </div>
            </form>
            {statusMessage}
            <div className="backdrop-blur-sm bg-black/80 h-screen w-full absolute top-0 left-0 flex items-center justify-center">
                <div className="backdrop-blur-sm bg-black/50 mx-auto  top-0 left-0 h-fit p-4 border-brand-primary border rounded-lg">
                    <p className="py-2">
                        Det har oppstått en feil. Prøv igjen senere.
                    </p>
                    <p className="text-brand-primary">
                        Du kan også sende en epost til oss eller ringe på:
                        <br />
                        hello@kodee.no
                        <br />
                        Tlf.+47 98 69 84 78{" "}
                    </p>
                    <div className="flex items-center justify-center pb-4 pt-8">
                        <Link
                            href="/projects"
                            className="border py-2 px-5 rounded-md hover:border-brand-primary duration-300 focus:bg-brand-light focus:text-brand-dark"
                        >
                            Se Våre Projektor
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageFormat;
