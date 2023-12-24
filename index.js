const startKey = new KeyBind("Start Macroing (Foraging)", Keyboard.KEY_NONE, "Astro")

import RenderLib from "../RenderLib/index.js"
import { prefix, lookAndBreak, lookAndAotv } from "./utils/exports"
import './features/watermark'

const duration = 1000
const timeout = 2000

register("tick", () => {
    if(startKey.isPressed()) {
        macroing = !macroing
        if(macroing) { 
            ChatLib.chat(prefix + "Macro starting!") 
        } else {
            ChatLib.chat(prefix + "Macro ending!")
        }
        setTimeout(() => {
            macro()
        }, timeout);
    }
})
let macroing = false;
let startx = -117.5
let starty = 74
let startz = -31.5
register("renderWorld", () => {
    RenderLib.drawInnerEspBox(startx, starty - 1, startz, 1, 1, 0, 1, 0, 1, true);
    if(macroing) {
        // RenderLib.drawInnerEspBox(-117.5, 75 - 1, -28.5, 1, 1, 0.5, 0, 1, 1, true);
        // RenderLib.drawInnerEspBox(-117.5, 75 - 1, -34.5, 1, 1, 0.5, 0, 1, 1, true);
    }
})

function macro() {
    if(!lookAndAotv) return ChatLib.chat(prefix + "ERROR | Aotv Not Found");
    if(!lookAndBreak) return ChatLib.chat(prefix + "ERROR | Aotv Not Found");
    lookAndBreak(0, 20, duration, macroing)
    setTimeout(() => {
        lookAndBreak(180, 20, duration, macroing)
        setTimeout(() => {
            lookAndAotv(66.8, 7.4, duration, macroing)
            setTimeout(() => {
                lookAndBreak(-90, 20, duration, macroing)
                setTimeout(() => {
                    lookAndAotv(66.8, 7, duration, macroing)
                    setTimeout(() => {
                        lookAndBreak(66.8, 7, duration, macroing)
                        setTimeout(() => {
                            lookAndBreak(-90, 20, duration, macroing)
                            setTimeout(() => {
                                lookAndAotv(136.5, 3, duration, macroing)
                                setTimeout(() => {
                                    lookAndBreak(90, 0, duration, macroing)
                                    setTimeout(() => {
                                        lookAndAotv(-137.5, 6.8, duration, macroing)
                                        setTimeout(() => {
                                            lookAndBreak(-25, 24, duration, macroing)
                                            setTimeout(() => {
                                                lookAndBreak(0.2, -46.5, duration, macroing)
                                                setTimeout(() => {
                                                    lookAndAotv(-160, 4, duration, macroing)
                                                    setTimeout(() => {
                                                        lookAndBreak(-22, 5, duration, macroing)
                                                        setTimeout(() => {
                                                            lookAndAotv(-54, 11.9, duration, macroing)
                                                            setTimeout(() => {
                                                                lookAndBreak(-90, 10, duration, macroing)
                                                                setTimeout(() => {
                                                                    lookAndAotv(1, 8.5, duration, macroing)
                                                                    setTimeout(() => {
                                                                        lookAndAotv(-81.5, 8.3, duration, macroing)
                                                                        setTimeout(() => {
                                                                            lookAndAotv(-84.8, 8.2, duration, macroing)
                                                                            setTimeout(() => {
                                                                                ChatLib.chat(prefix + "Thanks for using AstroLabs! Submit your feedback in discord.gg/astrolabs")
                                                                                macroing = false;
                                                                            }, timeout);
                                                                        }, timeout);
                                                                    }, timeout);
                                                                }, timeout);
                                                            }, timeout);
                                                        }, timeout);
                                                    }, timeout);
                                                }, timeout);
                                            }, timeout);
                                        }, timeout);
                                    }, timeout);
                                }, timeout);
                            }, timeout);
                        }, timeout)
                    }, timeout)
                }, timeout);
            }, timeout);
        }, timeout);
    }, timeout);
}