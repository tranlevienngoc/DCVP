import { ComponentProps, ReactNode } from "react";
import {
  connectorsForWallets,
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli, mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import "@rainbow-me/rainbowkit/styles.css";

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const projectId = `${process.env.NEXT_PROJECT_ID}`;

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [goerli, mainnet, polygon, optimism, arbitrum],
    [publicProvider()]
  );

  const { wallets } = getDefaultWallets({
    appName: "Popoy-Meme",
    projectId,
    chains,
  });

  const connectors = connectorsForWallets([
    ...wallets,
    {
      groupName: "Other",
      wallets: [
        // NOTE:Unuse now
        // argentWallet({ projectId, chains }),
        // trustWallet({ projectId, chains }),
        // ledgerWallet({ projectId, chains }),
      ],
    },
  ]);

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
};
