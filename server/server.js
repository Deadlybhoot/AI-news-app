const express = require ("express");
const app = express();
const cors = require("cors");

app.use(cors({
    origin: "http://localhost:3000",
}));


app.get("/", (req, res) => {
    res.json({name: "code bless you", subscribe: true});
});




app.listen(5000, () => console.log("server is listening."));