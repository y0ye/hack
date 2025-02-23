import classes from '../assets/Measurements.module.css'

export default function SleepRateMeasurements( {sleep} ){

    if(sleep.breathing_rate === 0 || sleep.breathing_rate >= 45 || sleep.breathing_rate < 10){
    return(
        <div className={classes.container}>
            <div className={classes.pill}>
                <h3>Activity: {sleep.sleep_stage}</h3>
                <div className={classes.pillnums}>
                    <h5>Breathing Rate: {sleep.breathing_rate}</h5>
                </div>
            </div>
        </div>
    )
}

    return null;
}