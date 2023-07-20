from flask import Blueprint, request, jsonify
from schemamodels.influencers import Influencers
from config.db import Connection
from dotenv import load_dotenv

load_dotenv()

db = Connection().get_connection()

influencers_collection = db['influencers']

Influencer_bp = Blueprint('Influencer_bp', __name__)


