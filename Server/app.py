#!usr/bin/env python3
from flask import Flask, jsonify, redirect, render_template, request, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_migrate  import Migrate
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, UserMixin, login_user, login_required, current_user, logout_user
from models import db,Events,BookedEvents,Revenue,User
from flask_cors import CORS


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///events.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'Eventbookingsystem01'
CORS(app)

migrate = Migrate(app,db)
db.init_app(app) 
# Initialize LoginManager
login_manager = LoginManager(app)
login_manager.login_view = 'login'


#register method 
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')
    phone_number = data.get('phone_number')
    role = data.get('role') 
    
    if role not in ['admin', 'organizer', 'attendee']:
        return jsonify({'message': 'Invalid role'}), 400
    
    # Check if the email already exists
    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already exists'}), 400
    
    new_user = User(
        name=name,
        email=email,
        password=generate_password_hash(password),
        phone_number=phone_number,
        role=role
    )
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'message': 'User registered successfully'}), 201

# Load a user by ID
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        login_user(user)
        return jsonify({'message': 'Logged in successfully'}), 200
    else:
        return jsonify({'message': 'Login failed. Invalid credentials'}), 401

@app.route('/admin/dashboard')
@login_required
def admin_dashboard():
    if current_user.role == 'admin':
        return 'Admin Dashboard'
    else:
        return 'Access denied.'

@app.route('/organizer/dashboard')
@login_required
def organizer_dashboard():
    if current_user.role == 'organizer':
        return 'Organizer Dashboard'
    else:
        return 'Access denied.'

@app.route('/attendee/dashboard')
@login_required
def attendee_dashboard():
    if current_user.role == 'attendee':
        return 'Attendee Dashboard'
    else:
        return 'Access denied.'





#main route
@app.route('/')
def home():
    return "<h2>Events</h2>"
#get method for organizers
@app.route('/organizers', methods=['GET'])
def get_organizers():
    organizers = User.query.filter_by(role='organizer').all()
    organizer_list = []
    for organizer in organizers:
        organizer_data = {
            'id': organizer.id,
            'name': organizer.name,
            'email': organizer.email,
            'phone_number': organizer.phone_number
        }
        organizer_list.append(organizer_data)
    
    return jsonify({'organizers': organizer_list})

#get method for events
@app.route('/events', methods=['GET'])
def get_events():
    events = Events.query.all()
    event_list = []
    
    for event in events:
        event_data = {
            'id': event.id,
            'title': event.title,
            'location': event.location,
            'description': event.description,
            'event_category': event.event_category,
            'image': event.image,
            'organizer_id': event.organizer_id,
            'event_time': event.event_time.strftime('%Y-%m-%d %H:%M:%S'),
            'ticket_levels': event.ticket_levels,
            'vip_price': event.vip_price,
            'regular_price': event.regular_price,
            'early_bird_price': event.early_bird_price,
            'tickets_number': event.tickets_number,
            'remaining_tickets': event.remaining_tickets
        }
        event_list.append(event_data)
    
    return jsonify({'events': event_list})

#delete method for events
@app.route('/events/<int:event_id>', methods=['DELETE'])
def delete_event(event_id):
    event = Events.query.get(event_id)
    if event:
        db.session.delete(event)
        db.session.commit()
        return jsonify({'message': 'Event deleted successfully'}), 200
    else:
        return jsonify({'message': 'Event not found'}), 404

#update method for events
@app.route('/events/<int:event_id>', methods=['PUT'])
def update_event(event_id):
    event = Events.query.get(event_id)
    if event:
        data = request.get_json()
        event.title = data.get('title', event.title)
        event.location = data.get('location', event.location)
        event.description = data.get('description', event.description)
        event.event_category = data.get('event_category', event.event_category)
        event.image = data.get('image', event.image)
        event.event_time = data.get('event_time', event.event_time)
        event.ticket_levels = data.get('ticket_levels', event.ticket_levels)
        event.vip_price = data.get('vip_price', event.vip_price)
        event.regular_price = data.get('regular_price', event.regular_price)
        event.early_bird_price = data.get('early_bird_price', event.early_bird_price)
        event.tickets_number = data.get('tickets_number', event.tickets_number)
        event.remaining_tickets = data.get('remaining_tickets', event.remaining_tickets)

        db.session.commit()
        return jsonify({'message': 'Event updated successfully'}), 200
    else:
        return jsonify({'message': 'Event not found'}), 404


#Get method for booked events
@app.route('/bookedevents', methods=['GET'])
def get_booked_events():
    booked_events = BookedEvents.query.all()
    booked_event_list = []
    
    for booked_event in booked_events:
        booked_event_data = {
            'id': booked_event.id,
            'event_id': booked_event.event_id,
            'event_title': booked_event.event_title,
            'event_location': booked_event.event_location,
            'ticket_level': booked_event.ticket_level,
            'attendee_id': booked_event.attendee_id
        }
        booked_event_list.append(booked_event_data)
    
    return jsonify({'booked_events': booked_event_list})

#delete method for booked events
@app.route('/booked-events/<int:booked_event_id>', methods=['DELETE'])
def delete_booked_event(booked_event_id):
    booked_event = BookedEvents.query.get(booked_event_id)
    if booked_event:
        db.session.delete(booked_event)
        db.session.commit()
        return jsonify({'message': 'Booked event deleted successfully'}), 200
    else:
        return jsonify({'message': 'Booked event not found'}), 404


#get method for revenue method 
@app.route('/revenue', methods=['GET'])
def get_revenue():
    revenue_list = []
    events = Events.query.all()
    for event in events:
        total_revenue = 0.0
        booked_events = BookedEvents.query.filter_by(event_id=event.id).all()
        for booked_event in booked_events:
            total_revenue += event.get_ticket_price(booked_event.ticket_level)
        revenue_data = {
            'event_id': event.id,
            'total_revenue': total_revenue
        }
        revenue_list.append(revenue_data)
    
    return jsonify({'revenue': revenue_list})





if __name__ == '__main__':
    app.run(port=5000)