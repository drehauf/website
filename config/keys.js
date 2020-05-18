const username = 'anton';
const password = 'cLqNKy2nfzQbqeF8jig!sPnqMDcq-';

module.exports = {
  mongoURI: `mongodb+srv://${username}:${password}@cluster0-sn2dn.mongodb.net/test?retryWrites=true&w=majority`,
  secretOrKey: 'secret'
};