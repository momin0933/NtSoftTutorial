@echo off
SET WORK_TREE=C:\Project\gittest
SET GIT_DIR=C:\Project\gittest\.git

echo Pulling latest code...
git --work-tree=%WORK_TREE% --git-dir=%GIT_DIR% pull origin main

echo Building project...
cd %WORK_TREE%


echo Deployment complete!
pause
