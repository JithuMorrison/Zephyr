@echo off
echo ====================================================
echo      Starting Zephyr World Editor (env.html)
echo ====================================================
echo.
echo Starting the Vite server to enable JSON saving...
echo The browser will open automatically.
echo.
echo [NOTE: Do not close this window while you are editing]
echo.

:: Ping localhost for 2 seconds as a hacky sleep command, then open the browser
start /b cmd /c "ping 127.0.0.1 -n 3 > nul && start http://localhost:5173/env.html"

:: Run the Vite dev server in the current window
npm run dev
