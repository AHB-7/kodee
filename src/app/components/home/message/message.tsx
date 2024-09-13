"use client";

import { useState } from "react";
export default function Message() {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-screen px-6 lg:px-16">
            <div className="mb-6 lg:mb-0 text-center lg:text-left">
                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-light">
                    Send en melding eller bestill <br /> en time i dag
                </h2>
            </div>
            <MessageForm />
        </section>
    );
}
function MessageForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can handle form submission logic
        console.log(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-6 rounded-md shadow-md"
        >
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                >
                    Name
                </label>
                <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    className="w-full bg-brand-dark px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-6">
                <label
                    className="block bg-brand-dark text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                >
                    Message
                </label>
                <textarea
                    className="w-full bg-brand-dark px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-green-500 text-brand-dark w-full px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
                Send Message
            </button>
        </form>
    );
}
