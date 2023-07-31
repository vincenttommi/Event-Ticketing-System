#!usr/bin/env python3
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate  import Migrate
from models import db
from models import db, Admin, Customer, Organiser, Events, BookedEvents, Payment, Revenue


app = Flask(__name__)
#creates a flask application instance called app

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///events.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#Disables automatic modification tracking in SQLAlchemy for a Flask app


migrate = Migrate(app,db)
#Migrate class sets up our migration using flask application instances and sqlalchemy instances 

db.init_app(app) 
#initialising  the application with database configuration 




if __name__ == '__main__':
    app.run(port=5555)