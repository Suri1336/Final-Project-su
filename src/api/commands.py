import click
from flask import Flask
from api.models import db,User,Pages

def create_app():
    app = Flask(__name__)
    # Initialize your database
    db.init_app(app)
    return app


def setup_commands(app):
    """ 
    Add Flask CLI commands here
    """
    @app.cli.command("insert-test-users")
    @click.argument("count")
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

    @app.cli.command("insert-test-data")
    def insert_test_data():
        # Implement this function to insert test data
        pass

    @app.cli.command("populate-page")
    def generate_page_list():
        page_list = [
            {
                "name": "Lets Color",
                "pic_url": "https://i.imgur.com/KtxRvqM.png",
            },
            {
                "name": "Lets Color",
                "pic_url": "https://i.imgur.com/hCVck6X.jpeg",
            },
            {
                "name": "Lets Color",
                "pic_url": "https://i.imgur.com/yit4LeH.jpeg",
            },
            {
                "name": "Lets Color",
                "pic_url": "https://i.imgur.com/YYaLXAR.jpeg",
            },
            {
                "name": "Lets Color",
                "pic_url": "https://i.imgur.com/32fiORN.jpeg"
            }
          
            
        ]
        for page in page_list:
          new_page = Pages( name=page['name'], pageLink=page['pic_url'])
          db.session.add(new_page)
          db.session.commit()



# commands.py
# run pipenv shell
# pipenv install flask 
# flask populate-page