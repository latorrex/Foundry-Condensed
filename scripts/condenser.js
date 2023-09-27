Hooks.once('init', async function() {
    game.settings.register("Foundry Condensed", "actorSize", {
        name: 'Entity Height',
        scope: 'client',
        type: Number,
        default: 40,
        config: true,
        onChange: refresh
    });

    game.settings.register("Foundry Condensed", "sceneSize", {
        name: 'Scene Height',
        scope: 'client',
        type: Number,
        default: 75,
        config: true,
        onChange: refresh
    });
});
Hooks.on("renderSidebarDirectory", refresh)

function refresh(){
    const AS = game.settings.get("Foundry Condensed", "actorSize")
    const SS = game.settings.get("Foundry Condensed", "sceneSize")
    document.querySelector("section#scenes").style.setProperty('--sidebar-scene-height', `${SS}px`);
    document.documentElement.style.setProperty('--sidebar-item-height', `${AS}px`);
}


