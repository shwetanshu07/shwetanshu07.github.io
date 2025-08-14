# Pelican portfolio (based on your single-file HTML)

## Requirements
- Python 3.12
- git (for deploy to GitHub Pages later)

## Setup (local dev)
1. Create a virtualenv and activate:
   ```bash
   python3.12 -m venv venv
   source venv/bin/activate
   ```

2. Install Pelican and Markdown:
   ```bash
   pip install pelican Markdown
   # optional but recommended for autoreload: pip install watchdog
   ```

3. Build site (development):
   ```bash
   # from project root
   pelican content -s pelicanconf.py -o output -t themes/minimalist
   ```

4. Preview locally:
   ```bash
   cd output
   python3 -m http.server 8000
   # then open http://localhost:8000 in your browser
   ```

5. Alternatively, use the Makefile:
   ```bash
   make dev
   # then open http://localhost:8000
   ```

## Serve with Pelican's --listen (alternative)
```bash
# build + serve in one line (some Pelican installs support --listen)
pelican content -s pelicanconf.py --output=output --theme=themes/minimalist --listen
```

## Build for production / GitHub Pages
1. Edit `publishconf.py` and set:
   ```py
   SITEURL = 'https://username.github.io'  # change to your username.github.io
   ```
2. Build using publishconf:
   ```bash
   pelican content -s publishconf.py -o output -t themes/minimalist
   ```

## Notes for GitHub Pages deployment
- You will deploy the contents of `output/` to the `main` (or `master`) branch of `username.github.io`.
- Typical workflow:
  ```bash
  cd output
  git init
  git remote add origin git@github.com:username/username.github.io.git
  git add .
  git commit -m "Initial site"
  git push -u origin main --force
  ```
- You can automate with GitHub Actions or use gh-pages branch workflows; if you want, I can add a GitHub Actions workflow file later.

