# app.py
from flask import Flask
from models import db, Admin, Customer, Organiser, Events, BookedEvents, Payment, Revenue
from faker import Faker

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///events.db'
db.init_app(app)
fake = Faker()


def create_fake_data():
#admin faker
    for _ in range(5):
        admin = Admin(
            name=fake.name(),
            password=fake.password(),
            email=fake.email()
        )
        db.session.add(admin)
#customer faker
    for _ in range(10):
        customer = Customer(
            name=fake.name(),
            password=fake.password(),
            email=fake.email(),
            phone_number=fake.phone_number(),
            ticket_number=fake.random_number(digits=6)
        )
        db.session.add(customer)

    # Organiser faker
    for _ in range(5):
        organiser = Organiser(
            name=fake.name(),
            email=fake.email(),
            password=fake.password(),
            industry=fake.random_element(elements=('Business', 'Political', 'Academic', 'Charity', 'Community', 'Entertainment', 'Sporting')),
            location=fake.city()
        )
        db.session.add(organiser)

    # Events faker
    for _ in range(20):
        event = Events(
            title=fake.sentence(nb_words=3),
            price=fake.random_number(digits=3),
            location=fake.city(),
            image=fake.image_url(),
            time=fake.date_time_this_year(),
            description=fake.text(),
            organiser_id=fake.random_element(elements=Organiser.query.all()).id,
            tickets_number=fake.random_number(digits=3),
            tickets_status=fake.random_element(elements=('0', '1')),
            ticket_level=fake.random_element(elements=('VIP', 'Early Bird', 'Regular'))
        )
        db.session.add(event)

    # BookedEvents faker
    for _ in range(30):
        event = Events.query.get(fake.random_element(elements=Events.query.all()).id)
        customer = Customer.query.get(fake.random_element(elements=Customer.query.all()).id)

        booked_event = BookedEvents(
            event_id=event.id,
            customer_id=customer.id,
            event_title=event.title,
            event_location=event.location,
            ticket_level=event.ticket_level
        )
        db.session.add(booked_event)

    # Payment faker
    for _ in range(30):
        event = Events.query.get(fake.random_element(elements=Events.query.all()).id)
        customer = Customer.query.get(fake.random_element(elements=Customer.query.all()).id)
        organiser = Organiser.query.get(fake.random_element(elements=Organiser.query.all()).id)

        payment = Payment(
            customer_id=customer.id,
            event_id=event.id,
            amount=fake.random_number(digits=4),
            organiser_id=organiser.id
        )
        db.session.add(payment)

    #  Revenue faker
    for event in Events.query.all():
        revenue = Revenue(
            total_amount=fake.random_number(digits=5),
            tickets_sold=fake.random_number(digits=3),
            event_id=event.id
        )
        db.session.add(revenue)

    db.session.commit()


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        create_fake_data()
    app.run()
