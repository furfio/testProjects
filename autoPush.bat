FOR /f %%a in ('WMIC OS GET LocalDateTime ^| find "."') DO set DTS=%%a
set CUR_DATE=%DTS:~0, 4%-%DTS:~4, 2%-%DTS:~6, 2%
git add .
git commit -m %CUR_DATE%
git push origin master