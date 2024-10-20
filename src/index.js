const { spawn } = require('node:child_process');
class Lunar {
    constructor(){
        this.basUrl = 'http://localhost:8000';
    }
    connection(connectionURL){
        this.basUrl = connectionURL
    }
}