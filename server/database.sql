CREATE DATABASE health_info;

------ Switch to the new database
\c health_info

------- Create the 'patient' table
CREATE TABLE patient(
    patient_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE,
    gender VARCHAR(10),
    medical_history TEXT
);

------ Create the 'relative' table
CREATE TABLE relative(
    relative_id SERIAL PRIMARY KEY,
    patient_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE,
    relative_type VARCHAR(50),
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id)
);

------ Create the 'presctiption' table
CREATE TABLE prescription(
    prescription_id SERIAL PRIMARY KEY,
    patient_id INT,
    medication_name VARCHAR(100),
    dosage VARCHAR(50),
    targeted VARCHAR(50),
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id)
);

------ Create the 'heart_condition' table
CREATE TABLE heart_condition(
    condition_id SERIAL PRIMARY KEY,
    patient_id INT,
    oxygen_level INT,
    condition_name TEXT,
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id)
);

------ Create the 'heart_rate_measurement' table
CREATE TABLE heart_rate_measurement(
    measurement_id SERIAL PRIMARY KEY,
    patient_id INT,
    heart_rate INT,
    measurement_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activity_level VARCHAR(50),
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id)
);

-- Create the 'sleep_breathing_rate_measurements' table
CREATE TABLE sleep_breathing_rate_measurements(
    measurement_id SERIAL PRIMARY KEY,
    patient_id INT,
    breathing_rate INT,
    measurement_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    sleep_stage VARCHAR(50),
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id)
);

-- Create the 'daily_activity' table
CREATE TABLE daily_activity(
    activity_id SERIAL PRIMARY KEY,
    patient_id INT,
    activity_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    step_taken INT,
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id)
);

-- Create the 'appointment' table
CREATE TABLE appointment(
    appointment_id SERIAL PRIMARY KEY,
    patient_id INT,
    appointment_name VARCHAR(100),
    appointment_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    appointment_status VARCHAR(50),
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id)
);


INSERT INTO patient (patient_id,first_name,last_name,date_of_birth,gender,medical_history)
VALUES
(1, 'John', 'Doe', '1955-05-15', 'Male', 'High blood pressure, diabetes'),
(2, 'Jane', 'Smith', '1962-10-22', 'Female', 'No significant medical history'),
(3, 'Tom', 'Johnson', '1950-02-10', 'Male', 'Asthma, obesity'),
(4, 'Mary', 'White', '1940-11-03', 'Female', 'Heart disease, hypertension');

INSERT INTO relative (relative_id,patient_id,first_name,last_name,date_of_birth,relative_type)
VALUES
(1, 1, 'Emily', 'Doe', '1980-07-30', 'Sister'),
(2, 2, 'Mark', 'Smith', '1985-03-14', 'Brother'),
(3, 3, 'Lily', 'Johnson', '1972-06-18', 'Wife'),
(4, 4, 'James', 'White', '1965-01-25', 'Son');

INSERT INTO presctiption (presctiption_id,patient_id,medication_name,dosage, targeted)
VALUES
(1, 1, 'Lisinopril', '10mg', 'Cardiovascular'), -- High blood pressure
(2, 1, 'Metformin', '500mg', 'Endocrine'), -- Diabetes
(3, 2, 'Ibuprofen', '200mg', 'Musculoskeletal'), -- No significant medical history
(4, 3, 'Albuterol Inhaler', '90mcg', 'Respiratory'), -- Asthma
(5, 3, 'Orlistat', '120mg', 'Endocrine'), -- Obesity
(6, 4, 'Amlodipine', '5mg', 'Cardiovascular'), -- Hypertension
(7, 4, 'Atorvastatin', '20mg', 'Cardiovascular'), -- Heart disease
(8, 1, 'Amlodipine', '5mg', 'Cardiovascular'), -- Hypertension
(9, 3, 'Prednisone', '10mg', 'Immune'), -- Asthma flare-up
(10, 4, 'Clopidogrel', '75mg', 'Cardiovascular'); -- Heart disease


INSERT INTO heart_condition (condition_id,patient_id,oxygen_level,condition_name)
VALUES
(1, 1, 95, 'Hypertension'),
(2, 2, 98, 'Normal'),
(3, 3, 92, 'Asthma'),
(4, 4, 90, 'Coronary artery disease');

INSERT INTO heart_rate_measurement (measurement_id,patient_id,heart_rate,measurement_date,activity_level)
VALUES
(1, 1, 75, '2025-02-20 10:30:00', 'Light'),
(2, 2, 80, '2025-02-21 14:00:00', 'Moderate'),
(3, 3, 85, '2025-02-20 09:00:00', 'High'),
(4, 4, 70, '2025-02-19 11:00:00', 'Resting'),
(5, 1, 75, '2025-02-20 08:00:00', 'Resting'),
(6, 1, 80, '2025-02-20 12:00:00', 'Light activity'),
(7, 1, 78, '2025-02-20 15:00:00', 'Moderate activity'),
(8, 2, 85, '2025-02-20 09:30:00', 'Resting'),
(9, 2, 82, '2025-02-20 13:00:00', 'Moderate activity'),
(10, 3, 88, '2025-02-19 07:45:00', 'High activity'),
(11, 3, 90, '2025-02-19 11:00:00', 'Light activity'),
(12, 4, 70, '2025-02-19 08:30:00', 'Resting'),
(13, 4, 72, '2025-02-19 14:00:00', 'Light activity'),
(14, 4, 160, '2025-02-22 11:00:00', 'Light'), -- Heart rate too high for Light activity
(15, 1, 0, '2025-02-22 08:30:00', 'Resting'), -- No heart rate for Resting (possibly a device issue)
(16, 2, 30, '2025-02-22 14:00:00', 'Light'); -- Heart rate too low for Light activity

INSERT INTO sleep_breathing_rate_measurements (measurement_id,patient_id,breathing_rate,measurement_time,sleep_stage)
VALUES
(1, 1, 0, '2025-02-19 23:00:00', 'Deep sleep'),  -- No breathing rate recorded for Deep sleep (device issue)
(2, 2, 18, '2025-02-20 22:30:00', 'Light sleep'),
(3, 3, 50, '2025-02-19 23:15:00', 'REM sleep'),  -- Very high breathing rate for REM sleep (respiratory distress)
(4, 4, 14, '2025-02-18 23:45:00', 'Deep sleep'),
(5, 1, 16, '2025-02-21 00:30:00', 'Deep sleep'),
(6, 1, 18, '2025-02-21 03:30:00', 'Light sleep'),
(7, 1, 20, '2025-02-21 06:00:00', 'REM sleep'),
(8, 2, 5, '2025-02-21 01:00:00', 'Deep sleep'), -- Breathing rate too low for Deep sleep (could indicate apnea)
(9, 2, 16, '2025-02-21 04:30:00', 'Light sleep'),
(10, 2, 18, '2025-02-21 07:00:00', 'REM sleep'),
(11, 3, 22, '2025-02-20 23:45:00', 'REM sleep'),
(12, 3, 20, '2025-02-20 02:15:00', 'Light sleep'),
(13, 3, 45, '2025-02-20 05:30:00', 'Deep sleep'),  -- Extremely high breathing rate for Deep sleep (possible respiratory distress)
(14, 4, 14, '2025-02-20 00:30:00', 'Deep sleep'),
(15, 4, 16, '2025-02-20 03:45:00', 'Light sleep');

INSERT INTO daily_activity (activity_id,patient_id,activity_date,step_taken)
VALUES
(1, 1, '2025-02-20 09:00:00', 3000),
(2, 2, '2025-02-21 11:30:00', 3500),
(3, 3, '2025-02-20 08:00:00', 4000),
(4, 4, '2025-02-19 10:00:00', 1500),
(5, 1, '2025-02-21 08:00:00', 1200),
(6, 1, '2025-02-21 12:30:00', 3000),
(7, 1, '2025-02-21 18:00:00', 2500),
(8, 2, '2025-02-21 09:00:00', 1800),
(9, 2, '2025-02-21 14:15:00', 4000),
(10, 2, '2025-02-21 19:00:00', 3500),
(11, 3, '2025-02-20 07:00:00', 0),  -- No step taken, (device issue or did not wear it)
(12, 3, '2025-02-20 11:00:00', 0),
(13, 3, '2025-02-20 15:30:00', 0),
(14, 4, '2025-02-20 08:30:00', 1000),
(15, 4, '2025-02-20 13:00:00', 1800),
(16, 4, '2025-02-20 17:45:00', 1500);

INSERT INTO appointment (appointment_id,patient_id,appointment_name,appointment_time,appointment_status)
VALUES
(1, 1, 'Cardiology Follow-up', '2025-02-20 10:00:00', 'Missed'), -- Appointment missed by patient
(2, 1, 'Cardiology Follow-up', '2025-02-22 10:00:00', 'Completed'),
(3, 2, 'Dental Check-up', '2025-02-23 15:30:00', 'Upcoming'),
(4, 3, 'Asthma Specialist', '2025-02-20 14:00:00', 'Completed'),
(5, 4, 'Heart Surgery Consultation', '2025-02-19 09:30:00', 'Completed');