from flask import Blueprint, request, jsonify
from schemamodels.influencers import Influencers
from config.db import Connection
from dotenv import load_dotenv

load_dotenv()

db = Connection().get_connection()

influencers_collection = db['influencers']

Influencer_bp = Blueprint('Influencer_bp', __name__)


@Influencer_bp.route('/', methods=['GET'])
def get_influencers():
    influencers = list(influencers_collection.find())
    for influencer in influencers:
        influencer['_id'] = str(influencer['_id'])
    return jsonify({"status": "success", "data": influencers})
