#!usr/bin/env python3
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate  import Migrate
from models import db
from models import db, Admin, Customer, Organiser, Events, BookedEvents, Payment, Revenue


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///events.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app,db)
db.init_app(app) 


if __name__ == '__main__':
    app.run(port=5555)