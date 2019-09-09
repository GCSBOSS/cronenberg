const fs = require('fs');
const path = require('path');
const YAML = require('yaml');
const cron = require('node-cron');
const { request } = require('muhb');

module.exports = function parseJobs(data){

    if(typeof data == 'string'){
        data = path.resolve(process.cwd(), data);
        data = YAML.parse(fs.readFileSync(data, 'utf-8'));
    }

    let berg = {
        tasks: [],
        stop() { this.tasks.forEach(t => t.stop()) }
    };

    for(let k in data){
        let job = data[k];
        let m = job.method.toLowerCase();

        berg.tasks.push(cron.schedule(job.spec, async function(){

            let { status } = await request(job.url, job.headers, m, job.body);
            console.log('\n[' + new Date() + ']\nJob: ' + k +
                        '\nEndpoint: ' + m.toUpperCase() + ' ' + job.url +
                        '\nResponse Status: ' + status + '\n\n');
        }));
    }

    return berg;

}
