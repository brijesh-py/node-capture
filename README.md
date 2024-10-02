# NodeCapture

NodeCapture is a ReactJS web application that collects and captures device-related data, including geolocation, battery status, browser details, IP address, and ISP information. The data is then sent to a remote server for storage and further analysis. This app showcases how to interact with browser APIs and external APIs to fetch and handle useful information.

## Features

- **Geolocation Capture**: Fetches the user's current geographical location using the browser's Geolocation API.
- **Battery Information**: Retrieves the user's battery status, including charging state and battery level.
- **Browser Details**: Gathers essential browser and device information such as app version, platform, user agent, and hardware capabilities.
- **IPV6 Address**: Fetches the user's public IPv6 address via an external API.
- **ISP Information**: Retrieves the user's Internet Service Provider (ISP) information.
- **Data Submission**: Sends the collected information to a server endpoint using Axios for storage and analysis.

## Technologies Used

- **ReactJS**: Frontend framework to build the user interface and manage the application flow.
- **Axios**: For making HTTP requests to external APIs and sending the collected data to a remote server.
- **Browser APIs**: 
  - `Geolocation API` for fetching the location
  - `Battery Status API` for battery information
  - `Navigator API` for browser and device data
- **External APIs**:
  - IP address API for fetching the IPv6 address.
  - ISP API for retrieving ISP details.

## How It Works

1. **Location Capture**: The application uses the browser's geolocation API to get the user's current position. It requests the user's permission to access this data.
2. **Battery Information**: The app fetches battery details like charge status and level via the `navigator.getBattery()` method.
3. **Browser Details**: The `navigator` object is used to gather key browser-related details, such as the app name, version, user agent, hardware concurrency, etc.
4. **IPV6 & ISP Details**: The app uses external APIs to fetch the user's IP address and ISP information.
5. **Data Submission**: All the collected information is bundled together and sent to the configured backend server using Axios.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/brijesh-py/node-capture.git

2. Navigate to the project directory:
   ```bash
   cd node-capture
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Update the configuration:
   In the `conf.js` file, update the following configuration values with your own API endpoints and DB URI:
   - `IP_API`
   - `ISP_API`
   - `DB_URI`

5. Run the application:
   ```bash
   npm start
   ```

## Usage

1. On launching the application, NodeCapture will automatically request access to the user's geolocation and other browser-related permissions.
2. The collected information will be logged in the console and sent to the backend server for storage.

## Example Data

```json
{
  "battery": {
    "battery_charging": true,
    "battery_level": "85%"
  },
  "geoLocation": {
    "coords": {
      "latitude": 37.421998333333335,
      "longitude": -122.084
    }
  },
  "ipV6": "2607:f8b0:4005:805::200e",
  "browser": {
    "appName": "Netscape",
    "appVersion": "5.0 (Windows)",
    "cookieEnabled": true,
    "deviceMemory": 8,
    "language": "en-US",
    "onLine": true,
    "platform": "Win32",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "hardwareConcurrency": 8,
    "languages": ["en-US", "en"]
  },
  "isp": {
    "org": "Google LLC",
    "asn": "AS15169"
  }
}
```

## License

This project is licensed under the MIT License.

## Contributing

Feel free to submit issues or pull requests if you would like to contribute to the project.

## Contact

For any queries, please contact [brijeshsoftdev@duck.com].
```

This README outlines the features, setup instructions, usage details, and example data for the NodeCapture app.