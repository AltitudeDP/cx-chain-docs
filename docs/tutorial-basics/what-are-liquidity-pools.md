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
[`0x9298FCA262DDE0c11d205C5926F3E4122D61c0FB`](https://subnets-test.avax.network/cxctestnet/address/0x9298FCA262DDE0c11d205C5926F3E4122D61c0FB)

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
> Example: [`View adminShare on Testnet`](https://subnets-test.avax.network/cxctestnet/address/0x9298FCA262DDE0c11d205C5926F3E4122D61c0FB?tab=code&contractTab=read)

---

### 3. **LP Tokens: Your Share of the Pool**

When you deposit funds into a liquidity pool, you receive **LP tokens** (Liquidity Provider tokens) in return.

*   **LP tokens represent your share** of the entire pool. For example, if you own 10% of all minted LP tokens, you have a claim to 10% of the total funds locked in that liquidity pool.
*   LP tokens are **minted** when you deposit funds and **burned** when you withdraw your share.
*   The number of LP tokens you receive for your deposit (and the amount of assets you get back when withdrawing) depends on the current **price of an LP token**.

#### LP Token Price

The price of an LP token indicates how much of the underlying asset it represents. It is calculated as:
- **LP Token Price = (Amount of Asset in Pool × 10^18) / Total Supply of LP Tokens**

This price mechanism ensures that the value of your LP tokens accurately reflects your proportional ownership of the pool's assets at any given time.

---

### 4. **Fair Distribution of Rewards & APY**

The revenue is **automatically distributed** among all liquidity providers **based on their share** of the pool, represented by their LP tokens. The more you contribute, the more you earn.

- If you provide 10% of the pool’s total liquidity, you’ll receive 10% of the provider revenue.
- No need to claim rewards manually — they are automatically added to your position, increasing the value of the pool and thus the price of your LP tokens.

#### Understanding APY (Annual Percentage Yield)

The **APY** for a liquidity pool represents the estimated annualized return on your investment, assuming rewards are compounded. It calculates how much you could potentially earn on top of your initial deposit over a year, based on the current volume of bets and the state of the pool.

The APY is calculated dynamically using the following formula:
- **APY = (((lpTokenPrice / lpTokenPriceAtReference) - 1) * 100 / minutesSinceReference) * 525600**

Where:
*   `lpTokenPrice` is the current price of the LP token.
*   `lpTokenPriceAtReference` is the price of the LP token at a previous reference point.
*   `minutesSinceReference` is the time elapsed since that reference point.
*   `525600` is the number of minutes in a year (365 days * 1440 minutes).

This metric helps providers assess the potential profitability of the pool.

---

### 5. **Rewards Compound Over Time**

The provider rewards **aren’t stored separately** or held in reserve. They are added directly to the pool balance, meaning:

- The pool grows over time.
- More funds become available for future player winnings.
- Your **position compounds** as the pool earns more, which is reflected in the increasing price of your LP tokens.

---

## ⚠️ Risk Considerations

CX Chain is built for long-term fairness and sustainability — but like any economic system, there are dynamics to understand:

### Short-Term Imbalance

- **When a player wins big**, liquidity providers may temporarily see the value of their LP tokens decrease (since funds are pulled from the pool, affecting the LP token price).
- This is expected behavior — **games with positive expected value (RTP < 100%)** ensure that over time, the pool grows and providers profit.

### Risk Mitigation

To protect liquidity providers and ensure sustainability:

- **Maximum bet size and payouts are limited** based on the **current pool balance**.
- This limit is enforced on-chain by smart contracts and ensures no single win can drain the pool.

> 💡 As a result, **losses are temporary and bounded**, while long-term returns are positive due to game math and protocol design.

---

## 🏁 Summary

CX Chain liquidity pools allow anyone to participate in the on-chain gaming economy by contributing capital and earning rewards:

- Pools are **token-specific** and fully transparent.
- You receive **LP tokens** that represent your ownership share.
- Rewards are **automatic, compounding**, and **proportional** to your share.
- **APY** provides an estimate of potential annualized returns.
- CX Chain’s platform fee is **public and adjustable** to keep the system balanced.
- **Short-term risk is mitigated**, and long-term growth is driven by statistically favorable game mechanics.

You can be **the house** — just deposit into a pool and start earning from every bet made on the network.