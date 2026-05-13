// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls & Rules
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Circle, MousePointerClick } from "lucide-react";


export type ControlsRulesActionId = "back-to-menu-1";

export interface ControlsRulesProps {
  actions?: Partial<Record<ControlsRulesActionId, () => void>>;
}

export function ControlsRules({ actions }: ControlsRulesProps) {
  return (
    <>
      {/* Header / Navigation Shell Replacement for "Help" Intent */}
      <header className="w-full max-w-4xl flex items-center justify-between py-md mb-lg border-b border-surface-variant">
      <div className="flex items-center gap-sm text-primary">
      <Circle className="text-headline-lg font-headline-lg" aria-hidden={true} focusable="false" />
      <h1 className="text-headline-lg font-headline-lg tracking-tighter uppercase">GUIDE</h1>
      </div>
      <button className="h-touch-target px-md bg-transparent border border-outline text-primary font-label-mono text-label-mono hover:bg-surface-variant transition-colors flex items-center gap-xs" type="button" data-action-id="back-to-menu-1" onClick={actions?.["back-to-menu-1"]}>
      <ArrowLeft aria-hidden={true} focusable="false" />
                  BACK TO MENU
              </button>
      </header>
      <main className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-xl">
      {/* Controls Column */}
      <div className="flex flex-col gap-lg">
      {/* Keyboard Controls */}
      <section className="bg-surface border border-surface-variant p-md relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary group-hover:neon-cyan-glow transition-colors"></div>
      <h2 className="text-headline-md font-headline-md text-primary mb-sm uppercase">Keyboard</h2>
      <div className="grid grid-cols-3 gap-xs mb-md max-w-xs mx-auto text-center">
      <div></div>
      <div className="bg-surface-container border-2 border-surface-variant p-xs rounded h-touch-target flex items-center justify-center text-primary font-label-mono text-label-mono">
      <ArrowUp aria-hidden={true} focusable="false" />
      </div>
      <div></div>
      <div className="bg-surface-container border-2 border-surface-variant p-xs rounded h-touch-target flex items-center justify-center text-primary font-label-mono text-label-mono">
      <ArrowLeft aria-hidden={true} focusable="false" />
      </div>
      <div className="bg-surface-container border-2 border-surface-variant p-xs rounded h-touch-target flex items-center justify-center text-primary font-label-mono text-label-mono">
      <ArrowDown aria-hidden={true} focusable="false" />
      </div>
      <div className="bg-surface-container border-2 border-surface-variant p-xs rounded h-touch-target flex items-center justify-center text-primary font-label-mono text-label-mono">
      <ArrowRight aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="space-y-xs font-label-mono text-label-mono text-on-surface-variant">
      <div className="flex justify-between border-b border-surface-variant pb-base"><span className="text-primary">↑ UP</span><span>ROTATE CLOCKWISE</span></div>
      <div className="flex justify-between border-b border-surface-variant pb-base"><span className="text-primary">↓ DOWN</span><span>SOFT DROP</span></div>
      <div className="flex justify-between border-b border-surface-variant pb-base"><span className="text-primary">← → LR</span><span>MOVE LEFT/RIGHT</span></div>
      <div className="flex justify-between border-b border-surface-variant pb-base"><span className="text-primary">[SPACE]</span><span>HARD DROP</span></div>
      <div className="flex justify-between"><span className="text-primary">[ C ]</span><span>HOLD PIECE</span></div>
      </div>
      </section>
      {/* Touch Controls */}
      <section className="bg-surface border border-surface-variant p-md relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-secondary group-hover:neon-purple-glow transition-colors"></div>
      <h2 className="text-headline-md font-headline-md text-primary mb-sm uppercase">Touch</h2>
      <div className="flex justify-around items-center bg-surface-container p-sm border border-surface-variant mb-md rounded">
      <div className="flex flex-col items-center">
      <div className="w-touch-target h-touch-target border border-outline rounded-full flex items-center justify-center mb-xs text-primary">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <span className="font-label-mono text-label-mono text-on-surface-variant">SWIPE</span>
      </div>
      <div className="flex flex-col items-center">
      <div className="w-touch-target h-touch-target border border-outline rounded-full flex items-center justify-center mb-xs text-primary">
      <MousePointerClick aria-hidden={true} focusable="false" />
      </div>
      <span className="font-label-mono text-label-mono text-on-surface-variant">TAP</span>
      </div>
      </div>
      <div className="space-y-xs font-label-mono text-label-mono text-on-surface-variant">
      <div className="flex justify-between border-b border-surface-variant pb-base"><span className="text-secondary">SWIPE LR</span><span>MOVE PIECE</span></div>
      <div className="flex justify-between border-b border-surface-variant pb-base"><span className="text-secondary">SWIPE DOWN</span><span>HARD DROP</span></div>
      <div className="flex justify-between border-b border-surface-variant pb-base"><span className="text-secondary">TAP RIGHT</span><span>ROTATE CW</span></div>
      <div className="flex justify-between"><span className="text-secondary">TAP LEFT</span><span>HOLD</span></div>
      </div>
      </section>
      </div>
      {/* Rules & Scoring Column */}
      <div className="flex flex-col gap-lg">
      <section className="bg-surface border border-surface-variant p-md relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-tertiary group-hover:neon-yellow-glow transition-colors"></div>
      <h2 className="text-headline-md font-headline-md text-primary mb-sm uppercase">Rules &amp; Scoring</h2>
      <div className="space-y-md">
      {/* T-Spin */}
      <div>
      <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-xs border-b border-surface-variant pb-base">T-Spin</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Rotate a T-piece into a tight slot to score massively. T-Spins clear lines and multiply standard scoring.</p>
      <div className="flex gap-xs mt-xs">
      <div className="w-xs h-xs bg-[#b026ff] shadow-[0_0_5px_#b026ff]"></div>
      <div className="w-xs h-xs bg-[#b026ff] shadow-[0_0_5px_#b026ff]"></div>
      <div className="w-xs h-xs bg-[#b026ff] shadow-[0_0_5px_#b026ff]"></div>
      </div>
      </div>
      {/* Combos */}
      <div>
      <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-xs border-b border-surface-variant pb-base">Combos &amp; B2B</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Clear lines in consecutive drops to build a Combo multiplier. Back-to-Back (B2B) Tetris or T-Spin line clears maintain a high-value chain.</p>
      </div>
      {/* Speed/Level */}
      <div>
      <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-xs border-b border-surface-variant pb-base">Gravity Levels</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Gravity (drop speed) increases every 10 lines cleared. At high levels, pieces "lock" almost instantly upon touching surfaces (Lock Delay).</p>
      </div>
      </div>
      </section>
      {/* Visual Telemetry Decorative Element */}
      <div className="border border-surface-variant bg-surface-container-low h-32 flex flex-col justify-center items-center opacity-50 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="font-label-mono text-label-mono text-primary animate-pulse">SYS.READY // UPLINK SECURE</div>
      <div className="flex gap-1 mt-2">
      <div className="w-2 h-8 bg-primary"></div>
      <div className="w-2 h-4 bg-outline"></div>
      <div className="w-2 h-6 bg-primary"></div>
      <div className="w-2 h-3 bg-outline"></div>
      <div className="w-2 h-8 bg-primary"></div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
