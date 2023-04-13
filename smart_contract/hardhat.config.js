require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/Zd6JnxZMKjdAjgrNyrf9HRcLpH4Kg73P', 
      accounts: ['d4295c409f236fca79d3bdba44f404090006ebcc09c58d5d1649b22b1c187dfa']
    }
  }
}