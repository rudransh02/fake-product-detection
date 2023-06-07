import qrcode
from flask import Flask, make_response, request, jsonify, send_file
from flask_restful import Api, Resource
import json
import io
import cloud_update_genesis as cug

app = Flask(__name__)
api = Api(app)


@app.route('/process', methods=['POST'])
def process_json():
    data = request.get_json()  # Get the JSON data from the request
    # Process the JSON data here

    # Example: Extract a value from the JSON
    name = data.get('name')

    # Example: Return a response with processed data
    response = {'message': 'Hello, ' + name}

    print("Result = ", cug.create_genesis_block(data))

    # Return a JSON response with HTTP status code 200
    return json.dumps(response), 200


app = Flask(__name__)


# @app.route('/qr', methods=['GET'])
# def generate_qr():
#     data = 'https://example.com'  # The data for the QR code

#     # Generate the QR code image
#     qr = qrcode.QRCode(version=1, box_size=10, border=5)
#     qr.add_data(data)
#     qr.make(fit=True)
#     qr_image = qr.make_image(fill='black', back_color='white')

#     # Create a response with the image data
#     response = make_response()
#     response.data = qr_image.get_image().tobytes()
#     response.headers['Content-Type'] = 'image/png'

#     return response


@app.route('/generate_qr', methods=['POST'])
def generate_qr():
    data = request.get_json()  # Assuming you receive JSON data in the request

    # Generate QR code image
    qr = qrcode.QRCode(version=1, box_size=10, border=4)
    qr.add_data(json.dumps(data))
    qr.make(fit=True)
    qr_image = qr.make_image(fill='black', back_color='white')

    # Save the image to a BytesIO object
    image_stream = io.BytesIO()
    qr_image.save(image_stream, 'PNG')
    image_stream.seek(0)

    print("Result = ", cug.create_genesis_block(data))
    # print("Hellooooooo")

    return send_file(image_stream, mimetype='image/png')


if __name__ == '__main__':
    app.run()
