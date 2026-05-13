// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Options
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Menu, RotateCw, Save, Settings } from "lucide-react";


export type GameOptionsActionId = "button-1-1" | "button-2-2" | "start-game-3" | "reset-to-defaults-4" | "save-changes-5" | "rotate-6" | "drop-7" | "hold-8" | "menu-9";

export interface GameOptionsProps {
  actions?: Partial<Record<GameOptionsActionId, () => void>>;
}

export function GameOptions({ actions }: GameOptionsProps) {
  return (
    <>
      {/* TopAppBar from JSON */}
      <header className="bg-surface dark:bg-surface text-primary dark:text-primary font-h2 text-h2 uppercase border-b border-outline-variant dark:border-outline-variant fixed top-0 w-full z-50 flex justify-between items-center px-margin_mobile md:px-margin_desktop h-touch_target">
      <div className="font-h2 text-h2 text-primary dark:text-primary tracking-tighter hover:border-primary transition-colors">
                  Tetris Supervisor Manager
              </div>
      <div className="flex items-center space-x-4">
      {/* Hidden search bar per JSON */}
      <button className="text-primary font-bold hover:border-primary transition-colors hover:scale-95 duration-100 flex items-center justify-center w-touch_target h-touch_target" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:border-primary transition-colors flex items-center justify-center w-touch_target h-touch_target" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex flex-1 pt-touch_target h-[calc(100vh-44px)]">
      {/* SideNavBar from JSON */}
      <nav className="bg-surface-container dark:bg-surface-container text-primary dark:text-primary font-hud-label text-hud-label border-r border-outline-variant hidden md:flex flex-col w-64 fixed left-0 top-touch_target h-[calc(100vh-44px)] p-unit">
      <div className="mb-8 p-4">
      <h2 className="font-h2 text-h2 text-primary">HUD PANEL</h2>
      <p className="text-on-surface-variant mt-1">Vitals &amp; Metrics</p>
      </div>
      <ul className="space-y-2 flex-1">
      <li>
      <a className="text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors flex items-center p-3" href="#">
      <Circle className="mr-3" aria-hidden={true} focusable="false" />
                              Dashboard
                          </a>
      </li>
      <li>
      <a className="text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors flex items-center p-3" href="#">
      <Circle className="mr-3" aria-hidden={true} focusable="false" />
                              Leaderboard
                          </a>
      </li>
      <li>
      {/* Active State */}
      <a className="bg-primary text-on-primary font-bold hover:bg-surface-variant transition-colors flex items-center p-3" href="#">
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} className="mr-3" aria-hidden={true} focusable="false" />
                              Settings
                          </a>
      </li>
      <li>
      <a className="text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors flex items-center p-3" href="#">
      <Circle className="mr-3" aria-hidden={true} focusable="false" />
                              Help
                          </a>
      </li>
      </ul>
      <div className="mt-auto p-4">
      <button className="w-full bg-primary text-on-primary font-button text-button uppercase py-3 border border-transparent hover:border-outline-variant transition-colors rounded-none flex items-center justify-center h-touch_target" type="button" data-action-id="start-game-3" onClick={actions?.["start-game-3"]}>
                          START GAME
                      </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-margin_mobile md:p-margin_desktop overflow-y-auto">
      <div className="max-w-4xl mx-auto">
      <header className="mb-8 border-b border-outline-variant pb-4">
      <h1 className="font-h1 text-h1 text-primary">Game Options</h1>
      <p className="font-hud-label text-hud-label text-on-surface-variant mt-2 uppercase">Configuration Parameters</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Gameplay Card */}
      <section className="bg-surface border border-outline-variant p-6 flex flex-col gap-6">
      <div className="border-b border-outline-variant pb-2 mb-2">
      <h2 className="font-hud-label text-hud-label text-primary uppercase flex items-center gap-2">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                                      Gameplay
                                  </h2>
      </div>
      {/* Toggle */}
      <div className="flex justify-between items-center">
      <span className="font-body-lg text-body-lg">Ghost Piece</span>
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input checked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-primary border-4 appearance-none cursor-pointer" id="ghost-piece" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="ghost-piece"></label>
      </div>
      </div>
      {/* Slider */}
      <div className="flex flex-col gap-4 mt-4">
      <div className="flex justify-between items-center">
      <span className="font-body-lg text-body-lg">Auto-Repeat Rate</span>
      <span className="font-hud-label text-hud-label text-primary">30ms</span>
      </div>
      <input className="w-full h-2 bg-surface-variant rounded-none outline-none" max="100" min="1" type="range" value="30" />
      </div>
      </section>
      {/* Audio Card */}
      <section className="bg-surface border border-outline-variant p-6 flex flex-col gap-6">
      <div className="border-b border-outline-variant pb-2 mb-2">
      <h2 className="font-hud-label text-hud-label text-primary uppercase flex items-center gap-2">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                                      Audio
                                  </h2>
      </div>
      {/* Sound Effects */}
      <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
      <span className="font-body-lg text-body-lg">Sound Effects</span>
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input checked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-primary border-4 appearance-none cursor-pointer" id="sfx-toggle" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="sfx-toggle"></label>
      </div>
      </div>
      <input className="w-full h-2 bg-surface-variant rounded-none outline-none" max="100" min="0" type="range" value="80" />
      </div>
      <div className="h-[1px] bg-outline-variant w-full my-2"></div>
      {/* Music */}
      <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
      <span className="font-body-lg text-body-lg">Music</span>
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-primary border-4 appearance-none cursor-pointer" id="music-toggle" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="music-toggle"></label>
      </div>
      </div>
      <input className="w-full h-2 bg-surface-variant rounded-none outline-none" max="100" min="0" type="range" value="40" />
      </div>
      </section>
      {/* Difficulty Card */}
      <section className="bg-surface border border-outline-variant p-6 flex flex-col gap-6 md:col-span-2">
      <div className="border-b border-outline-variant pb-2 mb-2">
      <h2 className="font-hud-label text-hud-label text-primary uppercase flex items-center gap-2">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                                      Difficulty
                                  </h2>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="flex flex-col">
      <span className="font-body-lg text-body-lg">Starting Level</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Determines initial drop speed</span>
      </div>
      <div className="relative w-full sm:w-48">
      <select className="block w-full appearance-none bg-background border border-outline-variant text-primary py-3 px-4 pr-8 rounded-none leading-tight focus:outline-none focus:border-success focus:ring-1 focus:ring-success font-hud-label text-hud-label h-touch_target">
      <option value="1">Level 1</option>
      <option value="2">Level 2</option>
      <option value="3">Level 3</option>
      <option value="4">Level 4</option>
      <option selected={true} value="5">Level 5</option>
      <option value="10">Level 10</option>
      <option value="15">Level 15</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-on-surface-variant">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Action Buttons */}
      <div className="mt-8 pt-6 border-t border-outline-variant flex flex-col-reverse sm:flex-row justify-end gap-4">
      <button className="bg-transparent border border-outline-variant text-primary font-button text-button uppercase py-2 px-6 h-touch_target hover:border-primary transition-colors flex items-center justify-center" type="button" data-action-id="reset-to-defaults-4" onClick={actions?.["reset-to-defaults-4"]}>
                              Reset to Defaults
                          </button>
      <button className="bg-primary text-on-primary font-button text-button uppercase py-2 px-6 h-touch_target hover:bg-surface-variant hover:text-primary border border-transparent hover:border-primary transition-colors flex items-center justify-center gap-2" type="button" data-action-id="save-changes-5" onClick={actions?.["save-changes-5"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                              Save Changes
                          </button>
      </div>
      </div>
      </main>
      </div>
      {/* BottomNavBar from JSON */}
      <nav className="bg-surface-container-highest dark:bg-surface-container-highest text-primary dark:text-primary font-button text-button uppercase border-t border-outline-variant fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-touch_target md:hidden">
      <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-primary-container h-full w-full" type="button" data-action-id="rotate-6" onClick={actions?.["rotate-6"]}>
      <RotateCw className="mb-1" aria-hidden={true} focusable="false" />
      <span className="text-[10px]">Rotate</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-primary-container h-full w-full" type="button" data-action-id="drop-7" onClick={actions?.["drop-7"]}>
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span className="text-[10px]">Drop</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-primary-container h-full w-full" type="button" data-action-id="hold-8" onClick={actions?.["hold-8"]}>
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span className="text-[10px]">Hold</span>
      </button>
      {/* Active State for Menu on Mobile */}
      <button className="flex flex-col items-center justify-center bg-primary text-on-primary p-2 hover:bg-primary-container h-full w-full" type="button" data-action-id="menu-9" onClick={actions?.["menu-9"]}>
      <Menu  style={{fontVariationSettings: "'FILL' 1"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span className="text-[10px]">Menu</span>
      </button>
      </nav>
    </>
  );
}
