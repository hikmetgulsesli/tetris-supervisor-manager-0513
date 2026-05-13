// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over Result
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Home } from "lucide-react";


export type GameOverResultActionId = "play-again-1" | "submit-2" | "menu-3" | "button-4-4" | "button-5-5" | "button-6-6";

export interface GameOverResultProps {
  actions?: Partial<Record<GameOverResultActionId, () => void>>;
}

export function GameOverResult({ actions }: GameOverResultProps) {
  return (
    <>
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
      <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-error blur-[120px]"></div>
      </div>
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10" style={{backgroundImage: "linear-gradient(theme('colors.outline-variant') 1px, transparent 1px), linear-gradient(90deg, theme('colors.outline-variant') 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
      {/* Main Game Over Card */}
      <main className="w-full max-w-[480px] bg-surface-container border-2 border-outline-variant rounded-lg p-lg flex flex-col gap-xl relative z-10 shadow-2xl">
      {/* Header Section */}
      <header className="text-center flex flex-col items-center">
      <h1 className="font-display-score text-display-score text-error uppercase tracking-widest drop-shadow-[0_0_15px_rgba(255,180,171,0.6)]">
                      GAME OVER
                  </h1>
      {/* High Score Badge */}
      <div className="mt-xs inline-flex items-center gap-base bg-error-container/20 border border-error text-error px-sm py-[4px] rounded-full">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono font-bold tracking-widest">NEW HIGH SCORE</span>
      </div>
      </header>
      {/* Stats Bento Grid */}
      <div className="grid grid-cols-2 gap-base">
      {/* Final Score Box */}
      <div className="col-span-2 bg-surface border border-outline-variant p-md rounded flex flex-col items-center justify-center gap-xs relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-[0.2em] relative z-10">FINAL SCORE</span>
      <span className="font-display-score text-display-score text-primary drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] relative z-10">
                          14,250
                      </span>
      </div>
      {/* Supporting Stats */}
      <div className="bg-surface border border-outline-variant p-sm rounded flex flex-col gap-base border-b-2 border-b-secondary/40">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">HIGH SCORE</span>
      <span className="font-label-mono text-label-mono text-secondary text-[18px]">12,800</span>
      </div>
      <div className="bg-surface border border-outline-variant p-sm rounded flex flex-col gap-base border-b-2 border-b-primary/40">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">LINES CLEARED</span>
      <span className="font-label-mono text-label-mono text-primary text-[18px]">42</span>
      </div>
      <div className="col-span-2 bg-surface border border-outline-variant p-sm rounded flex flex-col items-center gap-base border-b-2 border-b-tertiary/40">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">LEVEL REACHED</span>
      <span className="font-headline-md text-headline-md text-tertiary">08</span>
      </div>
      </div>
      {/* Actions */}
      <div className="flex flex-col gap-xs">
      {/* Primary Action */}
      <button className="w-full h-touch-target bg-primary text-on-primary font-headline-md text-headline-md rounded flex items-center justify-center gap-sm hover:bg-surface-bright hover:text-primary border-2 border-primary transition-colors duration-150 group" type="button" data-action-id="play-again-1" onClick={actions?.["play-again-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="group-hover:-rotate-90 transition-transform duration-300" aria-hidden={true} focusable="false" />
                      PLAY AGAIN
                  </button>
      {/* Secondary Actions */}
      <div className="grid grid-cols-2 gap-xs mt-base">
      <button className="h-touch-target bg-transparent border-2 border-outline-variant text-on-surface font-label-mono text-label-mono rounded hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-xs" type="button" data-action-id="submit-2" onClick={actions?.["submit-2"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                          SUBMIT
                      </button>
      <button className="h-touch-target bg-transparent border-2 border-outline-variant text-on-surface font-label-mono text-label-mono rounded hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-xs" type="button" data-action-id="menu-3" onClick={actions?.["menu-3"]}>
      <Home className="text-[18px]" aria-hidden={true} focusable="false" />
                          MENU
                      </button>
      </div>
      </div>
      {/* Social Shares */}
      <div className="flex justify-center items-center gap-md pt-sm border-t border-surface-variant mt-sm">
      <span className="font-label-sm text-label-sm text-on-surface-variant mr-xs">SHARE:</span>
      <button aria-label="Share" className="text-on-surface-variant hover:text-primary hover:scale-110 transition-colors flex items-center justify-center h-[32px] w-[32px]" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Copy Link" className="text-on-surface-variant hover:text-primary hover:scale-110 transition-colors flex items-center justify-center h-[32px] w-[32px]" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="QR Code" className="text-on-surface-variant hover:text-primary hover:scale-110 transition-colors flex items-center justify-center h-[32px] w-[32px]" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </main>
    </>
  );
}
