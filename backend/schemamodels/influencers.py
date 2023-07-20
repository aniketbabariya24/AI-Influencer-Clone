class Influencers:
    def __init__(self, name, email, domain, link, password):
        if type(self.name) != str:
            raise TypeError("Invalid name format")
        if type(self.email) != str:
            raise TypeError("Invalid email format")
        if type(self.domain) != str:
            raise TypeError("Invalid domain format")
        if type(self.link) != str:
            raise TypeError("Invalid link format")
        if type(self.password) != str:
            raise TypeError("Invalid password format")
        self.name = name
        self.email = email
        self.domain = domain
        self.link = link
        self.password = password
