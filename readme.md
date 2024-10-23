# Lunar SDK JS

**Lunar SDK JS** is a lightweight Node.js library that provides an interface for interacting with the Lunar service. It allows you to easily set key-value pairs, optionally with a time-to-live (TTL) value, using a simple API.

## Installation

You can install the package via npm:

```bash
npm install lunar-js-sdk
```

## Usage

Here is a basic example demonstrating how to use the Lunar SDK JS:

```javascript
const Lunar = require('lunar-js-sdk');

// Initialize the Lunar SDK
const lunar = new Lunar();

// Optionally set a new connection URL
lunar.connection('http://your-lunar-service-url:8000');

// Set a key-value pair with optional TTL
lunar.set('exampleKey', 'exampleValue', 60); // TTL is in seconds
```

### Methods

#### `new Lunar()`

Creates a new instance of the Lunar SDK.

```javascript
const lunar = new Lunar();
```

#### `connection(connectionURL)`

Sets the base URL for the Lunar service.

- **connectionURL** (string): The URL of the Lunar service.

```javascript
lunar.connection('http://your-lunar-service-url:8000');
```

#### `set(key, value, ttl)`

Stores a key-value pair in the Lunar service.

- **key** (string): The key to be set.
- **value** (string): The value associated with the key.
- **ttl** (number, optional): Time-to-live in seconds for the key-value pair. If not provided, the key-value pair will persist indefinitely.

```javascript
lunar.set('exampleKey', 'exampleValue', 60);
```

#### `get(key)`

Retrieves the value associated with a given key from the Lunar service.

- **key** (string): The key for which the value needs to be retrieved.

Returns the value associated with the key, or `null` if the key does not exist or has expired.

```javascript
lunar.get('exampleKey').then(value => {
  console.log(value); // Outputs the value or null if the key doesn't exist.
});
```

#### `del(key)`

Deletes a key-value pair from the Lunar service.

- **key** (string): The key to be deleted.

```javascript
lunar.del('exampleKey').then(response => {
  console.log(response); // Outputs success message or error if the key does not exist.
});
```

#### `mset(...pairs)`

Stores multiple key-value pairs in the Lunar service.

- **pairs**: A list of keys and values, alternating between them.

```javascript
lunar.mset('key1', 'value1', 'key2', 'value2').then(response => {
  console.log(response); // Outputs success message.
});
```

#### `mget(...keys)`

Retrieves multiple values associated with the given keys from the Lunar service.

- **keys**: A list of keys to retrieve.

```javascript
lunar.mget('key1', 'key2').then(values => {
  console.log(values); // Outputs the values for the keys or null if they do not exist.
});
```

#### `keys()`

Lists all keys stored in the Lunar service.

```javascript
lunar.keys().then(keys => {
  console.log(keys); // Outputs a list of all keys.
});
```

#### `clear()`

Clears all key-value pairs from the Lunar service.

```javascript
lunar.clear().then(response => {
  console.log(response); // Outputs success message.
});
```

#### `size()`

Gets the number of key-value pairs stored in the Lunar service.

```javascript
lunar.size().then(count => {
  console.log(`Number of keys: ${count}`); // Outputs the number of keys.
});
```

#### `cleanup()`

Removes expired entries from the Lunar service.

```javascript
lunar.cleanup().then(response => {
  console.log(response); // Outputs success message or number of expired entries removed.
});
```

#### `save(filename)`

Saves the current state of the Lunar service to a file.

- **filename** (string): The name of the file where the state will be saved.

```javascript
lunar.save('backup.json').then(response => {
  console.log(response); // Outputs success message.
});
```

#### `load(filename)`

Loads the state of the Lunar service from a file.

- **filename** (string): The name of the file from which the state will be loaded.

```javascript
lunar.load('backup.json').then(response => {
  console.log(response); // Outputs success message.
});
```

### Error Handling

All methods return a Promise. If an error occurs during the execution of a command, the Promise will be rejected with an error message.

```javascript
lunar.set('exampleKey', 'exampleValue', 60)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find bugs or have suggestions for new features.

## Disclaimer

This package assumes that you have the Lunar CLI installed and accessible from your command line. The Lunar CLI is required to execute the commands via the `exec` function.

## Author

Adam Basha