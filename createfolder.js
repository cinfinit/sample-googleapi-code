function createfolder(name){

  var folderid='1r2plXOZidUkHCesfi2eXAR75l1haJm2R';
 var fileMetadata = {
  'name': name,
  parents:[folderid],
  'mimeType': 'application/vnd.google-apps.folder'
};
googleDrive.files.create({
  resource: fileMetadata,
  fields: 'id'
}, function (err, file) {
  if (err) {
    // Handle error
    console.error(err);
  } else {
    initialID=file.data.id;
    console.log('created Folder Id: ', file.data.id);
  }
})
}
