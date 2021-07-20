require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan renew noble mistake hidden process metal gas'; 
let testAccounts = [
"0x0500669235e8696cc323012cf53962ab151ef6573e55bc1a0aee66c41e1ae426",
"0x9aae89a2ddac201e05c3a231bd90bccf14941ed3d4da9b05ee4a71f3007eef12",
"0x490ac508fc1a0c772cb0c04b1f1e2eea9b1e83025856b37b895960ea3deb918d",
"0x7c57a335d656aaf403de61eb7e1e3efdb69f06495f81a4c63863df534edfbc0c",
"0x72f2a4cf08f13a568a4417abde13c1c96ef4f0d6ab8d7cd2548ff0c2495ee42a",
"0xb296ee86018175aabc5614586843f2ff36825f888aabfab7f66da53bd7578ea9",
"0x22f431e52c73423f167a0bdd01cc1843cb6b97223ea2ba37eb0f296f6ff1aac3",
"0x998ded3a6fa4b579cf8ac5f32da3a79818aeebdcbdff6e6f5046bc7a747e952c",
"0xb63d0d3f2b7cd17ad674e337bf7c435098f28b506b7a5fe839802fa27cc343db",
"0x47588bee9ae3c7934a5da4d28c0e45db13d852af167a6028b80bea587ecb7fbc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


