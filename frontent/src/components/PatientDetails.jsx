import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

function PatientDetails() {
    const location = useLocation();
    const patient = location.state?.patient;
    const navigate  =useNavigate()
    return (
        <section className='px-4 sm:px-6 lg:px-24 pt-28  pb-5'>
            <div className='container mx-auto'>
                <div className='bg-gray-200 sm:w-1/2 px-3 rounded-lg py-3 '>
                    <h1 className='font-semibold text-lg'><span>Name:</span> {patient.name}</h1>
                    <p className='font-normal text-lg'>Age: {patient.age}</p>
                    <p  className='font-normal text-lg'>Gender: {patient.gender}</p>
                    <p  className='font-normal text-lg'>Mobile: {patient.contact}</p>
                    <p  className='font-normal text-lg'>Note: {patient.notes}</p>
                </div>
                <div onClick={()=>navigate("/")} className='bg-gray-400 w-fit px-4 py-2 mt-5 rounded-md text-white font-semibold cursor-pointer hover:bg-gray-500 transition-all'>Back</div>
            </div>
        </section>
    )
}

export default PatientDetails
