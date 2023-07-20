from pymongo import MongoClient


class Connection:
    def __init__(self):
        self.client = MongoClient('mongodb://localhost:27017/')
        self.db = self.client['influencerai']

    def get_connection(self):
        return self.db

    def close_connection(self):
        self.client.close()
