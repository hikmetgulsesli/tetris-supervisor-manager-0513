// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Paused
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, RefreshCw } from "lucide-react";


export type GamePausedActionId = "resume-1" | "restart-2" | "quit-to-menu-3";

export interface GamePausedProps {
  actions?: Partial<Record<GamePausedActionId, () => void>>;
}

export function GamePaused({ actions }: GamePausedProps) {
  return (
    <>
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 filter blur-sm">
      <div className="w-[300px] h-[600px] border-2 border-surface-variant flex flex-col gap-board-gutter p-board-gutter bg-surface-lowest">
      <div className="grid grid-cols-10 grid-rows-20 gap-board-gutter w-full h-full">
      <div className="col-start-4 row-start-19 bg-primary opacity-50 shadow-[0_0_15px_rgba(255,255,255,0.5)] h-full w-full"></div>
      <div className="col-start-5 row-start-19 bg-primary opacity-50 shadow-[0_0_15px_rgba(255,255,255,0.5)] h-full w-full"></div>
      <div className="col-start-6 row-start-19 bg-primary opacity-50 shadow-[0_0_15px_rgba(255,255,255,0.5)] h-full w-full"></div>
      <div className="col-start-5 row-start-18 bg-primary opacity-50 shadow-[0_0_15px_rgba(255,255,255,0.5)] h-full w-full"></div>
      </div>
      </div>
      </div>
      <div className="absolute inset-0 z-10 bg-background/80 flex flex-col items-center justify-center backdrop-blur-md">
      <div className="flex flex-col items-center mb-xl w-full max-w-md px-md">
      <h1 className="font-display-score text-display-score text-primary mb-md tracking-widest uppercase" style={{textShadow: "0 0 20px rgba(255,255,255,0.3)"}}>PAUSED</h1>
      <div className="w-full bg-surface border border-surface-variant p-md mb-xl flex flex-col gap-sm">
      <div className="flex justify-between items-end border-b border-surface-variant pb-xs">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Current Score</span>
      <span className="font-label-mono text-label-mono text-primary text-xl">124,500</span>
      </div>
      <div className="flex justify-between items-end border-b border-surface-variant pb-xs">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Level</span>
      <span className="font-label-mono text-label-mono text-secondary">14</span>
      </div>
      <div className="flex justify-between items-end border-b border-surface-variant pb-xs">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Lines Cleared</span>
      <span className="font-label-mono text-label-mono text-on-background">87</span>
      </div>
      <div className="flex justify-between items-end">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Time</span>
      <span className="font-label-mono text-label-mono text-on-background">04:21</span>
      </div>
      </div>
      <div className="w-full flex flex-col gap-sm">
      <button className="w-full h-touch-target bg-primary text-background font-headline-md text-headline-md uppercase hover:bg-white hover:scale-[0.98] transition-colors flex items-center justify-center gap-xs focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="resume-1" onClick={actions?.["resume-1"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          RESUME
                      </button>
      <button className="w-full h-touch-target bg-transparent border-2 border-surface-variant text-primary font-headline-md text-headline-md uppercase hover:border-primary hover:bg-surface-container transition-colors flex items-center justify-center gap-xs focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <RefreshCw aria-hidden={true} focusable="false" />
                          RESTART
                      </button>
      <button className="w-full h-touch-target bg-transparent border border-error-container text-error font-label-mono text-label-mono uppercase hover:bg-error-container hover:text-on-error-container transition-colors flex items-center justify-center gap-xs mt-md focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="quit-to-menu-3" onClick={actions?.["quit-to-menu-3"]}>
      <Circle aria-hidden={true} focusable="false" />
                          QUIT TO MENU
                      </button>
      </div>
      </div>
      </div>
    </>
  );
}
