let expectedYaw = null;
let expectedPitch = null;
let isRotatedByScript = false;

export function lookAt(targetYaw, targetPitch, duration = 1000, macroing) {
    let currentYaw = Player.getYaw();
    let currentPitch = Player.getPitch();
    expectedYaw = targetYaw;
    expectedPitch = targetPitch;
    isRotatedByScript = true

    if(!macroing) return;
    let startTime = new Date().getTime();
    if(!macroing) return;
    function easeOutQuad(t) {
        const c4 = (2 * Math.PI) / 3;
        const factor = 1.70158;
    
        return t === 0 ? 0 : t === 1 ? 1
            : ((t -= 1) * t * ((factor + 1) * t + factor) + 1);
    }
    if(!macroing) return;
    function updateAngles() {
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - startTime;
        if(!macroing) return;
        if (elapsedTime >= duration) {
            setAngles(targetYaw, targetPitch);
            return;
        }
        if(!macroing) return;
        let progress = elapsedTime / duration;
        // Applying easing (easeOutQuad) to modify the progression curve
        progress = easeOutQuad(progress);

        let newYaw = currentYaw + (targetYaw - currentYaw) * progress;
        let newPitch = currentPitch + (targetPitch - currentPitch) * progress;

        setAngles(newYaw, newPitch);

        setTimeout(updateAngles, 1); // Adjust this delay to control the smoothness
    }

    updateAngles();
}

export function setAngles(yaw, pitch) {
    if(!World.isLoaded()) return;
    const player = Client.getMinecraft().field_71439_g
    player.field_70177_z = yaw
    player.field_70125_A = pitch
}

export const prefix = "§d[§5Astro §6Foraging §5BETA-0.1§d]§b "

const breakKey = new KeyBind(Client.getMinecraft().field_71474_y.field_74312_F)

export function breakBlock(duration = 150) {
    breakKey.setState(true)
    setTimeout(() => {
        breakKey.setState(false)
    }, duration);
}

const rightClick = new KeyBind(Client.getMinecraft().field_71474_y.field_74313_G)
const sneak = new KeyBind(Client.getMinecraft().field_71474_y.field_74311_E)

export function useAotv() {
    sneak.setState(true)
    setTimeout(() => {
        rightClick.setState(true)
        setTimeout(() => {
            rightClick.setState(false)
            sneak.setState(false)
        }, 50);
    }, 50);
}

export function lookAndBreak(yaw, pitch, duration = 2000, macroing,) {
    if(!macroing) return;
    let axe = Player.getInventory().getItems().slice(0, 9).findIndex(a => a?.getName()?.includes("Treecapitator"))
    let aotv = Player.getInventory().getItems().slice(0, 9).findIndex(a => a?.getName()?.includes("Aspect of the Void"))
    if(!macroing) return;
    if (axe == -1) ChatLib.chat(`${prefix} Treecap not Found`)
    if(!macroing) return;
    if (axe == -1) return false
    if(!macroing) return;
    try {
        if(Player.getHeldItemIndex() == axe); else {
            if(!macroing) return;
            Client.getMinecraft().field_71439_g.field_71071_by.field_70461_c = axe
            if(!macroing) return;
            // ChatLib.chat("Swapped To Axe!")
            if(!macroing) return;
        }
        // ChatLib.chat(prefix + "Setting Yaw: " + yaw + " and Setting Pitch: " + pitch)
        if(!macroing) return;
        lookAt(yaw, pitch, duration-750, macroing)
        if(!macroing) return;
        setTimeout(() => {
            if(!macroing) return;
            breakBlock(750)
            if(!macroing) return;
            // ChatLib.chat(prefix + "Used Treecap")
            if(!macroing) return;
            return true;
        }, duration);
    } catch(error) {
        if(!macroing) return;
        return false;
    }
}

export function lookAndAotv(yaw, pitch, duration = 2000, macroing) {
    if(!macroing) return;
    // ChatLib.chat(prefix + "AOTV Not Found In Hotbar!")
    let aotv = Player.getInventory().getItems().slice(0, 9).findIndex(a => a?.getName()?.includes("Aspect of the Void"))
    let axe = Player.getInventory().getItems().slice(0, 9).findIndex(a => a?.getName()?.includes("Treecapitator"))
    if(!macroing) return;
    if (aotv == -1) ChatLib.chat(`${prefix} Aotv not Found`)
    if(!macroing) return;
    if (aotv == -1) return false
    if(!macroing) return;
    // ChatLib.chat(prefix + "Setting Yaw: " + yaw + " and Setting Pitch: " + pitch)
    if(!macroing) return;
    try {
        if(Player.getHeldItemIndex() == aotv) {} else {
            if(!macroing) return;
            Client.getMinecraft().field_71439_g.field_71071_by.field_70461_c = aotv
            if(!macroing) return;
            // ChatLib.chat("Swapped To AOTV!")
        }
        if(!macroing) return;
        lookAt(yaw, pitch, duration-333, macroing)
        if(!macroing) return;
        setTimeout(() => {
            if(!macroing) return;
            useAotv()
            if(!macroing) return;
            // ChatLib.chat(prefix + "Used AOTV")
            if(!macroing) return;
            return true;
        }, duration);
    } catch(error) {
        if(!macroing) return;
        return false;
    }
}

export function sleep(timeout) {setTimeout(() => {}, timeout);}
