/// <amd-module name="@scom/scom-binance-chain-wallet" />
declare module "@scom/scom-binance-chain-wallet" {
    import { EthereumProvider } from '@ijstech/eth-wallet';
    export class BinanceChainWalletProvider extends EthereumProvider {
        get displayName(): string;
        get image(): string;
        get provider(): any;
        get homepage(): string;
        installed(): boolean;
    }
}
