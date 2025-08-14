DEV_SERVER_PORT=8000

help:
	@echo "make dev      -> build & serve locally (http://localhost:8000)"
	@echo "make build    -> build into output/"
	@echo "make publish  -> build for publish (uses publishconf.py)"

build:
	pelican content -s pelicanconf.py -o output -t themes/minimalist

dev: build
	cd output && python3 -m http.server $(DEV_SERVER_PORT)

publish:
	pelican content -s publishconf.py -o output -t themes/minimalist
