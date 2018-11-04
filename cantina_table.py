import datetime
import psycopg2
import random

db_name = "cafeteria"
table_name = "food"
con = None
try:
    con = psycopg2.connect(dbname = db_name, user = 'admin', password = 'password', host = 'localhost')
except:
    con = psycopg2.connect(host = 'localhost')
    cur = con.cursor()
    cur.execute('CREATE DATABASE ' + db_name)

cur = con.cursor()

cur.execute('CREATE IF NOT EXISTS ' + table_name + ' (' + \
        'date timestamp NOT NULL,' + \
        'meal_type integer,' + \
        'meal_name varchar(60) NOT NULL,' + \
        'meal_tags varchar(500) NOT NULL,' + \
        'num_txn integer,' + \
        'PRIMARY_KEY (id)')

grains = ["rice", "pasta", "bread"]
meats = ["fish", "chicken", "beef", "pork", "meatball"]
vegan = ["vegetables", "tofu"]
themes = ["asian", "mexican", "italian", "burgers", "pizza", "sandwiches", "salad", "saladbar"]

date = datetime.now()

#Iterate by # of days
for i in range(14):
    date -= datetime.timedelta(days=1)
    lunch_name = meats[random.randint(meats.length)]
    lunch_txn = random.randint(100)
    lunch_string = ",".join([grains[random.randint(grains.length)],
            meats[random.randint(meats.length)],
            themes[random.randint(themes.length)]])
    cur.execute('INSERT INTO %s (date, meal_type, meal_name, meal_tags, num_txn) VALUES (%s, %s, %s, %s, %s)', table_name, date, 1, lunch_name, lunch_string, lunch_txn)
    dinner_name = meats[random.randint(meats.length)]
    dinner_txn = random.randint(100)
    dinner_string = ",".join([grains[random.randint(grains.length)],
            meats[random.randint(meats.length)],
            themes[random.randint(themes.length)]])
    cur.execute('INSERT INTO %s (date, meal_type, meal_name, meal_tags, num_txn) VALUES (%s, %s, %s, %s, %s)', table_name, date, 2, dinner_name, dinner_string, dinner_txn)
