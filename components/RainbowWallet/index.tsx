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
import { ModalConnectTheme } from "../../styles/theme/modalconnectTheme";

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const projectId = "3b2702fff16f0a67ec37f565da4a5401";

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [goerli, mainnet, polygon, optimism, arbitrum],
    [publicProvider()]
  );

  const { wallets } = getDefaultWallets({
    appName: "Test",
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
