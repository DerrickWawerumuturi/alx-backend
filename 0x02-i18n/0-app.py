#!/usr/bin/env python3
""" import flask and render template
"""
from flask import Flask, render_template


""" create flask instance
"""
app = Flask(__name__)
app.url_map.strict_slashes = False


@app.route('/')
def index():
    """ render html file
    """
    return render_template('0-index.html')


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8080)
