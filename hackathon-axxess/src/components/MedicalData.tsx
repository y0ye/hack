import classes from '../assets/Medicaldata.module.css'
import { useState, useEffect } from 'react';
import Pill from './Pill.tsx'
import Appointment from './Appointment.tsx';

type PillType = {
    prescription_id: number;
    patient_id: number;
    medication_name: string;
    dosage: string;
    targeted: string;
}

const mockPill = [{
    prescription_id: 0,
    patient_id: 0,
    medication_name: "null",
    dosage: "null",
    targeted: "null",
},
];

type AppointmentType = {
    appointment_id: number;
    patient_id: number;
    appointment_name: string;
    appointment_time: string;
    appointment_status: string;
}

const mockAppointment = [{
    appointment_id: 0,
    patient_id: 0,
    appointment_name: "null",
    appointment_time: "null",
    appointment_status: "null",
},
];

export default function MedicalData() {
    const [pills, setPills] = useState<PillType[]>(mockPill);
    const [appointments, setAppointments] = useState<AppointmentType[]>(mockAppointment);

    useEffect(() => {
        fetch("http://localhost:5001/prescription")
            .then((response) => response.json())
            .then((data) => setPills(data))
            .catch((err) => console.error("Error fetching posts:", err));
    });

    useEffect(() => {
        fetch("http://localhost:5001/appointment")
            .then((response) => response.json())
            .then((data2) => setAppointments(data2))
            .catch((err) => console.error("Error fetching posts:", err));
    });

    return (
        <div className={classes.container}>
            <div className={classes.pillscrollhead}>
                <h2>Current Medications</h2>
            </div>
            <div className={classes.pills}>
                {pills.map((pill) => (
                    <Pill key={pill.prescription_id} pill={pill} />
                ))}
            </div>
            <div className={classes.appointmentdata}>
                {appointments.map((appointment) => (
                    <Appointment key={appointment.appointment_id} appointment={appointment} />
                ))}
            </div>
        </div>
    )
}