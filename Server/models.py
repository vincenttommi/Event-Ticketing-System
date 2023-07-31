#app/models.py
from  sqlalchemy  import ForeignKey
from flask_sqlalchemy import SQLAlchemy

# Flask-serialize is intended for joining a
# Flask SQLAlchemy Python backend with a JavaScript Web clien
db = SQLAlchemy()
class Admin(db.Model):
    __tablename__ = 'admin'
    admin_id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String, nullable=False)
    organisers = db.relationship('Organiser', backref='admin', lazy=True)
class Customer(db.Model):
    __tablename__ = 'customer'
    customer_id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    phone_number = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=False)
class Organiser(db.Model):
    __tablename__ = 'organiser'
    organiser_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    industry = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=False)
    admin_id = db.Column(db.Integer, db.ForeignKey('admin.admin_id'), nullable=False)
    events = db.relationship('Event', backref='organiser', lazy=True)
class Event(db.Model):
    __tablename__ = 'events'
    event_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    price = db.Column(db.Float, nullable=False)
    location = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=True)
    time = db.Column(db.String, nullable=False)
    date = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    organiser_id = db.Column(db.Integer, db.ForeignKey('organiser.organiser_id'), nullable=False)
    tickets_sold = db.Column(db.Integer, default=0, nullable=False) 
class BookedEvent(db.Model):
    __tablename__ = 'booked_events'
    booking_id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey('events.event_id'), nullable=False)
    image = db.Column(db.String, nullable=True)
    price = db.Column(db.Float, nullable=False)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.customer_id'), nullable=False)
    description = db.Column(db.String, nullable=False)
    title = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=False)
    date = db.Column(db.String, nullable=False)
    time = db.Column(db.String, nullable=False)
class Payment(db.Model):
    __tablename__ = 'payment'
    payment_id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.customer_id'), nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('events.event_id'), nullable=False)
    organiser_id = db.Column(db.Integer, db.ForeignKey('organiser.organiser_id'), nullable=False)
    date_paid = db.Column(db.DateTime, nullable=False)
    
class Revenue(db.Model):
    __tablename__ = 'revenue'
    revenue_id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey('events.event_id'), nullable=False)
    # New columns: admin_share and organiser_share
    admin_share = db.Column(db.Float, nullable=False, default=0.0)
    organiser_share = db.Column(db.Float, nullable=False, default=0.0)
    
    
class CompanyRevenue(db.Model):
    __tablename__ = 'company_revenue'
    id = db.Column(db.Integer, primary_key=True)
    total_amount = db.Column(db.Float, nullable=False, default=0.0)
    tickets_sold = db.Column(db.Integer, nullable=False, default=0)
    sales = db.Column(db.Float, nullable=False, default=0.0)
    