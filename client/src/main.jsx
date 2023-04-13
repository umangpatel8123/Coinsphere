import React from 'react';
import ReactDOM from 'react-dom/client';
import { getDefaultProvider } from 'ethers'
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import './index.css';
import App from './App';
import { TransactionProvider } from './context/TransactionContext'; 

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: "Zd6JnxZMKjdAjgrNyrf9HRcLpH4Kg73P"}),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Coinsphere',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})



ReactDOM.createRoot(document.getElementById('root')).render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
  <TransactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionProvider>
  </RainbowKitProvider>
  </WagmiConfig>
);
