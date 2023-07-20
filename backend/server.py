from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
# routes
from routes.influencer import Influencer_bp

# models
from schemamodels.transcripts import Transcripts
from schemamodels.qna import QnA
from config.db import Connection


load_dotenv()

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def api():
    return jsonify({'message': 'Hello, World!'})


app.register_blueprint(Influencer_bp, url_prefix='/influencers')


if __name__ == '__main__':
    app.run(debug=True, port=os.getenv('PORT'))
