import hashlib


def calculate_hash(data):
    # Create a new SHA-256 hash object
    hash_object = hashlib.sha256()

    data = str(data)

    # Update the hash object with the input data
    hash_object.update(data.encode('utf-8'))

    # Calculate the hash value as a hexadecimal string
    hash_value = hash_object.hexdigest()

    return hash_value


def calculate_hash_dist(data, prev_hash):
    # Create a new SHA-256 hash object
    hash_object = hashlib.sha256()

    combined_string = str(data) + prev_hash

    # Update the hash object with the input data
    hash_object.update(combined_string.encode('utf-8'))

    # Calculate the hash value as a hexadecimal string
    hash_value = hash_object.hexdigest()

    return hash_value
