all:


build:


dev:
	@$(MAKE) -s -j3 devdev


devdev: server csswatch jswatch


server:
	python -m SimpleHTTPServer

csswatch:
	sass --compass --watch --style compressed sass/app.sass:app.css

# npm install coffee-script
jswatch:
	coffee -wc -j app.coffee coffee/


.PHONY: all build dev devdev server csswatch jswatch
