export type SleepBreathingRateType = {
    measurement_id: number;
    patient_id: number;
    breathing_rate: number;
    measurement_time: string;
    sleep_stage: string;
};

export const mockSleepBreathingRate: SleepBreathingRateType[] = [
    { measurement_id: 1, patient_id: 1, breathing_rate: 0, measurement_time: '2025-02-19 23:00:00', sleep_stage: 'Deep sleep' },
];

