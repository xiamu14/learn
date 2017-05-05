#! /usr/bin/python
# -*- conding:utf-8 -*-

import os.path

import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

from tornado.options import define, options
define("port", default=8000, help="run on the given port", type=int)

imgList=[{'title':'1.jpeg', 'w':480, 'h':960}, {'title':'2.jpeg', 'w':658, 'h':822}, {'title':'3.jpeg', 'w':658, 'h':658}, {'title':'4.jpeg', 'w':658, 'h':658},{'title':'5.jpeg', 'w':658, 'h':439}]
length=len(imgList)

def layoutImg(imgList):
    newImgList=[{'model': 0}]  #预设图片布局为模式0
    for item in imgList:
        ratio=item['w']/item['h']
        item['ratio']=ratio
        newImgList.append(item)
    if length==1:
        return newImgList
    elif length==2:
        newImgList[0]['model']=1
        return newImgList
    elif length==3:

    return newImgList

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('index.html', imgList=layoutImg(imgList), length=length)

if __name__ == '__main__':
    tornado.options.parse_command_line()
    app = tornado.web.Application(handlers=[(r"/", IndexHandler)],
        template_path=os.path.join(os.path.dirname(__file__), "templates"),
        static_path=os.path.join(os.path.dirname(__file__), "static")
    )
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()