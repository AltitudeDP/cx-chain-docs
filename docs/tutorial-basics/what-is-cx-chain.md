---
sidebar_position: 1
---

# Platform Overview

Here's the thing about blockchain gaming: most projects promise decentralization but end up recreating the same trust issues as traditional online casinos. CX Chain takes a different approach by building a Layer 1 blockchain on Avalanche that's purpose-built for gaming from the ground up.

## The Problems We're Solving

Let's be honest about what's broken in blockchain gaming. First, there's the fairness problem—how do you know the casino isn't rigging the dice? Traditional blockchains use block hashes for randomness, but miners can manipulate these. That's not fair, that's gambling with extra steps.

Then there's the liquidity problem. Most games need their own capital pool, which fragments liquidity and creates inefficiency. A single whale's win can drain a small game's entire treasury, making smaller projects unsustainable.

Finally, there's the decentralization problem. Many "decentralized" platforms require massive token stakes to run validators, which means only the wealthy can participate in network security. That's not decentralization—that's plutocracy with extra steps.

CX Chain addresses all three through specialized architecture: **cryptographic proof of randomness** via Chainlink VRF, **shared liquidity pools** that work across all games, and **NFT-based validation** that separates network participation from token wealth.

## How the System Works

### Playing Games with Provable Fairness

When you spin a roulette wheel or roll dice on CX Chain, something remarkable happens behind the scenes. Instead of trusting a random number generator controlled by the casino, the system reaches out to Chainlink's oracle network—a decentralized system of nodes that generates random values with cryptographic proofs.

Think of it like this: every random number comes with a mathematical receipt that anyone can verify. The Chainlink network generates the randomness, creates an unforgeable proof, and broadcasts everything on-chain. You can personally audit any game result to confirm it wasn't manipulated. No trust required, just math.

:::tip Games You Can Play Today
We've got European roulette with both manual and auto-claim variants, wheel games with configurable prize tiers, dice games with various betting options, and multiple card game implementations. Each one uses the same provably fair VRF system.
:::

The beauty is in the simplicity for players—you click, the smart contract handles the VRF request, and within seconds you get your result. The complexity of cross-chain communication and cryptographic verification happens invisibly.

### Becoming the House

Here's where CX Chain gets interesting for investors. Instead of games holding their own capital, everyone shares a common liquidity pool. It's like if every casino game in Las Vegas drew from the same bankroll—way more efficient and way more stable.

When you deposit tokens into a liquidity pool, you receive LP tokens that represent your slice of the pie. As players bet and lose (remember, the house always has an edge), the pool grows. Your LP tokens represent the same percentage ownership, but that percentage is now worth more. It's automatic compounding without you lifting a finger.

CX Chain uses a unified pool contract that manages liquidity for all supported tokens—CX on mainnet, TCX on testnet. The fee structure is hardcoded into the smart contracts, so there's no mystery about where the money goes. A portion goes to validators, a portion goes to the protocol treasury, and the majority flows directly back to liquidity providers like you.

:::note Capital Efficiency in Action
With shared pools, a whale's win at roulette is cushioned by capital from all the other games. This prevents any single game from running dry while making the entire ecosystem more resilient. It's basic portfolio theory applied to casino banking.
:::

### Securing the Network Without Plutocracy

Most blockchain networks have a problem: the rich get richer. If you need millions in tokens to run a validator, only whales can participate in network security. CX Chain flips this model with House Node Licenses—NFTs that grant validation rights.

There are only 1,000 licenses total, ever. The first batch of 250 has already been distributed. That's it—no inflation, no dilution. If you own a license, you can run a validator regardless of how many CX tokens you hold. This design choice prevents token whales from dominating network security.

Running a validator earns you protocol fees from every transaction on the network. You can also accept delegated assets from other users, earning a cut of their staking rewards. Don't want to deal with the technical headache of maintaining a node? Services like Hypha let you delegate your license while keeping the fee rights—you still earn, they handle the infrastructure.

:::warning Scarcity by Design
With only 1,000 licenses ever created, House Node Licenses are inherently scarce. Future batches will be released gradually, and there's always the secondary market if you want to get in. This scarcity isn't artificial—it's a core security feature that prevents Sybil attacks.
:::

### Building New Games

If you're a developer, CX Chain gives you a powerful toolkit without reinventing the wheel. We provide VRF integration libraries so you don't have to figure out cross-chain randomness yourself. Liquidity pool interfaces let you tap into shared capital instead of bootstrapping your own. Automated payout mechanisms handle distribution so you can focus on game logic.

There's a catch, though—you need skin in the game. Developers must deposit collateral in CX tokens before deploying a game contract. This isn't arbitrary gatekeeping; it's economic security. If you deploy a malicious or buggy contract, you lose your collateral through slashing. This aligns incentives perfectly: good developers earn from successful games, bad actors lose money trying to exploit the system.

Your contract also needs to pass security audits and comply with protocol standards. This might seem burdensome, but remember—you're plugging into shared liquidity pools. Every liquidity provider trusts that games won't drain their capital through exploits. The audit requirement protects everyone while maintaining the permissionless ethos of the platform.

## The Philosophy That Guides Everything

### Trust Math, Not People

Every game outcome on CX Chain can be verified mathematically. When we say "provably fair," we mean it literally—you can take the cryptographic proof from any game result and verify it yourself without trusting us, the validators, or anyone else. The proof either validates or it doesn't. This eliminates the oldest problem in gambling: trusting the house.

### Anyone Can Join

The protocol doesn't care who you are. Want to provide liquidity? Deposit tokens and get LP tokens back. Want to play games? Connect your wallet and start. Want to run a validator? Get a House Node License (through purchase or secondary market) and spin up a node. Want to build a game? Deposit collateral, pass an audit, and deploy your contract.

Notice what's missing from that list: permission from a centralized authority. We're not gatekeepers. The smart contracts enforce the rules, and the rules are the same for everyone.

### When Everyone Wins, Everyone Wins

Here's what makes CX Chain sustainable: the incentives actually align. Players want fair games, so we built cryptographic fairness into every contract. Liquidity providers want returns, so we give them the house edge minus a small protocol fee. Validators need transaction volume, which they get from active games. Developers need players and liquidity, which the platform provides.

It's not a zero-sum game. When the platform succeeds, players get better games, liquidity providers earn more, validators process more transactions, and developers reach more users. Growth compounds for everyone.

## How You Can Participate

### Jump In as a Player

The simplest entry point is just playing. Game contracts are live right now on the network. Connect your wallet, place a bet, and watch the VRF system prove the outcome is fair. Every spin, every roll, every card draw—all verifiable. You don't need to understand the technical details to benefit from them.

### Earn as a Liquidity Provider

If you're more interested in consistent returns than adrenaline rushes, liquidity provision might be your angle. Deposit tokens into a pool, receive LP tokens, and watch your balance grow as players lose to the house edge. The math is simple: games are designed to favor the house, and you *are* the house.

Check out the [Liquidity Pools](/docs/tutorial-basics/what-are-liquidity-pools) documentation for detailed mechanics, APY calculations, and risk factors. Spoiler: the main risk is short-term variance, but the long-term expected value is positive.

### Validate as a Node Operator

Want to run network infrastructure? You'll need a House Node License NFT. The first 250 are already distributed, but more batches will be released over time. You can also buy one on the secondary market if you don't want to wait.

Once you have a license, you can either run your own validator node (if you're technically inclined) or delegate it to a service provider like Hypha (if you want passive income without the operational headache). Either way, you earn protocol fees from network activity.

### Build as a Developer

CX Chain needs more games. If you can write Solidity, you can build on the platform. Start by reviewing the architecture and understanding how VRF integration works. Implement your game logic using our libraries. Get your contract audited by a reputable firm. Deposit the required collateral. Deploy.

The development documentation lives in the project repository with code examples, integration guides, and reference implementations. Don't try to reinvent VRF—use our battle-tested libraries and focus on making your game fun.

## Why Specialization Matters

CX Chain doesn't try to be everything to everyone, and that's by design. We're not building yet another general-purpose blockchain that does everything poorly. We're building a specialized infrastructure for decentralized gaming—and doing it extremely well.

Our scope is intentionally narrow: casino-style games with verifiable randomness, shared liquidity pool infrastructure, and cross-chain VRF integration. That's it. We're not building NFT marketplaces, we're not supporting every DeFi protocol under the sun, and we're not pivoting to social media next quarter.

:::info The Power of Focus
When you specialize, you can make aggressive optimizations that general-purpose platforms can't. Our transaction costs are tuned for gaming patterns. Our VRF integration is seamless because we designed the entire chain around it. Our liquidity pools are purpose-built for managing casino economics, not trying to be all things to all protocols.
:::

This focus means developers building on CX Chain get infrastructure that actually works for gaming instead of wrestling with a generic blockchain and trying to bolt gaming features onto it. It means players get lower fees because we're not subsidizing unrelated use cases. It means liquidity providers get systems designed specifically for their needs.

Specialization isn't a limitation—it's a superpower. We do one thing, and we do it better than anyone else.