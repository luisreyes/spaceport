_SpacePort = new Mongo.Collection('_spaceport');


if (Meteor.isServer) {
    _SpacePort.allow({
        insert() { return true; },
        update() { return true; },
        remove() { return true; }
    });

    _SpacePort.deny({
        insert() { return false; },
        update() { return false; },
        remove() { return false; }
    });
}
