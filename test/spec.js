const http = require('http');
const assert = require('assert');
const cronenberg = require('../lib/main');
const cronenberg2 = require('../lib/main');

describe('Cronenberg', function(){

    let berg2, jobby;

    let serv = http.createServer(function(req, res){
        jobby();
        res.end();
    });
    serv.listen(8088);

    var berg = cronenberg({
        test: { url: 'http://localhost:8088/t1', method: 'post', spec: '* * * * *' }
    });

    it('Should reach the setup endpoints', function(done){
        this.timeout(62000);
        jobby = done
    });

    it('Should work when reading a config file', function(){
        berg2 = cronenberg2('./test/res/conf.yml');
        assert.strictEqual(berg2.tasks.length, 1);
    });

    after(function(){
        berg.stop();
        berg2.stop();
        serv.close();
    });

});
