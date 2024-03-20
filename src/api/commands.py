
# import click
# from api.models import db, User
# from api.models import Pages
# """
# In this file, you can add as many commands as you want using the @app.cli.command decorator
# Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
# with youy database, for example: Import the price of bitcoin every night as 12am
# """
# def setup_commands(app):
    
#     """ 
#     This is an example command "insert-test-users" that you can run from the command line
#     by typing: $ flask insert-test-users 5
#     Note: 5 is the number of users to add
#     """
#     @app.cli.command("insert-test-users") # name of our command
#     @click.argument("count") # argument of out command
#     def insert_test_users(count):
#         print("Creating test users")
#         for x in range(1, int(count) + 1):
#             user = User()
#             user.email = "test_user" + str(x) + "@test.com"
#             user.password = "123456"
#             user.is_active = True
#             db.session.add(user)
#             db.session.commit()
#             print("User: ", user.email, " created.")

#         print("All test users created")

#     @app.cli.command("insert-test-data")
#     def insert_test_data():
#         pass

#     @app.cli.command("populate-page")
#     def generate_page_list():
#         page_list = [
#             {
#                 "name": "Dude, Where's my Closet?",
#                 "pic_url": "https://i.imgur.com/SmhGAwI.png",
#                 "category" : "Kids"
#             },
#         ]
#         for page in page_list:
#             new_page = Pages(
#                 name = page['name'],
#                 pageLink = page['pic_url'],
#                 category = page['category']
#             )
#             db.session.add(new_page)
#             db.session.commit()


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
                "name": "Dude, Where's my Closet?",
                "pic_url": "https://i.imgur.com/SmhGAwI.png",
                "category": "Kids"
            },
            
        ]
        for page in page_list:
          new_page = Pages(
                name=page['name'],
                pageLink=page['pic_url'],
                category=page['category']
            )
        db.session.add(new_page),
    db.session.commit()



#             commands.py
# run pipenv shell
# pipenv install flask 
# flask populate-page