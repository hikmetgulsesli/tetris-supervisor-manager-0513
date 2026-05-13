// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowUp, Circle, Menu, RotateCw, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "start-game-3" | "rotate-4" | "drop-5" | "hold-6" | "menu-7";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface border-b border-outline-variant dark:border-outline-variant fixed top-0 w-full z-50 flex justify-between items-center px-margin_mobile md:px-margin_desktop h-touch_target">
      <div className="font-h2 text-h2 text-primary dark:text-primary tracking-tighter uppercase">Tetris Supervisor Manager</div>
      <div className="flex items-center gap-4 text-primary dark:text-primary">
      <button className="hover:border-primary transition-colors hover:bg-surface-variant p-1 rounded" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}><Settings  data-icon="settings" aria-hidden={true} focusable="false" /></button>
      <button className="hover:border-primary transition-colors hover:bg-surface-variant p-1 rounded" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}><Circle  data-icon="help" aria-hidden={true} focusable="false" /></button>
      </div>
      </header>
      {/* SideNavBar (Desktop) */}
      <nav className="bg-surface-container dark:bg-surface-container border-r border-outline-variant hidden md:flex flex-col w-64 fixed left-0 top-touch_target h-[calc(100vh-44px)] p-unit">
      <div className="p-4 border-b border-outline-variant mb-4">
      <h2 className="font-h2 text-h2 text-primary tracking-tighter">HUD PANEL</h2>
      <p className="font-hud-label text-hud-label text-on-surface-variant mt-1">Vitals &amp; Metrics</p>
      </div>
      <div className="flex-1 space-y-1">
      <a className="flex items-center gap-3 px-4 py-3 bg-primary text-on-primary font-bold font-button text-button uppercase hover:bg-surface-variant transition-colors rounded-DEFAULT" href="#">
      <Circle  data-icon="grid_view" aria-hidden={true} focusable="false" /> Dashboard
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-primary font-button text-button uppercase hover:bg-surface-variant transition-colors rounded-DEFAULT" href="#">
      <Circle  data-icon="leaderboard" aria-hidden={true} focusable="false" /> Leaderboard
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-primary font-button text-button uppercase hover:bg-surface-variant transition-colors rounded-DEFAULT" href="#">
      <Settings  data-icon="settings" aria-hidden={true} focusable="false" /> Settings
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-primary font-button text-button uppercase hover:bg-surface-variant transition-colors rounded-DEFAULT" href="#">
      <Circle  data-icon="help_center" aria-hidden={true} focusable="false" /> Help
                  </a>
      </div>
      <div className="mt-auto p-4">
      <button className="w-full py-3 bg-primary text-surface border border-outline-variant font-button text-button uppercase hover:bg-surface-variant hover:text-primary transition-colors" type="button" data-action-id="start-game-3" onClick={actions?.["start-game-3"]}>START GAME</button>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-gutter p-margin_mobile md:p-margin_desktop w-full max-w-7xl mx-auto h-[calc(100vh-88px)] md:h-[calc(100vh-44px)]">
      {/* Left HUD */}
      <aside className="flex flex-row lg:flex-col gap-4 w-full lg:w-48 order-2 lg:order-1 justify-center lg:justify-start">
      <div className="bg-surface border border-outline-variant p-4 w-1/3 lg:w-full">
      <div className="font-hud-label text-hud-label text-on-surface-variant mb-2 border-b border-outline-variant pb-1">HOLD</div>
      <div className="aspect-square bg-surface-container flex items-center justify-center">
      {/* Empty Hold */}
      </div>
      </div>
      <div className="bg-surface border border-outline-variant p-4 w-1/3 lg:w-full">
      <div className="font-hud-label text-hud-label text-on-surface-variant mb-2 border-b border-outline-variant pb-1">LEVEL</div>
      <div className="font-hud-label text-h1 text-primary tracking-tighter">05</div>
      </div>
      <div className="bg-surface border border-outline-variant p-4 w-1/3 lg:w-full">
      <div className="font-hud-label text-hud-label text-on-surface-variant mb-2 border-b border-outline-variant pb-1">LINES</div>
      <div className="font-hud-label text-h1 text-primary tracking-tighter">42</div>
      </div>
      </aside>
      {/* The Board */}
      <section className="order-1 lg:order-2 flex-shrink-0 w-full max-w-board_max_width aspect-[1/2] bg-surface-container-lowest border-2 border-outline-variant relative grid-bg" style={{maxHeight: "calc(100vh - 150px)", maxWidth: "calc((100vh - 150px) / 2)"}}>
      {/* Active Piece (L Shape - Orange) */}
      <div className="absolute w-[10%] h-[5%] bg-[#F97316] tetromino-block left-[40%] top-[30%] z-10"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#F97316] tetromino-block left-[40%] top-[35%] z-10"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#F97316] tetromino-block left-[40%] top-[40%] z-10"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#F97316] tetromino-block left-[50%] top-[40%] z-10"></div>
      {/* Ghost Piece */}
      <div className="absolute w-[10%] h-[5%] border-2 border-[#F97316] opacity-30 left-[40%] top-[80%]"></div>
      <div className="absolute w-[10%] h-[5%] border-2 border-[#F97316] opacity-30 left-[40%] top-[85%]"></div>
      <div className="absolute w-[10%] h-[5%] border-2 border-[#F97316] opacity-30 left-[40%] top-[90%]"></div>
      <div className="absolute w-[10%] h-[5%] border-2 border-[#F97316] opacity-30 left-[50%] top-[90%]"></div>
      {/* Stacked Pieces (Bottom) */}
      <div className="absolute w-[10%] h-[5%] bg-[#3B82F6] tetromino-block left-[0%] top-[95%]"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#3B82F6] tetromino-block left-[10%] top-[95%]"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#10B981] tetromino-block left-[20%] top-[95%]"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#10B981] tetromino-block left-[30%] top-[95%]"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#8B5CF6] tetromino-block left-[70%] top-[95%]"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#8B5CF6] tetromino-block left-[80%] top-[95%]"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#8B5CF6] tetromino-block left-[90%] top-[95%]"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#10B981] tetromino-block left-[20%] top-[90%]"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#10B981] tetromino-block left-[30%] top-[90%]"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#8B5CF6] tetromino-block left-[80%] top-[90%]"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#EF4444] tetromino-block left-[20%] top-[85%]"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#EF4444] tetromino-block left-[30%] top-[85%]"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#EF4444] tetromino-block left-[20%] top-[80%]"></div>
      <div className="absolute w-[10%] h-[5%] bg-[#EF4444] tetromino-block left-[30%] top-[80%]"></div>
      </section>
      {/* Right HUD */}
      <aside className="flex flex-row lg:flex-col gap-4 w-full lg:w-48 order-3 lg:order-3 justify-center lg:justify-start">
      <div className="bg-surface border border-outline-variant p-4 w-1/2 lg:w-full">
      <div className="font-hud-label text-hud-label text-on-surface-variant mb-2 border-b border-outline-variant pb-1">NEXT</div>
      <div className="aspect-square bg-surface-container flex items-center justify-center relative p-4">
      {/* T Piece */}
      <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-[30%] h-[30%] bg-[#A855F7] tetromino-block top-[20%] left-[35%]"></div>
      <div className="absolute w-[30%] h-[30%] bg-[#A855F7] tetromino-block top-[50%] left-[5%]"></div>
      <div className="absolute w-[30%] h-[30%] bg-[#A855F7] tetromino-block top-[50%] left-[35%]"></div>
      <div className="absolute w-[30%] h-[30%] bg-[#A855F7] tetromino-block top-[50%] left-[65%]"></div>
      </div>
      </div>
      </div>
      <div className="bg-surface border border-outline-variant p-4 w-1/2 lg:w-full">
      <div className="font-hud-label text-hud-label text-on-surface-variant mb-2 border-b border-outline-variant pb-1">SCORE</div>
      <div className="font-hud-label text-h2 text-primary tracking-tighter">12,450</div>
      </div>
      {/* Desktop Controls Legend */}
      <div className="bg-surface border border-outline-variant p-4 hidden lg:block mt-auto">
      <div className="font-hud-label text-hud-label text-on-surface-variant mb-2 border-b border-outline-variant pb-1">CONTROLS</div>
      <div className="space-y-2 mt-4 font-hud-label text-hud-label">
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 border border-outline-variant flex items-center justify-center text-primary bg-surface-container"><ArrowUp className="text-sm" aria-hidden={true} focusable="false" /></div>
      <span className="text-on-surface-variant">ROTATE</span>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 border border-outline-variant flex items-center justify-center text-primary bg-surface-container"><ArrowDown className="text-sm" aria-hidden={true} focusable="false" /></div>
      <span className="text-on-surface-variant">DROP</span>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-16 h-6 border border-outline-variant flex items-center justify-center text-primary bg-surface-container text-[10px]">SPACE</div>
      <span className="text-on-surface-variant">HARD DROP</span>
      </div>
      </div>
      </div>
      </aside>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="bg-surface-container-highest dark:bg-surface-container-highest border-t border-outline-variant fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-touch_target md:hidden">
      <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-primary-container flex-1 h-full" type="button" data-action-id="rotate-4" onClick={actions?.["rotate-4"]}>
      <RotateCw  data-icon="rotate_right" aria-hidden={true} focusable="false" />
      <span className="font-button text-[10px] uppercase mt-1">Rotate</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-primary-container flex-1 h-full border-l border-outline-variant" type="button" data-action-id="drop-5" onClick={actions?.["drop-5"]}>
      <Circle  data-icon="south" aria-hidden={true} focusable="false" />
      <span className="font-button text-[10px] uppercase mt-1">Drop</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-primary-container flex-1 h-full border-l border-outline-variant" type="button" data-action-id="hold-6" onClick={actions?.["hold-6"]}>
      <Circle  data-icon="inventory_2" aria-hidden={true} focusable="false" />
      <span className="font-button text-[10px] uppercase mt-1">Hold</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-primary-container flex-1 h-full border-l border-outline-variant" type="button" data-action-id="menu-7" onClick={actions?.["menu-7"]}>
      <Menu  data-icon="menu" aria-hidden={true} focusable="false" />
      <span className="font-button text-[10px] uppercase mt-1">Menu</span>
      </button>
      </nav>
    </>
  );
}
