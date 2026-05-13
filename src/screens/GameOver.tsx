// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Home } from "lucide-react";


export type GameOverActionId = "play-again-1" | "main-menu-2";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Game Over Modal Canvas */}
      <main className="w-full max-w-md relative z-10">
      {/* Background decorative grid (subtle) */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
      <section aria-labelledby="game-over-title" className="bg-surface border border-outline-variant p-6 md:p-8 flex flex-col gap-6" role="dialog">
      {/* Header */}
      <header className="text-center pb-4 border-b border-outline-variant">
      <h1 className="font-h1 text-h1 text-error uppercase tracking-widest" id="game-over-title">Game Over</h1>
      </header>
      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4">
      {/* Final Score (Bento Style Card) */}
      <article className="col-span-2 bg-surface-container border border-outline-variant p-4 flex flex-col items-center justify-center gap-2 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-error text-on-error px-2 py-1 font-hud-label text-hud-label uppercase flex items-center gap-1">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" />
                              New High Score
                          </div>
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase tracking-widest mt-4">Final Score</span>
      <span className="font-h1 text-h1 text-primary">24,800</span>
      </article>
      {/* Lines Cleared */}
      <article className="bg-surface-container border border-outline-variant p-4 flex flex-col items-center justify-center gap-2">
      <Circle className="text-secondary text-2xl" aria-hidden={true} focusable="false" />
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase">Lines</span>
      <span className="font-h2 text-h2 text-on-surface">85</span>
      </article>
      {/* Time Played */}
      <article className="bg-surface-container border border-outline-variant p-4 flex flex-col items-center justify-center gap-2">
      <Circle className="text-secondary text-2xl" aria-hidden={true} focusable="false" />
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase">Time</span>
      <span className="font-h2 text-h2 text-on-surface">12:45</span>
      </article>
      </div>
      {/* Actions */}
      <footer className="flex flex-col gap-4 mt-2">
      <button className="w-full h-touch_target bg-primary text-background font-button text-button uppercase tracking-widest hover:bg-surface-variant hover:text-primary transition-colors focus-ring flex items-center justify-center gap-2" type="button" data-action-id="play-again-1" onClick={actions?.["play-again-1"]}>
      <Circle aria-hidden={true} focusable="false" />
                          Play Again
                      </button>
      <button className="w-full h-touch_target bg-transparent border border-outline-variant text-primary font-button text-button uppercase tracking-widest hover:bg-surface-variant transition-colors focus-ring flex items-center justify-center gap-2" type="button" data-action-id="main-menu-2" onClick={actions?.["main-menu-2"]}>
      <Home aria-hidden={true} focusable="false" />
                          Main Menu
                      </button>
      </footer>
      </section>
      </main>
    </>
  );
}
