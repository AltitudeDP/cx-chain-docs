---
sidebar_position: 2
---

# Token Economics

Most blockchains have a token problem: the rich get richer, and everyone else gets diluted. CX Chain takes a different approach with a dual-asset system that separates economic participation from network control. The CX token is the platform's rewards and utility asset. Let's break down how it works and why it matters.

## Two Assets, Two Purposes

Think of CX Chain's economy as having two different types of keys. The **CX token** is like a rewards program—it gives you rakeback, access to exclusive member areas and games, free tournament play, customizable gaming experiences, and developer access. It's fungible, divisible, and there are one billion of them.

The **House Node License NFT** is like a property deed—it grants you the right to validate transactions and earn a share of the fees the liquidity pools generate. It's non-fungible, indivisible, and there are only 1,000 of them. Ever.

| What It Is | Type | How Many | What It Does |
|------------|------|----------|--------------|
| **CX Token** | Fungible (ERC-20) | 1,000,000,000 | Rakeback, free tournament play, customizable gaming experiences, access to exclusive games and events, developer access |
| **House Node License** | NFT (ERC-721) | 1,000 total | Run validators, earn protocol fees (including a share of liquidity pool fees), participate in governance |

:::tip Why Two Assets?
By separating validation rights from token wealth, we prevent plutocracy. You can't just buy a billion tokens and dominate the network. You need a House Node License, and there are only 1,000 of those. This design choice keeps the network decentralized even as token distribution becomes more concentrated over time.
:::

## The CX Token: Your Swiss Army Knife

There are exactly one billion CX tokens, minted at genesis. No more will ever be created—in fact, the supply constantly decreases through fee burning. Let's look at what you can actually do with them.

### Pay for Network Operations and Supply Reduction

The chain is gasless for users—player transaction costs are covered by the protocol. Transaction fees still exist (validators and the protocol treasury receive a share), and a portion of every fee gets burned forever. The supply shrinks with every transaction. More activity means more burning means more scarcity. It's programmatic supply reduction without the complexity of traditional buybacks or the uncertainty of discretionary burns. The CX Chain Foundation purchases CX from the open market to feed the "gas station" that covers the chain's transaction costs; see [Token Buybacks](#token-buybacks) below.

### Earn as the House

Deposit CX tokens into liquidity pools and you're effectively becoming the casino. Your tokens provide capital for game payouts, and you earn a share of the house edge. You receive LP tokens that represent your proportional ownership, and as the pool grows from player losses, your LP tokens become worth more.

The compounding happens automatically—no claiming, no restaking, no gas fees. Just deposit and watch your slice of the pool appreciate. We'll dive deeper into this in the [Liquidity Pools](/docs/tutorial-basics/what-are-liquidity-pools) section.

### Put Skin in the Game as a Developer

Building a game on CX Chain? You'll need to deposit collateral in CX tokens. This isn't a toll—it's a security mechanism. If your contract has bugs or you try something malicious, you lose your collateral through slashing. Build quality games, earn your collateral back plus revenue. Build garbage, lose money. Incentives aligned.

### Rakeback

Buy and stake CX to earn a higher rakeback (poker) or cashback (chance games). Tiers are based on your staked balance:

| Staked CX | Rakeback (Poker) / Cashback (chance games) |
|-----------|-------------------------------------------|
| 0 – 500,000 | 1% |
| 500,001 – 1,000,000 | 2% |
| 1,000,000 – 3,000,000 | 3% |
| 5,000,000+ | 5% |

### Free Tournament Play

By holding more than 500,000 CX you gain access to free-entry tournament play. CX Chain hosts daily guaranteed-payout, free-entry Poker Tournaments for token holders.

### Access to Exclusive Games

Staking CX tokens grants access to an exclusive set of game variants—for example 7-2 Bonus, 6-9 Bonus, Dramaha, and more. Want to get weird? That's where your stake gets you in.

### Fully Customizable Experience

Want a unique avatar or a custom poker room interface? CX tokens give you the ability to customize your gaming experience on the platform.

---

## Token Buybacks

From time to time, the CX Chain Foundation participates in token buybacks. Because the chain is gasless for users, the Foundation must purchase CX tokens from the open market to feed the "gas station" that covers the chain's transaction costs. This is separate from (and can complement) the treasury buybacks described in [How the Supply Shrinks Over Time](#how-the-supply-shrinks-over-time).

---

## House Node Licenses: Your Validator Pass

Here's the thing about traditional proof-of-stake: you need a fortune in tokens to run a validator. CX Chain flips this model with House Node License NFTs—scarce assets that grant validation rights regardless of your token holdings.

### The Scarcity Model

There will only ever be 1,000 House Node Licenses. Not 1,000 per year, not 1,000 until we change our mind—1,000 total, forever. The first batch of 250 has already been distributed. Future batches will come gradually, and once all 1,000 are out, that's it.

These NFTs are fully transferable on standard NFT marketplaces. Got a license but don't want to validate anymore? Sell it or lease it. Want to get into validation? Buy one on the secondary market or wait for the next batch release.

:::warning Limited Supply = Real Scarcity
The 1,000-license cap isn't arbitrary marketing—it's a security feature. Too many validators and the network becomes unwieldy. Too few and it becomes centralized. 1,000 is the sweet spot, and the scarcity creates economic value that incentivizes proper validation behavior.
:::

### What a License Gets You

**Run a Validator Node**: With a license, you can operate a validator, process transactions, and participate in network consensus. As a node holder you earn 30% of the fees the liquidity pools generate, with zero collateral risk. You can also participate in governance.

### How to Actually Run a Validator

You've got two paths here. **Self-operate** if you're technically capable and want full control. You'll run your own hardware, manage validator software, handle updates, monitor uptime, and keep everything running smoothly. It's more work, but you keep all the fees.

Or **delegate to a service** like Hypha. They handle all the technical operations—hardware, software, updates, monitoring—while you retain the fee and revenue rights. You still earn, they still earn, everyone's happy. This is perfect if you want validator income without validator headaches.

The genius of the NFT model is that it completely eliminates minimum token staking for validation rights. A whale with a billion CX tokens can't run 100 validators. They can run exactly as many validators as they have licenses, same as everyone else. Validation power is capped and democratized.

---

## How the Supply Shrinks Over Time

Most crypto projects have an inflation problem. New tokens constantly enter circulation, diluting everyone who came before. CX Chain goes the opposite direction—deflationary by design, no exceptions.

### The Math Is Simple

Start with one billion CX tokens at genesis. Never mint more. Actually, do the opposite—burn tokens with every transaction. The result? Constant supply reduction as long as the network is active.

Every transaction generates gas costs paid in CX. A portion of these fees gets burned forever (permanent supply reduction), validators receive rewards for network security, and the protocol treasury receives a portion which may be used for additional buybacks and burns.

:::info More Activity = More Scarcity
The burning isn't discretionary or dependent on governance votes. It's hardcoded into the protocol. Every transaction that happens on CX Chain automatically reduces the supply. High activity months see more burning. It's programmatic scarcity.
:::

The protocol treasury can amplify this effect by occasionally buying CX tokens on the open market and burning them. This creates additional supply reduction beyond the automatic transaction burning. It's not guaranteed, but it's an option when the treasury has excess funds.

### Why This Matters

Think about the incentives. If you're a token holder, you benefit from network activity even if you're not actively participating. More games launching means more transactions means more burning means more scarcity means (probably) higher token value.

Everyone who contributes to network activity—players, liquidity providers, developers, validators—is indirectly buying back supply from passive holders through the burn mechanism. Long-term holders win. Early participants win. Active users win. It's not zero-sum.

Compare this to traditional projects where new tokens constantly dump on early supporters. Or projects where "buyback and burn" is discretionary and often gets forgotten when times are tough. CX Chain's deflationary mechanism is automatic, transparent, and permanent.

---

## Keeping Everyone Honest

Economic systems without consequences become playgrounds for bad actors. CX Chain enforces accountability through slashing and vesting mechanisms that make misconduct expensive.

### Slashing: Lose Money for Bad Behavior

Deploy a malicious game contract? Slashed. Run a validator that goes offline constantly? Slashed. Violate protocol standards? Slashed. The protocol enforces penalties automatically through smart contracts—no governance vote required for obvious violations.

When someone gets slashed, their collateral tokens are either burned (reducing supply for everyone else) or redistributed to affected parties (making victims whole). In ambiguous cases, governance determines the allocation. The key point: misbehavior has immediate, automatic economic consequences.

:::warning Play by the Rules or Pay the Price
Slashing isn't theoretical. The code enforces it. If you're a developer, audit your contracts thoroughly. If you're a validator, maintain high uptime. If you're interacting with the protocol, understand the rules. Economic security works because the penalties are real.
:::

### Vesting: No Quick Exits for Insiders

Team and advisor tokens are locked in smart contracts with multi-year vesting schedules. There's an initial cliff period where nothing unlocks, followed by linear vesting over several years. Everything is on-chain, transparent, and verifiable.

No administrator can override the vesting schedule. No "emergency unlock" exists for team members who suddenly need liquidity. The vesting contracts are immutable—what was promised is what gets delivered, on the timeline that was promised.

This prevents the classic crypto rug pull where insiders dump on early supporters. Long-term alignment isn't just encouraged—it's enforced through code.

---

## The Virtuous Cycle

Good economic design creates positive feedback loops. CX Chain's tokenomics aren't just sustainable—they're self-reinforcing. Let me show you how the cycle works.

New games launch and attract players. Players generate transaction volume. Transaction volume burns tokens and creates scarcity. Scarcity (theoretically) increases token value. Higher token value attracts more liquidity providers. More liquidity enables bigger games with higher limits. Bigger games attract more players. More players generate more transactions. Repeat.

Every participant benefits from everyone else's activity. Liquidity providers earn more as game volume increases. Validators process more transactions and earn more fees. Token holders see supply reduction from increased burning. Developers get more players for their games. Players get more games to choose from.

:::tip Aligned Incentives Are Everything
The difference between a sustainable protocol and a slow-motion rug pull is incentive alignment. When growing the pie benefits everyone more than grabbing a bigger slice, people build instead of extract. That's the game theory behind CX Chain's dual-asset model.
:::

Nobody succeeds at others' expense. Everyone succeeds together, or the protocol doesn't succeed at all. That's not idealism—that's just good mechanism design.

---

## Bringing It All Together

Let's recap the token economy: The **CX token** is like a rewards program—it helps you access rakeback, exclusive member areas on the platform, access to exclusive games and free tournaments, the ability to customize your gaming experience, and more. Developers put skin in the game with CX collateral.

The supply is **deflationary by design**—a portion of every transaction fee burns forever, with optional treasury buybacks (and Foundation buybacks for the gas station) on top. **Slashing mechanisms** make misbehavior expensive. **Vesting schedules** ensure team alignment over years, not quarters.

Everything fits together to create a system where long-term thinking beats short-term extraction. That's rare in crypto. It's what makes CX Chain worth paying attention to.

Want to understand how liquidity provision actually works in practice? Check out the [Liquidity Pools](/docs/tutorial-basics/what-are-liquidity-pools) documentation next.