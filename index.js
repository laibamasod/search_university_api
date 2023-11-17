import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

// getting dir of file
const __dirname = path.dirname(__filename);
// Create an HTTP server
const server = http.createServer((req, res) => {

  // Define the base directory for your HTML templates
  const baseDir = path.join(__dirname, 'views');

  if (req.url === '/') {
    // Serve the home page
    fs.readFile(path.join(baseDir, 'home.html'), 'utf8', (err, data) => {
      if (err) {
        logMessage('Error serving home page: ' + err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      
      } else {
        logMessage('Home page served successfully');
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else if (req.url === '/search_university') {
    // Serve the searchUniversity page
    fs.readFile(path.join(baseDir, 'search_university.html'), 'utf8', (err, data) => {
      if (err) {
        logMessage('Error serving university page: ' + err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        logMessage('University page served successfully');
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else if (req.url === '/see_country_universities') {
    // Serve the searchAllUniversity page
    fs.readFile(path.join(baseDir, 'see_country_universities.html'), 'utf8', (err, data) => {
      if (err) {
        logMessage('Error serving Country page: ' + err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        logMessage('Country page served successfully');
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else {
    // Handle 404 Not Found
    res.statusCode = 404;
    res.end('Not Found');
    logMessage('No page: ' + err);
  }
});


server.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});

function logMessage(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;

  try {
    fs.writeFileSync('log.txt', logEntry, { flag: 'a' });
  } catch (error) {
    console.error('Error writing log:', error);
  }


}

