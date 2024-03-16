from flask import Flask, request
from flask import jsonify
from flask_cors import CORS, cross_origin   # Import CORS module
from PIL import Image

app = Flask(__name__)
# Set up CORS control
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Target to allow trafic from
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
    return 'Flask is running locally'



@app.route('/aigc', methods=['POST','OPTIONS'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])  # Account for CORS
def get_AIGC_verdict():
    if 'image' not in request.files:
        return 'No image part in the request', 400

    try:

        image = Image.open(request.files['image'])
    except:
        return 'No image part in the request', 418

    # TODO run the trained classifiers here
    return {"format": image.format}

if __name__ == '__main__':
   app.run(debug=True)