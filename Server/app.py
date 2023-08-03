#!usr/bin/env python3
from functools import wraps
from flask import Flask, abort, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from models import db, Admin, Customer, Organiser, Events, BookedEvents, Payment, Revenue

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///events.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your_secret_key_here' 

migrate = Migrate(app, db)
db.init_app(app)

# Configure Flask-Login
login_manager = LoginManager(app)
login_manager.login_view = 'login'


# User Loader for Flask-Login
@login_manager.user_loader
def load_user(user_id):
    # Assuming you have an 'id' field in all user models
    return Admin.query.get(int(user_id)) or Customer.query.get(int(user_id)) or Organiser.query.get(int(user_id))


# Custom Role-Based Decorator
def role_required(role):
    def decorator(view_func):
        @login_required
        @wraps(view_func)
        def wrapper(*args, **kwargs):
            if not current_user.is_authenticated or current_user.role != role:
                abort(403)  # Forbidden
            return view_func(*args, **kwargs)
        return wrapper
    return decorator

@app.route('/')
def home():
    return "<h3>EventMS</h3>"

# Route for login (if you have a separate login page)
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    user = Admin.query.filter_by(email=email).first() or \
           Customer.query.filter_by(email=email).first() or \
           Organiser.query.filter_by(email=email).first()

    if user and user.verify_password(password):
        login_user(user)
        return jsonify({'message': 'Login successful'}), 200

    # Authentication failed
    return jsonify({'message': 'Invalid credentials'}), 401


# Route for logout
@app.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({'message': 'Logout successful'}), 200


@app.route('/customers', methods=['GET'])
@role_required('customer')  # Protect this route with the 'customer' role
def get_all_customers():
    customers = Customer.query.all()
    customer_list = []
    for customer in customers:
        customer_data = {
            'id': customer.id,
            'name': customer.name,
            'email': customer.email,
            'phone_number': customer.phone_number,
        }
        customer_list.append(customer_data)
    return jsonify(customer_list), 200


#get method for all events
@app.route('/events', methods=['GET'])
def get_all_events():
    events = Events.query.all()
    event_list = []
    for event in events:
        event_data = {
            'id': event.id,
            'title': event.title,
            'price': event.price,
            'location': event.location,
            'image': event.image,
            'time': event.time,
            'description': event.description,
            'organiser_id': event.organiser_id,
            'tickets_number': event.tickets_number,
            'tickets_status': event.tickets_status,
            'ticket_level': event.ticket_level,
        }
        event_list.append(event_data)
    return jsonify(event_list), 200

#delete method of events
@app.route('/events/<int:event_id>', methods=['DELETE'])
def delete_event(event_id):
    event = Events.query.get(event_id)
    if event:
        db.session.delete(event)
        db.session.commit()
        return jsonify({'message': 'Event deleted successfully'}), 200
    else:
        return jsonify({'message': 'Event not found'}), 404

#update methods events details
@app.route('/events/<int:event_id>', methods=['PUT'])
def update_event(event_id):
    event = Events.query.get(event_id)
    if event:
        data = request.get_json()
        event.title = data.get('title', event.title)
        event.price = data.get('price', event.price)
        event.location = data.get('location', event.location)
        event.image = data.get('image', event.image)
        event.time = data.get('time', event.time)
        event.description = data.get('description', event.description)
        event.tickets_number = data.get('tickets_number', event.tickets_number)
        event.tickets_status = data.get('tickets_status', event.tickets_status)
        event.ticket_level = data.get('ticket_level', event.ticket_level)
        db.session.commit()
        return jsonify({'message': 'Event updated successfully'}), 200
    else:
        return jsonify({'message': 'Event not found'}), 404

#get method for all organizers
@app.route('/organisers', methods=['GET'])
def get_all_organisers():
    organisers = Organiser.query.all()
    organiser_list = []
    for organiser in organisers:
        organiser_data = {
            'id': organiser.id,
            'name': organiser.name,
            'email': organiser.email,
            'industry': organiser.industry,
            'location': organiser.location,
        }
        organiser_list.append(organiser_data)
    return jsonify(organiser_list), 200

#delete method for organizers
@app.route('/organisers/<int:organiser_id>', methods=['DELETE'])
def delete_organiser(organiser_id):
    organiser= Organiser.query.get(organiser_id)
    if organiser:
        db.session.delete(organiser)
        db.session.commit()
        return jsonify({'message': 'Organizer deleted successfully'}), 200
    else:
        return jsonify({'message': 'Organizer not found'}), 404

#get method for payments
@app.route('/payments', methods=['GET'])
def get_all_payments():
    payments = Payment.query.all()
    payment_list = []
    for payment in payments:
        payment_data = {
            'id': payment.id,
            'customer_id': payment.customer_id,
            'event_id': payment.event_id,
            'amount': payment.amount,
            'organiser_id': payment.organiser_id,
        }
        payment_list.append(payment_data)
    return jsonify(payment_list), 200

#update method for payments
@app.route('/payments/<int:payment_id>', methods=['PUT'])
def update_payment(payment_id):
    payment = Payment.query.get(payment_id)
    if payment:
        data = request.get_json()
        payment.amount = data.get('amount', payment.amount)
        # You can update other payment attributes here if needed.

        db.session.commit()
        return jsonify({'message': 'Payment updated successfully'}), 200
    else:
        return jsonify({'message': 'Payment not found'}), 404


@app.route('/revenues', methods=['GET'])
def get_all_revenues():
    revenues = Revenue.query.all()
    revenue_list = []
    for revenue in revenues:
        revenue_data = {
            'id': revenue.id,
            'total_amount': revenue.total_amount,
            'tickets_sold': revenue.tickets_sold,
            'event_id': revenue.event_id,
        }
        revenue_list.append(revenue_data)
    return jsonify(revenue_list), 200


@app.route('/booked-events', methods=['GET'])
def get_all_booked_events():
    booked_events = BookedEvents.query.all()
    booked_events_list = []
    for booked_event in booked_events:
        booked_event_data = {
            'id': booked_event.id,
            'event_id': booked_event.event_id,
            'customer_id': booked_event.customer_id,
            'event_title': booked_event.event_title,
            'event_location': booked_event.event_location,
            'ticket_level': booked_event.ticket_level,
        }
        booked_events_list.append(booked_event_data)
    return jsonify(booked_events_list), 200



if __name__ == '__main__':
    app.run(port=5000)