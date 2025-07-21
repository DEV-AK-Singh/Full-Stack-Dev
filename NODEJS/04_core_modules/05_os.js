// const os = require('os'); 
// // Basic system information
// console.log(`OS Platform: ${os.platform()}`);
// console.log(`OS Type: ${os.type()}`);
// console.log(`OS Release: ${os.release()}`);
// console.log(`CPU Architecture: ${os.arch()}`);
// console.log(`Hostname: ${os.hostname()}`); 
// // Memory information
// const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
// const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
// console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`); 
// // User information
// const userInfo = os.userInfo();
// console.log(`Current User: ${userInfo.username}`);
// console.log(`Home Directory: ${os.homedir()}`);

// const os = require('os');
// // Get CPU information
// const cpus = os.cpus();
// console.log(`Number of CPU Cores: ${cpus.length}`);
// // Display information about each CPU core
// cpus.forEach((cpu, index) => {
//   console.log(`\nCPU Core ${index + 1}:`);
//   console.log(`- Model: ${cpu.model}`);
//   console.log(`- Speed: ${cpu.speed} MHz`);
//   console.log('- Times (ms):', {     
//     user: cpu.times.user,
//     nice: cpu.times.nice,
//     sys: cpu.times.sys,
//     idle: cpu.times.idle,
//     irq: cpu.times.irq
//   });
// });
// // Calculate total CPU usage (example, requires two measurements)
// function calculateCpuUsage(prevCpus) {
//   const currentCpus = os.cpus();
//   const usage = [];
//   for (let i = 0; i < currentCpus.length; i++) {
//     const current = currentCpus[i];
//     const prev = prevCpus ? prevCpus[i] : { times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 } };
//     const prevIdle = prev.times.idle;
//     const idle = current.times.idle - prevIdle;
//     let total = 0;
//     for (const type in current.times) {
//       total += current.times[type] - (prev.times[type] || 0);
//     }
//     const usagePercent = ((1 - idle / total) * 100).toFixed(1);
//     usage.push(parseFloat(usagePercent));
//   }
//   return {
//     perCore: usage,
//     average: (usage.reduce((a, b) => a + b, 0) / usage.length).toFixed(1),
//     cpus: currentCpus
//   };
// }
// // Example usage of CPU usage calculation
// console.log('\nCPU Usage (requires two measurements):');
// const firstMeasure = os.cpus();
// // Simulate some CPU work
// for (let i = 0; i < 1000000000; i++) {}
// const usage = calculateCpuUsage(firstMeasure);
// console.log(`Average CPU Usage: ${usage.average}%`);

// const os = require('os');
// // Get network interfaces information
// const networkInterfaces = os.networkInterfaces();
// console.log('Network Interfaces:');
// // Iterate over each network interface
// Object.entries(networkInterfaces).forEach(([name, addresses]) => {
//   console.log(`\nInterface: ${name}`);
//   addresses.forEach((address) => {
//     console.log(`- Family: ${address.family}`);
//     console.log(` Address: ${address.address}`);
//     console.log(` Netmask: ${address.netmask}`);
//     console.log(` MAC: ${address.mac || 'N/A'}`);
//     console.log(` Internal: ${address.internal}`);
//   });
// });
// // Example: Find the first non-internal IPv4 address
// function getLocalIpAddress() {
//   const interfaces = os.networkInterfaces();
//   for (const name of Object.keys(interfaces)) {
//     for (const iface of interfaces[name]) {
//       if (iface.family === 'IPv4' && !iface.internal) {
//         return iface.address;
//       }
//     }
//   }
//   return '127.0.0.1'; // Fallback to localhost
// }
// const localIp = getLocalIpAddress();
// console.log(`\nLocal IP Address: ${localIp}`);

// const os = require('os');
// // Get system uptime in seconds
// const uptime = os.uptime();
// console.log(`System Uptime: ${uptime} seconds`);
// // Format uptime in a more readable way
// const uptimeDays = Math.floor(uptime / (60 * 60 * 24));
// const uptimeHours = Math.floor((uptime % (60 * 60 * 24)) / (60 * 60));
// const uptimeMinutes = Math.floor((uptime % (60 * 60)) / 60);
// const uptimeSeconds = Math.floor(uptime % 60);
// console.log(`System has been running for: ${uptimeDays} days, ${uptimeHours} hours, ${uptimeMinutes} minutes, ${uptimeSeconds} seconds`);

// const os = require('os');
// // Get all signal constants
// console.log('Signal Constants:', os.constants.signals);
// // Example: Handle common signals
// process.on('SIGINT', () => {
//   console.log('Received SIGINT. Performing cleanup...');
//   process.exit(0);
// });
// process.on('SIGTERM', () => {
//   console.log('Received SIGTERM. Shutting down gracefully...');
//   process.exit(0);
// });
// console.log('Process is running. Press Ctrl+C to exit.');
// const os = require('os');
// function getSystemInfo() {
//   const info = {
//     os: {
//       type: os.type(),
//       platform: os.platform(),
//       architecture: os.arch(),
//       release: os.release(),
//       hostname: os.hostname(),
//       uptime: formatUptime(os.uptime())
//     },
//     user: {
//       username: os.userInfo().username,
//       homedir: os.homedir(),
//       tempdir: os.tmpdir()
//     },
//     memory: {
//       total: formatBytes(os.totalmem()),
//       free: formatBytes(os.freemem()),
//       usage: `${((1 - os.freemem() / os.totalmem()) * 100).toFixed(2)}%`
//     },
//     cpu: {
//       model: os.cpus()[0].model,
//       cores: os.cpus().length,
//       speed: `${os.cpus()[0].speed} MHz`
//     }
//   };

//   return info;
// }
// function formatUptime(seconds) {
//   const days = Math.floor(seconds / (60 * 60 * 24));
//   const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
//   const minutes = Math.floor((seconds % (60 * 60)) / 60);
//   const secs = Math.floor(seconds % 60);

//   return `${days}d ${hours}h ${minutes}m ${secs}s`;
// }
// function formatBytes(bytes) {
//   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
//   if (bytes === 0) return '0 Bytes';
//   const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
//   return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
// }
// // Display the system information dashboard
// const systemInfo = getSystemInfo();
// console.log('======= SYSTEM INFORMATION DASHBOARD =======');
// console.log(JSON.stringify(systemInfo, null, 2));
// // Display in a more formatted way
// console.log('\n======= FORMATTED SYSTEM INFORMATION =======');
// console.log(`OS: ${systemInfo.os.type} (${systemInfo.os.platform} ${systemInfo.os.architecture})`);
// console.log(`Version: ${systemInfo.os.release}`);
// console.log(`Hostname: ${systemInfo.os.hostname}`);
// console.log(`Uptime: ${systemInfo.os.uptime}`);
// console.log(`User: ${systemInfo.user.username}`);
// console.log(`Home Directory: ${systemInfo.user.homedir}`);
// console.log(`CPU: ${systemInfo.cpu.model}`);
// console.log(`Cores: ${systemInfo.cpu.cores}`);
// console.log(`Speed: ${systemInfo.cpu.speed}`);
// console.log(`Memory Total: ${systemInfo.memory.total}`);
// console.log(`Memory Free: ${systemInfo.memory.free}`);
// console.log(`Memory Usage: ${systemInfo.memory.usage}`);

// const os = require('os');
// function monitorResources() {
//   console.clear(); // Clear console for a cleaner display
//   const now = new Date().toLocaleTimeString();
//   console.log(`======= RESOURCE MONITOR (${now}) =======`);
//   // CPU Usage
//   const cpus = os.cpus();
//   console.log(`\nCPU Cores: ${cpus.length}`);
//   // Calculate CPU usage (this is approximate since we need two measurements)
//   const cpuUsage = cpus.map((cpu, index) => {
//     const total = Object.values(cpu.times).reduce((acc, tv) => acc + tv, 0);
//     const idle = cpu.times.idle;
//     const usage = ((total - idle) / total * 100).toFixed(1);
//     return `Core ${index}: ${usage}% used`;
//   });
//   console.log(cpuUsage.join('\n'));
//   // Memory Usage
//   const totalMem = os.totalmem();
//   const freeMem = os.freemem();
//   const usedMem = totalMem - freeMem;
//   console.log('\nMemory Usage:');
//   console.log(`Total: ${formatBytes(totalMem)}`);
//   console.log(`Used: ${formatBytes(usedMem)} (${(usedMem / totalMem * 100).toFixed(1)}%)`);
//   console.log(`Free: ${formatBytes(freeMem)} (${(freeMem / totalMem * 100).toFixed(1)}%)`);
//   // System Uptime
//   console.log(`\nSystem Uptime: ${formatUptime(os.uptime())}`);
//   // Process Info
//   console.log('\nProcess Information:');
//   console.log(`PID: ${process.pid}`);
//   console.log(`Memory Usage: ${formatBytes(process.memoryUsage().rss)}`);
//   console.log(`User: ${os.userInfo().username}`);
// }
// function formatBytes(bytes) {
//   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
//   if (bytes === 0) return '0 Bytes';
//   const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
//   return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
// }
// function formatUptime(seconds) {
//   const days = Math.floor(seconds / (60 * 60 * 24));
//   const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
//   const minutes = Math.floor((seconds % (60 * 60)) / 60);
//   const secs = Math.floor(seconds % 60);
//   return `${days}d ${hours}h ${minutes}m ${secs}s`;
// }
// // Initial display
// monitorResources();
// // Update every second (note: in a real application, you might not want
// // to update this frequently as it uses CPU resources)
// const intervalId = setInterval(monitorResources, 1000);
// // In a real application, you would need to handle cleanup:
// // clearInterval(intervalId);
// // For this example, we'll run for 10 seconds then stop
// console.log('Monitor will run for 10 seconds...');
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log('\nResource monitoring stopped.');
// }, 10000);


// The Node.js OS module provides a powerful set of tools for interacting with the operating system.

// With it, you can:

// Retrieve system information such as CPU architecture, platform, and release version
// Monitor memory usage and CPU performance
// Access user information like home directory and username
// Get network interface information
// Determine system uptime
// Use operating system-specific constants and end-of-line markers
// These capabilities are particularly useful for:

// Building cross-platform applications that adapt to the host environment
// Monitoring system resources
// Creating diagnostic tools
// Making path and file-related operations that work correctly across different operating systems
// Optimizing application performance based on available system resources
// By using the OS module, you can make your Node.js applications more robust, efficient, and adaptable to different operating environments.