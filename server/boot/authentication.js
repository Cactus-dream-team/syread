module.exports = function enableAuthentication(server) {
  // enable authentication
  server.enableAuth();

  server.models.Reader.create({
    "email":"bodink7@gmail.com",
    "password":"12321"
  })
};
