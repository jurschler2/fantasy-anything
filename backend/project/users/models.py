""" Models for the User class """

from project import db
from datetime import datetime


class User(db.Model):
    """ User of the website. """

    __tablename__ = "users"

    userid = db.Column(db.Integer, primary_key=True)

    email = db.Column(db.String(55), index=True, unique=True)

    first_name = db.Column(db.String(25), default=None)

    last_name = db.Column(db.String(25), default=None)

    password = db.Column(db.String(128), default=None)

    created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<User #{self.userid}: {self.email}>"
