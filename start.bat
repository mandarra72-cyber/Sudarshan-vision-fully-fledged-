@echo off
echo ===============================================
echo Starting SEDC Website - Full Stack Application
echo ===============================================
echo.

echo Checking if MongoDB is running...
sc query MongoDB | find "RUNNING" >nul
if %errorlevel% neq 0 (
    echo MongoDB is not running. Starting MongoDB...
    net start MongoDB
    timeout /t 2 >nul
) else (
    echo MongoDB is already running.
)
echo.

echo Starting Backend Server...
start "SEDC Backend" cmd /k "cd /d %~dp0server && npm run dev"
timeout /t 3 >nul

echo Starting Frontend Development Server...
start "SEDC Frontend" cmd /k "cd /d %~dp0 && npm run dev"

echo.
echo ===============================================
echo Both servers are starting...
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:5173
echo ===============================================
echo.
echo Press any key to exit this window...
pause >nul
