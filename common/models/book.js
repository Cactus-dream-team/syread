module.exports = function(Book) {
  Book.upload = function (ctx,options,cb) {
    if(!options) options = {};
    ctx.req.params.container = 'common';
    Book.app.models.container.upload(ctx.req,ctx.result,options,function (err,fileObj) {
      if(err) {
        cb(err);
      } else {
        var fileInfo = fileObj.files.files[0];
        Book.create({
          name: fileInfo.name,
          url: '/upload/common/'+fileInfo.name
        },function (err,obj) {
          if (err !== null) {
            cb(err);
          } else {
            cb(null, obj);
          }
        });
      }
    });
  };

  Book.remoteMethod(
    'upload',
    {
      description: 'Uploads a file',
      accepts: [
        { arg: 'ctx', type: 'object', http: { source:'context' } },
        { arg: 'options', type: 'object', http:{ source: 'query'} }
      ],
      returns: {
        arg: 'fileObject', type: 'object', root: true
      },
      http: {verb: 'post'}
    }
  );


  Book.getMetaData = function(id, cb) {
    var EPub = require("epub");
    Book.findById( id, function (err, instance) {
      if(!instance){
        cb(null, "null");
        return;
      }
      var epub = new EPub('./client'+instance.url, './client/upload/images', './client/upload/chapter');
      epub.on("end", function(){
        cb(null, epub.metadata);
      });
      epub.parse();
    });
  }
  Book.remoteMethod (
      'getMetaData',
      {
        http: {path: '/getMetaData', verb: 'get'},
        accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
        returns: {arg: 'meta', type: 'string'}
      }
    );

};
