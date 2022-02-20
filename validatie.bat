echo HTML check > validatie.txt
.\vnu-runtime-image\bin\vnu.bat --skip-non-html --Werror --stdout --format text .  >> validatie.txt
echo CSS check  >> validatie.txt
.\vnu-runtime-image\bin\vnu.bat --skip-non-css --Werror --stdout --format text .  >> validatie.txt
