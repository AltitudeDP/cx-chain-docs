---
sidebar_position: 4
---

# Liquidity Pools on CX Chain

**Liquidity pools** are smart contracts that hold the funds used for placing bets and paying out winnings. Every time a player places a bet or wins, those funds are moved in and out of the corresponding liquidity pool. These pools make it possible to support **large-scale payouts** with full transparency.

Each token used for betting on CX Chain has its own dedicated liquidity pool. The **balance of the pool** shows how much CX Chain can currently pay out in winnings to players using that token.

---

## 💡 Example: Testnet Liquidity Pool

For the CX Chain **Testnet**, the liquidity pool address for the TCX token is:

**TCX Token:**  
[`0x4C2f6247c762d6a268E0f3d7A42a1552F0C06922`](https://subnets-test.avax.network/cxctestnet/address/0x4C2f6247c762d6a268E0f3d7A42a1552F0C06922)

---

## 🔁 How Liquidity Pools Work

Anyone can add funds to a liquidity pool and start earning a share of the revenue generated from gameplay. Here’s how it works:

### 1. **Games Have RTP (Return to Player)**

Every game has a defined **RTP** — the percentage of all bets that are returned to players as winnings. This value is either calculated mathematically (e.g. card games) or estimated statistically (e.g. roulette).

For example:
- A game with 96% RTP gives back 96% of all wagers to players over time.
- The remaining **4% is revenue** — split between CX Chain and liquidity providers.

---

### 2. **Liquidity Provider Revenue**

Liquidity providers earn a portion of the total revenue left after payouts. Here’s how it breaks down:

- **Total Revenue = 100% - RTP**
- **Liquidity Provider Revenue = (100% - RTP) × (1 - CX Chain Share)**

> 🧮 *The CX Chain share (platform fee) is adjustable and can be found by reading the `adminShare` value of the liquidity pool smart contract. Divide it by 10 to get the percentage.*
>  
> Example: [`View adminShare on Testnet`](https://subnets-test.avax.network/cxctestnet/address/0x4C2f6247c762d6a268E0f3d7A42a1552F0C06922?tab=code&contractTab=read)

---

### 3. **Fair Distribution of Rewards**

The revenue is **automatically distributed** among all liquidity providers **based on their share** of the pool. The more you contribute, the more you earn.

- If you provide 10% of the pool’s total liquidity, you’ll receive 10% of the provider revenue.
- No need to claim rewards manually — they are automatically added to your position.

---

### 4. **Rewards Compound Over Time**

The provider rewards **aren’t stored separately** or held in reserve. They are added directly to the pool balance, meaning:

- The pool grows over time.
- More funds become available for future player winnings.
- Your **position compounds** as the pool earns more.

---

## 🏁 Summary

CX Chain liquidity pools allow anyone to participate in the on-chain gaming economy by contributing capital and earning rewards:

- Pools are **token-specific** and fully transparent.
- Rewards are **automatic, compounding**, and **proportional**.
- CX Chain’s fee share is **public and adjustable** to ensure ecosystem stability.

You can be **the house** — just deposit into a pool and start earning from every bet made on the network.