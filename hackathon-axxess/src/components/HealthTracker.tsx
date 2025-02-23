import classes from '../assets/HealthTracker.module.css'
import { useState, useEffect } from 'react';
import { PatientType, mockPatient } from '../types/PatientType';
import { HeartConditionType, mockHeartCondition } from '../types/HeartConditionType';
import { DailyActivityType, mockDailyActivity } from '../types/DailyActivityType';
import { SleepBreathingRateType, mockSleepBreathingRate } from '../types/SleepBreathingType';
import { HeartRateMeasurementType, mockHeartRateMeasurement } from '../types/HeartRateMeasurementType';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import HeartConditions  from '../components/HeartConditions';
import HeartRateMeasurements from './HeartRateMeasurements';
import SleepRateMeasurements from './SleepRateMesurements';
import DailyActivityRateMeasurements from './DailyActivities';

export default function HealthTracker() {
    const [patients, setPatients] = useState<PatientType[]>(mockPatient);
    const [heartConditions, setHeartConditions] = useState<HeartConditionType[]>(mockHeartCondition);
    const [heartRateMeasurements, setHeartRateMeasurements] = useState<HeartRateMeasurementType[]>(mockHeartRateMeasurement);
    const [sleepBreathingRates, setSleepBreathingRates] = useState<SleepBreathingRateType[]>(mockSleepBreathingRate);
    const [dailyActivities, setDailyActivities] = useState<DailyActivityType[]>(mockDailyActivity);
    const data = [{ HR: 80 }, { HR: 78 }, { HR: 78 }];

    const fetchData = (endpoint, setter) => {
        fetch(`http://localhost:5001/${endpoint}`)
            .then((response) => response.json())
            .then((data) => setter(data))
            .catch((err) => console.error(`Error fetching ${endpoint}:`, err));
    };

    useEffect(() => {
        fetchData("patient", setPatients);
        fetchData("heart_condition", setHeartConditions);
        fetchData("heart_rate", setHeartRateMeasurements);
        fetchData("sleep", setSleepBreathingRates);
        fetchData("activity", setDailyActivities);
    }, []);


    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <h2>Health Information</h2>
                <div className={classes.smallwidget}>
                    <img src='src/assets/image.png'></img>
                    <h3>88</h3>
                </div>
                <div className={classes.mediumwidget}>
                    <div className={classes.chart}>
                        <LineChart width={300} height={300} data={data} margin={{ top: 5, right: 30, bottom: -8, left: -25 }}>
                            <Line type="monotone" dataKey="HR" stroke="#000000" />
                            <CartesianGrid stroke="#99bbfd" strokeDasharray="5 5" />
                            <XAxis label="Day" dataKey="name" />
                            <YAxis label="AVG HR" />
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
                        <h1>Abnormalities</h1>
                        <h2>Heart Condition</h2>
                        {heartConditions.map((heart) => (
                            <HeartConditions key={heart.patient_id} heart={heart} />
                        ))}
                        <h2>Activity & HR</h2>
                        {heartRateMeasurements.map((heart) => (
                            <HeartRateMeasurements key={heart.patient_id} heart={heart} />
                        ))}
                        <h2>Sleep & Breathing</h2>
                        {sleepBreathingRates.map((sleep) => (
                            <SleepRateMeasurements key={sleep.patient_id} sleep={sleep} />
                        ))}
                        <h2>Steps</h2>
                        {dailyActivities.map((act) => (
                            <DailyActivityRateMeasurements key={act.patient_id} act={act} />
                        ))}
                    </form>
                </div>
            </div>
        </div>
    )
}