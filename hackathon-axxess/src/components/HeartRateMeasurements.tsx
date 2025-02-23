import classes from '../assets/Measurements.module.css'

export default function HeartRateMeasurements( {heart} ){

    if(heart.heart_rate === 0){
    return(
        <div className={classes.container}>
            <div className={classes.pill}>
                <h3>Activity: {heart.activity_level}</h3>
                <div className={classes.pillnums}>
                    <h5>HR: {heart.heart_rate}</h5>
                </div>
            </div>
        </div>
    )
}

    return null;
}