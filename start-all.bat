@echo off
echo Starting Backend Server...
start cmd /k "cd bankers-backend && node server.js"

echo Starting Primary Frontend Server...
start cmd /k "cd my-react-app && npm run dev"

echo Both frontend and backend servers have been launched! You can close this particular window.
exit
