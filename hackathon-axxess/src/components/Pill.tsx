import classes from '../assets/Pill.module.css'

export default function Pill( {pill} ){
    return(
        <div className={classes.container}>
            <div className={classes.pill}>
                <img src='/src/assets/pill.png'></img>
                <h3>{pill.medication_name}</h3>
                <div className={classes.pillnums}>
                    <h5>{pill.dosage}</h5>
                    <h5>{pill.targeted}</h5>
                </div>
            </div>
        </div>
    )
}