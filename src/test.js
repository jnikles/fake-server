var sinon = require("sinon");
var AmpersandRestCollection = require("ampersand-rest-collection");
var server = sinon.fakeServer.create();

var xhr = require("xhr");

xhr.XMLHttpRequest = window.XMLHttpRequest;
var Collection = AmpersandRestCollection.extend({
  url: "fancy"
});

describe("ampersand-rest-collection", function () {
  var collection;

  describe("fetch", function () {
    var response;

    response = {
      what: {
        a: {
          partey: ":-)"
        }
      }
    };

    beforeEach(function () {
      server.autoRespond = true;
      collection = new Collection();
    });

    it("should jump into the error callback if 404", function (done) {
      collection.fetch({
        success: function () {
          done("failed");
        },
        error: function () {
          done();
        }
      });
    });

    it("should jump into success block if fakeServer returns response", function (done) {
      server.respondWith(JSON.stringify(response));

      collection.fetch({
        success: function () {
          done();
        },
        error: function () {
          done("failed");
        }
      });
    });

    it("should test XMLHttpRequest", function () {
      server.respondWith(JSON.stringify(response));

      var xhr = new XMLHttpRequest();
      xhr.open("GET", "test", false);
      xhr.send(null);

      expect(xhr.status).to.equal(200);
    });
  });
});