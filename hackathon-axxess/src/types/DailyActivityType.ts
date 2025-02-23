export type DailyActivityType = {
    activity_id: number;
    patient_id: number;
    activity_date: string;
    step_taken: number;
};

export const mockDailyActivity: DailyActivityType[] = [
    { activity_id: 1, patient_id: 1, activity_date: '2025-02-20 09:00:00', step_taken: 3000 },
    { activity_id: 2, patient_id: 2, activity_date: '2025-02-21 11:30:00', step_taken: 3500 },
    { activity_id: 3, patient_id: 3, activity_date: '2025-02-20 08:00:00', step_taken: 4000 },
    { activity_id: 4, patient_id: 4, activity_date: '2025-02-19 10:00:00', step_taken: 1500 },
];