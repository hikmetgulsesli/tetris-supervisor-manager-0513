// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Tetra Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, Circle, Pause, RotateCw } from "lucide-react";


export type TetraGameBoardActionId = "button-1-1" | "button-2-2" | "move-3" | "rotate-4" | "soft-5" | "hard-6" | "hold-7";

export interface TetraGameBoardProps {
  actions?: Partial<Record<TetraGameBoardActionId, () => void>>;
}

export function TetraGameBoard({ actions }: TetraGameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="flex justify-between items-center px-sm h-touch-target w-full z-50 bg-background border-b border-surface-variant docked full-width top-0 shrink-0">
      <div className="text-headline-md font-headline-md font-black tracking-tighter text-primary">TETRA HUD</div>
      <nav className="hidden md:flex gap-lg items-center h-full">
      <a className="h-full flex items-center text-primary font-bold border-b-2 border-primary pb-1 font-label-mono text-label-mono hover:text-primary hover:bg-surface-container transition-colors px-2" href="#">PLAY</a>
      <a className="h-full flex items-center text-on-surface-variant font-medium font-label-mono text-label-mono hover:text-primary hover:bg-surface-container transition-colors px-2" href="#">STATS</a>
      <a className="h-full flex items-center text-on-surface-variant font-medium font-label-mono text-label-mono hover:text-primary hover:bg-surface-container transition-colors px-2" href="#">GUIDE</a>
      <a className="h-full flex items-center text-on-surface-variant font-medium font-label-mono text-label-mono hover:text-primary hover:bg-surface-container transition-colors px-2" href="#">SETTINGS</a>
      </nav>
      <div className="flex gap-xs">
      <button className="text-primary hover:bg-surface-container transition-colors p-2 rounded flex items-center justify-center h-touch-target w-touch-target active:scale-95 duration-75" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      <button className="text-primary hover:bg-surface-container transition-colors p-2 rounded flex items-center justify-center h-touch-target w-touch-target active:scale-95 duration-75" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Game Canvas */}
      <main className="flex-grow relative flex items-center justify-center w-full px-sm py-lg overflow-y-auto lg:overflow-hidden">
      {/* Reactive Background Pulse */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-colors-surface-container-high)_0%,_transparent_60%)] opacity-30 z-0 pointer-events-none"></div>
      {/* HUD Layout Grid */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-md lg:gap-xl z-10 w-full max-w-5xl">
      {/* Left HUD: HOLD */}
      <aside className="flex flex-col gap-xs order-2 lg:order-1 w-[96px] shrink-0">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant text-center lg:text-left tracking-widest">HOLD</h2>
      <div className="border-[2px] border-outline-variant bg-surface-container-lowest p-board-gutter relative w-[96px] h-[96px] flex items-center justify-center">
      <div className="grid grid-cols-4 grid-rows-4 gap-board-gutter w-full h-full p-[2px]">
      {/* Simulate piece in hold */}
      <div className="col-start-2 row-start-2 col-span-2 row-span-2 bg-secondary/80 border border-secondary"></div>
      <div className="col-start-1 row-start-2 col-span-1 row-span-1 bg-secondary/80 border border-secondary"></div>
      <div className="col-start-4 row-start-2 col-span-1 row-span-1 bg-secondary/80 border border-secondary"></div>
      </div>
      </div>
      </aside>
      {/* Center: GAME BOARD */}
      <section className="order-1 lg:order-2 shrink-0">
      <div className="border-[2px] border-surface-variant bg-surface-container-lowest p-board-gutter relative shadow-[0_0_40px_rgba(0,0,0,0.5)]">
      {/* 10x20 Grid */}
      <div className="grid grid-cols-10 grid-rows-20 gap-board-gutter w-[220px] h-[440px] md:w-[280px] md:h-[560px] relative bg-surface-dim">
      {/* Ghost Grid Lines overlay */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-20 gap-board-gutter opacity-10 pointer-events-none">
      <div className="col-span-10 row-span-20 bg-[linear-gradient(to_right,var(--tw-colors-outline-variant)_1px,transparent_1px),linear-gradient(to_bottom,var(--tw-colors-outline-variant)_1px,transparent_1px)] bg-[size:10%_5%]"></div>
      </div>
      {/* Active Mino (T-Piece) with Luminescence */}
      <div className="col-start-4 row-start-3 bg-primary border-[2px] border-primary relative z-20">
      <div className="absolute inset-[-8px] bg-primary blur-[12px] opacity-40 z-[-1]"></div>
      </div>
      <div className="col-start-5 row-start-3 bg-primary border-[2px] border-primary relative z-20">
      <div className="absolute inset-[-8px] bg-primary blur-[12px] opacity-40 z-[-1]"></div>
      </div>
      <div className="col-start-6 row-start-3 bg-primary border-[2px] border-primary relative z-20">
      <div className="absolute inset-[-8px] bg-primary blur-[12px] opacity-40 z-[-1]"></div>
      </div>
      <div className="col-start-5 row-start-2 bg-primary border-[2px] border-primary relative z-20">
      <div className="absolute inset-[-8px] bg-primary blur-[12px] opacity-40 z-[-1]"></div>
      </div>
      {/* Ghost Piece */}
      <div className="col-start-4 row-start-19 border-[2px] border-primary/50 bg-primary/10 z-10"></div>
      <div className="col-start-5 row-start-19 border-[2px] border-primary/50 bg-primary/10 z-10"></div>
      <div className="col-start-6 row-start-19 border-[2px] border-primary/50 bg-primary/10 z-10"></div>
      <div className="col-start-5 row-start-18 border-[2px] border-primary/50 bg-primary/10 z-10"></div>
      {/* Stacked Minoes */}
      <div className="col-start-1 row-start-20 bg-error border border-error-container"></div>
      <div className="col-start-2 row-start-20 bg-error border border-error-container"></div>
      <div className="col-start-3 row-start-20 bg-surface-tint border border-outline-variant"></div>
      <div className="col-start-4 row-start-20 bg-surface-tint border border-outline-variant"></div>
      <div className="col-start-8 row-start-20 bg-secondary border border-secondary-container"></div>
      <div className="col-start-9 row-start-20 bg-secondary border border-secondary-container"></div>
      <div className="col-start-10 row-start-20 bg-error border border-error-container"></div>
      <div className="col-start-1 row-start-19 bg-error border border-error-container"></div>
      <div className="col-start-2 row-start-19 bg-error border border-error-container"></div>
      </div>
      </div>
      </section>
      {/* Right HUD: NEXT & STATS */}
      <aside className="flex flex-row lg:flex-col gap-md lg:gap-lg order-3 w-full lg:w-[120px] justify-center lg:justify-start">
      {/* STATS */}
      <div className="flex flex-col gap-sm w-[120px] shrink-0">
      <div className="border-b border-surface-variant pb-1">
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Score</div>
      <div className="font-label-mono text-headline-md text-primary leading-none mt-1">042,890</div>
      </div>
      <div className="border-b border-surface-variant pb-1">
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Level</div>
      <div className="font-label-mono text-headline-md text-primary leading-none mt-1">14</div>
      </div>
      <div className="border-b border-surface-variant pb-1">
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Lines</div>
      <div className="font-label-mono text-headline-md text-primary leading-none mt-1">138</div>
      </div>
      </div>
      {/* NEXT QUEUE */}
      <div className="flex flex-col gap-xs shrink-0 w-[96px]">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant tracking-widest text-center lg:text-left">NEXT</h2>
      <div className="border-[2px] border-outline-variant bg-surface-container-lowest p-2 flex flex-col gap-sm items-center h-[260px]">
      {/* Next 1 */}
      <div className="grid grid-cols-4 grid-rows-2 w-[56px] h-[28px] gap-[2px]">
      <div className="col-span-4 row-start-2 bg-secondary border border-secondary-container"></div>
      </div>
      {/* Next 2 */}
      <div className="grid grid-cols-3 grid-rows-2 w-[42px] h-[28px] gap-[2px] mt-xs">
      <div className="col-start-1 row-start-1 bg-error border border-error-container"></div>
      <div className="col-start-1 row-start-2 bg-error border border-error-container"></div>
      <div className="col-start-2 row-start-2 bg-error border border-error-container"></div>
      <div className="col-start-3 row-start-2 bg-error border border-error-container"></div>
      </div>
      {/* Next 3 */}
      <div className="grid grid-cols-2 grid-rows-2 w-[28px] h-[28px] gap-[2px] mt-xs">
      <div className="col-span-2 row-span-2 bg-surface-tint border border-outline-variant"></div>
      </div>
      {/* Next 4 */}
      <div className="grid grid-cols-3 grid-rows-2 w-[42px] h-[28px] gap-[2px] mt-xs">
      <div className="col-start-2 row-start-1 bg-primary border border-surface-variant"></div>
      <div className="col-start-3 row-start-1 bg-primary border border-surface-variant"></div>
      <div className="col-start-1 row-start-2 bg-primary border border-surface-variant"></div>
      <div className="col-start-2 row-start-2 bg-primary border border-surface-variant"></div>
      </div>
      </div>
      </div>
      </aside>
      </div>
      </main>
      {/* BottomNavBar (Controls) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-xs pb-xl pt-xs lg:hidden bg-surface-container-highest docked full-width rounded-t-lg border-t-2 border-outline shadow-lg h-[88px] shrink-0">
      <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-bright rounded-xl w-[64px] h-[64px] active:scale-90 duration-100 bg-surface-container" type="button" data-action-id="move-3" onClick={actions?.["move-3"]}>
      <ArrowLeft className="text-[28px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm mt-1">MOVE</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-bright rounded-xl w-[64px] h-[64px] active:scale-90 duration-100 bg-surface-container" type="button" data-action-id="rotate-4" onClick={actions?.["rotate-4"]}>
      <RotateCw className="text-[28px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm mt-1">ROTATE</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-bright rounded-xl w-[64px] h-[64px] active:scale-90 duration-100 bg-surface-container" type="button" data-action-id="soft-5" onClick={actions?.["soft-5"]}>
      <ArrowDown className="text-[28px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm mt-1">SOFT</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-bright rounded-xl w-[64px] h-[64px] active:scale-90 duration-100 bg-surface-container" type="button" data-action-id="hard-6" onClick={actions?.["hard-6"]}>
      <Circle className="text-[28px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm mt-1">HARD</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-bright rounded-xl w-[64px] h-[64px] active:scale-90 duration-100 bg-surface-container" type="button" data-action-id="hold-7" onClick={actions?.["hold-7"]}>
      <Circle className="text-[28px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm mt-1">HOLD</span>
      </button>
      </nav>
      {/* Debug/Status Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-surface text-on-surface-variant border-t border-surface-variant px-sm py-[4px] z-40 hidden lg:flex justify-between items-center font-label-mono text-[11px] tracking-wide shrink-0">
      <div className="flex gap-4">
      <span>window.app.bridge</span>
      <span className="text-outline">||</span>
      <span>CORE_SYNC: <span className="text-secondary">OK</span></span>
      </div>
      <div className="flex gap-4">
      <span>TICK: <span className="text-primary">60.00hz</span></span>
      <span>LATENCY: <span className="text-primary">12ms</span></span>
      <span>MEM: <span className="text-primary">42MB</span></span>
      </div>
      </div>
    </>
  );
}
