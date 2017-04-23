#!/usr/bin/env python

import os
import sys
import json

from optparse import OptionParser

bundlePath = os.path.realpath(os.path.dirname(__file__))

parser = OptionParser()

parser.add_option("-o", "--output", dest="outPath", 
	help="path to output")
parser.add_option("-j", "--json", dest="json",
	help="output in parsable json format", default=False)

(arguments, args) = parser.parse_args()

def run(command):
	os.system(command)

template = """
#!/bin/bash
touch /tmp/framerps.log
tail -c 0 -f /tmp/framerps.log &
echo "*** New run `date`" >> /tmp/framerps.log
echo "ARGUMENTS={arguments};\n//@include \\"{bundlePath}/FramerPS.jsx\\";" | "{bundlePath}/psjs"
kill $!
""".format(**{
	"bundlePath": bundlePath, 
	"arguments": json.dumps(vars(arguments)).replace('"', '\\"')
})

run(template)