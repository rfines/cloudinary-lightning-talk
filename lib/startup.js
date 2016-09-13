import { Meteor } from 'meteor/meteor';

SubsManagerUploads = new SubsManager();
Meteor.startup(()=>{
    if(Meteor.isServer){
        Cloudinary.config({
            cloud_name: 'dkb13tu0p',
            api_key: '477943766626648',
            api_secret: 'UPWE8WHx0fnRlXgwXlvDWPdg61w'
        });

    }else{
        $.cloudinary.config({cloud_name:"dkb13tu0p"});
    }
})
