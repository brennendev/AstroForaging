startKey = new KeyBind("Start Macroing (Foraging)", Keyboard.KEY_NONE, "Astro")

import RenderLib from "../RenderLib/index.js"
import { prefix, lookAndBreak, lookAndAotv, lookAt } from "./utils/exports"
import './features/watermark'
// import './utils/api.js'

duration = 2000
timeout = 3000

register("tick", () => {
    if(startKey.isPressed()) {
        macroing = !macroing
        if(macroing) { 
            ChatLib.chat(prefix + "Macro starting!") 
            setTimeout(() => {
                macro()
                setTimeout(() => {
                    macroing = true
                }, 60);
            }, timeout);
        } else {
            ChatLib.chat(prefix + "Macro ending!")
            loop = false;
        }
    } else if(macroing) {
        if(Client.isInGui() || Client.isInChat()) return ChatLib.chat(prefix + "Macro Disabled! (inGui/inChat detected)"), macroing = false, loop = false, swapped = false;
    }
})

loop = false;
macroing = false;
startx = -117.5
starty = 74
startz = -31.5
macroChecked = false;
rotationFailsafe = false;

register("worldLoad", () => {
    if(!macroing) return;
    macroing = false;
    loop = false;
    ChatLib.chat(prefix + "WorldLoad Detected! Disabling Macro!")
})

let swapped = false;

lastYaw = Player.getYaw();
lastPitch = Player.getPitch();

register("step", () => {
    lastYaw = Player.getYaw();
    lastPitch = Player.getPitch();
}).setFps(10)

function rotateCheck() {
    if(macroChecked == true) return;
    else { 
        macroChecked = true;
        const currentYaw = Player.getYaw();
        const currentPitch = Player.getPitch();

        const yawChange = Math.abs(currentYaw - lastYaw);
        const pitchChange = Math.abs(currentPitch - lastPitch);

        if ((yawChange > 1 || pitchChange > 1) && (yawChange < 181 && pitchChange < 181)) {
            ChatLib.chat(prefix + "MACRO CHECK DETECTED! TYPE: Rotation Check");
            setTimeout(() => {
                rotationFailsale()
            }, 150);
            macroing = false;
            loop = false;
        }

        lastYaw = currentYaw;
        lastPitch = currentPitch;
    }
}

register("step", () => {
    if(!World.isLoaded) return;
    if(!macroing) return;
    let aotv = Player.getInventory().getItems().slice(0, 9).findIndex(a => a?.getName()?.includes("Aspect of the Void"))
    let axe = Player.getInventory().getItems().slice(0, 9).findIndex(a => a?.getName()?.includes("Treecapitator"))  
    if (swapped && macroing && Player.getHeldItemIndex() !== axe && Player.getHeldItemIndex() !== aotv) {
        ItemCheck();
        macroing = false;
    } 
}).setFps(0.25)   

function ItemCheck() {
    macroing = false;
    ChatLib.chat(prefix + "Item Change Failsafe Initiated!")
    setTimeout(() => {
        lookAt(Player.getYaw() + Math.random()*33, Player.getPitch() + Math.random()*33, 3000, true)
        moveForward.setState(true)
        setTimeout(() => {
            moveForward.setState(false)
            jump.setState(true)
            setTimeout(() => {
                jump.setState(false)
                setTimeout(() => {
                    ChatLib.say("i think i just got macro checked xD")
                    ChatTriggers.reloadCT()
                }, 2000+1500);
            }, 784);
        }, 3500);
    }, timeout + timeout);
}

register("step", () => {
    if(!macroing) return;
    rotateCheck(macroing, loop)
}).setFps(100)

register("renderWorld", () => {
    RenderLib.drawInnerEspBox(startx, starty - 1, startz, 1, 1, 0, 1, 0, 0.25, true);
    RenderLib.drawInnerEspBox(-353.5, 103 - 1, -24.5, 1, 1, 0, 1, 0, 0.25, true);
    if(macroing) {
        // RenderLib.drawInnerEspBox(-117.5, 75 - 1, -28.5, 1, 1, 0.5, 0, 1, 1, true);
        // RenderLib.drawInnerEspBox(-117.5, 75 - 1, -34.5, 1, 1, 0.5, 0, 1, 1, true);
    }
})

function macro() {
    if(!lookAndAotv) return ChatLib.chat(prefix + "ERROR | Aotv Not Found");
    if(!lookAndBreak) return ChatLib.chat(prefix + "ERROR | Aotv Not Found");
    let axe = Player.getInventory().getItems().slice(0, 9).findIndex(a => a?.getName()?.includes("Treecapitator"))
    Client.getMinecraft().field_71439_g.field_71071_by.field_70461_c = axe
    setTimeout(() => {
        swapped = true
        lookAndBreak(0, 20, duration, macroing)
        setTimeout(() => {
            if(!macroing) return;
            lookAndBreak(180, 20, duration, macroing)
            if(!macroing) return;
            setTimeout(() => {
                if(!macroing) return;
                lookAndAotv(66.8, 7.4, duration, macroing)
                if(!macroing) return;
                setTimeout(() => {
                    if(!macroing) return;
                    lookAndBreak(-90, 20, duration, macroing)
                    if(!macroing) return;
                    setTimeout(() => {
                        lookAndAotv(66.8, 7, duration, macroing)
                        if(!macroing) return;
                        setTimeout(() => {
                            lookAndBreak(66.8, 7, duration, macroing)
                            if(!macroing) return;
                            setTimeout(() => {
                                lookAndBreak(-90, 20, duration, macroing)
                                if(!macroing) return;
                                setTimeout(() => {
                                    lookAndAotv(136.5, 3, duration, macroing)
                                    if(!macroing) return;
                                    setTimeout(() => {
                                        lookAndBreak(90, 0, duration, macroing)
                                        if(!macroing) return;
                                        setTimeout(() => {
                                            lookAndAotv(-140.6, 6.6, duration, macroing)
                                            if(!macroing) return;
                                            setTimeout(() => {
                                                lookAndBreak(-44, 19.5, duration, macroing)
                                                if(!macroing) return;
                                                setTimeout(() => {
                                                    lookAndBreak(-29.5, -42.9, duration, macroing)
                                                    if(!macroing) return;
                                                    setTimeout(() => {
                                                        lookAndAotv(-90.6, -72.8, duration, macroing)
                                                        if(!macroing) return;
                                                        setTimeout(() => {
                                                            lookAndAotv(-164.3, 32.2, duration, macroing)
                                                            if(!macroing) return;
                                                            setTimeout(() => {
                                                                lookAndBreak(-30.2, 4.4, duration, macroing)
                                                                if(!macroing) return;
                                                                setTimeout(() => {
                                                                    lookAndAotv(-54, 11.9, duration, macroing)
                                                                    if(!macroing) return;
                                                                    setTimeout(() => {
                                                                        lookAndBreak(-90, 10, duration, macroing)
                                                                        if(!macroing) return;
                                                                        setTimeout(() => {
                                                                            lookAndAotv(1, 8.5, duration, macroing)
                                                                            if(!macroing) return;
                                                                            setTimeout(() => {
                                                                                lookAndAotv(-81.5, 8.3, duration, macroing)
                                                                                if(!macroing) return;
                                                                                setTimeout(() => {
                                                                                    lookAndAotv(-84.8, 8.2, duration, macroing)
                                                                                    if(!macroing) return;
                                                                                    setTimeout(() => {
                                                                                        lookAndAotv(-79.2, 17.4, duration, macroing)
                                                                                        if(!macroing) return;
                                                                                        setTimeout(() => {
                                                                                            if(!macroing) return;
                                                                                            if(!loop) { 
                                                                                                ChatLib.chat(prefix + "Thanks for using AstroLabs! Submit your feedback in discord.gg/astrolabs")
                                                                                                macroing = false;
                                                                                            } else {
                                                                                                ChatLib.chat(prefix + "Loop Is Enabled! Restarting Macro In 15s (To let mana regen)")
                                                                                                setTimeout(() => {
                                                                                                    loopee(loop)
                                                                                                    swapped = false;
                                                                                                    setTimeout(() => {
                                                                                                        macroing = false;
                                                                                                    }, 15);
                                                                                                }, 15000);
                                                                                            }
                                                                                        }, timeout);
                                                                                    }, timeout);
                                                                                }, timeout);
                                                                            }, timeout);
                                                                        }, timeout);
                                                                    }, timeout);
                                                                }, timeout);
                                                            }, timeout);
                                                        }, timeout)
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
    }, 500);
}
function loopee(test) {
    if(!test) return;
    if(!macroing) return;
    setTimeout(() => {
        macro()
        setTimeout(() => {
            macroing = true
        }, 15);
    }, 50);
}
register("command", () => {
    loop = !loop
    ChatLib.chat(prefix + "Loop Is Now Set To " + loop)
}).setName("astroloop")

const moveForward = new KeyBind(Client.getMinecraft().field_71474_y.field_74351_w)
const jump = new KeyBind(Client.getMinecraft().field_71474_y.field_74314_A)

function rotationFailsale() {
        if(rotationFailsafe) return; else {
        rotationFailsafe = true;
        ChatLib.chat(prefix + "Rotation Check Failsafe Initiated!")
        setTimeout(() => {
            lookAt(Player.getYaw() + Math.random()*20, Player.getPitch() + Math.random()*20, 1500, true)
            moveForward.setState(true)
            setTimeout(() => {
                moveForward.setState(false)
                jump.setState(true)
                setTimeout(() => {
                    jump.setState(false)
                    setTimeout(() => {
                        ChatLib.say("i think i just got macro checked xD")
                        ChatTriggers.reloadCT()
                    }, 2000+1500);
                }, 2000);
            }, 2000);
        }, 2000)
    }
}
