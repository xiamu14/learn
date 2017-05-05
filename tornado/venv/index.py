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

def layoutImg(imgList, model, ratioList):
    for item in imgList:
        ratio=round(item['w']/float(item['h']), 1) # 获取保留一位小数的长宽比
        ratios.append(ratio)
    # 排序
    ratios = sorted(ratios)
    newImgList0 = sorted(imgList, key=lambda img:img['ratio'])
    newImgList1 = []
    low = 0
    heigh = len(ratios) - 1
    time = 0
    while model > 0:
        val = ratiosList[model]
        time += 1
        mid = int((heigh + low) / 2)
        if abs(val - ratios[mid]) == 0:



    print newImgList
    # 根据图片数量以及横竖图数量确定布局并排序
    if length >= 5:
        return newImgList
    else:
        return imgList

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('index.html', imgList=layoutImg(imgList))

if __name__ == '__main__':
    tornado.options.parse_command_line()
    app = tornado.web.Application(handlers=[(r"/", IndexHandler)],
        template_path=os.path.join(os.path.dirname(__file__), "templates"),
        static_path=os.path.join(os.path.dirname(__file__), "static")
    )
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()