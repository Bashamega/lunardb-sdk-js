const { exec } = require('child_process');
class Lunar {
    constructor(){
        this.baseUrl = 'http://localhost:8000';
    }
    connection(connectionURL){
        this.baseUrl = connectionURL;
    }
    set(key, value, ttl){
        try {
            const command = `
                lunar
                set ${key} ${value} ${ttl ? ttl : ''}
            `
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    return `exec error: ${error}`;
                }
                return stdout
            });
        } catch (error) {
            return error
        }
    }
    get(key){
        try {
            const command = `
                lunar
                get ${key}
            `
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    return `exec error: ${error}`;
                }
                return stdout
            });
        } catch (error) {
            return error
        }
    }
    del(key){
        try {
            const command = `
                lunar
                del ${key}
            `
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    return `exec error: ${error}`;
                }
                return stdout
            });
        } catch (error) {
            return error
        }
    }
}
module.exports = Lunar;