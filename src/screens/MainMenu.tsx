// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type MainMenuActionId = "new-game-1" | "options-2" | "how-to-play-3" | "leaderboard-4";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Main Container */}
      <main className="w-full max-w-board_max_width flex flex-col gap-8 z-10">
      {/* Header / Logo */}
      <header className="flex flex-col items-center text-center gap-2 mb-8">
      <h1 className="font-h1 text-h1 text-primary tracking-tighter uppercase">Tetris Supervisor</h1>
      <p className="font-hud-label text-hud-label text-on-surface-variant uppercase tracking-[0.2em]">Manager Protocol v2.4</p>
      </header>
      {/* Menu List */}
      <nav className="flex flex-col gap-4 w-full">
      {/* Primary Action */}
      <button className="bg-primary text-on-primary font-button text-button h-touch_target w-full rounded-none flex items-center justify-center gap-2 hover:bg-primary-container hover:scale-[0.98] transition-transform uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group" type="button" data-action-id="new-game-1" onClick={actions?.["new-game-1"]}>
      <Play className="group-hover:animate-pulse" aria-hidden={true} focusable="false" />
                      New Game
                  </button>
      {/* Secondary Actions */}
      <button className="bg-transparent border border-outline-variant text-primary font-button text-button h-touch_target w-full rounded-none flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="options-2" onClick={actions?.["options-2"]}>
      <Settings aria-hidden={true} focusable="false" />
                      Options
                  </button>
      <button className="bg-transparent border border-outline-variant text-primary font-button text-button h-touch_target w-full rounded-none flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="how-to-play-3" onClick={actions?.["how-to-play-3"]}>
      <Circle aria-hidden={true} focusable="false" />
                      How to Play
                  </button>
      <button className="bg-transparent border border-outline-variant text-primary font-button text-button h-touch_target w-full rounded-none flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="leaderboard-4" onClick={actions?.["leaderboard-4"]}>
      <Circle aria-hidden={true} focusable="false" />
                      Leaderboard
                  </button>
      </nav>
      {/* Footer / Stats Widget */}
      <footer className="mt-8 flex justify-between items-center bg-surface border border-outline-variant p-4">
      <div className="flex flex-col">
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase">Sys_Status</span>
      <span className="font-body-sm text-body-sm text-primary">ONLINE</span>
      </div>
      <div className="flex flex-col text-right">
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase">High_Score</span>
      <span className="font-body-sm text-body-sm text-primary font-bold">945,320</span>
      </div>
      </footer>
      </main>
    </>
  );
}
