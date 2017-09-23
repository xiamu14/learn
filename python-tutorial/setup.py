try:
    from setuptools import setup
except ImportError:
    from distutils import setup

config = {
    'name': 'projectName',
    'discription': '',
    'author': '',
    'url': '',
    'download_url': '',
    'author_email': '',
    'version': '0.1',
    'package': ['NAME'],
    'scripts': []
}

setup(**config)
