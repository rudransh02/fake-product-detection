import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('json_data/tempServiceAccountKey.json')
firebase_admin.initialize_app(cred)


def update_genesis_block(genesis_doc_id, hash_data):
    db = firestore.client()
    collection_ref = db.collection('GenesisBlock')
    document_ref = collection_ref.document(genesis_doc_id)
    document_ref.update({"hash": hash_data})
    print("Successfully added hash:", hash_data)
    return 200


def update_distributor_block(genesis_doc_id, append_data):
    db = firestore.client()
    collection_ref = db.collection('GenesisBlock')
    document_ref = collection_ref.document(genesis_doc_id)
    document_ref.update({"dist1": append_data})
    print("Successfully added data\n", append_data)
    return 200
