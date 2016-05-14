module.exports = function(Book) {
  Book.upload = function (ctx,options,cb) {
    if(!options) options = {};
    ctx.req.params.container = 'common';
    Book.app.models.container.upload(ctx.req,ctx.result,options,function (err,fileObj) {
      if(err) {
        cb(err);
      } else {
        var fileInfo = fileObj.files.files[0];
        var EPub = require("epub");
        var epub = new EPub('./client/upload/common/'+fileInfo.name, './client/upload/images', './client/upload/chapter');
        epub.on("end", function(){
          Book.create({
            name: fileInfo.name,
            metaData:epub.metadata,
            url: '/upload/common/'+fileInfo.name
          },function (err,obj) {
            if (err !== null) {
              cb(err);
            } else {
              cb(null, obj);
            }
          });
        });
        epub.parse();

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


  Book.getListChapter = function(id, cb) {
    var EPub = require("epub");
    Book.findById( id, function (err, instance) {
      if(!instance){
        cb(null, "null");
        return;
      }
      var epub = new EPub('./client'+instance.url, './client/upload/images', './client/upload/chapter');
      epub.on("end", function(){
        cb(null, epub.flow);
      });
      epub.parse();
    });
  };
  Book.remoteMethod (
    'getListChapter',
    {
      description: 'Get chapter list',
      http: {path: '/getListChapter', verb: 'get'},
      accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
      returns: {arg: 'chapters', type: 'string'}
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
        console.log(typeof epub.metadata)
        cb(null, epub.metadata);
      });
      epub.parse();
    });
  };
  Book.remoteMethod (
      'getMetaData',
      {
        description: 'Get meta data',
        http: {path: '/getMetaData', verb: 'get'},
        accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
        returns: {arg: 'meta', type: 'Object'}
      }
    );

  Book.getChapter = function(id,name, cb) {
    var EPub = require("epub");
    Book.findById( id, function (err, instance) {
      if(!instance){
        cb(null, "null");
        return;
      }
      var epub = new EPub('./client'+instance.url, './client/upload/images/', './client/upload/chapter/');
      epub.on("end", function(){
        epub.getChapter(name, function(error, text){
          cb(null, error || text);
        });
      });
      epub.parse();
    });
  };
  Book.remoteMethod (
    'getChapter',
    {
      description: 'Get chapter by name',
      http: {path: '/getChapter', verb: 'get'},
      accepts: [
        {arg: 'id', type: 'number', http: { source: 'query' } },
        {arg: 'name', type: 'string', http: { source: 'query' } }
      ],
      returns: {arg: 'chapter', type: 'string'}
    }
  );

  Book.getChapterRaw = function(id,name, cb) {
    var EPub = require("epub");
    Book.findById( id, function (err, instance) {
      if(!instance){
        cb(null, "null");
        return;
      }
      var epub = new EPub('./client'+instance.url, './client/upload/images/', './client/upload/chapter/');
      epub.on("end", function(){
        epub.getChapterRaw(name, function(error, text){
          cb(null, error || text);
        });
      });
      epub.parse();
    });
  };
  Book.remoteMethod (
    'getChapterRaw',
    {
      description: 'Get chapter by name in raw',
      http: {path: '/getChapterRaw', verb: 'get'},
      accepts: [
        {arg: 'id', type: 'number', http: { source: 'query' } },
        {arg: 'name', type: 'string', http: { source: 'query' } }
      ],
      returns: {arg: 'chapter', type: 'string'}
    }
  );
};
