var hello = artifacts.require("HelloWorld");

module.exports = function(deployer) {
  deployer.deploy(hello, "hello world");
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
};
