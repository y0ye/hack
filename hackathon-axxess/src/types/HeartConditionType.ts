export type HeartConditionType = {
    condition_id: number;
    patient_id: number;
    oxygen_level: number;
    condition_name: string;
};

export const mockHeartCondition: HeartConditionType[] = [
    { condition_id: 1, patient_id: 1, oxygen_level: 95, condition_name: 'Hypertension' },
];