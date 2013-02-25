require(["../../../source/apackage/subpackage/TestModule"], function (TestModule) {

  describe("TestModule()", function () {
    var testModule;

    beforeEach(function () {
      TestModule.createUniqueName = jasmine.createSpy("createUniqueName");
      TestModule.createUniqueName.andReturn("unique name");

      testModule = TestModule();
    });

    describe("getName()", function () {
      it("returns a name", function () {
        var name = testModule.getName();

        expect(name).not.toBeUndefined();
      });
    });
  });
});