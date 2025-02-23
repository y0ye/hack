const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());


// Routers

// get data
app.get("/paitent", async(req, res) => {
    try{
        const allpaitent = await pool.query("SELECT * FROM paitent WHERE patient_id = 1");
        res.json(allpaitent.rows);
    } catch (err) {
        console.erro(err.message)
    }
}
)

app.listen(5001, () => {
    console.log("server has started on port 5001");
});