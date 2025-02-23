import classes from '../assets/appointments.module.css'

export default function Appointment({ appointment }) {

    return (
        <>
            <h2 className={classes.appointmenthead}></h2>
            <form>
                <h1 className={classes.appointmentHeader}>Appointment</h1>
                <h2 className={classes.appointType}>{appointment.appointment_name}</h2>
                <h3>{appointment.appointment_time}</h3>
                <h1>{appointment.appointment_status}</h1>


            </form>
        </>
    )
}