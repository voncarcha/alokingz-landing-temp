"use client";

import { motion } from "framer-motion";
import CollapsibleSection from "./CollapsibleSection";

interface GameRulesProps {
  variant?: "gold" | "neutral";
}

const gameRulesData = {
  tongits: {
    title: "Tongits",
    content: {
      "How to Play": {
        description: "If a player is able to use all cards in combinations or by dropping them on melds that are on the table or by getting rid of all hand cards, then the player wins by Tongits.",
        steps: [
          "A standard deck of 52 playing cards and 3 players are needed.",
          "Each player is dealt 12 cards while the dealer gets 13 and the rest of the cards are left as a central stack.",
          "The game begins when the dealer dumps card.",
          "The next person can either pick up the disposed card that makes a set or adds to dumped set, or get one from the central stack.",
          "Collect hand combinations and dump unnecessary cards.",
          "The picking and discarding of cards goes on until a player wins by Tongits, calls a Fight or until the central stack runs out of cards.",
          "If one of these happens, the players compare the point of hand cards and the one with the lowest points wins.",
        ],
      },
      Fight: {
        description: "To start a fight, the player needs to put down a combination onto the table, and no player drop any cards onto melds in that round.\nIf a player calls fight, players without any exposed melds or secret melds will be burned, others can accept or refuse to challenge. When the central stack runs out of cards, the game ends.",
      },
      "Run out the cards": {
        description: "When the central stack runs out of cards, the game ends. The player without any exposed melds or secret melds is burned and automatically loses. The player with the lowest point wins.",
      },
      Burned: {
        description: "A player is considered Burned if the player is unable to form a meld or set at the end of the game.",
      },
      Spread: {
        description: "If at the beginning of the round, a player is able to connect all cards by forming melds or sets, that player automatically wins as if it is a two hits jackpot.",
      },
      Rules: {
        "Value of Card": {
          items: [
            "Aces are valued at 1.",
            "Kings, Queens, Jacks, and 10s are valued at 10.",
            "Cards from 2 to 9 are taken at face value.",
          ],
        },
        Meld: {
          description: "Meld is a set of matching cards a player needs to collect in order to win the game. When a player collects a meld, player has the option to either lay it down, or keep it. But at the end of the game, if a player hasn't lay down a single meld will be burned and will not be able to fight.",
        },
        "Kind of Meld": {
          items: [
            "Three of a kind: Three equally ranked cards",
            "Four of a kind : Four equally ranked cards",
            "Straight Flush: at least three sequential cards of the same suit",
          ],
        },
      },
      Payout: {
        table: [
          { win: "Normal Win", requirement: "Win", reward: "X1" },
          { win: "Tongits", requirement: "Empty all hand cards", reward: "X1" },
          { win: "Secret", requirement: "Four of a Kind or Straight Flush", reward: "X1" },
          { win: "Bonus Cards", requirement: 'Hold "A" or "K" card', reward: "X1" },
          { win: "Burned", requirement: 'Falis to lay down a meld and does not have "Secret"', reward: "X1" },
          { win: "Challenge", requirement: "Call fight or challenge", reward: "X2" },
          { win: "Jackpot", requirement: 'Win 2 consecutive games or "Spread"', reward: "POT" },
        ],
      },
    },
  },
  holdem: {
    title: "Hold'em",
    content: {
      "Goal of the Game": {
        description: "Make the best 5-card poker hand using your 2 hole cards and 5 community cards.",
      },
      "Game Setup": {
        items: [
          "Players : 2-7 per table",
          "Deck : Standard 52-card deck",
        ],
      },
      Blinds: {
        items: [
          "Small Blind (SB) : Left of Dealer",
          "Big Blind (BB) : Left of SB, Double the SB",
        ],
      },
      "Game Rule": {
        sections: {
          "1. Pre-Flop": {
            description: "Each player is dealt 2 private cards (hole cards) face down. The first betting round begins with the player to the left of the big blind.",
            options: ["Fold – give up your hand", "Call – match the current bet", "Raise – increase the bet"],
          },
          "2. The Flop": {
            description: "Dealer places 3 community cards face up on the table. The second betting round begins.",
          },
          "3. The Turn": {
            description: "A 4th community card is dealt face up. The third betting round starts.",
          },
          "4. The River": {
            description: "A 5th and final community card is dealt. The final betting round begins.",
          },
          "5. The Showdown": {
            description: "Each player is dealt 2 private cards (hole cards) face down.",
            usage: [
              "Both hole cards + 3 community",
              "1 hole card + 4 community",
              "All 5 community cards",
            ],
          },
        },
      },
      "Hand Rankings": {
        rankings: [
          "Royal Flush – A♠ K♠ Q♠ J♠ 10♠",
          "Straight Flush – 5 consecutive cards of the same suit",
          "Four of a Kind",
          "Full House – three of a kind + a pair",
          "Flush – five cards of the same suit",
          "Straight – five in sequence, mixed suits",
          "Three of a Kind",
          "Two Pair",
          "One Pair",
          "High Card",
        ],
      },
    },
  },
  pusoy: {
    title: "Pusoy",
    content: {
      "How to Play": {
        description: "Pusoy is a 4-player game but can also be played by 2 or 3 players.\nIn Pusoy, each player is dealt 13 cards from a standard 52-card deck. Each player must then sort their cards into three categories, which are poker hands.\n\nThe three categories consist of two sets of five cards each, referred to as \"The back\" and \"The middle.\" The remaining one is called \"The front\" and is composed of three cards.\n\"The back,\" \"The middle,\" and \"The front\" should be arranged in ascending order according to the poker hands.\n\nFor example: If you have a full house in the middle and then set up a one pair in the back, you will get cracked and be defeated.\n\nAfter all players have organized their hands, each player takes turns comparing them to determine the winner.\n\nAdditionally, all players announce their royalties and reveal their hands. If a player does not play by the basic rules, they will get the crack and lose.",
      },
      Ranking: {
        sections: {
          "The Cards Ranking from High to Low": {
            items: ["A→K→Q→J→10→9→8→7→6→5→4→3→2"],
          },
          "The Suits Ranking": {
            items: ["Spade(♠) → Hearts(♥) → Clover (♣) → Diamond(◆) Ranking in order."],
          },
          "The poker ranking from High to Low": {
            items: ["Royal Flush – High card"],
          },
          Note: {
            description: "The ranking of straight of royal flush is :\n10-J-Q-K-A → 9-10-J-Q-K → 8-9-10-J-Q → … → 2-3-4-5-6 → A-2-3-4-5\n\nIf a player has 2 straights or 2 flushes with the same rank (ex: 2 straight A-2-3-4-5 or 2 flushes 4-5-9-Q-K (heart)), the straight (flush) with the highest card and strongest suit will be put on the back hand.",
          },
        },
      },
      "Winning & Scoring": {
        description: "Players are scored 1:1 against all users.\nYou earn or lose units for each hand.\nFor example, if you defeat 3 people, you will get +3 unit.\nTherefore, the number of people you defeat will determine how many units you earn.",
      },
      Royalties: {
        description: "Extra units, known as royalties or bonuses, are awarded to players with strong hands. Royalties give extra units according to the conditions in the table below.",
        table: [
          { hand: "The Front", royalties: "Three of a Kind", units: "3" },
          { hand: "The Middle", royalties: "Full House", units: "2" },
          { hand: "The Middle", royalties: "Four of a Kind", units: "8" },
          { hand: "The Middle", royalties: "Straight Flush", units: "10" },
          { hand: "The Middle", royalties: "Royal Straight Flush", units: "20" },
          { hand: "The Back", royalties: "Full House", units: "0 (No Bonus)" },
          { hand: "The Back", royalties: "Four of a Kind", units: "4" },
          { hand: "The Back", royalties: "Straight Flush", units: "5" },
          { hand: "The Back", royalties: "Royal Straight Flush", units: "10" },
        ],
      },
      Naturals: {
        description: "Naturals are special royalties, in which when a player declares a natural, they are declared the winner. Players who achieve naturals do not have their hands compared.",
        items: [
          "Triple Straights (3 Units)",
          "Triple Flushes (3 Units)",
          "Six Pairs (3 Units)",
          "Dragon (13 Units)",
          "Dragon same suit (20 Units)",
        ],
      },
      Pusoy: {
        description: 'If a player wins all hands against all players, we call that "Pusoy." The winner will get a score for each player following the formula below:\nP = (A + B + C) * X\n\nX: Number of players at the table\nA: Units at the front hand\nB: Units at the middle hand\nC: Units at the back hand\n\nWhen a player wins every hand against all opponents, it is referred to as achieving a "Pusoy." The winning player earns a score determined by the following formula:\n\nSCORE = (A + B + C) * X\n\nWhere:\n\nX: Represents the number of players at the table.\nA: Denotes the units wagered in the front hand,\nB: Denotes the units wagered in the middle hand,\nC: Denotes the units wagered in the back hand, respectively.',
      },
    },
  },
  baccarat: {
    title: "Baccarat",
    content: {
      "Goal of the Game": {
        description: "The objective is to bet on the hand (Player, Banker, or Tie) that will have a total closest to 9.",
      },
      "Card Values": {
        items: [
          "Aces = 1 point",
          "2 – 9 = face value",
          "10, J, Q, K = 0 points",
          "Only the last digit of the total counts(e.g., 10 = 0, 11 = 1, 12 = 2, 13 = 3, 14 = 4… 19 = 9)",
        ],
      },
      "How to Play": {
        steps: [
          "Place a bet: on Player, Banker, or Tie.",
          "Two cards are dealt to both Player and Banker.",
          "Point totals are calculated.",
          "Depending on the total, a third card may be drawn (refer to below).",
          "The hand closest to 9 wins.",
        ],
        "When is a third card drawn?": {
          "Player's Hand": {
            items: [
              "0–5 → draws a third card",
              "6–7 → stands",
              "8–9 → \"natural\" win; no more cards drawn",
            ],
          },
          "Banker's Hand": {
            description: "Banker's action depends on their total and the player's third card. (Please refer to the simplified version of the rule below):",
            table: [
              { banker: "0-2", condition: "Always draw" },
              { banker: "3", condition: "Unless Player's 3rd card is 8" },
              { banker: "4", condition: "If Player's 3rd card is 2-7" },
              { banker: "5", condition: "If Player's 3rd card is 4-7" },
              { banker: "6", condition: "If Player's 3rd card is 6-7" },
              { banker: "7", condition: "Always Stands" },
              { banker: "8-9", condition: "Natural – Both stand" },
            ],
          },
        },
      },
      Payouts: {
        items: [
          "Player bet wins: 1 to 1 payout",
          "Banker bet wins: 0.95 to 1 payout",
          "Tie bet wins: 8 to 1",
        ],
      },
    },
  },
  super6: {
    title: "Super6",
    content: {
      "Goal of the Game": {
        description: "The objective is to bet on the hand (Player, Banker, or Tie) that will have a total closest to 9.",
      },
      "Card Values": {
        items: [
          "Aces = 1 point",
          "2 – 9 = face value",
          "10, J, Q, K = 0 points",
          "Only the last digit of the total counts\n(e.g., 10 = 0, 11 = 1, 12 = 2, 13 = 3, 14 = 4… 19 = 9)",
        ],
      },
      "How to Play": {
        steps: [
          "Place a bet: on Player, Banker, Tie or Super6.",
          "Two cards are dealt to both Player and Banker.",
          "Point totals are calculated.",
          "Depending on the total, a third card may be drawn (refer to below).",
          "The hand closest to 9 wins.",
        ],
        "When is a third card drawn?": {
          "Player's Hand": {
            items: [
              "0–5 → draws a third card",
              "6–7 → stands",
              "8–9 → \"natural\" win; no more cards drawn",
            ],
          },
          "Banker's Hand": {
            description: "Banker's action depends on their total and the player's third card. (Please refer to the simplified version of the rule below):",
            table: [
              { banker: "0-2", condition: "Always draw" },
              { banker: "3", condition: "Unless Player's 3rd card is 8" },
              { banker: "4", condition: "If Player's 3rd card is 2-7" },
              { banker: "5", condition: "If Player's 3rd card is 4-7" },
              { banker: "6", condition: "If Player's 3rd card is 6-7" },
              { banker: "7", condition: "Always Stands" },
              { banker: "8-9", condition: "Natural – Both stand" },
            ],
          },
        },
      },
      Payouts: {
        description: "Key difference : No Commission\n\n➤ Standard Baccarat: Banker wins payout 0.95 to 1 (5% bank commission is imposed)\n➤ Super 6 Baccarat: doesn't impose any bank commission except when Banker wins with a total of 6.\n\nSee below for payouts for Super 6 Baccarat",
        items: [
          "Player bet wins: 1 to 1 payout",
          "Tie bet wins: 8 to 1",
          "Banker wins with 6: 1 to 2 (even money cut in half)",
          "Super 6 side bet: 12 to 1 if Banker wins with a total of 6",
        ],
      },
    },
  },
};

function renderContent(content: any, variant: "gold" | "neutral" = "gold", level: number = 0): React.ReactNode {
  const textColor = variant === "gold" ? "text-white/80" : "text-gray-300";
  const headingColor = variant === "gold" ? "text-gold-400" : "text-gray-200";
  const borderColor = variant === "gold" ? "border-white/10" : "border-zinc-700";
  const headingSize = level === 0 ? "text-lg" : level === 1 ? "text-base" : "text-sm";

  if (typeof content === "string") {
    return (
      <p className={`${textColor} whitespace-pre-line leading-relaxed`}>
        {content}
      </p>
    );
  }

  if (Array.isArray(content)) {
    return (
      <ul className={`space-y-2 ${textColor}`}>
        {content.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span className="whitespace-pre-line">{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  // Handle objects with nested structure
  if (typeof content === "object" && content !== null) {
    const elements: React.ReactNode[] = [];

    // Handle description first
    if (content.description) {
      elements.push(
        <p key="desc" className={`${textColor} whitespace-pre-line leading-relaxed`}>
          {content.description}
        </p>
      );
    }

    // Handle steps
    if (content.steps) {
      elements.push(
        <ol key="steps" className={`space-y-2 ${textColor} list-decimal list-inside mt-4`}>
          {content.steps.map((step: string, idx: number) => (
            <li key={idx} className="leading-relaxed">
              {step}
            </li>
          ))}
        </ol>
      );
    }

    // Handle items
    if (content.items) {
      elements.push(
        <ul key="items" className={`space-y-2 ${textColor} mt-4`}>
          {content.items.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span className="whitespace-pre-line">{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    // Handle options
    if (content.options) {
      elements.push(
        <div key="options" className="space-y-1 mt-4">
          <p className={`${headingColor} font-semibold mb-2`}>Options:</p>
          {content.options.map((option: string, idx: number) => (
            <p key={idx} className={`${textColor} ml-4`}>
              • {option}
            </p>
          ))}
        </div>
      );
    }

    // Handle usage
    if (content.usage) {
      elements.push(
        <div key="usage" className="space-y-1 mt-4">
          <p className={`${headingColor} font-semibold mb-2`}>You can use:</p>
          {content.usage.map((use: string, idx: number) => (
            <p key={idx} className={`${textColor} ml-4`}>
              • {use}
            </p>
          ))}
        </div>
      );
    }

    // Handle rankings
    if (content.rankings) {
      elements.push(
        <ol key="rankings" className={`space-y-2 ${textColor} list-decimal list-inside mt-4`}>
          {content.rankings.map((ranking: string, idx: number) => (
            <li key={idx} className="leading-relaxed">
              {ranking}
            </li>
          ))}
        </ol>
      );
    }

    // Handle table
    if (content.table && Array.isArray(content.table) && content.table.length > 0) {
      elements.push(
        <div key="table" className={`overflow-x-auto mt-4 border ${borderColor} rounded-lg`}>
          <table className="w-full">
            <thead>
              <tr className={`border-b ${borderColor}`}>
                {Object.keys(content.table[0]).map((key) => {
                  const formattedKey = key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())
                    .trim();
                  return (
                    <th
                      key={key}
                      className={`px-4 py-3 text-left ${headingColor} font-semibold`}
                    >
                      {formattedKey}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {content.table.map((row: any, idx: number) => (
                <tr key={idx} className={`border-b ${borderColor} last:border-0`}>
                  {Object.values(row).map((cell: any, cellIdx: number) => (
                    <td key={cellIdx} className={`px-4 py-3 ${textColor}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    // Handle sections (like in Ranking or Game Rule)
    if (content.sections) {
      Object.entries(content.sections).forEach(([key, value]: [string, any]) => {
        elements.push(
          <div key={key} className="mt-4">
            <h5 className={`${headingColor} font-semibold mb-2 ${headingSize}`}>{key}</h5>
            {renderContent(value, variant, level + 1)}
          </div>
        );
      });
    }

    // Handle nested objects (like Rules with "Value of Card", "Meld", etc.)
    // Check if there are nested objects that aren't standard properties
    const standardKeys = ["description", "steps", "items", "options", "usage", "rankings", "table", "sections"];
    const nestedKeys = Object.keys(content).filter(
      (key) => !standardKeys.includes(key) && typeof content[key] === "object" && content[key] !== null && !Array.isArray(content[key])
    );

    if (nestedKeys.length > 0) {
      nestedKeys.forEach((key) => {
        elements.push(
          <div key={key} className="mt-4">
            <h5 className={`${headingColor} font-semibold mb-2 ${headingSize}`}>{key}</h5>
            {renderContent(content[key], variant, level + 1)}
          </div>
        );
      });
    }

    return <div className="space-y-4">{elements}</div>;
  }

  return null;
}

// SVG Icons for each game - Card game themed
const GameIcons = {
  // Tongits - 3 fanned playing cards
  tongits: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Back card */}
      <rect x="2" y="3" width="10" height="14" rx="1.5" fill="currentColor" opacity="0.15" transform="rotate(-15 7 10)"/>
      {/* Middle card */}
      <rect x="6" y="3" width="10" height="14" rx="1.5" fill="currentColor" opacity="0.3"/>
      <path d="M11 7.5l-2 3 2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Front card */}
      <rect x="10" y="3" width="10" height="14" rx="1.5" fill="currentColor" opacity="0.15" transform="rotate(15 15 10)"/>
      {/* Card suits */}
      <circle cx="11" cy="10" r="2" fill="currentColor"/>
      {/* Decorative element */}
      <path d="M8 19h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  // Hold'em - Two hole cards with chips
  holdem: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left card */}
      <rect x="2" y="4" width="9" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.1"/>
      {/* Spade on left card */}
      <path d="M6.5 8c0 1.5-2 2.5-2 4 0 .8.9 1.5 2 1.5s2-.7 2-1.5c0-1.5-2-2.5-2-4z" fill="currentColor"/>
      <path d="M6.5 13.5v1.5M5.5 14.5h2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      {/* Right card */}
      <rect x="13" y="4" width="9" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.1"/>
      {/* Heart on right card */}
      <path d="M17.5 8.5c-.8-.8-2.1-.8-2.9 0-.3.3-.4.6-.4 1 0 1.8 3.3 3.5 3.3 3.5s3.3-1.7 3.3-3.5c0-.4-.1-.7-.4-1-.8-.8-2.1-.8-2.9 0z" fill="currentColor"/>
      {/* Poker chips */}
      <ellipse cx="8" cy="20" rx="3" ry="1.5" fill="currentColor" opacity="0.4"/>
      <ellipse cx="16" cy="20" rx="3" ry="1.5" fill="currentColor" opacity="0.6"/>
      <ellipse cx="12" cy="19" rx="3" ry="1.5" fill="currentColor" opacity="0.8"/>
    </svg>
  ),
  // Pusoy - 13 cards arranged (3-5-5)
  pusoy: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Back row - 5 cards */}
      <rect x="1" y="2" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.15"/>
      <rect x="5.5" y="2" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.2"/>
      <rect x="10" y="2" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.25"/>
      <rect x="14.5" y="2" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.2"/>
      <rect x="19" y="2" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.15"/>
      {/* Middle row - 5 cards */}
      <rect x="1" y="9" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.25"/>
      <rect x="5.5" y="9" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3"/>
      <rect x="10" y="9" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.35"/>
      <rect x="14.5" y="9" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3"/>
      <rect x="19" y="9" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.25"/>
      {/* Front row - 3 cards */}
      <rect x="5.5" y="16" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.4"/>
      <rect x="10" y="16" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.5"/>
      <rect x="14.5" y="16" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.4"/>
    </svg>
  ),
  // Baccarat - Two hands facing off (Player vs Banker)
  baccarat: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Player side label */}
      <text x="5" y="4" fontSize="4" fill="currentColor" fontWeight="bold" opacity="0.6">P</text>
      {/* Player cards */}
      <rect x="1" y="5" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2"/>
      <rect x="5" y="5" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.3"/>
      {/* Diamond on player card */}
      <path d="M7.5 7l1.5 2-1.5 2-1.5-2z" fill="currentColor"/>
      {/* VS divider */}
      <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.3"/>
      {/* Banker side label */}
      <text x="17" y="4" fontSize="4" fill="currentColor" fontWeight="bold" opacity="0.6">B</text>
      {/* Banker cards */}
      <rect x="14" y="5" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.3"/>
      <rect x="18" y="5" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2"/>
      {/* Club on banker card */}
      <circle cx="16.5" cy="8" r="1" fill="currentColor"/>
      <circle cx="15.7" cy="9.3" r="1" fill="currentColor"/>
      <circle cx="17.3" cy="9.3" r="1" fill="currentColor"/>
      <path d="M16.5 10v1.5" stroke="currentColor" strokeWidth="1"/>
      {/* Score displays */}
      <rect x="2" y="14" width="7" height="4" rx="1" fill="currentColor" opacity="0.15"/>
      <text x="5.5" y="17" fontSize="3" fill="currentColor" textAnchor="middle" fontWeight="bold">9</text>
      <rect x="15" y="14" width="7" height="4" rx="1" fill="currentColor" opacity="0.15"/>
      <text x="18.5" y="17" fontSize="3" fill="currentColor" textAnchor="middle" fontWeight="bold">8</text>
      {/* Chips */}
      <ellipse cx="12" cy="20" rx="4" ry="1.5" fill="currentColor" opacity="0.4"/>
    </svg>
  ),
  // Super6 - Baccarat with prominent 6
  super6: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background cards */}
      <rect x="2" y="6" width="6" height="9" rx="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.15"/>
      <rect x="7" y="6" width="6" height="9" rx="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.2"/>
      <rect x="16" y="6" width="6" height="9" rx="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.15"/>
      {/* Center card with 6 */}
      <rect x="11" y="4" width="8" height="11" rx="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
      {/* Large 6 */}
      <text x="15" y="12.5" fontSize="9" fill="currentColor" textAnchor="middle" fontWeight="bold">6</text>
      {/* Star burst effect */}
      <path d="M15 1l.5 2 2-.5-1.5 1.5 1.5 1.5-2-.5-.5 2-.5-2-2 .5 1.5-1.5L12 2.5l2 .5.5-2z" fill="currentColor" opacity="0.6"/>
      {/* Chips with "SUPER" theme */}
      <ellipse cx="6" cy="20" rx="3.5" ry="1.5" fill="currentColor" opacity="0.5"/>
      <ellipse cx="18" cy="20" rx="3.5" ry="1.5" fill="currentColor" opacity="0.5"/>
      <ellipse cx="12" cy="19" rx="4" ry="1.8" fill="currentColor" opacity="0.7"/>
      <text x="12" y="20" fontSize="2.5" fill="currentColor" textAnchor="middle" fontWeight="bold" opacity="0.9">SUPER</text>
    </svg>
  ),
};

export default function GameRules({ variant = "gold" }: GameRulesProps) {
  const games = [
    { ...gameRulesData.tongits, icon: GameIcons.tongits },
    { ...gameRulesData.holdem, icon: GameIcons.holdem },
    { ...gameRulesData.pusoy, icon: GameIcons.pusoy },
    { ...gameRulesData.baccarat, icon: GameIcons.baccarat },
    { ...gameRulesData.super6, icon: GameIcons.super6 },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`font-display text-3xl sm:text-4xl font-bold text-white mb-4`}>
            Game <span className={variant === "gold" ? "text-gradient-blue" : "text-gray-500"}>Rules</span>
          </h2>
          <p className={variant === "gold" ? "text-white/60" : "text-gray-400"}>
            Learn how to play your favorite games
          </p>
        </motion.div>

        <div className="space-y-4">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CollapsibleSection title={game.title} variant={variant} icon={game.icon}>
                <div className="space-y-6 pt-4">
                  {Object.entries(game.content).map(([sectionTitle, sectionContent]) => (
                    <div key={sectionTitle}>
                      <h4 className={`font-display text-lg font-bold mb-3 ${
                        variant === "gold" ? "text-gold-400" : "text-gray-200"
                      }`}>
                        {sectionTitle}
                      </h4>
                      {renderContent(sectionContent, variant)}
                    </div>
                  ))}
                </div>
              </CollapsibleSection>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
