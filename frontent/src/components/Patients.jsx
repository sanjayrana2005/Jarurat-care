import React, { useEffect, useState } from 'react'
import AddPatient from './AddPatient';
import { useNavigate } from 'react-router-dom';

function Patients() {
    const [patients, setPatients] = useState([]);
    const [error, setError] = useState(null);
    const [openAddPatient, setOpenAddPatient] = useState(false)
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()


    useEffect(() => {
        // fetch data
        setLoading(true);
        fetch("/patients.json")
            .then((res) => res.json())
            .then((data) => {
                setPatients(data)
                setError(null)
            })
            .catch((error) => {
                console.log(error)
                setError("Failed to load patients");
            })
            .finally(() => {
                setLoading(false); // stop loading
            })
    }, [])

    return (
        <section className='px-4 sm:px-6 lg:px-24 pt-28  pb-5' id='home'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between mb-4 p-3'>
                    <h1 className="text-xl md:text-2xl font-bold">Patients</h1>
                    <button
                        onClick={() => setOpenAddPatient(true)}
                        className='bg-gray-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 hover:scale-105 transition-all '>Add Patient</button>
                </div>

                {loading && <p className="col-span-full text-center text-gray-500">Loading patients...</p>}
                {error && <p className="col-span-full text-center text-red-500">{error}</p>}

                {!loading && !error && patients.length === 0 && (
                    <p className="col-span-full text-center text-gray-500">No patients found.</p>
                )}

                {
                    openAddPatient && (
                        <AddPatient close={() => setOpenAddPatient(false)}
                            onAdd={(newPatient) => {
                                setPatients([newPatient, ...patients]);
                                setOpenAddPatient(false);
                            }}
                        />
                    )
                }

                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 sm:grid-cols-2'>
                    {
                        !loading && !error && patients.map((patient, index) => {
                            return <div
                                key={index}
                                className='border rounded-lg bg-gray-100 p-2 hover:shadow-lg hover:scale-105 transition-all'
                            >
                                <h1 className=''>Name: {patient.name}</h1>
                                <p>Age: {patient.age}</p>
                                <p>Gender: {patient.gender}</p>
                                <p>Mob: {patient.contact}</p>
                                <p 
                                onClick={() => navigate(`/patient/${patient.id}`, { state: { patient } })}
                                className='text-end cursor-pointer text-gray-500 hover:text-gray-800'>details</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Patients
