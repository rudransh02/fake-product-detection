import qrcode
from flask import Flask, make_response, request, jsonify, send_file
from flask_restful import Api, Resource
import json
import io
from hash_generation import calculate_hash, calculate_hash_dist
from flask_cors import CORS
import cloud_update_genesis as cug

app = Flask(__name__)
CORS(app, resources={r"/generate_qr_genesis": {"origins": "http://localhost:3000"}})
CORS(app, resources={r"/generate_qr_dist": {"origins": "http://localhost:3000"}})

api = Api(app)


@app.route('/generate_qr_genesis', methods=['POST', 'OPTIONS'])
def generate_qr_genesis():
    if request.method == 'OPTIONS':
        # Handle preflight request
        response_headers = {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600',
        }
        return '', 204, response_headers

    data = request.get_json()  # Assuming you receive JSON data in the request
    docID = data['docID']
    print("docID = ", docID)
    hash_val = calculate_hash(data)
    data['hash'] = hash_val
    # Generate QR code image
    qr = qrcode.QRCode(version=1, box_size=10, border=4)
    qr.add_data(json.dumps(data))
    qr.make(fit=True)
    qr_image = qr.make_image(fill='black', back_color='white')

    # Save the image to a BytesIO object
    image_stream = io.BytesIO()
    qr_image.save(image_stream, 'PNG')
    image_stream.seek(0)

    print("Result = ", cug.update_genesis_block(
        genesis_doc_id=docID.strip(), hash_data=hash_val))
    # print("Hellooooooo")
    print(image_stream)

    return send_file(image_stream, mimetype='image/png', as_attachment=True, attachment_filename='qr_code.png')


@app.route('/generate_qr_dist', methods=['POST', 'OPTIONS'])
def generate_qr_dist():
    if request.method == 'OPTIONS':
        # Handle preflight request
        response_headers = {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600',
        }
        return '', 204, response_headers

    data = request.get_json()  # Assuming you receive JSON data in the request
    docID = data['docID']
    prev_hash = data['prev_hash']
    data.pop("prev_hash", None)
    hash_val = calculate_hash_dist(data, prev_hash=prev_hash)
    data['hash'] = hash_val

    res, complete_data = cug.update_distributor_block(
        genesis_doc_id=docID, append_data=data)
    # Generate QR code image
    print("Result = ", res)
    qr = qrcode.QRCode(version=1, box_size=10, border=4)
    qr.add_data(json.dumps(complete_data))
    qr.make(fit=True)
    qr_image = qr.make_image(fill='black', back_color='white')

    # Save the image to a BytesIO object
    image_stream = io.BytesIO()
    qr_image.save(image_stream, 'PNG')
    image_stream.seek(0)

    # print("Hellooooooo")
    print(image_stream)

    return send_file(image_stream, mimetype='image/png', as_attachment=True, attachment_filename='qr_code.png')


if __name__ == '__main__':
    port = 5002
    app.run(port=port)
