from bson import ObjectId


class Transcripts:
    def __init__(self, title, influencer_id, transcript):
        if type(title) != str:
            raise TypeError("Invalid title format")
        if type(influencer_id) != str:
            raise TypeError("Invalid influencer_id format")
        if type(transcript) != str:
            raise TypeError("Invalid transcript format")

        self.title = title
        self.influencer_id = ObjectId(influencer_id)
        self.transcript = transcript
