const CronJob = require('cron').CronJob;

const mainWorker = new CronJob(
    "*/10 * * * *",

    function() {
        console.log("every 10 seconds")
    },
    null,
    false,
    "America/New_York"
);

module.exports = mainWorker;