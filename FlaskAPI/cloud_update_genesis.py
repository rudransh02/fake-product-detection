import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('tempServiceAccountKey.json')
firebase_admin.initialize_app(cred)


def create_genesis_block(genesis_data):
    db = firestore.client()
    collection_ref = db.collection('GenesisBlock')
    document_ref = collection_ref.document('SryTbS8lGbctnFkdjcfZ')
    document_ref.update({"mygirl": "Riya"})
    print(genesis_data)
    return 200
