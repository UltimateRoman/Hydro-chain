const Hydrochain = artifacts.require("Hydrochain");

module.exports = function(deployer) {
  deployer.deploy(Hydrochain);
};
