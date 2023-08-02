from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.schema import CheckConstraint 

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///events.db' 
db = SQLAlchemy(app)


class Admin(db.Model):
    __tablename__ = 'admin'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)


class Customer(db.Model):
    __tablename__ = 'customers'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    phone_number = db.Column(db.String, nullable=False)

    booked_events = db.relationship('BookedEvents', backref='customers', lazy=True)


class Organiser(db.Model):
    __tablename__ = 'organisers'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    industry = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=False)

    __table_args__ = (
        CheckConstraint(industry.in_(['Business', 'Political', 'Academic', 'Charity', 'Community', 'Entertainment', 'Sporting'])),
    )

    events = db.relationship('Events', backref='organisers', lazy=True)
    payments = db.relationship('Payment', backref='organisers', lazy=True)



class Events(db.Model):
    __tablename__ = 'events'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    _price = db.Column('price', db.Float, nullable=False)
    location = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=True)
    time = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    organiser_id = db.Column(db.Integer, db.ForeignKey('organisers.id'), nullable=False)
    tickets_number = db.Column(db.Integer, default=0, nullable=False)
    tickets_status = db.Column(db.String, default='0', nullable=False)
    ticket_level = db.Column(db.String, nullable=False)  # ticket_level field

    def get_price(self):
        return self._price

    def set_price(self, new_price):
        self._price = new_price

    price = property(get_price, set_price)

    def get_price_by_ticket_level(self):
        if self.ticket_level == 'VIP':
            return self._price * 2
        elif self.ticket_level == 'Early Bird':
            return self._price * 1.5
        else:
            return self._price

    booked_events = db.relationship('BookedEvents', backref='events', lazy=True)

    revenue = db.relationship('Revenue', backref='events', lazy=True)


class BookedEvents(db.Model):
    __tablename__ = 'booked_events'
    id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'), nullable=False)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'), nullable=False)
    event_title = db.Column(db.String, nullable=False)
    event_location = db.Column(db.String, nullable=False)
    ticket_level = db.Column(db.String, nullable=False)
    event = db.relationship('Events', backref='booked_events_list', lazy=True)


class Payment(db.Model):
    __tablename__ = 'payments'
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'), nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'), nullable=False)
    amount = db.Column(db.Integer, nullable=False)
    organiser_id = db.Column(db.Integer, db.ForeignKey('organisers.id'), nullable=False)


class Revenue(db.Model):
    __tablename__ = 'revenues'
    id = db.Column(db.Integer, primary_key=True)
    total_amount = db.Column(db.String, nullable=False)
    tickets_sold = db.Column(db.Integer, nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'))