from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from faker import Faker
from flask_login import UserMixin

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///events.db'
db = SQLAlchemy(app)
fake = Faker()

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    email = db.Column(db.String(), unique=True)
    password = db.Column(db.String(), nullable=False)
    phone_number = db.Column(db.String(), nullable=False)
    role = db.Column(db.String(), nullable=False)

class Events(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(), nullable=False)
    location = db.Column(db.String(), nullable=False)
    description = db.Column(db.String(), nullable=False)
    event_category = db.Column(db.String(), nullable=False)
    image = db.Column(db.String())
    organizer_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    event_time = db.Column(db.DateTime(), nullable=False)
    ticket_levels = db.Column(db.String(), nullable=False)
    vip_price = db.Column(db.Float, nullable=False)
    regular_price = db.Column(db.Float, nullable=False)
    early_bird_price = db.Column(db.Float, nullable=False)
    tickets_number = db.Column(db.Integer, default=0, nullable=False)
    remaining_tickets = db.Column(db.Integer, default=0, nullable=False)

    def get_ticket_price(self, ticket_level):
        if ticket_level == "VIP":
            return self.vip_price
        elif ticket_level == "Regular":
            return self.regular_price
        elif ticket_level == "Early Bird":
            return self.early_bird_price
        else:
            raise ValueError("Invalid ticket level")


class BookedEvents(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'), nullable=False)
    event_title = db.Column(db.String(), nullable=False)
    event_location = db.Column(db.String(), nullable=False)
    ticket_level = db.Column(db.String(), nullable=False)
    attendee_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
class Revenue(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    total_amount = db.Column(db.Float, nullable=False)
    organizer_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    @property
    def tickets_sold(self):
        return self.event.tickets_number - self.event.remaining_tickets

    @classmethod
    def calculate_total_amount(cls, organizer_id):
        events = Events.query.filter_by(organizer_id=organizer_id).all()
        total = 0.0
        for event in events:
            total += event.vip_price + event.regular_price + event.early_bird_price
        return total


if __name__ == '__main__':
    with app.app_context():
        db.create_all() 
    app.run()
