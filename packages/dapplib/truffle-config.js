require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile proud harvest credit flip squirrel'; 
let testAccounts = [
"0xa0c0349cbce2aa1fda97b47d23a8d65d7dde257c2de04634630ccbf0ee7b35c0",
"0x6afcafb4ccb1ad0a305eb12ac51acd561e8948f9b5d01efc8e8a5bd20e340008",
"0xc1870b3eb8a6f4300c5e4772de4915224f1cc1f7f842efaf9477207f43a47fba",
"0x428a68ea553c768ff4b554d710257bd4ed2a693b38a7adc00f609e1ec95be5a0",
"0xd651c45b1e63e63155379b27f4567d1b4b6b4ce88307fdd8b8086d56d14ccca7",
"0xd94772a4304f4aa9a86f90e57291ba574fefcdb52dbd5f65f5706bfa9e406221",
"0x3389466394edf360700cd80454aa512b62fc31e5a9dd3528255d65d8cc353be8",
"0x21e7dd720f2a492a44da7cc2c5a916f4830d03dcaa6d3cff333e80aeec4ed898",
"0x6e8b2bff30f24cf55fbe412f8d189b4df09ecfa01e32def349534c720b6a22bc",
"0x7f0ea1c8cc421a63928bc06f2038680364b8c50b0d98d5137ea1b3a8ad9d8e6b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

