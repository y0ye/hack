export type HeartRateMeasurementType = {
    measurement_id: number;
    patient_id: number;
    heart_rate: number;
    measurement_date: string;
    activity_level: string;
};

export const mockHeartRateMeasurement: HeartRateMeasurementType[] = [
    { measurement_id: 1, patient_id: 1, heart_rate: 75, measurement_date: '2025-02-20 10:30:00', activity_level: 'Light' },
];