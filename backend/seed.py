from project import db
from project.users.models import User

db.drop_all()
db.create_all()

db.session.add(
    User(email="test@test.com",
         first_name="TestFirst",
         last_name="TestLast",
         password="password"))

db.session.commit()
