import admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        type:process.env.FIREBASE_TYPE,
        project_id:process.env.FIREBASE_PROJECT_ID,
        private_key_id:process.env.FIREBASE_KEY_ID,
        private_key:process.env.FIREBASE_KEY,
        client_email:process.env.FIREBASE_EMAIL,
        client_id:process.env.FIREBASE_CLIENT,
        auth_uri: process.env.FIREBASE_AUTH,
        token_uri:process.env.FIREBASE_TOKEN,
        auth_provider_x509_cert_url:process.env.FIREBASE_PROVIDER,
        client_x509_cert_url:process.env.FIREBASE_CLIENT_CERT,
      })
    });
  } catch (error) {
    console.log('Firebase admin initialization error');
  }
}
export default admin.firestore();