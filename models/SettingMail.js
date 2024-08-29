const mongoose = require('mongoose');

const MailConfigSchema = new mongoose.Schema({
  mailHost: {
    type: String,
    required: true,
  },
  mailPort: {
    type: Number,
    required: true,
  },
  mailUsername: {
    type: String,
    required: true,
  },
  mailPassword: {
    type: String,
    required: true,
  },
  mailFromName: {
    type: String,
    required: true,
  },
  mailFromEmail: {
    type: String,
    required: true,
  },
  mailEncryption: {
    type: String,
    required: true,
    enum: ['none', 'SSL', 'TLS'], // You can modify the allowed values as per your requirements
  },
});

module.exports = mongoose.model('MailConfig', MailConfigSchema);
