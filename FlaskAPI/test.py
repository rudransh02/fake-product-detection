# import requests
# from urllib.parse import quote

# from PIL import Image
# import base64
# import io


# BASE = "http://127.0.0.1:5000/"
# json_data = '{"name": "John", "age": 30}'
# encoded_data = quote(json_data)
# url = BASE + f"/qr?data={encoded_data}"
# print(url)
# response1 = requests.get(url)
# # print(response1.text)

# # Assuming qr_image_data contains the QR image data in bytes

# # Load the QR image from the byte data
# decoded_data = base64.b64decode(response1.text)

# qr_image = Image.open(io.BytesIO(decoded_data))

# # Display the QR code image
# qr_image.show()

# import os
# import requests

# # Define the JSON data to be sent
# data = {
#     "name": "John Doe",
#     "email": "johndoe@example.com"
# }

# # Make a POST request to the API endpoint
# response = requests.post('http://127.0.0.1:5000/generate_qr', json=data)

# # Check if the request was successful (status code 200)
# if response.status_code == 200:
#     # Save the response content as a file
#     file_path = os.path.join(os.getcwd(), 'qr_code.png')
#     with open(file_path, 'wb') as f:
#         f.write(response.content)
#     print("QR code image saved as qr_code.png.")
# else:
#     print("Error:", response.status_code, response.text)


import requests

# Define the JSON data to be sent
data = {
    "name": "Vero Moda",
    "email": "info@vm.com",
    "cloth_category": "Jeans",
    "cloth_material": "Denim",
    "colth_color": "Offwhite",
    "colth_size": "32",
    "colth_price": 5200.00,
}

# Make a POST request to the API endpoint
response = requests.post('http://127.0.0.1:5000/generate_qr', json=data)
print(response)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Save the response content as a file
    with open('qr_code.png', 'wb') as f:
        f.write(response.content)
    print("QR code image saved as qr_code.png.")
else:
    print("Error:", response.status_code, response.text)
