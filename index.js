module.exports = {
  /**
   * @return Promisse
   */
  sendOne: require('./lib/send_sms'),

  /**
   * @return Promisse
   */
  getStatus: require('./lib/get_sms_status'),

  /**
   * @return Promisse
   */
  list: require('./lib/list'),

  /**
   * @return Promisse
   */
  sendMultiple: require('./lib/send_multiples_sms'),
};
