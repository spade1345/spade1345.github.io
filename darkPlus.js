// @ts-nocheck
const METADATA = {
    author: "mrballou",
    name: "dark+ theme",
    version: "1.1.0",
    id: "dark+",
    description: "This is a darkmode that is even more dark",
    minimumGameVersion: ">=1.5.0",
};

class Mod extends shapez.Mod {
    init() {
        console.log("initializing theme");
        this.modInterface.registerGameTheme({
            id: "dark+",
            name: "Dark+",
            theme: RESOURCES["dark+.json"]
        });
        this.modInterface.registerCss(`

        :root{--darkp-color-text:#ffffff;--darkp-color-link-text:#f5f5f5;--darkp-button-invert:invert(1);--darkp-menue-background:#0c0e12;--darkp-menue-colors:#2a2f3a;--darkp-menue-content-colors:#3a3b46;--darkp-mods-border:0px;--darkp-checkBox-checked:#787783;--darkp-checkBox-unchecked:#4e4e4e;--darkp-upgrade-button-color:#707070;--darkp-toolbar-background:rgba(56, 55, 55, 27);--darkp-menue-selected:#050303;--darkp-menue-select-background:rgba(12, 14, 18, 0.8);--darkp-author-madeBy:#ffffff;--darkp-author-tobspr:#888a8f}html[data-theme="dark+"] body{color:var(--darkp-color-text)!important;background-color:var(--darkp-menue-background)!important}html[data-theme="dark+"] #state_MainMenuState .boxLink,html[data-theme="dark+"] .sidelinks a{color:var(--darkp-color-link-text)!important}html[data-theme="dark+"] .backButton,html[data-theme="dark+"] .closeButton,html[data-theme="dark+"] .editKeybinding,html[data-theme="dark+"] .editMods,html[data-theme="dark+"] .exitAppButton,html[data-theme="dark+"] .infoButton,html[data-theme="dark+"] .pin,html[data-theme="dark+"] .resetKeybinding,html[data-theme="dark+"] .settingsButton,html[data-theme="dark+"] .showInfo,html[data-theme="dark+"] .unpinButton{filter:var(--darkp-button-invert)!important}#ingame_HUD_GameMenu>button,html[data-theme="dark+"] #ingame_HUD_GameMenu>.button{filter:var(--darkp-button-invert)!important}html[data-theme="dark+"] #state_MainMenuState{background:var(--darkp-menue-background)!important}html[data-theme="dark+"] .boxLink,html[data-theme="dark+"] .mainContainer,html[data-theme="dark+"] .modsOverview,html[data-theme="dark+"] .sidelinks{background:var(--darkp-menue-colors)!important}html[data-theme="dark+"] #state_MainMenuState .footer>.sidelinks>a{background-color:var(--darkp-menue-colors)}html[data-theme="dark+"] #state_MainMenuState .savegame,html[data-theme="dark+"] .mod{background:var(--darkp-menue-content-colors) 50%/cover!important}html[data-theme="dark+"] #state_MainMenuState .modsOverview .modsList{border:var(--darkp-mods-border)!important}#ingame_HUD_TutorialHints .header,html[data-theme="dark+"] #ingame_HUD_KeybindingOverlay :not(.keybinding){color:var(--darkp-color-text)!important}html[data-theme="dark+"] #ingame_HUD_TutorialHints .header>span:before{filter:var(--darkp-button-invert)!important}html[data-theme="dark+"] .producerLink{color:var(--darkp-author-tobspr)!important}html[data-theme="dark+"] #state_MainMenuState .footer .author{color:var(--darkp-author-madeBy)!important}html[data-theme="dark+"] .savegames .styledButton:not(.resumeGame){filter:var(--darkp-button-invert)!important}html[data-theme="dark+"] #state_SettingsState .container .content .sidebar button.categoryButton{background-color:var(--darkp-menue-content-colors);color:var(--darkp-color-text)}html[data-theme="dark+"] #state_SettingsState .container .content .sidebar button.categoryButton.active{background-color:var(--darkp-menue-selected);color:var(--darkp-color-text)}html[data-theme="dark+"] .gameState.textualState .headerBar h1{color:var(--darkp-color-text)}html[data-theme="dark+"] .gameState.textualState>.container>.content{background-color:var(--darkp-menue-colors)}html[data-theme="dark+"] .gameState.textualState[data-theme="dark+"]>.container>.content html[data-theme="dark+"] .gameState.textualState>.container>.content,html[data-theme="dark+"] .setting{background-color:var(--darkp-menue-content-colors)!important}html[data-theme="dark+"] #state_SettingsState .container .content .sidebar button{background-color:var(--darkp-menue-content-colors);color:var(--darkp-color-text)}html[data-theme="dark+"] #state_SettingsState .container .content .categoryContainer .category .setting .value.enum{background-color:var(--darkp-menue-colors);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAElBMVEVHcEzMy8fNy8fLy8jNzMfMy8eRcaNoAAAABXRSTlMA/Fgre93ThXsAAACZSURBVEjH7dS9EYAgDAZQDp0AtYcNdAMdwYL9V1HgkEB+bLyzIRV8MQ8pVKlevb6vgQpXsD4s7uu5rEdv8APO78968yci9OInuDEYgEMOEc0MJtqRdo8m2gCfWSfEW9eRI+4NM+raVUgBMCUBGNNAyRmgNDggd1ggt3gg9QQgERIQCQmIhAgEQgQCIQM3YV6+MW37f6bXv3UBBt0fJk72ng4AAAAASUVORK5CYII=)}html[data-theme="dark+"] #state_SettingsState .buildVersion{background-color:var(--darkp-menue-colors)}html[data-theme="dark+"] .ingameDialog>.dialogInner{background-color:var(--darkp-menue-colors)}html[data-theme="dark+"] .ingameDialog>.dialogInner.optionChooserDialog .optionParent .option{background-color:var(--darkp-menue-content-colors)}html[data-theme="dark+"] .ingameDialog>.dialogInner.optionChooserDialog .optionParent .option.active{background-color:var(--darkp-menue-selected)}html[data-theme="dark+"] .ingameDialog{background:var(--menue-select-backgroun)}html[data-theme="dark+"] #state_InGameState .gameLoadingOverlay{background:var(--darkp-menue-colors)}html[data-theme="dark+"] #state_InGameState .prefab_GameHint{color:var(--darkp-color-text)}html[data-theme="dark+"] #ingame_HUD_Waypoints .waypoint{filter:var(--darkp-button-invert)!important}html[data-theme="dark+"] #ingame_HUD_PinnedShapes>.shape{color:var(--darkp-color-text)}#ingame_HUD_PinnedShapes>.shape.goal .amountLabel:after,html[data-theme="dark+"] #ingame_HUD_PinnedShapes>.shape.blueprint .amountLabel:after{filter:var(--darkp-button-invert)!important}html[data-theme="dark+"] .ingame_buildingsToolbar .buildings{background-color:var(--darkp-toolbar-background)}html[data-theme="dark+"] #ingame_HUD_Shop .content .upgrade{background-color:var(--darkp-menue-content-colors)}html[data-theme="dark+"] #ingame_HUD_Shop .content .upgrade .requirements .requirement .amount{background:var(--darkp-menue-colors)}html[data-theme="dark+"] #ingame_HUD_Shop .content .upgrade button.buy{background-color:var(--darkp-menue-colors);color:var(--darkp-upgrade-button-color);opacity:.7}html[data-theme="dark+"] .gameState:not(.arrived){background:var(--darkp-menue-colors)}html[data-theme="dark+"] .checkbox{background:var(--darkp-checkBox-unchecked)}html[data-theme="dark+"] .checkbox.checked{background:var(--darkp-checkBox-checked)}html[data-theme="dark+"] #state_KeybindingsState .content .hint{background:var(--darkp-menue-content-colors)}html[data-theme="dark+"] #ingame_HUD_Shop .content .upgrade button.buy.buyable{color:var(--darkp-color-text)}html[data-theme="dark+"] #state_MultiplayerState .mainContainer .savegames .savegame{background:var(--darkp-menue-content-colors)}html[data-theme="dark+"] #state_MultiplayerState{background:var(--darkp-menue-background) center center/cover!important}


`);
    }
}

const RESOURCES = {
    "dark+.json": {
        map: {
            background: "#010101",
            grid: "#050505",
            gridLineWidth: 1,

            selectionOverlay: "rgba(74, 163, 223, 0.7)",
            selectionOutline: "rgba(74, 163, 223, 0.5)",
            selectionBackground: "rgba(74, 163, 223, 0.2)",

            chunkBorders: "rgba(0, 30, 50, 0.03)",

            directionLock: {
                regular: {
                    color: "rgb(74, 237, 134)",
                    background: "rgba(74, 237, 134, 0.2)",
                },
                wires: {
                    color: "rgb(74, 237, 134)",
                    background: "rgba(74, 237, 134, 0.2)",
                },
                error: {
                    color: "rgb(255, 137, 137)",
                    background: "rgba(255, 137, 137, 0.2)",
                },
            },

            colorBlindPickerTile: "rgba(50, 50, 50, 0.4)",

            resources: {
                shape: "#556273",
                red: "#ff0000aa",
                green: "#00ff00aa",
                blue: "#0000ffaa",
            },

            chunkOverview: {
                empty: "#171717",
                filled: "#262626",
                beltColor: "#6c8f51",
            },

            wires: {
                overlayColor: "rgba(97, 161, 152, 0.75)",
                previewColor: "rgb(97, 161, 152, 0.4)",
                highlightColor: "rgba(72, 137, 255, 1)",
            },

            connectedMiners: {
                overlay: "rgba(40, 50, 60, 0.5)",
                textColor: "#fff",
                textColorCapped: "#ef5072",
                background: "rgba(40, 50, 60, 0.8)",
            },

            zone: {
                borderSolid: "rgba(23, 192, 255, 1)",
                outerColor: "rgba(240, 240, 255, 0.5)",
            },
        },

        items: {
            outline: "#55575a",
            outlineWidth: 0.75,
            circleBackground: "rgba(40, 50, 65, 0.1)",
        },

        shapeTooltip: {
            background: "#333650",
            outline: "#54565e",
        },
    },
};