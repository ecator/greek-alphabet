#!/usr/bin/env python3

import sys
import http.server
import socketserver

if len(sys.argv[1:]) > 0:
	if sys.argv[1].isdigit():
		pass
		port=sys.argv[1]
	else:
		print("please input a int as port！")
		exit()
else:
	port=8000


Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", int(port)), Handler) as httpd:
    print("serving at port", port)
    httpd.serve_forever()