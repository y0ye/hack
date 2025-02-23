import classes from '../assets/Measurements.module.css'

export default function DailyActivityRateMeasurements( {act} ){

    if(act.step_taken === 0){
    return(
        <div className={classes.container}>
            <div className={classes.pill}>
                <h3>Activity: {act.activity_date}</h3>
                <div className={classes.pillnums}>
                    <h5>Steps: {act.step_taken}</h5>
                </div>
            </div>
        </div>
    )
}
else{
    return(
        null
    )
}
}