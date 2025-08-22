import express from 'express';

const PORT = 3000;
const HOSTNAME = "127.0.0.1"
const app = express();

app.get("/", (req, res) => {
    res.send("Michal:Eaaa CJ What's up.<br>CJ:I am fine and what about you.<br>Michal:I am also fine.Let's play games<br>CJ:Okey<br>Michal:OHH No we lose the game bro<br>CJ:Yep<br>Michal:OHH here we go again<br>CJ:I am good at this");
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server  running on http://${HOSTNAME}:${PORT}`);
});










