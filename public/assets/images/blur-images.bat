:: This .bat file will blur and scale down each image in this director!
:: !!! ImageMagick is required to run this command
:: !!! Make sure to delete each file's old Blur.webp file if you want to run this again.
:: 
:: You can also blur a single photo by running this command:
:: `magick Boatparty.png -scale 125 -blur 0x5 BoatpartyBlur.webp`

for %%i in (*) do (
	if %%~xi==.bat (echo ".bat") else (magick %%i -scale 125 -blur 0x5 %%~niBlur.webp)
)