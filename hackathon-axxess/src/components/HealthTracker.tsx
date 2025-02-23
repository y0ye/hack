import classes from '../assets/HealthTracker.module.css'
import { useState } from 'react';
import { PatientType, mockPatient } from '../types/PatientType';
import { HeartConditionType, mockHeartCondition } from '../types/HeartConditionType';
import { DailyActivityType, mockDailyActivity } from '../types/DailyActivityType';
import { SleepBreathingRateType, mockSleepBreathingRate } from '../types/SleepBreathingType';
import { HeartRateMeasurementType, mockHeartRateMeasurement } from '../types/HeartRateMeasurementType';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


export default function HealthTracker() {
    const [patients, setPatients] = useState<PatientType[]>(mockPatient);
    const [heartConditions, setHeartConditions] = useState<HeartConditionType[]>(mockHeartCondition);
    const [heartRateMeasurements, setHeartRateMeasurements] = useState<HeartRateMeasurementType[]>(mockHeartRateMeasurement);
    const [sleepBreathingRates, setSleepBreathingRates] = useState<SleepBreathingRateType[]>(mockSleepBreathingRate);
    const [dailyActivities, setDailyActivities] = useState<DailyActivityType[]>(mockDailyActivity);
    const data = [{ uv: 80}, { uv: 78}, { uv: 78}];


    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <div className={classes.smallwidget}>
                    <img src='src/assets/image.png'></img>
                    <h3>88</h3>
                </div>
                <div className={classes.mediumwidget}>
                    <div className={classes.chart}>
                        <LineChart width={300} height={300} data={data} margin={{ top: 5, right: 30, bottom: -8, left: -25 }}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d" />
                            <CartesianGrid stroke="#99bbfd" strokeDasharray="5 5" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </div>
                </div>
            </div>
            <div className={classes.middle}>
            </div>
            <div className={classes.bottom}>
                <div className={classes.largewidget}>
                    <form>
                        <h2>Abnormalities</h2>
                        <p>Everything is fine! ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss😊 </p>
                    </form>
                </div>
            </div>
        </div>
    )
}