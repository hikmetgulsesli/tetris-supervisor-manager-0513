// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ChevronRight } from "lucide-react";


export type MainMenuActionId = "start-game-1" | "resume-2" | "restart-3" | "leaderboard-4" | "settings-5" | "how-to-play-6";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Background Tetris Stack Representation */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center items-end pb-xl">
      <div className="w-full max-w-[400px] h-3/4 ghost-grid border-2 border-surface-variant relative flex flex-col-reverse p-board-gutter gap-board-gutter">
      {/* Simulated Blocks */}
      <div className="h-[calc(100%/20)] w-[calc(100%/10*4)] bg-[#0ea5e9] ml-[calc(100%/10*3)] rounded-sm"></div>
      <div className="h-[calc(100%/20*2)] w-[calc(100%/10*2)] bg-[#eab308] ml-[calc(100%/10*2)] rounded-sm"></div>
      <div className="h-[calc(100%/20)] w-[calc(100%/10*3)] bg-[#a855f7] ml-[calc(100%/10*6)] rounded-sm"></div>
      <div className="h-[calc(100%/20*2)] w-[calc(100%/10*2)] bg-[#ef4444] ml-[calc(100%/10)] rounded-sm"></div>
      </div>
      </div>
      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-md px-md flex flex-col items-center gap-xl">
      {/* Header / Brand */}
      <div className="text-center">
      <h1 className="font-display-score text-display-score text-primary tracking-tighter neon-glow-primary inline-block">TETRA</h1>
      <h2 className="font-headline-md text-headline-md text-primary-fixed-dim tracking-widest mt-base">SUPERVISOR</h2>
      </div>
      {/* Action Menu */}
      <nav className="w-full flex flex-col gap-md">
      {/* Primary Actions Group */}
      <div className="flex flex-col gap-sm">
      <button className="focus-ring bg-primary text-on-primary font-headline-md text-headline-md h-[64px] rounded flex items-center justify-center w-full transition-transform hover:scale-[1.02] active:scale-[0.98]" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
                          START GAME
                      </button>
      <div className="flex gap-sm">
      <button className="flex-1 border-2 border-surface-variant bg-surface-container-lowest text-on-surface-variant font-label-mono text-label-mono h-touch-target rounded flex items-center justify-center opacity-50 cursor-not-allowed" disabled={true} type="button" data-action-id="resume-2" onClick={actions?.["resume-2"]}>
                              RESUME
                          </button>
      <button className="focus-ring flex-1 border-2 border-surface-variant bg-transparent text-primary font-label-mono text-label-mono h-touch-target rounded flex items-center justify-center hover:bg-surface-variant transition-colors" type="button" data-action-id="restart-3" onClick={actions?.["restart-3"]}>
                              RESTART
                          </button>
      </div>
      </div>
      <div className="w-full border-t border-surface-variant my-xs"></div>
      {/* Secondary Actions Group */}
      <div className="flex flex-col gap-base w-full max-w-[240px] mx-auto">
      <button className="focus-ring group flex items-center justify-between p-xs text-on-surface-variant hover:text-primary transition-colors border-b border-surface-variant" type="button" data-action-id="leaderboard-4" onClick={actions?.["leaderboard-4"]}>
      <span className="font-label-mono text-label-mono">LEADERBOARD</span>
      <ChevronRight className="text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden={true} focusable="false" />
      </button>
      <button className="focus-ring group flex items-center justify-between p-xs text-on-surface-variant hover:text-primary transition-colors border-b border-surface-variant" type="button" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <span className="font-label-mono text-label-mono">SETTINGS</span>
      <ChevronRight className="text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden={true} focusable="false" />
      </button>
      <button className="focus-ring group flex items-center justify-between p-xs text-on-surface-variant hover:text-primary transition-colors border-b border-surface-variant" type="button" data-action-id="how-to-play-6" onClick={actions?.["how-to-play-6"]}>
      <span className="font-label-mono text-label-mono">HOW TO PLAY</span>
      <ChevronRight className="text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </nav>
      {/* System Status Footer */}
      <div className="mt-lg text-center">
      <p className="font-label-sm text-label-sm text-on-surface-variant">SYSTEM v2.4.1 // READY</p>
      </div>
      </main>
    </>
  );
}
