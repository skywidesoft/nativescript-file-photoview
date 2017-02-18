var FilePhotoview = require("nativescript-file-photoview").FilePhotoview;
var filePhotoview = new FilePhotoview();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(filePhotoview.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(filePhotoview.functionname()).toEqual(jasmine.any(Promise));
  });
});