$.fn.fileUpload = function(options, res, rej) {
  const me = this;
	const ncmb = new NCMB(
  	options.applicationKey,
    options.clientKey
  );
  this.on('drop', (e) => {
  	me.removeClass('dragover');
    e.preventDefault();
    const acl = new ncmb.Acl();
    acl
    	.setPublicReadAccess(true)
   		.setPublicWriteAccess(false);
    const proceses = [];
    const files = e.originalEvent.dataTransfer.files;
    for (let file of files) {
    	proceses.push(
 	      ncmb.File.upload(file.name, file, acl)
      );
    }
    Promise
    	.all(proceses)
    	.then((results) => {
      	const urls = results.map((file) => `https://mb.api.cloud.nifty.com/2013-09-01/applications/${options.applicationId}/publicFiles/${file.fileName}`);
        res(urls)
      }, (err) => {
      	rej(err);
      })
  });

	this.on('dragover', (e) => {
  	me.addClass('dragover');
    e.preventDefault();
  });
  
  this.on('dragenter', (e) => {
  	e.preventDefault();
  });

  this.on('dragleave', (e) => {
  	e.preventDefault();
  	me.removeClass('dragover');
  });
};

