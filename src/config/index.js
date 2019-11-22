const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const appConfig = {
  server: {
    port: 3000
  },
  showQuery: true,
  sqlDir: './src/sql/',
  baseEndpoint: '/',
  database: {
    client: process.env.DB_CLIENT, // you can change here (mysql / pg)
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      schema: process.env.DB_SCHEMA
    },
    pool: {
      min: 0,
      max: 15
    },
    acquireConnectionTimeout: 10000
  },
  cors: {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  },
  i18n: {
    locales: [
      'pt-BR',
      'en'
    ],
    defaultLocale: 'pt-BR',
    directory: path.join(__dirname, '/locales'),
    autoReload: true
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE || false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
    },
    send: {
      from: process.env.SMTP_FROM
    }
  },
  firebase: {
    serviceAccount: {
      type: 'service_account',
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL
    },
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    firestore: {
      timestampsInSnapshots: true
    },
    storage: {
      bucket_url: process.env.FIREBASE_STORAGE_BUCKET_URL
    }
  },
  privateKey: 'youShoudDescribeAStrongAndPowerfulPrivateKeyHere'
}

module.exports = appConfig
