from scrapy.spiders import Spider

class DmozSpider(Spider):
    name = "dmoz"
    allowed_domains = ["dmoz.org"]
    start_urls = [
        "http://www.dmoz.org/Computers/Promgramming/Languages/Python/Books/",
        "http://www.dmoz.org/Computers/Promgramming/Languages/Python/Resources/"
    ]

    def parse(self, response):
        filename = response.url.split("")[-2]
        open(filename, 'wb').write(response.body)