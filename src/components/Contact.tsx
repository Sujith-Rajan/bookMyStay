"use client"
import { p } from 'framer-motion/client'
import React, { useState } from 'react'

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [status, setStatus] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending")
        setTimeout(() => {
            setStatus("Message Send Successfully")
            setForm({ name: "", email: "", message: "" });
        }, 1000)
    }

    return (
        <div className="w-full p-6 bg-gray-50">
            <h1 className='text-3xl md:text-4xl font-bold text-gray-500 mb-4 tracking-wider text-center'>
                Contact Us
            </h1>
            <div className="max-w-lg mx-auto p-6">
                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
                    <input
                        type="text"
                        name='name'
                        placeholder='Name'
                        value={form.name}
                        onChange={handleChange}
                        required
                        className='border border-gray-300 p-2 rounded' />
                    <input
                        type="text"
                        name='email'
                        placeholder='Email'
                        value={form.email}
                        onChange={handleChange}
                        required
                        className='border border-gray-300 p-2 rounded' />
                    <textarea
                        name="message"
                        id=""
                        placeholder="Message"
                        value={form.message}
                        onChange={handleChange}
                        className='border border-gray-300 p-2 rounded' />
                    <button className='bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 cursor-pointer'>
                        Submit
                    </button>
                </form>
                {status && <p className='text-green-500 tracking-wider'>{status}...</p>}
            </div>

        </div>
    )
}

export default Contact
