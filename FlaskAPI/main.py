import qrcode
from flask import Flask, make_response, request, jsonify, send_file
from flask_restful import Api, Resource
import json
import io
from hash_generation import calculate_hash, calculate_hash_dist
import cloud_update_genesis as cug

app = Flask(__name__)
api = Api(app)

app = Flask(__name__)


@app.route('/generate_qr_genesis', methods=['POST', 'OPTION'])
def generate_qr_genesis():
    data = request.get_json()  # Assuming you receive JSON data in the request
    docID = data['docID']
    data.pop("docID", None)

    # Generate QR code image
    qr = qrcode.QRCode(version=1, box_size=10, border=4)
    qr.add_data(json.dumps(data))
    qr.make(fit=True)
    qr_image = qr.make_image(fill='black', back_color='white')

    # Save the image to a BytesIO object
    image_stream = io.BytesIO()
    qr_image.save(image_stream, 'PNG')
    image_stream.seek(0)
    hash_val = calculate_hash(data)

    print("Result = ", cug.update_genesis_block(
        genesis_doc_id=docID, hash_data=hash_val))
    # print("Hellooooooo")
    print(image_stream)

    return send_file(image_stream, mimetype='image/png')


@app.route('/generate_qr_dist', methods=['POST', 'OPTION'])
def generate_qr_dist():
    data = request.get_json()  # Assuming you receive JSON data in the request
    docID = data['docID']
    data.pop("docID", None)
    prev_hash = data['prev_hash']
    data.pop("prev_hash", None)
    hash_val = calculate_hash_dist(data, prev_hash=prev_hash)

    # Generate QR code image
    qr = qrcode.QRCode(version=1, box_size=10, border=4)
    qr.add_data(json.dumps(data))
    qr.make(fit=True)
    qr_image = qr.make_image(fill='black', back_color='white')

    data['hash'] = hash_val
    # Save the image to a BytesIO object
    image_stream = io.BytesIO()
    qr_image.save(image_stream, 'PNG')
    image_stream.seek(0)

    print("Result = ", cug.update_distributor_block(
        genesis_doc_id=docID, append_data=data))
    # print("Hellooooooo")
    print(image_stream)

    return send_file(image_stream, mimetype='image/png')


if __name__ == '__main__':
    app.run()
