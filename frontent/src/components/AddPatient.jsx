import React, { useState } from 'react'
import { X } from "lucide-react"
import Input from './Input'

function AddPatient({ close, onAdd }) {
    const [form, setForm] = useState({
        name: "",
        age: "",
        gender: "",
        contact: "",
        notes: "",
    });
    const handleSubmit = (event) => {
        event.preventDefault()
        onAdd({ ...form, id: Date.now() });

    }

    const handleOnchange = (field) => (event) => {
        setForm({
            ...form,
            [field]: event.target.value
        })
    }
    return (
        <section className='fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-500 flex items-center justify-center p-4'>
            <div className='bg-white p-3 rounded-lg max-w-sm w-full'>
                <div className='flex justify-between gap-5'>
                    <h3 className="text-lg font-semibold mb-4 ">Add New Patient</h3>
                    <button onClick={close} className='w-5 h-7 cursor-pointer'>
                        <X />
                    </button>
                </div>

                {/* form */}

                <form className='grid gap-2' onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        value={form.name}
                        placeholder="Enter patient name"
                        autoFocuss="true"
                        onChange={handleOnchange("name")}
                    />
                    <Input
                        type="text"
                        value={form.age}
                        placeholder="Enter patient age"
                        onChange={handleOnchange("age")}
                    />

                    <Input
                        type="text"
                        value={form.gender}
                        placeholder="Enter patient gender"
                        onChange={handleOnchange("gender")}
                    />

                    <Input
                        type="text"
                        value={form.contact}
                        placeholder="Enter patient mobile"
                        onChange={handleOnchange("contact")}
                    />

                    <Input
                        type="text"
                        value={form.notes}
                        placeholder="Enter patient illness or condition"
                        onChange={handleOnchange("notes")}
                    />

                    <div className='flex gap-3 justify-between'>
                        <button
                            onClick={close}
                            className='bg-red-500 text-white font-medium text-xl py-2
                        rounded-lg hover:bg-red-600 cursor-pointer transition-all w-1/2'>Cancel</button>
                        <button className='bg-green-500 text-white font-medium text-xl py-2 rounded-lg hover:bg-green-600 cursor-pointer transition-all w-1/2'>Add</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddPatient
