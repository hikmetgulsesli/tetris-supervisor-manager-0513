// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Pause, Play, Settings } from "lucide-react";


export type PauseOverlayActionId = "resume-game-1" | "restart-2" | "settings-3" | "quit-to-menu-4";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* Blurred/Dimmed Background Context (Simulated Game Board) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 blur-sm pointer-events-none" data-alt="A dark, high-contrast grid pattern resembling an arcade puzzle game board. Neon blue and cyan blocks are arranged structurally against a deep space background. The visual style is modern-brutalist with sharp clean lines, suitable for a professional management HUD." style={{backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5aOJf1zEZNCN0YRI_JOc5qTyvr8_2oVxOCSOCDx6a0_ylXISjTkBcwHboTP0-4wkgnI5wscNtowUOT_dpTRVcW_tqhSkC9xTwo-5sEuLtUuGbp2M57FV_TH_eBL8yC-4ROlrOJZa9a7cQDrye1dmyIH28850_7_7RRLSi8t1xjID6VO2_H9mMi5i9McsVjYqegnj_rixjYBY8TvNJKRGGIeSZeePT28wlqJGpaatAaswBlDLe8ndcvWazHGjspaemEvbb-d6P6e35')", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="w-board_max_width h-[800px] border border-surface-variant bg-surface opacity-50"></div>
      </div>
      {/* Modal Overlay Container */}
      <div className="relative z-10 w-full max-w-[320px] mx-margin_mobile md:mx-auto flex flex-col items-center">
      {/* Pause Icon */}
      <div className="mb-gutter flex items-center justify-center w-16 h-16 rounded-full border border-outline-variant bg-surface shadow-[0_0_15px_rgba(255,255,255,0.1)]">
      <Pause  style={{fontVariationSettings: "'FILL' 1"}} className="text-[40px] text-primary" aria-hidden={true} focusable="false" />
      </div>
      {/* Header */}
      <h1 className="font-h1 text-h1 text-primary mb-margin_desktop uppercase tracking-widest text-center">
                  PAUSED
              </h1>
      {/* Actions Container */}
      <div className="w-full flex flex-col gap-unit p-gutter bg-surface border border-outline-variant rounded-none shadow-[inset_0_0_0_1px_rgba(51,65,85,0.5)]">
      {/* Primary Action */}
      <button className="w-full h-touch_target bg-primary text-surface-dim font-button text-button uppercase flex items-center justify-center gap-2 hover:bg-surface-variant hover:text-primary hover:border hover:border-primary transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface" type="button" data-action-id="resume-game-1" onClick={actions?.["resume-game-1"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px]" aria-hidden={true} focusable="false" />
                      Resume Game
                  </button>
      <div className="h-px w-full bg-outline-variant my-unit"></div>
      {/* Secondary Actions */}
      <button className="w-full h-touch_target bg-transparent border border-outline-variant text-on-surface font-button text-button uppercase flex items-center justify-center gap-2 hover:bg-surface-variant hover:border-primary hover:text-primary transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                      Restart
                  </button>
      <button className="w-full h-touch_target bg-transparent border border-outline-variant text-on-surface font-button text-button uppercase flex items-center justify-center gap-2 hover:bg-surface-variant hover:border-primary hover:text-primary transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface" type="button" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
                      Settings
                  </button>
      <div className="h-px w-full bg-outline-variant my-unit"></div>
      {/* Quit Action */}
      <button className="w-full h-touch_target bg-transparent border border-error/50 text-error font-button text-button uppercase flex items-center justify-center gap-2 hover:bg-error/10 hover:border-error transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface" type="button" data-action-id="quit-to-menu-4" onClick={actions?.["quit-to-menu-4"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                      Quit to Menu
                  </button>
      </div>
      </div>
    </>
  );
}
