import { Meteor } from 'meteor/meteor';
import { Uploads } from '../lib/uploads.js';

Meteor.startup(() => {
  // code to run on server at startup

});
Meteor.publish('uploads', function(){
    return Uploads.find();
});

Meteor.methods({
    insertUpload:function(cloudinaryResult, filename){
        check(cloudinaryResult, Object);
        check(filename, String);
        Uploads.insert(_.extend(cloudinaryResult, {createdAt:new Date(), originalFileName:filename}))
    }
});
