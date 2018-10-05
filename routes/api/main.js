// define express and router
const express = require("express");
const router = express.Router();
const mainWorker = require('../../workers/mainWorker');
const adderWorker = require('../../workers/adderWorker');

// tell the router what to get on the home directory
router.get('/', (req, res) => res.json({ status: "success" }));

router.get("/start", (req, res) => {
    if (mainWorker.running) {
        return res.json({ status: "already running" });
    }
    mainWorker.start();
    res.json({ status: "started worker" })
});

//need parentheses around if statement due to use of method
router.get("/stop", (req, res) => {
    if (!mainWorker.running) {
        return res.json({ status: "worker not running" })
    }
    mainWorker.stop();
    res.json({ status: "worker stopped" });
});

router.get("/adder", (req, res) => {
    adderWorker.start();
    res.json({ status: "numbers adding check console" })
});
   
module.exports = router;
