/**
 * Created by bodin on 14.05.2016.
 */
module.exports = function (server) {
  server.dataSources.postgre.autoupdate();
  //server.dataSources.postgre.automigrate();
}
