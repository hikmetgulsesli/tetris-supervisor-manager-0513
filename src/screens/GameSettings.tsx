// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Pause, Save, TriangleAlert, X } from "lucide-react";


export type GameSettingsActionId = "button-1-1" | "button-2-2" | "back-3" | "save-changes-4" | "lvl-1-5" | "lvl-5-6" | "lvl-10-7" | "lvl-15-8" | "reset-all-data-9";

export interface GameSettingsProps {
  actions?: Partial<Record<GameSettingsActionId, () => void>>;
}

export function GameSettings({ actions }: GameSettingsProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="flex justify-between items-center px-sm h-touch-target w-full z-50 bg-background border-b border-surface-variant sticky top-0">
      <div className="flex items-center gap-md">
      <h1 className="text-headline-md font-headline-md font-black tracking-tighter text-primary">TETRA HUD</h1>
      <nav className="hidden md:flex items-center gap-sm">
      <a className="text-on-surface-variant font-medium text-label-mono font-label-mono hover:text-primary hover:bg-surface-container transition-colors px-2 py-1 rounded" href="#">PLAY</a>
      <a className="text-on-surface-variant font-medium text-label-mono font-label-mono hover:text-primary hover:bg-surface-container transition-colors px-2 py-1 rounded" href="#">STATS</a>
      <a className="text-on-surface-variant font-medium text-label-mono font-label-mono hover:text-primary hover:bg-surface-container transition-colors px-2 py-1 rounded" href="#">GUIDE</a>
      <a className="text-primary font-bold border-b-2 border-primary pb-1 text-label-mono font-label-mono" href="#">SETTINGS</a>
      </nav>
      </div>
      <div className="flex items-center gap-xs text-primary dark:text-primary">
      <button aria-label="Pause" className="w-touch-target h-touch-target flex items-center justify-center hover:bg-surface-container transition-colors rounded-full" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Pause  data-icon="pause" aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Volume" className="w-touch-target h-touch-target flex items-center justify-center hover:bg-surface-container transition-colors rounded-full" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  data-icon="volume_up" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-sm py-lg max-w-4xl relative">
      {/* Header Actions */}
      <div className="flex items-center justify-between mb-lg">
      <h2 className="text-headline-lg font-headline-lg text-primary uppercase tracking-tight">System Settings</h2>
      <div className="flex gap-sm">
      <button className="h-touch-target px-md border-2 border-surface-variant text-on-surface hover:border-primary hover:text-primary transition-colors rounded-DEFAULT font-label-mono text-label-mono flex items-center gap-2 bg-transparent uppercase" type="button" data-action-id="back-3" onClick={actions?.["back-3"]}>
      <X  data-icon="close" className="text-lg" aria-hidden={true} focusable="false" />
                          Back
                      </button>
      <button className="h-touch-target px-md bg-primary text-on-primary hover:bg-primary-container transition-colors rounded-DEFAULT font-label-mono text-label-mono flex items-center gap-2 font-bold uppercase shadow-[0_0_15px_rgba(255,255,255,0.3)]" type="button" data-action-id="save-changes-4" onClick={actions?.["save-changes-4"]}>
      <Save  data-icon="save" className="text-lg" aria-hidden={true} focusable="false" />
                          Save Changes
                      </button>
      </div>
      </div>
      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {/* Audio Panel */}
      <section className="bg-surface border border-surface-variant rounded-lg p-md relative overflow-hidden group">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
      <div className="flex items-center gap-sm mb-md border-b border-surface-variant pb-xs">
      <Circle  data-icon="graphic_eq" className="text-primary" aria-hidden={true} focusable="false" />
      <h3 className="text-headline-md font-headline-md text-primary tracking-tight">Audio Telemetry</h3>
      </div>
      <div className="space-y-lg">
      {/* Master Volume */}
      <div>
      <div className="flex justify-between items-center mb-xs">
      <label className="font-label-mono text-label-mono text-on-surface uppercase" htmlFor="master-vol">Master Volume</label>
      <span className="font-label-mono text-label-mono text-primary">100%</span>
      </div>
      <input className="w-full appearance-none bg-transparent" id="master-vol" max="100" min="0" type="range" value="100" />
      </div>
      {/* SFX Volume */}
      <div>
      <div className="flex justify-between items-center mb-xs">
      <label className="font-label-mono text-label-mono text-on-surface uppercase" htmlFor="sfx-vol">SFX Level</label>
      <span className="font-label-mono text-label-mono text-primary">85%</span>
      </div>
      <input className="w-full appearance-none bg-transparent" id="sfx-vol" max="100" min="0" type="range" value="85" />
      </div>
      {/* Music Volume */}
      <div>
      <div className="flex justify-between items-center mb-xs">
      <label className="font-label-mono text-label-mono text-on-surface uppercase" htmlFor="music-vol">BGM Level</label>
      <span className="font-label-mono text-label-mono text-primary">60%</span>
      </div>
      <input className="w-full appearance-none bg-transparent" id="music-vol" max="100" min="0" type="range" value="60" />
      </div>
      </div>
      </section>
      {/* Gameplay Panel */}
      <section className="bg-surface border border-surface-variant rounded-lg p-md relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
      <div className="flex items-center gap-sm mb-md border-b border-surface-variant pb-xs">
      <Circle  data-icon="sports_esports" className="text-primary" aria-hidden={true} focusable="false" />
      <h3 className="text-headline-md font-headline-md text-primary tracking-tight">Gameplay Parameters</h3>
      </div>
      <div className="space-y-md">
      {/* Ghost Piece */}
      <div className="flex items-center justify-between p-sm border border-surface-variant/50 rounded bg-surface-container-low hover:border-surface-variant transition-colors">
      <div>
      <p className="font-label-mono text-label-mono text-primary uppercase">Ghost Piece</p>
      <p className="text-label-sm font-label-sm text-on-surface-variant mt-1">Show landing projection</p>
      </div>
      <label className="flex items-center cursor-pointer">
      <div className="relative">
      <input checked={true} className="sr-only toggle-checkbox" type="checkbox" />
      <div className="toggle-label"></div>
      </div>
      </label>
      </div>
      {/* Instant Drop */}
      <div className="flex items-center justify-between p-sm border border-surface-variant/50 rounded bg-surface-container-low hover:border-surface-variant transition-colors">
      <div>
      <p className="font-label-mono text-label-mono text-primary uppercase">Hard Drop</p>
      <p className="text-label-sm font-label-sm text-on-surface-variant mt-1">Enable instant locking</p>
      </div>
      <label className="flex items-center cursor-pointer">
      <div className="relative">
      <input checked={true} className="sr-only toggle-checkbox" type="checkbox" />
      <div className="toggle-label"></div>
      </div>
      </label>
      </div>
      {/* Vibration */}
      <div className="flex items-center justify-between p-sm border border-surface-variant/50 rounded bg-surface-container-low hover:border-surface-variant transition-colors">
      <div>
      <p className="font-label-mono text-label-mono text-primary uppercase">Haptic Feedback</p>
      <p className="text-label-sm font-label-sm text-on-surface-variant mt-1">Vibrate on line clear/lock</p>
      </div>
      <label className="flex items-center cursor-pointer">
      <div className="relative">
      <input className="sr-only toggle-checkbox" type="checkbox" />
      <div className="toggle-label"></div>
      </div>
      </label>
      </div>
      </div>
      </section>
      {/* Environment Panel (Full Width) */}
      <section className="bg-surface border border-surface-variant rounded-lg p-md md:col-span-2">
      <div className="flex items-center gap-sm mb-md border-b border-surface-variant pb-xs">
      <Circle  data-icon="tune" className="text-primary" aria-hidden={true} focusable="false" />
      <h3 className="text-headline-md font-headline-md text-primary tracking-tight">Environment &amp; Difficulty</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      {/* Difficulty Selector */}
      <div>
      <label className="block font-label-mono text-label-mono text-on-surface uppercase mb-sm">Starting Level</label>
      <div className="flex gap-2">
      <button className="flex-1 py-xs px-sm border border-surface-variant text-on-surface hover:border-primary hover:text-primary transition-colors rounded text-center font-label-mono text-label-mono uppercase" type="button" data-action-id="lvl-1-5" onClick={actions?.["lvl-1-5"]}>Lvl 1</button>
      <button className="flex-1 py-xs px-sm border border-surface-variant text-on-surface hover:border-primary hover:text-primary transition-colors rounded text-center font-label-mono text-label-mono uppercase" type="button" data-action-id="lvl-5-6" onClick={actions?.["lvl-5-6"]}>Lvl 5</button>
      <button className="flex-1 py-xs px-sm border-2 border-primary text-primary bg-primary/10 rounded text-center font-label-mono text-label-mono uppercase font-bold shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]" type="button" data-action-id="lvl-10-7" onClick={actions?.["lvl-10-7"]}>Lvl 10</button>
      <button className="flex-1 py-xs px-sm border border-surface-variant text-on-surface hover:border-primary hover:text-primary transition-colors rounded text-center font-label-mono text-label-mono uppercase" type="button" data-action-id="lvl-15-8" onClick={actions?.["lvl-15-8"]}>Lvl 15</button>
      </div>
      </div>
      {/* Theme Selector */}
      <div>
      <label className="block font-label-mono text-label-mono text-on-surface uppercase mb-sm">Visual Theme</label>
      <div className="grid grid-cols-2 gap-sm">
      <label className="cursor-pointer relative group">
      <input checked={true} className="peer sr-only" name="theme" type="radio" value="neon" />
      <div className="border border-surface-variant p-xs rounded bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary/5 transition-colors text-center h-full flex flex-col items-center justify-center gap-2">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 text-primary group-hover:scale-110 transition-transform">
      <Circle  data-icon="bolt" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-label-mono text-label-mono text-primary uppercase">Neon HUD</span>
      </div>
      </label>
      <label className="cursor-pointer relative group">
      <input className="peer sr-only" name="theme" type="radio" value="classic" />
      <div className="border border-surface-variant p-xs rounded bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary/5 transition-colors text-center h-full flex flex-col items-center justify-center gap-2">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-variant text-on-surface-variant group-hover:scale-110 transition-transform">
      <Circle  data-icon="grid_on" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-label-mono text-label-mono text-on-surface uppercase">Classic</span>
      </div>
      </label>
      </div>
      </div>
      </div>
      </section>
      {/* Danger Zone */}
      <section className="md:col-span-2 mt-md pt-lg border-t border-error/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-sm">
      <div>
      <h3 className="text-headline-md font-headline-md text-error tracking-tight flex items-center gap-2">
      <TriangleAlert  data-icon="warning" aria-hidden={true} focusable="false" />
                              System Reset
                          </h3>
      <p className="text-body-md font-body-md text-on-surface-variant max-w-lg mt-1">Erase all local telemetry, high scores, and custom parameters. This action is irreversible.</p>
      </div>
      <button className="h-touch-target px-md border-2 border-error text-error hover:bg-error hover:text-on-error transition-colors rounded-DEFAULT font-label-mono text-label-mono font-bold uppercase flex items-center gap-2" type="button" data-action-id="reset-all-data-9" onClick={actions?.["reset-all-data-9"]}>
      <Circle  data-icon="delete_forever" className="text-lg" aria-hidden={true} focusable="false" />
                          Reset All Data
                      </button>
      </section>
      </div>
      </main>
    </>
  );
}
