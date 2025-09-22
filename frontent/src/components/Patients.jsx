import React, { useEffect, useState } from 'react'
import AddPatient from './AddPatient';
import { useNavigate } from 'react-router-dom';

function Patients() {
    const [patients, setPatients] = useState([]);
    const [error, setError] = useState(null);
    const [openAddPatient, setOpenAddPatient] = useState(false)
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate()



    // search patients
 const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );



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
                {/* search patients section  */}
                <div className='flex justify-end mb-5'>
                    <input
                        type="text"
                        placeholder="Search patient..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* const filteredPatients = patients.filter(patient =>
  patient.name.toLowerCase().includes(searchQuery.toLowerCase())
); */}

<div className='grid grid-cols-1 md:grid-cols-4 gap-5 sm:grid-cols-2'>
  {filteredPatients.length === 0 && !loading && (
    <p className="col-span-full text-center text-gray-500">No patients found.</p>
  )}

  {filteredPatients.map((patient) => (
    <div key={patient.id} className='border rounded-lg bg-gray-100 p-2 hover:shadow-lg hover:scale-105 transition-all'>
      <h1>Name: {patient.name}</h1>
      <p>Age: {patient.age}</p>
      <p>Gender: {patient.gender}</p>
      <p>Mob: {patient.contact}</p>
      <p className='text-end cursor-pointer text-gray-500 hover:text-gray-800' 
         onClick={() => navigate(`/patient/${patient.id}`, { state: { patient } })}>
        Details
      </p>
    </div>
  ))}
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

            </div>
        </section>
    )
}

export default Patients
