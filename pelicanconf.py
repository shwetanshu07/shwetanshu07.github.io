AUTHOR = 'Shwetanshu Raj'
SITENAME = 'Shwetanshu Raj'  # change if you want
SITEDESCRIPTION = 'Personal portfolio and writing.'
SITEURL = ''  # empty for local dev

PATH = 'content'
TIMEZONE = 'Asia/Kolkata'
DEFAULT_LANG = 'en'

# Theme
THEME = 'themes/minimalist'
STATIC_PATHS = ['images']  # add if you have images

# Pretty URLs (no .html)
ARTICLE_URL = 'articles/{slug}/'
ARTICLE_SAVE_AS = 'articles/{slug}/index.html'

PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'

# Clean URLs for pages representing projects if category 'Projects' present
# (pages will use PAGE_URL above)

RELATIVE_URLS = True

DEFAULT_PAGINATION = 10
