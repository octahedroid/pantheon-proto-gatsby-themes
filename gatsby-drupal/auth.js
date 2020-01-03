const axios = require('axios');
const qs = require('qs');
const fs = require('fs');
const dotenv = require('dotenv');

const env = process.argv.slice(2)[0];
const envFile = `.env.${env}`;
dotenv.config({
  path: envFile,
});

(async () => {
  const auth = await axios({
    method: 'post',
    url: `${process.env.GATSBY_URL}/drupalAuthentication`,
    data: qs.stringify({
      client_id: process.env.DRUPAL_AUTH_CLIENT_ID,
    }),
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(result => {return result.data});

  const content = fs.readFileSync(envFile, 'utf8')
                    .replace(
                      /DRUPAL_TOKEN=([\s\S]*?)\n/g, 
                      `DRUPAL_TOKEN=${auth.access_token}\n`
                    );

  fs.writeFileSync(
    envFile,
    content
  );
})();
