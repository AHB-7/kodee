"use client";

import { useState, FormEvent } from "react";

// Define a type for a task (in case it becomes more complex later)
interface Task {
    id: number;
    name: string;
}

export default function ToDo() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const taskName = e.currentTarget.task.value.trim();
        if (taskName) {
            const newTask: Task = { id: Date.now(), name: taskName };
            setTasks([...tasks, newTask]);
        }
        e.currentTarget.reset(); // Clear the input after submission
    };

    const removeTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
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
            <section className="flex items-center justify-center">
                <ul className="tasks w-full">
                    {tasks.map((task) => (
                        <li key={task.id} className="task w-72 mx-auto">
                            <p>{task.name}</p>
                            <button
                                onClick={() => removeTask(task.id)}
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
