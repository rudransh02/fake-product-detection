import requests

# Define the JSON data to be sent
data = {
    "name": "Bugatti",
    "email": "info@buggati.com",
    "cloth_category": "Jeans",
    "cloth_material": "Denim",
    "colth_color": "Offwhite",
    "colth_size": "34",
    "colth_price": 10200.00,
    "docID": "SryTbS8lGbctnFkdjcfZ",
    "prev_hash": "503fe16d920197cfc91863201e902a35204a4edc0c8f42d66e576f55bb59ed06",
}

# Make a POST request to the API endpoint
response = requests.post(
    'http://127.0.0.1:5000/generate_qr_genesis', json=data)
print(response)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Save the response content as a file
    with open('qr_code.png', 'wb') as f:
        f.write(response.content)
    print("QR code image saved as qr_code.png.")
else:
    print("Error:", response.status_code, response.text)
