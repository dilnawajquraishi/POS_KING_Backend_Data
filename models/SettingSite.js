const mongoose = require('mongoose');

const SettingSite = new mongoose.Schema({
  dateFormat: {
    type: String,
    default: 'MM/DD/YYYY', // Example default value
  },
  timeFormat: {
    type: String,
    default: 'HH:mm:ss', // Example default value
  },
  defaultTimezone: {
    type: String,
    default: 'UTC', // Example default value
  },
  defaultLanguage: {
    type: String,
    default: 'en', // Example default value
  },
  copyright: {
    type: String,
    default: '© Your Company', // Example default value
  },
  androidAppLink: {
    type: String,
    default: '', // Example default value
  },
  iosAppLink: {
    type: String,
    default: '', // Example default value
  },
  nonPurchaseProductMaxQty: {
    type: Number,
    default: 1, // Example default value
  },
  digitsAfterDecimal: {
    type: Number,
    default: 2, // Example default value
  },
  defaultCurrency: {
    type: String,
    default: 'USD', // Example default value
  },
  currencyPosition: {
    type: String,
    enum: ['left', 'right'],
    default: 'left', // Example default value
  },
  cashOnDelivery: {
    type: Boolean,
    default: false,
  },
  isReturnProductPriceAddToCredit: {
    type: Boolean,
    default: false,
  },
  onlinePaymentGateway: {
    type: Boolean,
    default: false,
  },
  languageSwitch: {
    type: Boolean,
    default: false,
  },
  emailVerification: {
    type: Boolean,
    default: false,
  },
  phoneVerification: {
    type: Boolean,
    default: false,
  },
  appDebug: {
    type: Boolean,
    default: false,
  }
});

const Settings = mongoose.model('SiteCollection', SettingSite);

module.exports = Settings;
