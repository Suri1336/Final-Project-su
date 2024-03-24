from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    DateOfBirth =db.Column(db.String(120), unique=False, nullable=False)
    UserName= db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "UserName": self.UserName
            # do not serialize the password, its a security breach
        }
    
class Pages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    pageLink = db.Column(db.String(3120), unique=True, nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "pageLink": self.pageLink,
            "name": self.name,
        }





    # class Pages(db.Model):
    #   id = db.Column(db.Integer, primary_key=True)
    # pageLink = db.Column(db.String(3120), unique=True, nullable=False)
    # name = db.Column(db.String(80), unique=False, nullable=False)
    # category = db.Column(db.String(80), unique=False, nullable=False)

    # def serialize(self):
    #     return {
    #         "id": self.id,
    #         "pageLink": self.pageLink,
    #         "name": self.name
    #     }