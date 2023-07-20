from bson import ObjectId


class QnA:
    def __init__(self, influencer_id, question, answer):
        if type(influencer_id) != str:
            raise TypeError("Invalid influencer_id format")
        if type(question) != str:
            raise TypeError("Invalid question format")
        if type(answer) != str:
            raise TypeError("Invalid answer format")

        self.influencer_id = ObjectId(influencer_id)
        self.question = question
        self.answer = answer
