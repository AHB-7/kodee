"use client";

import { useState } from "react";

export default function ToDo() {
    const [tasks, setTasks] = useState([]);
    const addTask = (e: any) => {
        e.preventDefault();
        const task = e.target.task.value.trim();
        if (task) {
            setTasks([...tasks, task]);
        }
    };

    return (
        <main>
            <section className="header">
                <h1>To Do List</h1>
                <p className="text-center py-4"> Statics todo list to try</p>
            </section>
            <section className="flex items-center justify-center">
                <form className="pt-4" onSubmit={addTask}>
                    <input
                        type="text"
                        name="task"
                        placeholder="Add a new task..."
                        required
                    />
                    <button type="submit" className="primary-btn">
                        Add Task
                    </button>
                </form>
            </section>
            <section className=" flex items-center justify-center">
                <ul className="tasks w-full">
                    {tasks.map((task, index) => (
                        <li key={index} className="task w-72 mx-auto">
                            <p>{task}</p>
                            <button
                                onClick={() =>
                                    setTasks(
                                        tasks.filter((_, i) => i !== index)
                                    )
                                }
                                className="text-brand-light relativ right-0 top-0 font-extrabold min-w-6 h-full bg-brand-error"
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
