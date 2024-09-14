// pages/contact.tsx
"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<string>("");

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
            setStatus("Message sent successfully!");
        } else {
            setStatus("Error sending message.");
        }
    };

    return (
        <div className="mb-auto">
            <h1 className="py-12">Contact Us</h1>
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
            <p>{status}</p>
        </div>
    );
};

export default Contact;
