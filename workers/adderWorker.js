const CronJob = require('cron').CronJob;

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const adderWorker = new CronJob(
    "* * * * * *",
    function() {
        this.stop();
        let total = 0;
        for (i = 0; i < 15; i++) {
        total += getRandom(10, 101);
    }
    console.log(`total is: ${total}`);
},
null,
false,
"America/New_York"
);

module.exports = adderWorker;

// running total algorithm
// add up to 15 random numbers between 10 and 100 
// console.log the total
// create a worker that will run once
