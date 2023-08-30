import injectedModule from "@web3-onboard/injected-wallets";
// import ledgerModule from "@web3-onboard/ledger";
import torusModule from "@web3-onboard/torus";
import trezorModule from "@web3-onboard/trezor";
import walletConnectModule from "@web3-onboard/walletconnect";
import coinbaseModule from "@web3-onboard/coinbase";
import web3authModule from "@web3-onboard/web3auth";
import { init } from "@web3-onboard/react";

// Import the blocknative icon
import icon from "./blocknative";

const INFURA_KEY = "2896ff3d0a1143689424a8341cb75c67";

const injected = injectedModule({
  custom: [
    // include custom injected wallet modules here
  ],
  filter: {
    // mapping of wallet labels to filter here
  },
});

const walletLink = coinbaseModule();

const walletConnect = walletConnectModule({
  version: 2,
  projectId: "e34818682e7f61f7bccc5386871516c9",
  qrModalOptions: {
    themeMode: "dark",
    explorerRecommendedWalletIds: [
      "92dec31cb291452a58043db64f26b20c886607661fd82e921be6362d5fee7f49",
      "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
      "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
    ],
  },
});

const torus = torusModule();
// const ledger = ledgerModule();
const web3auth = web3authModule({
  clientId:
    "DJuUOKvmNnlzy6ruVgeWYWIMKLRyYtjYa9Y10VCeJzWZcygDlrYLyXsBQjpJ2hxlBO9dnl8t9GmAC2qOP5vnIGo",
});

const trezorOptions = {
  email: "test@test.com",
  appUrl: "https://www.blocknative.com",
};
const trezor = trezorModule(trezorOptions);

export default init({
  // An array of wallet modules that you would like to be presented to the user to select from when connecting a wallet.
  wallets: [injected, walletLink, torus, trezor, walletConnect, web3auth],
  // An array of Chains that your app supports
  chains: [
    {
      // hex encoded string, eg '0x1' for Ethereum Mainnet
      id: "0x1",
      // string indicating chain namespace. Defaults to 'evm' but will allow other chain namespaces in the future
      namespace: "evm",
      // the native token symbol, eg ETH, BNB, MATIC
      token: "ETH",
      // used for display, eg Ethereum Mainnet
      label: "Ethereum Mainnet",
      // used for network requests
      rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
    },
    {
      id: "0x89",
      token: "MATIC",
      label: "Matic Mainnet",
      rpcUrl: "https://matic-mainnet.chainstacklabs.com",
    },
    {
      id: "0x2105",
      token: "ETH",
      label: "Base",
      rpcUrl: "https://mainnet.base.org",
    },
  ],
  appMetadata: {
    // The name of your dApp
    name: "Blocknative",
    // SVG icon string, with height or width (whichever is larger) set to 100% or a valid image URL
    icon,
    // Optional wide format logo (ie icon and text) to be displayed in the sidebar of connect modal. Defaults to icon if not provided
    logo: "<svg></svg>",
    // The description of your app
    description: "Demo app for Onboard V2",
    // The url to a getting started guide for app
    gettingStartedGuide: "http://mydapp.io/getting-started",
    // url that points to more information about app
    explore: "http://mydapp.io/about",
    // if your app only supports injected wallets and when no injected wallets detected, recommend the user to install some
    recommendedInjectedWallets: [
      {
        // display name
        name: "MetaMask",
        // link to download wallet
        url: "https://metamask.io",
      },
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
    ],
    // Optional - but allows for dapps to require users to agree to TOS and privacy policy before connecting a wallet
    agreement: {
      version: "1.0.0",
      termsUrl: "https://www.blocknative.com/terms-conditions",
      privacyUrl: "https://www.blocknative.com/privacy-policy",
    },
  },
});
