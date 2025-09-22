import React, { useEffect, useState } from 'react'
import AddPatient from './AddPatient';

function Patients() {
    const [patients, setPatients] = useState([]);
    const [error, setError] = useState(null);
    const [openAddPatient,setOpenAddPatient]=useState(false)

    useEffect(() => {
        // fetch data
        fetch("/patients.json")
            .then((res) => res.json())
            .then((data) => {
                setPatients(data)

            })
            .catch((error) => {
                console.log(error)
                setError("Failed to load patients");
            })
    },[])

    return (
        <section className='px-4 sm:px-6 lg:px-24 pt-28  pb-5'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between mb-4 p-3'>
                    <h1 className="text-xl md:text-2xl font-bold">Patients</h1>
                    <button 
                    onClick={()=>setOpenAddPatient(true)}
                    className='bg-gray-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 hover:scale-105 transition-all '>Add Patient</button>
                </div>

                {
                    openAddPatient && (
                        <AddPatient close={()=>setOpenAddPatient(false)}/>
                    )
                }

                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 sm:grid-cols-2'>
                    {
                        patients.map((patient, index) => {
                            return <div
                                key={index}
                                className='border rounded-lg bg-gray-100 p-2 hover:shadow-lg hover:scale-105 transition-all'
                            >
                                <h1 className=''>Name: {patient.name}</h1>
                                <p>Age: {patient.age}</p>
                                <p>Gender: {patient.gender}</p>
                                <p>Mob: {patient.contact}</p>
                                <p className='text-end cursor-pointer text-gray-500 hover:text-gray-800'>details</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Patients
