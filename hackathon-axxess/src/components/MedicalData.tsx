import classes from '../assets/Medicaldata.module.css'
import Pill from './Pill.tsx'

export default function MedicalData() {
    return (
        <div className={classes.container}>
            <div className={classes.pillscrollhead}>
                <h2>Current Medications</h2>
            </div>
            <div className={classes.pills}>
                <Pill />
                <Pill />
                <Pill />
                <Pill />
                <Pill />
                <Pill />
                <Pill />
                <Pill />
                <Pill />
                <Pill />
                <Pill />
                <Pill />
                <Pill />
                <Pill />
                <Pill />
            </div>
            <div className={classes.appointmentdata}>
                <form>
                    <h1 className={classes.appointmentHeader}>Most Recent Appointment</h1>
                    <h2 className={classes.appointType}>Appointment Type</h2>
                    <h3>Appointment Date</h3>
                    <h1>Status</h1>


                </form>
            </div>
        </div>
    )
}