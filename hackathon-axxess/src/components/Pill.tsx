import classes from '../assets/Pill.module.css'

export default function Pill(){
    return(
        <div className={classes.container}>
            <div className={classes.pill}>
                <img src='/src/assets/pill.png'></img>
                <h3>PILL NAME</h3>
                <div className={classes.pillnums}>
                    <h5>MG</h5>
                    <h5>QUANTITY</h5>
                </div>
            </div>
        </div>
    )
}