import classes from '../assets/Measurements.module.css'

export default function HeartConditions( {heart} ){
    return(
        <div className={classes.container}>
            <div className={classes.pill}>
                <h3>{heart.condition_name}</h3>
                <div className={classes.pillnums}>
                    <h5>Oxygen Level: {heart.oxygen_level}</h5>
                </div>
            </div>
        </div>
    )
}