var hello = artifacts.require("HelloWorld");

contract("HelloWorld", function() {
  it("should be same as constructor argument", function() {
    return hello.deployed().then(function(instance) {
      return instance.say().then(function(greeting) {
        assert.equal(greeting, "Hello, World!");
      });
    });
  });

  it("(A) should change the greeting value by setGreeing", function() {
    return hello.deployed().then(function(instance) {
      instance.setGreeting("Hello, Blockchain!", {
        from: web3.eth.accounts[0]
      }); //?

      return instance.say().then(function(greeting) {
        assert.equal(greeting, "Hello, Blockchain!");
      });
    });
  });

  it("(B) should change the greeting value by setGreeing", function() {
    return hello.deployed().then(function(instance) {
      return instance
        .setGreeting("Hello, Blockchain!", { from: web3.eth.accounts[0] })
        .then(function(result) {
          //console.log(result.tx);
          return instance.say().then(function(greeting) {
            assert.equal(greeting, "Hello, Blockchain!");
          });
        });
    });
  });
});
