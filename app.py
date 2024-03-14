import json
from flask import Flask, request
from flask import jsonify
import time
from flask_cors import CORS, cross_origin   # Import CORS module


from PIL import Image

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
# app.config['CORS_HEADERS'] = 'Content-Type'
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
    return 'Flask is running locally'



@app.route('/aigc', methods=['POST','OPTIONS'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])  # Account for CORS
def get_AIGC_verdict():
    if 'image' not in request.files:
        return 'No image part in the request', 400
    
    image = Image.open(request.files['image'])
    # TODO run the trained classifiers here

    # current_time.headers.add('Access-Control-Allow-Origin', '*')
    return {"format": image.format}

if __name__ == '__main__':
   app.run(debug=True)