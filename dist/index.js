define("@scom/scom-binance-chain-wallet", ["require", "exports", "@ijstech/eth-wallet", "@ijstech/components"], function (require, exports, eth_wallet_1, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BinanceChainWalletProvider = void 0;
    let moduleDir = components_1.application.currentModuleDir;
    function fullPath(path) {
        if (path.indexOf('://') > 0)
            return path;
        return `${moduleDir}/${path}`;
    }
    class BinanceChainWalletProvider extends eth_wallet_1.EthereumProvider {
        get displayName() {
            return 'Binance Chain Wallet';
        }
        get image() {
            return fullPath('img/binance-chain-wallet.svg');
        }
        get provider() {
            return window['BinanceChain'];
        }
        get homepage() {
            return 'https://www.binance.org/en';
        }
        installed() {
            return !!window['BinanceChain'];
        }
    }
    exports.BinanceChainWalletProvider = BinanceChainWalletProvider;
});
