import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('json_data/serviceAccountKey.json')
firebase_admin.initialize_app(cred)


def update_genesis_block(genesis_doc_id, hash_data):
    db = firestore.client()
    collection_ref = db.collection('Blockchain')
    document_ref = collection_ref.document(genesis_doc_id)
    document_ref.update({"hash": hash_data})
    print("Successfully added hash:", hash_data)
    return 200


def update_distributor_block(genesis_doc_id, append_data):
    db = firestore.client()
    collection_ref = db.collection('Blockchain')
    document_ref = collection_ref.document(genesis_doc_id)

    field_prefix = 'dist'
    max_dist = 0

    doc_data = document_ref.get().to_dict()
    for field in doc_data.keys():
        if field.startswith(field_prefix):
            dist_num = int(field[len(field_prefix):])
            if dist_num > max_dist:
                max_dist = dist_num

    doc_data.pop('docID', None)

    new_field_name = field_prefix + str(max_dist + 1)

    document_ref.update({new_field_name: append_data})
    doc_data[new_field_name] = append_data
    print("Successfully added data\n", append_data)
    return 200, doc_data
