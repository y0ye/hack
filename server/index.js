const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());


// Routers

// get data
app.get("/patient", async(req, res) => {
    try{
        const allpatient = await pool.query("SELECT * FROM patient WHERE patient_id = 1");
        res.json(allpatient.rows);
    } catch (err) {
        console.erro(err.message)
    }
}
)

app.get("/prescription", async(req, res) => {
    try{
        const allPrescription = await pool.query("SELECT * FROM prescription WHERE patient_id = 1");
        res.json(allPrescription.rows);
    } catch (err) {
        console.erro(err.message)
    }
}
)

app.get("/heart_condition", async(req, res) => {
    try{
        const allHeart_condition = await pool.query("SELECT * FROM heart_condition WHERE patient_id = 1");
        res.json(allHeart_condition.rows);
    } catch (err) {
        console.erro(err.message)
    }
}
)

app.get("/heart_rate", async(req, res) => {
    try{
        const allHeart_rate = await pool.query("SELECT * FROM heart_rate_measurement WHERE patient_id = 1");
        res.json(allHeart_rate.rows);
    } catch (err) {
        console.erro(err.message)
    }
}
)

app.get("/sleep", async(req, res) => {
    try{
        const allSleep = await pool.query("SELECT * FROM sleep_breathing_rate_measurements WHERE patient_id = 1");
        res.json(allSleep.rows);
    } catch (err) {
        console.erro(err.message)
    }
}
)

app.get("/activity", async(req, res) => {
    try{
        const allActivity = await pool.query("SELECT * FROM daily_activity WHERE patient_id = 1");
        res.json(allActivity.rows);
    } catch (err) {
        console.erro(err.message)
    }
}
)

app.get("/appointment", async(req, res) => {
    try{
        const allAppointment = await pool.query("SELECT * FROM appointment WHERE patient_id = 1");
        res.json(allAppointment.rows);
    } catch (err) {
        console.erro(err.message)
    }
}
)

app.listen(5001, () => {
    console.log("server has started on port 5001");
});