var hello = artifacts.require("HelloWorld");

contract("HelloWorld", function() {
  it("should be same as constructor argument", async () => {
    let instance = await hello.deployed();
    let greeting = await instance.say.call();
    assert.equal(greeting, "Hello, World!");
  });

  it("should change the greeting value by setGreeing", async () => {
    let instance = await hello.deployed();
    await instance.setGreeting("Hello, Blockchain!", {
      from: web3.eth.accounts[0]
    });
    let greeting = await instance.say.call();
    assert.equal(greeting, "Hello, Blockchain!");
  });
});
