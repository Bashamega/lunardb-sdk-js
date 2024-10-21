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

## Error Handling

The `set` method will catch any errors that occur during the execution of the command and return the error message. If the operation is successful, it returns the standard output from the command.

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find bugs or have suggestions for new features.

## Disclaimer

This package assumes that you have the Lunar CLI installed and accessible from your command line. The Lunar CLI is required to execute the commands via the `exec` function.

## Author

Adam Basha