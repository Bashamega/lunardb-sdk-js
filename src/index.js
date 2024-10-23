const { exec } = require('child_process');
const util = require('util');

class Lunar {
    constructor() {
        this.baseUrl = 'http://localhost:8000';
        this.execAsync = util.promisify(exec); // Promisify exec for cleaner async/await handling
    }

    connection(connectionURL) {
        this.baseUrl = connectionURL;
    }

    async set(key, value, ttl) {
        const command = `lunar set ${key} ${value} ${ttl ? ttl : ''}`;
        try {
            const { stdout } = await this.execAsync(command.trim());
            return stdout;
        } catch (error) {
            return `exec error: ${error.message}`;
        }
    }

    async get(key) {
        const command = `lunar get ${key}`;
        try {
            const { stdout } = await this.execAsync(command.trim());
            return stdout;
        } catch (error) {
            return `exec error: ${error.message}`;
        }
    }

    async del(key) {
        const command = `lunar del ${key}`;
        try {
            const { stdout } = await this.execAsync(command.trim());
            return stdout;
        } catch (error) {
            return `exec error: ${error.message}`;
        }
    }

    async mset(...pairs) {
        const command = `lunar mset ${pairs.join(' ')}`;
        try {
            const { stdout } = await this.execAsync(command.trim());
            return stdout;
        } catch (error) {
            return `exec error: ${error.message}`;
        }
    }

    async mget(...keys) {
        const command = `lunar mget ${keys.join(' ')}`;
        try {
            const { stdout } = await this.execAsync(command.trim());
            return stdout;
        } catch (error) {
            return `exec error: ${error.message}`;
        }
    }

    async keys() {
        const command = `lunar keys`;
        try {
            const { stdout } = await this.execAsync(command.trim());
            return stdout;
        } catch (error) {
            return `exec error: ${error.message}`;
        }
    }

    async clear() {
        const command = `lunar clear`;
        try {
            const { stdout } = await this.execAsync(command.trim());
            return stdout;
        } catch (error) {
            return `exec error: ${error.message}`;
        }
    }

    async size() {
        const command = `lunar size`;
        try {
            const { stdout } = await this.execAsync(command.trim());
            return stdout;
        } catch (error) {
            return `exec error: ${error.message}`;
        }
    }

    async cleanup() {
        const command = `lunar cleanup`;
        try {
            const { stdout } = await this.execAsync(command.trim());
            return stdout;
        } catch (error) {
            return `exec error: ${error.message}`;
        }
    }

    async save(filename) {
        const command = `lunar save ${filename}`;
        try {
            const { stdout } = await this.execAsync(command.trim());
            return stdout;
        } catch (error) {
            return `exec error: ${error.message}`;
        }
    }

    async load(filename) {
        const command = `lunar load ${filename}`;
        try {
            const { stdout } = await this.execAsync(command.trim());
            return stdout;
        } catch (error) {
            return `exec error: ${error.message}`;
        }
    }
}

module.exports = Lunar;