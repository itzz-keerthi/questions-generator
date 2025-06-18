import cron from 'node-cron';
import axios from 'axios';
import chalk from 'chalk';

// Simulated sample API endpoint (replace with real endpoint later)
const SAMPLE_DATA = [
  "Sample 1: NASA confirms water traces on Mars.",
  "Sample 2: ISRO prepares Chandrayaan-4 for lunar soil study.",
  "Sample 3: SpaceX schedules next Starlink mission launch."
];

let index = 0;

function fetchTranscript() {
  console.log(chalk.green.bold(`\n[CRON] Fetching Transcript at ${new Date().toLocaleTimeString()}`));
  console.log(chalk.blue(SAMPLE_DATA[index % SAMPLE_DATA.length]));
  index++;
}

// Schedule every 2 minutes
cron.schedule('*/2 * * * *', fetchTranscript);

console.log(chalk.yellow('Cron Job Initialized... Waiting for execution...'));