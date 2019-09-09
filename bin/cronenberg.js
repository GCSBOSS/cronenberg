#!node
const Eclipt = require('eclipt');
const parseJobs = require('../lib/main');

// Handle signals.
process.on('SIGINT', () => setTimeout(() => process.exit(0), 1000));
process.on('SIGTERM', () => setTimeout(() => process.exit(0), 1000));

var proceed = true;
function onOutput(data){
    proceed = false;
    console.log(data);
}

let cli = new Eclipt('cronenberg', {
    'config': [ 'c', 'The config file containing all cron jobs', 'file']
}, { noArgs: true, getVersion: () => 'v0.1.0', onOutput });

let input = cli.execute();

if(!proceed)
    return;

if(!input.data.config)
    return console.log('Please, enter a valid config file path');

parseJobs(input.data.config);

console.log('\nCronenberg (v0.1.0) is running\n');
