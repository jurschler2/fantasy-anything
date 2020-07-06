from flask_sqlalchemy import SQLAlchemy
from flask import Flask

app = Flask(__name__, static_folder="../build")
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///fantasy_anything'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

db = SQLAlchemy(app)
db.app = app
db.init_app(app)
db.create_all()

# TODO implement the secret key and all environment variables

# SECRET_KEY = os.environ.get("SECRET_KEY", None)
# if not SECRET_KEY:
#     raise Exception("Error: Set a SECRET_KEY in .env")
