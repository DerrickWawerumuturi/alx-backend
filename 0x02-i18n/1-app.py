#!/usr/bin/env python3
""" import flask, babel and render template
"""
from flask import Flask, render_template
from flask_babel import Babel


""" istantiate babel
"""
babel = Babel()


class Config:
    LANGUAGES = ['en', 'fr']
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app = Flask(__name__)
app.config.from_object(Config)


babel.init_app(app)


@app.route('/')
def index():
    """ render home page
    """
    return render_template("1-index.html")


if __name__ == '__main__':
    app.run(port=8080, host='0.0.0.0')
