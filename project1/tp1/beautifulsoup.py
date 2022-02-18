
from bs4 import BeautifulSoup

soup = BeautifulSoup('<pre class="rules"></pre>', 'html.parser')
css = soup.find_all("pre", class_="rules")[0].get_text()