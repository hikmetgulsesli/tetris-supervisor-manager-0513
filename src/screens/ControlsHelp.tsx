// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, ArrowRight, Circle, MousePointerClick } from "lucide-react";


export type ControlsHelpActionId = "back-1" | "return-to-mission-control-2";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* TopAppBar (Suppressed per Nav rules for transactional/sub-pages, but providing a simplified header for 'Back' intent) */}
      <header className="fixed top-0 w-full z-50 flex items-center px-margin_mobile md:px-margin_desktop h-touch_target bg-surface border-b border-outline-variant">
      <button className="flex items-center text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background p-2 -ml-2 rounded" type="button" data-action-id="back-1" onClick={actions?.["back-1"]}>
      <ArrowLeft className="mr-2" aria-hidden={true} focusable="false" />
      <span className="font-button text-button">Back</span>
      </button>
      <div className="flex-1 flex justify-center">
      <span className="font-h2 text-h2 text-primary tracking-tighter uppercase">Tetris Supervisor Manager</span>
      </div>
      <div className="w-16"></div> {/* Spacer for balance */}
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 mt-touch_target pt-8 pb-16 px-margin_mobile md:px-margin_desktop max-w-7xl mx-auto w-full flex flex-col items-center">
      <div className="w-full max-w-4xl">
      <h1 className="font-h1 text-h1 text-primary mb-2 text-center">Controls &amp; How to Play</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant text-center mb-12">Master the interface to optimize your supervisory efficiency.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Keyboard Controls Panel */}
      <div className="bg-surface border border-outline-variant rounded-DEFAULT overflow-hidden">
      <div className="p-4 border-b border-outline-variant bg-surface-container">
      <h2 className="font-hud-label text-hud-label text-primary uppercase flex items-center">
      <Circle className="mr-2 text-[18px]" aria-hidden={true} focusable="false" />
                                  Keyboard Interface
                              </h2>
      </div>
      <div className="p-6 space-y-6">
      {/* Move/Rotate */}
      <div className="flex items-start">
      <div className="flex flex-col items-center mr-6 gap-unit">
      <div className="w-10 h-10 border border-outline-variant rounded bg-surface-container flex items-center justify-center text-on-surface">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <div className="flex gap-unit">
      <div className="w-10 h-10 border border-outline-variant rounded bg-surface-container flex items-center justify-center text-on-surface">
      <ArrowLeft aria-hidden={true} focusable="false" />
      </div>
      <div className="w-10 h-10 border border-outline-variant rounded bg-surface-container flex items-center justify-center text-on-surface">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <div className="w-10 h-10 border border-outline-variant rounded bg-surface-container flex items-center justify-center text-on-surface">
      <ArrowRight aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      <div className="flex-1 pt-2">
      <h3 className="font-body-lg text-body-lg text-primary mb-1">Move &amp; Rotate</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Use the Left/Right arrows to shift laterally. Up arrow rotates the active module clockwise. Down arrow accelerates descent.</p>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Hard Drop */}
      <div className="flex items-center">
      <div className="w-32 h-10 border border-outline-variant rounded bg-surface-container flex items-center justify-center text-on-surface mr-6 shrink-0">
      <span className="font-hud-label text-hud-label">SPACE</span>
      </div>
      <div className="flex-1">
      <h3 className="font-body-lg text-body-lg text-primary mb-1">Hard Drop</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Instantly locks the module in the lowest available valid position.</p>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Hold */}
      <div className="flex items-center">
      <div className="w-24 h-10 border border-outline-variant rounded bg-surface-container flex items-center justify-center text-on-surface mr-6 shrink-0">
      <span className="font-hud-label text-hud-label">SHIFT</span>
      </div>
      <div className="flex-1">
      <h3 className="font-body-lg text-body-lg text-primary mb-1">Hold Module</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Stashes the current module for later deployment.</p>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Pause */}
      <div className="flex items-center">
      <div className="w-10 h-10 border border-outline-variant rounded bg-surface-container flex items-center justify-center text-on-surface mr-6 shrink-0">
      <span className="font-hud-label text-hud-label">P</span>
      </div>
      <div className="flex-1">
      <h3 className="font-body-lg text-body-lg text-primary mb-1">Pause Operations</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Halts the simulation logic temporarily.</p>
      </div>
      </div>
      </div>
      </div>
      {/* Touch/Mouse Controls Panel */}
      <div className="bg-surface border border-outline-variant rounded-DEFAULT overflow-hidden">
      <div className="p-4 border-b border-outline-variant bg-surface-container">
      <h2 className="font-hud-label text-hud-label text-primary uppercase flex items-center">
      <MousePointerClick className="mr-2 text-[18px]" aria-hidden={true} focusable="false" />
                                  Touch / Mouse Interface
                              </h2>
      </div>
      <div className="p-6 space-y-6">
      {/* Swipe Move */}
      <div className="flex items-start">
      <div className="w-16 h-16 mr-6 flex items-center justify-center border border-outline-variant rounded-full bg-surface-container text-on-surface shrink-0">
      <Circle className="text-[32px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 pt-1">
      <h3 className="font-body-lg text-body-lg text-primary mb-1">Swipe to Move</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Swipe horizontally across the board area to shift the active module left or right.</p>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Tap Rotate */}
      <div className="flex items-start">
      <div className="w-16 h-16 mr-6 flex items-center justify-center border border-outline-variant rounded-full bg-surface-container text-on-surface shrink-0">
      <Circle className="text-[32px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 pt-1">
      <h3 className="font-body-lg text-body-lg text-primary mb-1">Tap to Rotate</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Tap once anywhere on the board canvas to rotate the module 90 degrees clockwise.</p>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Swipe Down Drop */}
      <div className="flex items-start">
      <div className="w-16 h-16 mr-6 flex items-center justify-center border border-outline-variant rounded-full bg-surface-container text-on-surface shrink-0">
      <Circle className="text-[32px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 pt-1">
      <h3 className="font-body-lg text-body-lg text-primary mb-1">Swipe Down</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">A swift downward swipe executes a Hard Drop, locking the piece immediately.</p>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* UI Buttons */}
      <div className="flex items-start">
      <div className="w-16 h-16 mr-6 flex items-center justify-center border border-outline-variant rounded bg-surface-container text-on-surface shrink-0">
      <Circle className="text-[32px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 pt-1">
      <h3 className="font-body-lg text-body-lg text-primary mb-1">On-Screen Controls</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Use the dedicated action buttons located in the Bottom Nav Bar or HUD for Hold, Rotate, and Pause operations.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="mt-8 flex justify-center">
      <button className="bg-primary text-on-primary font-button text-button px-8 py-4 rounded-none hover:bg-surface-tint focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background border border-primary inset-shadow-sm transition-colors uppercase tracking-widest" type="button" data-action-id="return-to-mission-control-2" onClick={actions?.["return-to-mission-control-2"]}>
                          Return to Mission Control
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
