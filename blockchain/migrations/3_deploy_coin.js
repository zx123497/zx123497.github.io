const UglyCoin = artifacts.require('UglyCoin')

module.exports = function(deployer) {
    deployer.deploy(UglyCoin, 1000000)
}
