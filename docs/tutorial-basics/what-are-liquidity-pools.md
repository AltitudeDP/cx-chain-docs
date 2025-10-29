---
sidebar_position: 4
---

# Liquidity Pools

## The House Always Wins—And You Can Be the House

Ever wanted to own a piece of a casino? That's essentially what liquidity pools let you do on CX Chain. Instead of each game holding its own capital, everyone shares a common pool. You deposit tokens, the pool uses that capital for game payouts, and you earn a cut of the house edge. Automatic compounding, no claims required, no complexity.

Let's break down how it actually works.

## How the Pools Work

### The Basic Structure

A liquidity pool is just a smart contract that holds tokens. When you deposit tokens into the pool, you receive LP (Liquidity Provider) tokens that represent your proportional ownership. As games use the pool for payouts and players lose to the house edge, the pool balance grows. Your LP tokens represent the same percentage, but that percentage is now worth more.

The beauty is in the automation. Traditional yield farming requires claiming rewards and manually reinvesting, burning gas with every step. CX Chain pools just... compound automatically. Revenue flows into the pool, increasing the value of every LP token. Zero user action required.

### Unified Pool Contract

CX Chain uses a single unified pool contract (`CXChainLiquidityPool`) that handles all supported tokens. The same contract manages liquidity for both native tokens (CX) and ERC20 tokens, making the system more efficient and maintainable.

For native tokens, the pool uses a Wrapped CX (WCX) token under the hood. When you deposit native CX, it's automatically wrapped into WCX for efficient smart contract handling. When you withdraw, it's unwrapped back to native CX. This happens transparently—you don't need to manage it yourself.

### Separate LP Tokens for Each Asset

Here's an important detail: each token type has its own LP token. When you deposit native CX, you get `cxCX-LP` tokens. When you deposit an ERC20 token, you get a separate LP token for that asset. This means:

- Your CX liquidity doesn't mix with ERC20 liquidity
- Each pool has its own risk/reward profile
- You can provide liquidity to multiple pools simultaneously
- LP token prices are calculated independently for each asset

Everything is transparent and on-chain. Every deposit, every withdrawal, every game payout—all publicly visible. You can audit the pool balance, verify fee distributions, and track your position in real-time without trusting anyone.

---

## Where the Money Comes From

### Understanding the House Edge

Every game on CX Chain has a mathematically defined Return to Player (RTP). This determines what percentage of wagers flows back to players over time. The difference between 100% and the RTP is the house edge—and that's where your returns come from.

### The Revenue Split: 95% / 5%

When players place bets, the pool doesn't just absorb the entire amount. There's a precise split hardcoded into the contract:

**95% goes to LP providers** — This portion flows directly into the `totalUnderlying` balance of the pool. It increases the pool's value immediately, which means your LP tokens are worth more.

**5% goes to validators** — This is the `VALIDATOR_SHARE_PERCENTAGE` (500 basis points). It accumulates separately in a validator share balance, used to compensate network validators for securing the blockchain.

This split happens automatically on every bet. When someone wagers 100 tokens, 95 tokens increase the LP pool value, and 5 tokens go to the validator share accumulator.

:::tip The Math Behind Your Returns
If 1 million tokens are wagered and the house wins (as it will, mathematically, over time), 950,000 tokens flow into the LP pool. Your share depends on what percentage of the pool you own. Own 1% of the LP tokens? You just earned 9,500 tokens from that volume.
:::

### How Payouts Work

When games need to pay winners, the split works in reverse. The contract deducts from both pools proportionally:

- **95% of the payout** comes from the LP pool (your funds)
- **5% of the payout** comes from the validator share

This keeps the ratio balanced. You take 95% of the wins, you cover 95% of the losses. Fair and transparent.

### The Validator Share Offset System

Here's a technical detail that matters: the contract maintains a 100,000 token "offset" for the validator share. When a pool is first created, the validator share starts at 100,000 tokens (it's accounting magic, not real tokens).

Why? This offset ensures the validator share can always absorb its 5% portion of payouts, even during the pool's early days. Without it, the first big win could drain the validator share to zero, breaking the 95/5 split.

As bets accumulate, the validator share grows above 100,000 tokens. Validators can only withdraw the amount *above* this offset. The first 100,000 stays locked as a buffer. This design keeps the ratio stable no matter what happens.

If unusual circumstances cause the validator share to drop below the offset, LP providers temporarily cover the deficit. This is factored into the "Effective Total Underlying" calculation for LP token pricing. It's rare but mathematically accounted for.

### Verifying the Fees On-Chain

Don't take our word for the fee structure—verify it yourself. The validator share parameters are hardcoded into the smart contract as constants:

```solidity
uint16 public constant VALIDATOR_SHARE_PERCENTAGE = 500; // 5%
uint16 public constant MAX_BASIS_POINTS = 10000; // 100%
uint256 public constant VALIDATOR_SHARE_INITIAL_OFFSET = 100000e18; // 100,000 tokens
```

Everything is transparent and immutable. No hidden fees, no discretionary changes, no surprises. You can read these values directly from the contract on any block explorer.

---

## How LP Tokens Work

### Getting Your Share

When you deposit tokens into the pool, you don't just get a receipt—you get LP tokens that represent your proportional ownership. Think of them like shares in a company, except this company is a casino bankroll that grows as players lose.

Here's a concrete example to make this clear:

Imagine the pool has 10,000 CX tokens and has issued 1,000 LP tokens to existing providers. You deposit 1,000 CX tokens. The pool now has 11,000 CX total, and you get roughly 100 LP tokens (representing 9.09% of the pool).

Fast forward a month. The games have generated revenue, and the pool balance has grown to 12,000 CX. You still own 100 LP tokens (9.09% of supply). But now 9.09% of 12,000 is 1,090.9 CX. You earned 90.9 CX without doing anything—just by holding the LP tokens.

:::note No Impermanent Loss Here
If you're familiar with traditional DeFi liquidity pools, you might be worried about impermanent loss. That's not a thing here. CX Chain pools hold a single token type, not pairs. Your LP token value only goes up (or down if there's short-term variance), never gets skewed by relative price changes.
:::

### The Pricing Formula

Want to know exactly what your LP tokens are worth? It's simple math:

```
LP Token Price = (Effective Total Underlying × 10¹⁸) / Total LP Token Supply
```

The "Effective Total Underlying" is slightly more complex than just the raw balance. It accounts for the validator share system. Here's why: the contract maintains a validator share offset of 100,000 tokens as an accounting buffer. If the validator share dips below this offset due to large payouts, LP providers need to cover the deficit.

The formula for effective balance is:

```
If validatorShare >= 100,000:
    Effective Balance = totalUnderlying

If validatorShare < 100,000:
    deficit = 100,000 - validatorShare
    Effective Balance = max(0, totalUnderlying - deficit)
```

This ensures LP token pricing accurately reflects the true withdrawable value, accounting for any validator share obligations. In practice, as long as games are running normally, the validator share stays well above the offset and this doesn't impact your returns.

As the pool balance grows from game revenue, the LP token supply stays constant, so the price per LP token increases. That price appreciation is your earnings. No claiming, no gas fees, just automatic value accrual.

---

## Why Automatic Compounding Is Brilliant

### Traditional Yield Farming Is Annoying

Most DeFi yield farming goes like this: earn rewards, manually claim them (pay gas), manually reinvest them (pay more gas), repeat every day or week or whatever. It's tedious, expensive, and inefficient.

CX Chain's liquidity pools completely eliminate this friction. Revenue from games flows directly into the pool balance. Your LP tokens represent the same percentage of a larger pool. That's it. No claiming, no reinvesting, no gas fees, no user action required whatsoever.

Compare the workflows:

**Traditional Farming**: Earn → Claim (gas fee) → Reinvest (gas fee) → Repeat  
**CX Chain Pools**: Revenue flows in → Your LP tokens are worth more → That's it

### Compounding in Action

Let's say you own 10% of a pool that starts with 100,000 CX tokens. Your position is worth 10,000 CX. Over the next month, the games generate significant volume and revenue flows into the pool, increasing it to 124,000 CX.

The pool now has 124,000 CX. You still own 10% of the LP tokens. Your position is now worth 12,400 CX. You earned 2,400 CX (a 24% increase) without lifting a finger. That's the power of automatic compounding.

:::info Set It and Forget It
Seriously, you can deposit and literally forget about it. Check back in a month, six months, a year—your position will have grown proportionally to the pool's revenue. No maintenance required.
:::

---

## Understanding APY (And Its Limitations)

### What APY Actually Means

APY (Annual Percentage Yield) is the annualized return you'd get if current conditions persisted and earnings compounded. It's a projection, not a promise. The calculation takes recent LP token price appreciation and extrapolates it over a full year.

For example: if the LP token price increases by 2% in one week, the annualized APY would show over 100% because that weekly pace is multiplied across 52 weeks. But that's a big "if"—assuming conditions stay constant for an entire year.

:::warning APY Is Not Guaranteed
Displayed APY assumes the same betting volume, same house edge, same pool size, and same luck for an entire year. In reality, all of these fluctuate. High APY in a good week doesn't mean every week will be that good. Low APY in a bad week doesn't mean the pool is dying. Zoom out.
:::

### What Makes APY Go Up or Down

**Betting Volume**: More players betting means more house edge flowing into the pool. A viral game launch can temporarily spike APY.

**Pool Size**: A smaller pool means the same dollar amount of revenue represents a higher percentage return. As more LPs join, APY per dollar invested typically decreases (but the pool becomes more stable).

**Game Mix**: Different games have different house edges. If players shift toward lower-edge games, APY decreases—even if total volume stays the same.

**Short-term Luck**: A whale hitting a massive win can temporarily decrease the pool and lower APY. Over sufficient time, the math works out, but week-to-week variance exists.

Historical APY is informative, not predictive. Use it to understand trends, not as a guarantee of future returns.

---

## The Risks (Because Nothing's Free)

### Short-Term Variance Is Real

Let's be honest: you can lose money as a liquidity provider, at least temporarily. If a whale lands a massive roulette win, the pool balance drops. Your LP tokens represent the same percentage of a smaller pool, so your position value decreases. This is the primary risk.

The key word is "temporarily." Games are designed with RTP below 100%, meaning the house has a mathematical edge. Over thousands of bets, the pool should grow. Over ten bets, literally anything can happen. The variance smooths out with volume, but it can be uncomfortable in the short term.

Think of it like this: the casino always wins in the long run, but on any given night, a lucky player can walk away big. As a liquidity provider, you're the casino. You win over time, but individual nights might be rough.

:::tip The Math Is On Your Side
Every game has RTP < 100%. That's not marketing—it's programmed into the smart contracts and verifiable on-chain. The house edge is guaranteed by mathematics, not luck. When players lose, 95% of the house's take flows to you as an LP provider.
:::

### How the Protocol Protects You

CX Chain isn't naive about variance. There are smart contract-enforced protections to prevent catastrophic losses:

**Minimum bet limits** prevent dust transactions that could clog the system. The contract enforces `globalMinBet` (default: 1 token), but individual tokens can override this with their own minimum.

**Maximum win caps** are the real protection. Even if someone lands a theoretically massive win, the actual payout is capped as a percentage of the total available funds (LP pool + withdrawable validator share). The formula is straightforward:

```
Total Available = LP Pool Balance + Withdrawable Validator Share
Max Payout = Total Available × maxWin / 10000
```

The `maxWin` parameter is measured in basis points. A value of 500 means 5% of total available funds. The default is hardcoded as `globalMaxWin`, but each token can have its own override.

These protections are automatic and immutable. No governance vote needed, no admin intervention possible. The code enforces the limits on every payout. You can verify these limits by reading the contract:

```solidity
uint256 minBet = liquidityPool.getEffectiveMinBet(tokenAddress);
uint16 maxWin = liquidityPool.getEffectiveMaxWin(tokenAddress);
```

### The Bottom Line

**Losses are temporary and bounded.** The worst case is getting unlucky early, but the house edge mathematically works in your favor over time. **Returns have positive expected value.** You're not gambling—you're taking the casino's side of the bet. That's a very different risk profile.

---

## How Games Interact With the Pool

### Whitelisted Games Only

Not just any contract can drain liquidity from the pool. Games must be explicitly whitelisted by the contract owner. Each whitelisted game also needs to declare which tokens it supports. This two-layer permission system prevents unauthorized access to pool funds.

You can verify which games are whitelisted and which tokens they support by reading the contract:

```solidity
bool isAllowed = liquidityPool.gameInfo(gameAddress).allowed;
bool supportsToken = liquidityPool.isGameTokenSupported(gameAddress, tokenAddress);
```

### The Bet Flow

When a game wants to handle a bet, here's the actual flow:

1. **Player sends tokens to the game contract**
2. **Game contract calls `depositBetToken()` or `depositBetNative()`** on the liquidity pool
3. **Pool receives the bet amount and splits it:** 95% to `totalUnderlying`, 5% to `validatorShare`
4. **Game determines the outcome** (using VRF for randomness)
5. **If player wins, game calls `payoutWinToken()` or `payoutWinNative()`**
6. **Pool validates the payout amount** (checks max win limit, available funds)
7. **Pool deducts 95% from LP pool, 5% from validator share**
8. **Winner receives tokens directly** from the pool

Notice the game never holds the pool's capital. It just coordinates the bet flow. The liquidity pool contract retains full custody of funds and enforces all limits. Games can't bypass the rules—they're enforced at the contract level.

### Excess Token Recovery

Sometimes tokens get sent directly to the pool contract by accident (maybe someone used the wrong function). The pool tracks an internal accounting balance (`totalUnderlying`) separate from the actual token balance.

If actual balance > internal balance, the owner can recover the excess tokens:

```solidity
uint256 excess = liquidityPool.getExcessTokens(tokenAddress);
```

This protects against accidental transfers and ensures clean accounting. Your deposited liquidity is tracked separately and isn't affected by external transfers to the contract address.

---

## Wrapping It Up

### The Simple Version

You deposit tokens. You get LP tokens. Games use the pool for payouts. Players lose to the house edge. Pool grows. Your LP tokens are worth more. You withdraw whenever you want. That's it.

### Why This Matters

CX Chain's liquidity pools flip the traditional casino model. Instead of one operator taking all the house edge, it's distributed proportionally to anyone who deposits capital. The barriers to entry are minimal—you don't need millions in capital or regulatory approval. Just deposit tokens and start earning.

The automatic compounding eliminates the friction and gas costs of traditional yield farming. The transparent fees mean no hidden cuts. The single-token model eliminates impermanent loss. The house edge guarantees positive expected value over time.

:::tip Your Next Steps
Ready to become the house? Head to the CX Chain app and check out the live pools. Want to understand the technical magic that makes provably fair gaming possible? Read the [VRF Integration](/docs/tutorial-basics/cx-chain-vrf) documentation next.
:::

Liquidity provision on CX Chain isn't complicated. It's just a better way to earn yield from gaming revenue—transparent, automated, and mathematically sound.