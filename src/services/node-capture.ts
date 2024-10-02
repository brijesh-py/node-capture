import axios from "axios";
import { CONFIG } from "../constants/conf";

async function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
}

async function getBatteryInfo() {
  try {
    const batteryObj = await navigator.getBattery();

    const battery = {
      battery_charging: batteryObj.charging,
      battery_level: `${parseInt(batteryObj.level * 100)}%`,
    };

    return battery;
  } catch (error) {
    console.error("Error getting battery information:", error);
    return {};
  }
}

async function browser() {
  const n = navigator;
  const nav = {
    appName: n.appName,
    appVersion: n.appVersion,
    cookieEnabled: n.cookieEnabled,
    deviceMemory: n?.deviceMemory,
    language: n.language,
    onLine: n.onLine,
    platform: n.platform,
    userAgentData: n?.userAgentData,
    userAgent: n.userAgent,
    hardwareConcurrency: n.hardwareConcurrency,
    languages: n.languages,
    connection: n?.connection,
    screen: window?.screen,
    crossOriginIsolated: window.crossOriginIsolated,
    credentialless: window?.credentialless,
    pdfViewerEnabled: n?.pdfViewerEnabled,
    windowInnerHeight: window.innerHeight,
    windowInnerWidth: window.innerWidth,
  };
  return nav;
}

async function ipV6() {
  try {
    const IP_API = CONFIG.IP_API;
    const response = await axios(IP_API);
    return response?.data?.ip;
  } catch (error) {
    console.error(error);
    return {};
  }
}

async function isp() {
  try {
    const ISP_API = CONFIG.ISP_API;
    const response = await axios(ISP_API);
    return response?.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}

async function nodeCapture() {
  try {
    const details = {
      battery: await getBatteryInfo(),
      geoLocation: await getLocation(),
      ipV6: await ipV6(),
      browser: await browser(),
      isp: await isp(),
    };
    console.log(details);
    const DB_URI = CONFIG.DB_URI;
    await axios.post(DB_URI, { details, userId: "Linux" });
  } catch (error) {
    console.error(error);
  }
}

export default nodeCapture;
