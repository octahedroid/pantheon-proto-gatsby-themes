const functions = require('firebase-functions');
const axios = require('axios');
const oauth = require('axios-oauth-client');

exports.drupalAuthentication = functions
  .https
  .onRequest(async (req, res) => {

    if (req.method !== 'POST') {
      return res.status(400).json({ message: 'Method not Allowed' });
    }

    if (req.body.client_id !== functions.config().drupal.oauth.client_id) {
      return res.status(400).json({ message: 'Invalid data' });
    }

    const getAuthorizationCode = oauth.client(
      axios.create(), 
      {
        url: `${functions.config().drupal.url}/oauth/token`,
        grant_type: 'password',
        client_id: functions.config().drupal.oauth.client_id,
        client_secret: functions.config().drupal.oauth.client_secret,
        username: functions.config().drupal.username,
        password: functions.config().drupal.password,
      }
    );

    const auth = await getAuthorizationCode();

    return res.json(auth);
});