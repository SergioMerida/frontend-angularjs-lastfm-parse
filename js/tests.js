describe('lastFm module', function() {
  beforeEach(module('lastFm'));

  var $controller;
  beforeEach(inject(function(_$controller_){
  // The injector unwraps the underscores (_) from around the parameter names when matching
  $controller = _$controller_;
  }));
  describe('getData controller', function() {
    it("Should watch if the $scope it's not empty", function() {
      var $scope = {};
      var controller = $controller('getData', { $scope: $scope });
      var playlist = $scope.playlists;
      expect(playlist).not.toBeNull();  
    });
  });

  describe("soloUrl filter should start in the tenth character and remove the last eighteen characters", function(){
    var masterFilter;

    beforeEach(inject(function($filter){
      masterFilter = $filter('soloUrl');
    }));
    it("Must be able to filter with letters", function(){
      var filterTest1 = "asdghjklñpoiuytrewqaasdfgtrewqasdfghjk"
        expect(masterFilter(filterTest1)).toBe("poiuytrewqaa");
    });

    it("Must be able to filter with numbers", function(){
      var filterTest2 = "12345678911234567892123456789"
        expect(masterFilter(filterTest2)).toBe("112");
    });

    it("Must be able to filter with letters numbers and signs", function(){
      var filterTest3 = "123456789,=!¡)(;sdfghjklñlpoiuyyt"
        expect(masterFilter(filterTest3)).toBe(",=!¡)(;");
    });

  });

});
