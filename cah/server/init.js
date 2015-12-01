if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Cards.find().count() === 0) {
      var cards = [
        {'key': '1',
          'description': 'First funny card !'},
        {'key': '2',
          'description': 'Second funny card.'}
      ];
      for (var i = 0; i < cards.length; i++)
        Cards.insert(cards[i]);
    }
  });
}