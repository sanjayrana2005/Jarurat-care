import React, { useState } from 'react'
import { X } from "lucide-react"
import Input from './Input'

function AddPatient({ close }) {
    const [form, setForm] = useState({
        name: "",
        age: "",
        gender: "",
        mobile: "",
        notes: "",
    });
    const handleSubmit = (event) => {
        event.preventDefault()
        
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
                        value={form.mobile}
                        placeholder="Enter patient mobile"
                        onChange={handleOnchange("mobile")}
                    />

                    <Input
                        type="text"
                        value={form.notes}
                        placeholder="Enter patient illness or condition"
                        onChange={handleOnchange("notes")}
                    />

                    <button className='bg-gray-600 py-3 rounded-full hover:bg-gray-700 cursor-pointer transition-all'>Add</button>
                </form>
            </div>
        </section>
    )
}

export default AddPatient
