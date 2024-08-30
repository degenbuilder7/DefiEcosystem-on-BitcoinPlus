# DefiEcosystem-on-BitcoinPlus

# BTC+DEX

**Tagline**: Swap seamlessly with BTC+DEX – Your Gateway to Effortless Token Exchange!

## Overview

BTC+DEX is a decentralized exchange (DEX) platform designed to provide a seamless and user-friendly experience for swapping tokens. Built with robust blockchain technology, BTC+DEX allows users to exchange ETH for various tokens and vice versa, ensuring transparency, security, and efficiency in every transaction.

## Contract Address on BitcoinPlus

BRIDGED_ORDI - 0xC5d579C8948f7Cfa2ec2A931bDB81Fe421427b0c
BRIDGED_SATS - 0xC5d579C8948f7Cfa2ec2A931bDB81Fe421427b0c

BTCPLUSV1DEX - 0x42CCc04D3557A7fbC2f2F7Cbe41869834c373896

## Features

### 1. **Intuitive Token Swapping**
- Swap ETH for tokens and tokens for ETH with ease.
- Real-time calculation of the minimum tokens to receive from a swap.
- User-friendly interface for effortless transactions.

### 2. **Token Selection**
- Select from a variety of supported tokens directly within the input component.
- View token balances and choose the best token for your needs.

### 3. **Real-time Balances**
- Display current balances of native and token assets.
- Automatically fetch and update balances to provide accurate information.

### 4. **Responsive Design**
- Optimized for both desktop and mobile users.
- Clean and modern UI ensures a pleasant user experience.

### 5. **Secure Transactions**
- Leverage smart contracts for secure and transparent transactions.
- Approve and execute token swaps with confidence.

## Contract Details

### BTC+V1DEX

**Address**: ``

**Description**: The BTC+V1DEX contract facilitates the swapping of ETH and a specific ERC-20 token, allowing users to add and remove liquidity, as well as perform swaps between ETH and the token.

**Key Features**:
- **Liquidity Management**: Users can add and remove liquidity for the specified token.
- **Swap Operations**: Supports ETH-to-token and token-to-ETH swaps.
- **Fee Mechanism**: Includes a configurable fee percentage for each swap.
- **Event Logging**: Emits events for liquidity addition/removal and swap operations.

**Functions**:
- `getTokensInContract()`: Returns the balance of the specified token in the contract.
- `addLiquidity(uint256 _amount)`: Allows users to add liquidity to the contract.
- `removeLiquidity(uint256 _amount)`: Allows users to remove liquidity from the contract.
- `getAmountOfTokens(uint256 inputAmount, uint256 inputReserve, uint256 outputReserve)`: Calculates the output amount for a given input amount and reserves.
- `swapEthToToken(uint256 minTokens)`: Swaps ETH for tokens, ensuring the minimum token amount.
- `swapTokenToEth(uint256 _tokensSold, uint256 minEth)`: Swaps tokens for ETH, ensuring the minimum ETH amount.

### BTC+V2DEX

**Address**: `0xAddressForV2DEX`

**Description**: The BTC+V2DEX contract extends the functionality of V1 by supporting multiple ERC-20 tokens and introducing a more flexible liquidity management system.

**Key Features**:
- **Multi-Token Support**: Supports swapping between ETH and multiple ERC-20 tokens.
- **Liquidity Management**: Users can add and remove liquidity for any supported token.
- **Swap Operations**: Supports ETH-to-token and token-to-ETH swaps for various tokens.
- **Fee Mechanism**: Includes a configurable fee percentage for each swap.
- **Event Logging**: Emits events for liquidity addition/removal and swap operations.

**Functions**:
- `getTokensInContract(address token)`: Returns the balance of the specified token in the contract.
- `getNativeContractBalance()`: Returns the balance of ETH in the contract.
- `addLiquidity(address token, uint256 _amount)`: Allows users to add liquidity for the specified token.
- `removeLiquidity(address token, uint256 _amount)`: Allows users to remove liquidity for the specified token.
- `getAmountOfTokens(uint256 inputAmount, uint256 inputReserve, uint256 outputReserve)`: Calculates the output amount for a given input amount and reserves.
- `swapEthToToken(address token, uint256 minTokens)`: Swaps ETH for the specified token, ensuring the minimum token amount.
- `swapTokenToEth(address token, uint256 _tokensSold, uint256 minEth)`: Swaps the specified token for ETH, ensuring the minimum ETH amount.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/degenbuilder7/DefiEcosystem-on-BitcoinPlus
   cd DefiEcosystem-on-BitcoinPlus
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create `.env.local` file**:
   ```bash
   NEXT_PUBLIC_CLIENT_ID=your_thirdweb_client_id
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   ```bash
   http://localhost:3000
   ```

## Usage

1. Connect your wallet.
2. Select the token you wish to swap.
3. Enter the amount of ETH or token you want to exchange.
4. Review the minimum tokens to receive.
5. Click the swap button and confirm the transaction.

## Contributing

We welcome contributions to enhance BTC+DEX! Please fork the repository, create a new branch, and submit a pull request with your changes. Ensure your code adheres to our coding standards and includes relevant tests.
