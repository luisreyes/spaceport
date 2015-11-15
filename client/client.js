if (Meteor.isClient) {

    Meteor.startup(function () {

        console.log(_SpacePort.find().count());

    });


}