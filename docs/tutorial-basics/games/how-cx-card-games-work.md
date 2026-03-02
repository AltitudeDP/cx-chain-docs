---
sidebar_position: 1
---

# How CX Card Games Work

CX Chain hosts a provably fair card game platform where **no one can cheat** — not the house, not the other players, not even the server. The platform currently supports **Texas Hold'em Poker**, powered by zero-knowledge proofs and verified entirely on-chain.

This page explains how the system works in plain language. Technical details are covered in the pages linked at the bottom.

## The Problem with Online Card Games

In a traditional online poker game, a central server deals the cards. You have to **trust** that the server isn't peeking at your hand, stacking the deck, or colluding with other players. You can't verify any of it — you just have to take their word for it.

CX Card Games eliminate this trust requirement entirely. Every shuffle, deal, and reveal is mathematically proven fair and verified on the blockchain.

## How Cards Stay Secret Without a Dealer

Instead of a server dealing cards, the **players themselves** shuffle and encrypt the deck using a technique called **mental poker**. Here's how it works conceptually:

1. **Everyone locks the deck together.** Each player applies their own secret padlock to every card in the deck. Think of it as each card being inside a box with multiple locks — one from each player.

2. **Players shuffle in turns.** Each player takes the locked deck, rearranges the cards into a random order, adds a fresh layer of encryption, and passes it on. Since no one can see through the locks, no one knows the order anyone else chose.

3. **The final order is truly random.** The final deck is a combination of every player's shuffle. Even if every other player at the table colluded, as long as **one player** shuffled honestly, the deck is random.

4. **Cards are revealed selectively.** To deal you your two hole cards, every *other* player unlocks their padlock on those specific cards. Only you have the remaining key, so only you can see your cards. Community cards are unlocked by everyone, so everyone can see them.

5. **Everything is proven with math.** Every shuffle and unlock comes with a mathematical proof (a zero-knowledge proof) that the player did it correctly — without revealing their secret key or the card values. The smart contract verifies these proofs on-chain.

## What Zero-Knowledge Proofs Do Here

A zero-knowledge proof lets someone prove a statement is true without revealing *why* it's true. In this system, they're used for two things:

- **Shuffle proofs**: "I correctly shuffled and re-encrypted the deck" — proven without revealing the new card order
- **Decrypt proofs**: "I correctly unlocked my encryption layer on this card using my real secret key" — proven without revealing the key itself

These proofs use a system called **Groth16**, which is fast to verify on-chain (a single mathematical check) even though generating them is computationally heavy (done off-chain by the player's device or a backend prover).

## Texas Hold'em Poker

Standard No-Limit Texas Hold'em:

- **Configurable tables**: Custom blinds, buy-ins, and optional rake (up to 10%)
- **Full betting**: Check, call, bet, raise, fold — with all-in and side pot support
- **On-chain hand evaluation**: The smart contract evaluates all 21 possible 5-card combinations from your 7 cards and picks the best hand
- **Automatic rounds**: After a hand ends, the next round starts automatically with remaining players
- **Dealer rotation**: Blinds rotate each hand, just like a real poker game

## How a Hand Plays Out

Here's what happens during a typical hand, step by step:

```
1. CREATE TABLE     A table is deployed with chosen blinds and buy-in
2. PLAYERS JOIN     Players join, each registering a cryptographic key
3. COUNTDOWN        10-second countdown — more players can still join
4. SHUFFLE          Each player shuffles the deck in turn with a ZK proof
5. DEAL HOLE CARDS  2 private cards dealt to each player via selective decryption
6. PREFLOP BETTING  Blinds posted, first betting round
7. DEAL FLOP        3 community cards dealt and decrypted by all
8. FLOP BETTING     Second betting round
9. DEAL TURN        1 community card dealt
10. TURN BETTING    Third betting round
11. DEAL RIVER      1 community card dealt
12. RIVER BETTING   Final betting round
13. REVEAL          Active players prove their hole cards with ZK proofs
14. EVALUATE        Smart contract ranks all hands on-chain
15. PAY OUT         Pot distributed to winner(s), deposits refunded
```

The entire process is enforced by smart contracts. If a player stalls at any step (fails to shuffle, decrypt, or act), they are timed out, their security deposit may be slashed, and the game continues.

## Smooth Player Experience

A single poker hand requires many on-chain transactions (shuffle, multiple decrypts, bets, reveal). To avoid making players manually approve each one, the platform uses **smart wallets** with temporary session keys:

1. **One-time setup**: You deploy a smart wallet and fund it
2. **Start a game**: You authorize a temporary session key scoped to this specific game — it can only call game functions, can't move your funds, and expires after a set time
3. **Play hands-free**: The backend automatically submits shuffles, decrypts, and your chosen actions using the session key
4. **Stay in control**: You can revoke the session key at any time, and it auto-expires


## Trust Guarantees

| What you don't need to trust | Why |
|---|---|
| **The server** | It never sees card values — the deck is encrypted under players' keys |
| **Other players** | ZK proofs verify every action; cheating is mathematically impossible |
| **The house edge** | Hand evaluation is on-chain and deterministic — anyone can verify results |
| **Fund safety** | All buy-ins and security deposits are escrowed in the smart contract — if a game ends abnormally (e.g. a player times out during shuffle/decrypt and the hand can't continue), uncontested funds and deposits are returned automatically |
| **Fair shuffling** | The deck is provably random if even one player is honest |
| **Timely play** | Timeouts with deposit slashing prevent griefing or stalling |

## Smart Contracts

| Contract | Purpose |
|----------|---------|
| **MLEncryptedCardGame** | Shared ZK card engine — manages the encrypted deck, verifies shuffle and decrypt proofs |
| **PokerTable** | Texas Hold'em game logic — betting, hand evaluation, pot distribution |
| **PokerTableFactory** | Creates new poker tables cheaply via minimal proxy clones |
| **PokerEvaluator** | On-chain poker hand ranking (all 21 five-card combinations from 7 cards) |
| **SessionSimpleAccount** | ERC-4337 smart wallet with scoped session keys |
| **SessionSimpleAccountFactory** | Deploys smart wallets with deterministic addresses |
| **Groth16Verifier** | On-chain ZK proof verification (shared by shuffle and decrypt circuits) |

## Technical Deep Dives

| Page | What You'll Learn |
|------|-------------------|
| [Tables & Buy-In](./tables-and-buyin) | How tables are created, joining a game, seat system, buy-in mechanics, game state machine |
| [Shuffle & Encryption](./shuffle-and-encryption) | BabyJubJub curve, ElGamal encryption, the mental poker shuffle protocol, ZK circuit details |
| [Dealing & Decryption](./dealing-and-decryption) | How cards are selectively revealed, progressive decryption, batch proofs, off-chain prover |
| [Betting & Winners](./betting-and-winners) | Betting rounds, hand evaluation, side pots, rake, timeouts |
| [Smart Wallets](./smart-wallets) | ERC-4337 session keys, gasless tables, account abstraction UX |
