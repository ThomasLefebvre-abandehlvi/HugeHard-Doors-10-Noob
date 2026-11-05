
/* =========================================================
   HUGEHARD DOORS 0.11
   hugeharddoors.js
   The operating system that opens opportunities.
   And doors.
   ========================================================= */

"use strict";

/* ---------------------------------------------------------
   ELEMENTS AND STATE
   --------------------------------------------------------- */
// HUGEHARD DOORS VIRTUAL FILE SYSTEM
const virtualFiles = {
    "Downloads": [],
    "Files": [],
    "Desktop": []
};

let virusStarted = false;
let virusStopped = false;

function addVirtualFile(folder, file) {
    if (!virtualFiles[folder].some(item => item.name === file.name)) {
        virtualFiles[folder].push(file);
    }
}

function getVirtualFile(folder, filename) {
    return virtualFiles[folder].find(file => file.name === filename);
}
const boogleSites = [
    {
        name: "EXEsafe.com",
        url: "https://exesafe.invalid",
        description: "100% trustworthy downloads. Probably.",
        keywords: ["gta", "gta vi", "gta 6", "free game", "download"]
    }
];

function searchBoogle(event) {
    event.preventDefault();

    const query = document.getElementById("boogle-query").value.trim();
    const results = document.getElementById("boogle-results");

    if (!query) {
        results.innerHTML = "<p>Please enter something to search.</p>";
        return;
    }

    results.innerHTML = `
        <p>Search results for: <strong>${escapeBoogleText(query)}</strong></p>
        <div class="boogle-result">
            <a href="#" onclick="openBoogleSite(0); return false;">
                EXEsafe.com
            </a>
            <p>YOUR NUMBER ONE SOURCE FOR COMPLETELY SAFE DOWNLOADS.</p>
            <small>https://exesafe.invalid</small>
        </div>
    `;
}

function escapeBoogleText(text) {
    return text.replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[character]);
}

function openBoogleSite(index) {
    const site = boogleSites[index];
    if (!site) return;

    if (site.name === "EXEsafe.com") {
        showExesafeInBoogle();
    }
}

function showExesafeInBoogle() {
    const results = document.getElementById("boogle-results");
    if (!results) return;

    results.innerHTML = `
        <div class="exesafe-page">
            <button class="retro-button" onclick="showBoogleHome()">
                ← Back to Boogle
            </button>

            <h1>EXEsafe.com</h1>
            <p>YOUR NUMBER ONE SOURCE FOR COMPLETELY SAFE DOWNLOADS.</p>

            <div class="exesafe-product">
                <h2>GRAND THEFT AUTO VI</h2>
                <p>PC EDITION — FREE DOWNLOAD!</p>
                <p>File size: 999 GB (probably)</p>
                <button class="retro-button" onclick="downloadVirusbase()">
                    DOWNLOAD NOW
                </button>
            </div>

            <small>EXEsafe.com is definitely not suspicious.</small>
        </div>
    `;
}

function showBoogleHome() {
    const results = document.getElementById("boogle-results");
    if (!results) return;

    results.innerHTML = `
        <p>Welcome back to Boogle. The internet, but less reliable.</p>
    `;
}
const desktop = document.getElementById("desktop");
const bootScreen = document.getElementById("boot-screen");
const bootMessages = document.getElementById("boot-messages");
const bootProgress = document.getElementById("boot-progress-bar");

const desktopIcons = document.getElementById("desktop-icons");
const windowLayer = document.getElementById("window-layer");
const errorLayer = document.getElementById("error-layer");

const startButton = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");
const shutdownButton = document.getElementById("shutdown-button");

const taskbarWindows = document.getElementById("taskbar-windows");
const clockElement = document.getElementById("clock");
const systemStatus = document.getElementById("system-status");
const notificationLayer = document.getElementById("notification-layer");

let windows = [];
let nextWindowId = 1;
let highestZIndex = 20;
let selectedIcon = null;
let lastOpenedApp = null;
let booted = false;
let notificationTimer = null;
let fakeVirusCount = 0;

function launchFakeVirus() {
    if (virusStarted) return;

    virusStarted = true;
    virusStopped = false;
    fakeVirusCount = 0;

    addVirtualFile("Desktop", {
        name: "EXE.EXE",
        type: "shortcut"
    });

    showNotification("New desktop item", "EXE.EXE has appeared.");

    const loading = document.createElement("div");
    loading.className = "virus-loading";
    loading.innerHTML = `
        <h3>EXE.EXE</h3>
        <p>Loading extremely important files...</p>
        <progress max="100" value="0"></progress>
    `;
    document.body.appendChild(loading);

    const bar = loading.querySelector("progress");
    let progress = 0;

    const interval = setInterval(() => {
        progress += 5;
        bar.value = progress;

        if (progress >= 100) {
            clearInterval(interval);
            loading.remove();
            createVirusError();
        }
    }, 150);
}

function createVirusError() {
    if (virusStopped || fakeVirusCount >= 30) return;

    fakeVirusCount++;

    const error = document.createElement("div");
    error.className = "virus-error";
    error.innerHTML = `
        <div class="virus-error-title">EXE.EXE — FATAL ERROR</div>
        <div class="virus-error-content">
            <h2>OH NO.</h2>
            <p>GAME.EXE HAS STOPPED BEING A GAME.</p>
            <p>ERROR CODE: 00821</p>
            <button>Close</button>
            <button class="virus-stop">Stop simulation</button>
        </div>
    `;

    document.body.appendChild(error);

    error.querySelector("button").onclick = () => {
        error.remove();

        for (let i = 0; i < 3; i++) {
            createVirusError();
        }
    };

    error.querySelector(".virus-stop").onclick = stopFakeVirus;
}

function stopFakeVirus() {
    virusStopped = true;
    virusStarted = false;

    document.querySelectorAll(".virus-error, .virus-loading")
        .forEach(element => element.remove());

    showNotification("EXE.EXE", "The fake virus simulation has been stopped.");
}

/* ---------------------------------------------------------
   GENERAL HELPERS
   --------------------------------------------------------- */

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[character]);
}

/* ---------------------------------------------------------
   BOOT SEQUENCE
   --------------------------------------------------------- */

async function bootSystem() {
    const messages = [
        "Checking door hinges...",
        "Locating missing folders...",
        "Replacing missing folders with doors...",
        "Warming up the doorknobs...",
        "Loading Internetn't...",
        "Asking the computer to behave...",
        "Ignoring 47 warnings...",
        "Checking whether the doors are doors...",
        "Almost ready. Probably."
    ];

    for (let i = 0; i < messages.length; i++) {
        bootMessages.textContent = messages[i];
        bootProgress.style.width = `${Math.round(((i + 1) / messages.length) * 100)}%`;
        await wait(350);
    }

    await wait(450);

    bootScreen.style.display = "none";
    desktop.style.display = "block";
    booted = true;

    updateClock();
    setInterval(updateClock, 1000);

    showNotification(
        "Welcome to Hugehard Doors",
        "Your desktop is ready. Please keep all doors closed while opening them."
    );

    startRandomNotifications();
}

bootSystem();

/* ---------------------------------------------------------
   DESKTOP ICON SELECTION AND OPENING
   --------------------------------------------------------- */

desktopIcons.addEventListener("click", event => {
    const icon = event.target.closest(".desktop-icon");

    if (!icon) {
        clearIconSelection();
        return;
    }

    selectIcon(icon);
});

desktopIcons.addEventListener("dblclick", event => {
    const icon = event.target.closest(".desktop-icon");

    if (!icon) return;

    const appName = icon.dataset.app;
    if (appName) openApp(appName);
});

function selectIcon(icon) {
    clearIconSelection();

    icon.classList.add("selected");
    selectedIcon = icon;
}

function clearIconSelection() {
    document.querySelectorAll(".desktop-icon.selected").forEach(icon => {
        icon.classList.remove("selected");
    });

    selectedIcon = null;
}

/* ---------------------------------------------------------
   APPLICATION CONTENT
   --------------------------------------------------------- */

function getAppContent(appName) {
    const apps = {

        "my-computer": {
            title: "My Doors",
            width: 480,
            height: 360,
            content: `
                <h3>🚪 Welcome to My Doors</h3>
                <p>Here are the doors installed on this computer.</p>
                <hr>
                <p>📁 C:\\ is now C:\\DOORS\\</p>
                <p>🚪 Main Door — Accessible</p>
                <p>🚪 Side Door — Slightly Stuck</p>
                <p>🔒 Basement Door — Locked</p>
                <p>❓ Door 404 — Not Found</p>
                <hr>
                <button class="retro-button" onclick="showNotification('Door report', 'There are too many doors.')">
                    Inspect doors
                </button>
            `
        },

        "recycle-bin": {
            title: "Recycle Door",
            width: 390,
            height: 280,
            content: `
                <h3>🗑️ Recycle Door</h3>
                <p>Welcome to the Recycle Door.</p>
                <p>Deleted files are waiting behind this door.</p>
                <hr>
                <p><strong>Items inside:</strong></p>
                <ul>
                    <li>Untitled Document (7)</li>
                    <li>DefinitelyNotAVirus.exe</li>
                    <li>Old Door Handle</li>
                    <li>Homework_FINAL_FINAL2.doc</li>
                </ul>
                <button class="retro-button" onclick="showNotification('Recycle Door', 'The items have been recycled into more doors.')">
                    Empty Recycle Door
                </button>
            `
        },

        "boogle": {
            title: "Boogle",
            width: 560,
            height: 430,
            content: `
                <div class="boogle-page">
                    <div class="boogle-logo">
                        <span style="color:#4285f4">B</span><span style="color:#ea4335">o</span><span style="color:#fbbc05">o</span><span style="color:#4285f4">g</span><span style="color:#34a853">l</span><span style="color:#ea4335">e</span>
                    </div>

                    <form onsubmit="searchBoogle(event)" class="boogle-search">
                        <input id="boogle-query" placeholder="Search Boogle..." autocomplete="off">
                        <button class="retro-button" type="submit">Search</button>
                    </form>

                    <div id="boogle-results">
                        <p>Welcome to Boogle. The internet, but less reliable.</p>
                    </div>
                </div>
            `
        },

        "paint": {
            title: "Paintn't",
            width: 480,
            height: 390,
            content: `
                <h3>🎨 Paintn't</h3>
                <p>Professional door painting software.</p>
                <div style="margin:10px 0;">
                    <label>Paint colour:</label>
                    <input type="color" id="paint-color" value="#008080">
                    <button class="retro-button" onclick="clearPaint()">Clear canvas</button>
                </div>
                <canvas id="paint-canvas" class="paint-canvas"
                    width="420" height="230"
                    style="touch-action:none"></canvas>
                <p>Draw something. Preferably a door.</p>
            `
        },

        "terminal": {
            title: "Door Prompt",
            width: 520,
            height: 350,
            content: `
                <div class="terminal-text" id="terminal-output">
                    HUGEHARD DOORS COMMAND PROMPT [Version 0.11]<br>
                    Copyright (C) Hugehard Corporation.<br><br>
                    Type HELP for a list of commands.<br><br>
                    <div id="terminal-lines"></div>
                    <div style="display:flex; gap:5px;">
                        <span>C:\\DOORS&gt;</span>
                        <input id="terminal-input" autocomplete="off"
                            spellcheck="false">
                    </div>
                </div>
            `
        },

        "settings": {
                title: "Door Settings",
                width: 430,
                height: 390,
                content: `
                    <h3>⚙️ Door Settings</h3>
                    <p>Configure your operating system.</p>
                    <hr>

                    <h3>Windows Updaten't</h3>
                    <p style="color:#a00000;font-weight:bold;">
                        ⚠ Your system needs an important update!
                    </p>

                    <p>Your version of Hugehard Doors is outdated.</p>
                    <p>Available update: HUGEHARD DOORS 0.12</p>

                    <button class="retro-button" onclick="startFakeUpdate()">
                        Install updates now
                    </button>

                    <hr>

                    <label>
                        <input type="checkbox" id="sound-toggle" checked>
                        Enable questionable sounds
                    </label>
                    <br><br>

                    <label>
                        <input type="checkbox" id="error-toggle" checked>
                        Allow random errors
                    </label>
                    <br><br>

                    <label>
                        <input type="checkbox" id="notification-toggle" checked>
                        Allow notifications
                    </label>

                    <hr>
                    <p><strong>System version:</strong> HUGEHARD DOORS 0.11</p>
                    <p><strong>Update status:</strong> Unavoidable.</p>
                `
            },

        "error": {
            title: "ERROR.COM",
            width: 370,
            height: 260,
            content: `
                <div style="text-align:center; padding:15px;">
                    <div style="font-size:48px;">⚠️</div>
                    <h2>DOOR ERROR</h2>
                    <p>PLEASE CLOSE THE DOOR BEFORE OPENING IT.</p>
                    <p>Error code: 0x0000DOOR</p>
                    <button class="retro-button" onclick="showNotification('ERROR.COM', 'Error successfully failed.')">
                        Fix error
                    </button>
                </div>
            `
        },

        "mystery": {
            title: "DO NOT OPEN",
            width: 360,
            height: 260,
            content: `
                <div class="mystery-text">
                    <h2>YOU OPENED IT.</h2>
                    <p>You were specifically told not to.</p>
                    <p>That was the entire instruction.</p>
                    <br>
                    <button class="retro-button" onclick="mysterySurprise()">
                        Close the door
                    </button>
                </div>
            `
        },

        "file-manager": {
            title: "File Manager",
            width: 520,
            height: 390,
            content: `
                <div class="file-manager">
                    <div class="file-toolbar">
                        <button class="retro-button" onclick="showVirtualFolder('Files')">Files</button>
                        <button class="retro-button" onclick="showVirtualFolder('Downloads')">Downloads</button>
                        <button class="retro-button" onclick="showVirtualFolder('Desktop')">Desktop</button>
                    </div>
                    <div id="virtual-file-list">
                        Select a folder.
                    </div>
                </div>
            `
        },

        "exesafe": {
            title: "EXEsafe.com",
            width: 520,
            height: 390,
            content: `
                <div class="exesafe-page">
                    <h1>EXEsafe.com</h1>
                    <p>YOUR NUMBER ONE SOURCE FOR COMPLETELY SAFE DOWNLOADS.</p>
                    <div class="exesafe-product">
                        <h2>GRAND THEFT AUTO VI</h2>
                        <p>PC EDITION — FREE DOWNLOAD!</p>
                        <p>File size: 999 GB (probably)</p>
                        <button class="retro-button" onclick="downloadVirusbase()">
                            DOWNLOAD NOW
                        </button>
                    </div>
                    <small>EXEsafe.com is definitely not suspicious.</small>
                </div>
            `
        },
    };

    return apps[appName] || null;
}

/* ---------------------------------------------------------
   OPEN APPLICATIONS
   --------------------------------------------------------- */

function openApp(appName) {
    const existing = windows.find(windowData =>
        windowData.appName === appName
    );

    if (existing) {
        restoreWindow(existing.id);
        return;
    }

    const app = getAppContent(appName);

    if (!app) {
        showNotification("Missing door", "This door does not lead anywhere.");
        return;
    }

    const id = nextWindowId++;

    const windowElement = document.createElement("div");
    windowElement.className = "app-window active";
    windowElement.dataset.windowId = id;

    const offset = (windows.length % 7) * 25;

    windowElement.style.left = `${100 + offset}px`;
    windowElement.style.top = `${65 + offset}px`;
    windowElement.style.width = `${app.width || 420}px`;
    windowElement.style.height = `${app.height || 300}px`;
    windowElement.style.zIndex = ++highestZIndex;

    windowElement.innerHTML = `
        <div class="window-titlebar">
            <span class="window-title">${escapeHTML(app.title)}</span>
            <div class="window-controls">
            <button class="minimize-window" title="Minimize">_</button>
            <button class="maximize-window" title="Maximize">□</button>
            <button class="close-window" title="Close">×</button>
        </div>
        </div>
        <div class="window-content">${app.content}</div>
        <div class="window-statusbar">Ready. Door is questionable.</div>
    `;

    windowLayer.appendChild(windowElement);

    const windowData = {
        id,
        appName,
        title: app.title,
        element: windowElement,
        minimized: false
    };

    windows.push(windowData);

    addTaskbarButton(windowData);
    activateWindow(id);
    setupWindowControls(windowData);
    setupDragging(windowData);
    setupResizing(windowData);
    if (appName === "terminal") setupTerminal();
    if (appName === "paint") setupPaint();
}

/* ---------------------------------------------------------
   WINDOW CONTROLS
   --------------------------------------------------------- */

function setupWindowControls(windowData) {
    const element = windowData.element;

    element.querySelector(".close-window").addEventListener("click", () => {
        closeWindow(windowData.id);
    });

    element.querySelector(".maximize-window").addEventListener("click", () => {
        toggleMaximizeWindow(windowData.id);
    });

    element.querySelector(".minimize-window").addEventListener("click", () => {
        minimizeWindow(windowData.id);
    });

    element.addEventListener("pointerdown", () => {
        activateWindow(windowData.id);
    });
}

function activateWindow(id) {
    const windowData = windows.find(item => item.id === id);
    if (!windowData) return;

    highestZIndex++;
    windowData.element.style.zIndex = highestZIndex;

    windows.forEach(item => {
        item.element.classList.toggle("active", item.id === id);

        const taskbarButton = document.querySelector(
            `.taskbar-window[data-window-id="${item.id}"]`
        );

        if (taskbarButton) {
            taskbarButton.classList.toggle("active", item.id === id);
        }
    });
}

function closeWindow(id) {
    const windowData = windows.find(item => item.id === id);
    if (!windowData) return;

    windowData.element.remove();

    const taskbarButton = document.querySelector(
        `.taskbar-window[data-window-id="${id}"]`
    );

    if (taskbarButton) taskbarButton.remove();

    windows = windows.filter(item => item.id !== id);

    if (windows.length) {
        const lastWindow = windows[windows.length - 1];
        restoreWindow(lastWindow.id);
    }
}

/* ---------------------------------------------------------
   MAXIMIZE AND RESTORE WINDOWS
   --------------------------------------------------------- */

function toggleMaximizeWindow(id) {
    const windowData = windows.find(item => item.id === id);
    if (!windowData) return;

    const element = windowData.element;

    if (!windowData.maximized) {
        // Save the original dimensions and position.
        windowData.previousBounds = {
            left: element.style.left,
            top: element.style.top,
            width: element.style.width,
            height: element.style.height
        };

        // Fill the usable desktop area.
        element.style.left = "0px";
        element.style.top = "0px";
        element.style.width = `${windowLayer.clientWidth}px`;
        element.style.height = `${windowLayer.clientHeight}px`;

        windowData.maximized = true;

    } else {
        // Restore the previous dimensions and position.
        const bounds = windowData.previousBounds;

        if (bounds) {
            element.style.left = bounds.left;
            element.style.top = bounds.top;
            element.style.width = bounds.width;
            element.style.height = bounds.height;
        }

        windowData.maximized = false;
    }

    const button = element.querySelector(".maximize-window");

    if (button) {
        button.textContent = windowData.maximized ? "❐" : "□";
        button.title = windowData.maximized ? "Restore" : "Maximize";
    }

    activateWindow(id);
}

function minimizeWindow(id) {
    const windowData = windows.find(item => item.id === id);
    if (!windowData) return;

    windowData.element.style.display = "none";
    windowData.minimized = true;

    const button = document.querySelector(
        `.taskbar-window[data-window-id="${id}"]`
    );

    if (button) button.classList.remove("active");
}

function restoreWindow(id) {
    const windowData = windows.find(item => item.id === id);
    if (!windowData) return;

    windowData.element.style.display = "flex";
    windowData.minimized = false;

    activateWindow(id);
}

/* ---------------------------------------------------------
   TASKBAR BUTTONS
   --------------------------------------------------------- */

function addTaskbarButton(windowData) {
    const button = document.createElement("button");

    button.className = "taskbar-window active";
    button.dataset.windowId = windowData.id;
    button.textContent = windowData.title;

    button.addEventListener("click", () => {
        if (windowData.minimized) {
            restoreWindow(windowData.id);
        } else {
            const isActive = windowData.element.classList.contains("active");

            if (isActive) {
                minimizeWindow(windowData.id);
            } else {
                restoreWindow(windowData.id);
            }
        }
    });

    taskbarWindows.appendChild(button);
}

/* ---------------------------------------------------------
   DRAGGABLE WINDOWS
   --------------------------------------------------------- */

function setupDragging(windowData) {
    const titlebar = windowData.element.querySelector(".window-titlebar");
    const element = windowData.element;

    let dragging = false;
    let startX = 0;
    let startY = 0;
    let originalLeft = 0;
    let originalTop = 0;

    titlebar.addEventListener("pointerdown", event => {
        if (event.target.closest("button")) return;

        dragging = true;
        titlebar.setPointerCapture(event.pointerId);

        startX = event.clientX;
        startY = event.clientY;

        originalLeft = element.offsetLeft;
        originalTop = element.offsetTop;

        activateWindow(windowData.id);
    });

    titlebar.addEventListener("pointermove", event => {
        if (!dragging) return;

        const newLeft = originalLeft + event.clientX - startX;
        const newTop = originalTop + event.clientY - startY;

        const maxLeft = Math.max(0, windowLayer.clientWidth - 80);
        const maxTop = Math.max(0, windowLayer.clientHeight - 25);

        element.style.left = `${Math.max(-element.offsetWidth + 80, Math.min(newLeft, maxLeft))}px`;
        element.style.top = `${Math.max(0, Math.min(newTop, maxTop))}px`;
    });

    titlebar.addEventListener("pointerup", () => {
        dragging = false;
    });

    titlebar.addEventListener("pointercancel", () => {
        dragging = false;
    });
}

/* ---------------------------------------------------------
   RESIZABLE APPLICATION WINDOWS
   --------------------------------------------------------- */

function setupResizing(windowData) {
    const element = windowData.element;

    const directions = [
        "n", "s", "e", "w",
        "ne", "nw", "se", "sw"
    ];

    directions.forEach(direction => {
        const handle = document.createElement("div");

        handle.className = `resize-handle resize-${direction}`;
        handle.dataset.direction = direction;

        element.appendChild(handle);

        handle.addEventListener("pointerdown", event => {
            event.preventDefault();
            event.stopPropagation();

            if (windowData.minimized) return;

            activateWindow(windowData.id);

            const startX = event.clientX;
            const startY = event.clientY;

            const startWidth = element.offsetWidth;
            const startHeight = element.offsetHeight;
            const startLeft = element.offsetLeft;
            const startTop = element.offsetTop;

            const minWidth = 260;
            const minHeight = 180;

            handle.setPointerCapture(event.pointerId);

            function resize(event) {
                const dx = event.clientX - startX;
                const dy = event.clientY - startY;

                let width = startWidth;
                let height = startHeight;
                let left = startLeft;
                let top = startTop;

                if (direction.includes("e")) {
                    width = startWidth + dx;
                }

                if (direction.includes("s")) {
                    height = startHeight + dy;
                }

                if (direction.includes("w")) {
                    width = startWidth - dx;
                    left = startLeft + dx;
                }

                if (direction.includes("n")) {
                    height = startHeight - dy;
                    top = startTop + dy;
                }

                // Keep the window within the desktop area.
                const maxWidth = windowLayer.clientWidth - left;
                const maxHeight = windowLayer.clientHeight - top;

                width = Math.max(minWidth, Math.min(width, maxWidth));
                height = Math.max(minHeight, Math.min(height, maxHeight));

                // Correct position when resizing from the left or top.
                if (direction.includes("w")) {
                    left = startLeft + startWidth - width;
                }

                if (direction.includes("n")) {
                    top = startTop + startHeight - height;
                }

                left = Math.max(
                    0,
                    Math.min(left, windowLayer.clientWidth - minWidth)
                );

                top = Math.max(
                    0,
                    Math.min(top, windowLayer.clientHeight - minHeight)
                );

                element.style.width = `${width}px`;
                element.style.height = `${height}px`;
                element.style.left = `${left}px`;
                element.style.top = `${top}px`;
            }

            function stopResize() {
                handle.removeEventListener("pointermove", resize);
                handle.removeEventListener("pointerup", stopResize);
                handle.removeEventListener("pointercancel", stopResize);
            }

            handle.addEventListener("pointermove", resize);
            handle.addEventListener("pointerup", stopResize);
            handle.addEventListener("pointercancel", stopResize);
        });
    });
}
/* ---------------------------------------------------------
   START MENU
   --------------------------------------------------------- */

startButton.addEventListener("click", () => {
    startMenu.hidden = !startMenu.hidden;
    startButton.classList.toggle("active", !startMenu.hidden);
});

startMenu.addEventListener("click", event => {
    const button = event.target.closest("[data-app]");

    if (button) {
        openApp(button.dataset.app);
        startMenu.hidden = true;
        startButton.classList.remove("active");
    }
});

document.addEventListener("click", event => {
    if (
        !startMenu.hidden &&
        !startMenu.contains(event.target) &&
        !startButton.contains(event.target)
    ) {
        startMenu.hidden = true;
        startButton.classList.remove("active");
    }
});

/* ---------------------------------------------------------
   SHUTDOWN
   --------------------------------------------------------- */

shutdownButton.addEventListener("click", async () => {
    startMenu.hidden = true;
    desktop.style.display = "none";
    bootScreen.style.display = "flex";

    bootMessages.textContent = "Closing all doors...";
    bootProgress.style.width = "100%";

    await wait(1200);

    bootMessages.textContent = "It is now safe to close your browser.";

    await wait(1800);

    bootScreen.style.display = "none";

    const shutdownScreen = document.createElement("div");

    shutdownScreen.style.cssText = `
        position:fixed;
        inset:0;
        z-index:20000;
        display:flex;
        align-items:center;
        justify-content:center;
        background:#000;
        color:#fff;
        font-family:Arial,sans-serif;
        text-align:center;
        font-size:20px;
    `;

    shutdownScreen.innerHTML = `
        <div>
            <h2>HUGEHARD DOORS</h2>
            <p>System shut down.</p>
            <p style="font-size:13px;color:#888">
                The doors are now somebody else's problem.
            </p>
            <button class="retro-button" id="restart-system">
                Restart system
            </button>
        </div>
    `;

    document.body.appendChild(shutdownScreen);

    shutdownScreen.querySelector("#restart-system").addEventListener("click", () => {
        shutdownScreen.remove();

        windows.forEach(item => item.element.remove());
        windows = [];
        taskbarWindows.innerHTML = "";

        bootProgress.style.width = "0%";
        bootSystem();
    });
});

/* ---------------------------------------------------------
   CLOCK
   --------------------------------------------------------- */

function updateClock() {
    const now = new Date();

    clockElement.textContent = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
}

/* ---------------------------------------------------------
   NOTIFICATIONS
   --------------------------------------------------------- */

function showNotification(title, message) {
    const settingsWindow = windows.find(item => item.appName === "settings");

    if (settingsWindow) {
        const toggle = settingsWindow.element.querySelector("#notification-toggle");

        if (toggle && !toggle.checked) return;
    }

    const notification = document.createElement("div");
    notification.className = "system-notification";

    notification.innerHTML = `
        <div class="notification-title">${escapeHTML(title)}</div>
        <div class="notification-message">${escapeHTML(message)}</div>
    `;

    notificationLayer.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}

function startRandomNotifications() {
    const messages = [
        ["Door Service", "Your door has been serviced. It is still a door."],
        ["System Warning", "A door has been detected in your vicinity."],
        ["Hugehard Update", "No updates are available. Please stop checking."],
        ["Internetn't", "The internet has moved to another room."],
        ["Door Reminder", "You left a door open. Somewhere."],
        ["System Message", "Everything is under control. Probably."],
        ["Storage Warning", "Your computer is running out of doors."],
        ["Important", "Please do not feed the hinges."]
    ];

    notificationTimer = setInterval(() => {
        if (!booted) return;

        if (Math.random() < 0.45) {
            const message = randomItem(messages);
            showNotification(message[0], message[1]);
        }
    }, 18000);
}

/* ---------------------------------------------------------
   INTERNETN'T
   --------------------------------------------------------- */

function fakeBrowse() {
    const address = document.getElementById("internet-address");
    const page = document.getElementById("internet-page");

    if (!address || !page) return;

    const enteredAddress = address.value.trim();

    page.innerHTML = `
        <h2>DOOR NOT FOUND</h2>
        <p>The requested location is behind a door that does not exist.</p>
        <p><strong>Address:</strong> ${escapeHTML(enteredAddress)}</p>
        <p>Error 404: Door not found.</p>
    `;
}

/* ---------------------------------------------------------
   PAINTN'T
   --------------------------------------------------------- */

let paintContext = null;
let painting = false;

function setupPaint() {
    const canvas = document.getElementById("paint-canvas");
    if (!canvas) return;

    paintContext = canvas.getContext("2d");

    canvas.addEventListener("pointerdown", event => {
        painting = true;
        canvas.setPointerCapture(event.pointerId);

        const rect = canvas.getBoundingClientRect();

        paintContext.beginPath();
        paintContext.moveTo(
            (event.clientX - rect.left) * (canvas.width / rect.width),
            (event.clientY - rect.top) * (canvas.height / rect.height)
        );
    });

    canvas.addEventListener("pointermove", event => {
        if (!painting) return;

        const rect = canvas.getBoundingClientRect();

        paintContext.strokeStyle =
            document.getElementById("paint-color")?.value || "#000000";

        paintContext.lineWidth = 4;
        paintContext.lineCap = "round";

        paintContext.lineTo(
            (event.clientX - rect.left) * (canvas.width / rect.width),
            (event.clientY - rect.top) * (canvas.height / rect.height)
        );

        paintContext.stroke();
    });

    canvas.addEventListener("pointerup", () => painting = false);
    canvas.addEventListener("pointercancel", () => painting = false);
}

function clearPaint() {
    const canvas = document.getElementById("paint-canvas");
    if (!canvas) return;

    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}

/* ---------------------------------------------------------
   DOOR PROMPT TERMINAL
   --------------------------------------------------------- */

function setupTerminal() {
    const input = document.getElementById("terminal-input");
    const output = document.getElementById("terminal-lines");

    if (!input || !output) return;

    input.addEventListener("keydown", event => {
        if (event.key !== "Enter") return;

        const command = input.value.trim();
        input.value = "";

        const line = document.createElement("div");
        line.textContent = `C:\\DOORS> ${command}`;
        output.appendChild(line);

        const result = document.createElement("div");
        result.textContent = runTerminalCommand(command);
        output.appendChild(result);

        output.scrollIntoView({ block: "nearest" });
    });

    input.focus();
}

function runTerminalCommand(command) {
    const parts = command.trim().split(/\s+/);
    const action = (parts[0] || "").toLowerCase();

    switch (action) {
        case "":
            return "";

        case "help":
            return "Commands: HELP, DIR, CLS, VER, DOOR, OPEN, CLOSE, WHOAMI, EXIT";

        case "dir":
            return "MYDOORS.DIR  INTERNETN'T.EXE  PAINTN'T.EXE  ERROR.COM  DO_NOT_OPEN.DOOR";

        case "cls":
            document.getElementById("terminal-lines").innerHTML = "";
            return "";

        case "ver":
            return "HUGEHARD DOORS Version 0.11 — Built with questionable confidence.";

        case "door":
            return "Door status: Open. Door status: Closed. Door status: Confused.";

        case "open":
            return "Opening door... Please wait... Door is already open.";

        case "close":
            return "Which door? There are too many.";

        case "whoami":
            return "You are the person who opened the terminal.";

        case "exit":
            return "This terminal refuses to leave.";

        case "xyzzy":
            return "Nothing happens. The door knows what you did.";

        default:
            return `Bad command or file name: ${parts[0]}`;
    }
}

/* ---------------------------------------------------------
   MYSTERY DOOR
   --------------------------------------------------------- */

function mysterySurprise() {
    const messages = [
        "The door closes. Another door appears.",
        "You hear a knock from the other side.",
        "There is no other side.",
        "The door has been successfully closed. It was never open.",
        "A message appears: THANK YOU FOR OPENING THE DOOR."
    ];

    showNotification("DO NOT OPEN", randomItem(messages));

    const mysteryWindow = windows.find(item => item.appName === "mystery");

    if (mysteryWindow) {
        closeWindow(mysteryWindow.id);
    }
}
/* =========================================================
   HUGEHARD DOORS UPDATE DISASTER
   Endless update simulation
   ========================================================= */

let fakeUpdateRunning = false;
let fakeUpdateTimers = [];
let fakeUpdateOverlay = null;

function clearFakeUpdateTimers() {
    fakeUpdateTimers.forEach(timer => clearTimeout(timer));
    fakeUpdateTimers = [];
}

function scheduleFakeUpdate(callback, delay) {
    const timer = setTimeout(callback, delay);
    fakeUpdateTimers.push(timer);
}

function startFakeUpdate() {
    if (fakeUpdateRunning) return;

    fakeUpdateRunning = true;
    clearFakeUpdateTimers();

    // Hide all application windows and the desktop.
    desktop.style.display = "none";

    fakeUpdateOverlay = document.createElement("div");
    fakeUpdateOverlay.id = "fake-update-screen";

    document.body.appendChild(fakeUpdateOverlay);

    runFakeUpdateCycle();
}

function createUpdateScreen(background, content) {
    if (!fakeUpdateOverlay) return;

    fakeUpdateOverlay.style.background = background;
    fakeUpdateOverlay.innerHTML = content;
}

function createUpdateProgress() {
    return `
        <div class="update-progress-track">
            <div class="update-progress-bar"></div>
        </div>
    `;
}

function runFakeUpdateCycle() {
    if (!fakeUpdateRunning) return;

    // PHASE 1: BLACK SCREEN
    createUpdateScreen("#000000", `
        <div class="update-black-screen">
            <img src="hugeharddoors.png" alt="Hugehard Doors">
            <div class="update-loading-label">Preparing updates...</div>
            ${createUpdateProgress()}
            <div class="update-footer">
                Please do not turn off your computer.
            </div>
        </div>
    `);

    scheduleFakeUpdate(() => {
        // PHASE 2: WORKING ON UPDATES
        createUpdateScreen("#60452f", `
            <div class="update-windows-screen">
                <img src="hugeharddoors.png" alt="Hugehard Doors">
                <h2>Working on updates 101%</h2>
                <p>Don't turn off your computer.</p>
                ${createUpdateProgress()}
                <p class="update-percent">101% complete</p>
            </div>
        `);

        scheduleFakeUpdate(() => {
            // PHASE 3: UNDOING CHANGES
            createUpdateScreen("#60452f", `
                <div class="update-windows-screen">
                    <img src="hugeharddoors.png" alt="Hugehard Doors">
                    <h2>Doors Wasn't Capable of updates</h2>
                    <p>Undoing Changes</p>
                    ${createUpdateProgress()}
                    <p class="update-percent">Please don't turn off your computer.</p>
                </div>
            `);

            scheduleFakeUpdate(() => {
                // PHASE 4: CLEANING UP
                createUpdateScreen("#60452f", `
                    <div class="update-windows-screen">
                        <img src="hugeharddoors.png" alt="Hugehard Doors">
                        <h2>Cleaning up 0 %</h2>
                        <p>Restoring your previous version of Doors...</p>
                        ${createUpdateProgress()}
                    </div>
                `);

                scheduleFakeUpdate(() => {
                    // PHASE 5: RESTARTING
                    createUpdateScreen("#000000", `
                        <div class="update-black-screen">
                            <img src="hugeharddoors.png" alt="Hugehard Doors">
                            <h2>Restarting...</h2>
                            ${createUpdateProgress()}
                            <p>Please wait.</p>
                        </div>
                    `);

                    scheduleFakeUpdate(() => {
                        // PHASE 6: START THE SAME UPDATE AGAIN
                        runFakeUpdateCycle();
                    }, 4000);

                }, 10000);

            }, 10000);

        }, 10000);

    }, 5000);
}

function stopFakeUpdate() {
    if (!fakeUpdateRunning) return;

    fakeUpdateRunning = false;
    clearFakeUpdateTimers();

    if (fakeUpdateOverlay) {
        fakeUpdateOverlay.remove();
        fakeUpdateOverlay = null;
    }

    desktop.style.display = "block";

    showNotification(
        "Update interrupted",
        "The update has been cancelled. Your system remains at version 0.11."
    );
}
/* ---------------------------------------------------------
   KEYBOARD SHORTCUTS
   --------------------------------------------------------- */

document.addEventListener("keydown", event => {
    if (!booted) return;

    if (event.key === "Escape") {
        startMenu.hidden = true;
        startButton.classList.remove("active");
        clearIconSelection();
    }

    if (event.key === "F1") {
        event.preventDefault();
        openApp("my-computer");
    }

    if (event.ctrlKey && event.key.toLowerCase() === "e") {
        event.preventDefault();
        openApp("error");
    }
    if (event.key === "Escape" && fakeUpdateRunning) {
    stopFakeUpdate();
    return;
    }
});

/* ---------------------------------------------------------
   DESKTOP BACKGROUND CLICK
   --------------------------------------------------------- */

desktop.addEventListener("click", event => {
    if (
        event.target === desktop ||
        event.target.id === "desktop-background"
    ) {
        clearIconSelection();
    }
});

/* ---------------------------------------------------------
   VIRUSBASE DOWNLOAD AND EXTRACTION
   --------------------------------------------------------- */
function downloadVirusbase() {
    addVirtualFile("Downloads", {
        name: "Virusbase.zip",
        type: "zip"
    });

    showNotification(
        "Download complete",
        "Virusbase.zip has been saved to Downloads."
    );

    showVirtualFolder("Downloads");
}

function extractVirusbase() {
    addVirtualFile("Files", {
        name: "Virusbase",
        type: "folder"
    });

    addVirtualFile("Files", {
        name: "game.exe",
        type: "fake-exe"
    });

    showNotification(
        "Extraction complete",
        "game.exe was extracted."
    );

    showVirtualFolder("Files");
}

function showVirtualFolder(folder) {
    const list = document.getElementById("virtual-file-list");
    if (!list) return;

    const files = virtualFiles[folder] || [];

    list.innerHTML = `
        <h3>${folder}</h3>
        ${
            files.length
                ? files.map(file => `
                    <div class="virtual-file"
                        data-file="${file.name}"
                        data-folder="${folder}"
                        ondblclick="openVirtualFile('${folder}', '${file.name}')">
                        ${file.type === "folder" ? "📁" : file.type === "zip" ? "🗜️" : "📄"}
                        ${file.name}
                    </div>
                `).join("")
                : "<p>This folder is empty.</p>"
        }
    `;
}

/* ---------------------------------------------------------
   VIRTUAL FILE INTERACTIONS
   --------------------------------------------------------- */
function openVirtualFile(folder, filename) {
    const file = getVirtualFile(folder, filename);
    if (!file) return;

    if (file.name === "Virusbase.zip") {
        showNotification("Archive", "Right-click Virusbase.zip and choose Extract.");
    } else if (file.name === "game.exe") {
        launchFakeVirus();
    } else if (file.type === "folder") {
        showNotification("Folder", "You opened " + file.name);
    }
}

let virtualClipboard = null;

function showUniversalContextMenu(event, items) {
    event.preventDefault();
    event.stopPropagation();

    document.querySelectorAll(".universal-context-menu")
        .forEach(menu => menu.remove());

    const menu = document.createElement("div");
    menu.className = "universal-context-menu";

    menu.innerHTML = items.map(item => {
        if (item.separator) return `<div class="context-separator"></div>`;

        return `
            <button ${item.disabled ? "disabled" : ""}
                onclick="(${item.action})()">
                ${item.label}
            </button>
        `;
    }).join("");

    menu.style.left = Math.min(event.clientX, window.innerWidth - 210) + "px";
    menu.style.top = Math.min(event.clientY, window.innerHeight - 350) + "px";

    document.body.appendChild(menu);

    const closeMenu = click => {
        if (!menu.contains(click.target)) {
            menu.remove();
            document.removeEventListener("pointerdown", closeMenu);
        }
    };

    setTimeout(() => {
        document.addEventListener("pointerdown", closeMenu);
    }, 0);
}

function showFileContextMenu(event, folder, filename) {
    const file = getVirtualFile(folder, filename);
    if (!file) return;

    const safeFolder = JSON.stringify(folder);
    const safeFilename = JSON.stringify(filename);

    showUniversalContextMenu(event, [
        {
            label: "Open",
            action: `() => openVirtualFile(${safeFolder}, ${safeFilename})`
        },
        { separator: true },
        {
            label: "Cut",
            action: `() => cutVirtualFile(${safeFolder}, ${safeFilename})`
        },
        {
            label: "Copy",
            action: `() => copyVirtualFile(${safeFolder}, ${safeFilename})`
        },
        {
            label: "Paste",
            disabled: !virtualClipboard,
            action: `() => pasteVirtualFile(${safeFolder})`
        },
        { separator: true },
        {
            label: "Extract All...",
            disabled: file.type !== "zip",
            action: `() => extractVirusbase()`
        },
        {
            label: "Rename",
            action: `() => renameVirtualFile(${safeFolder}, ${safeFilename})`
        },
        {
            label: "Delete",
            action: `() => deleteVirtualFile(${safeFolder}, ${safeFilename})`
        },
        { separator: true },
        {
            label: "Properties",
            action: `() => showNotification('Properties', ${safeFilename})`
        }
    ]);
}

function cutVirtualFile(folder, filename) {
    virtualClipboard = { folder, filename, cut: true };
    showNotification("File Manager", filename + " is ready to move.");
}

function copyVirtualFile(folder, filename) {
    virtualClipboard = { folder, filename, cut: false };
    showNotification("File Manager", filename + " copied.");
}

function pasteVirtualFile(destination) {
    if (!virtualClipboard) return;

    const source = virtualClipboard;
    const file = getVirtualFile(source.folder, source.filename);

    if (!file) return;

    addVirtualFile(destination, { ...file });

    if (source.cut) {
        virtualFiles[source.folder] = virtualFiles[source.folder]
            .filter(item => item.name !== source.filename);
    }

    virtualClipboard = null;
    showVirtualFolder(destination);
}

function renameVirtualFile(folder, filename) {
    const file = getVirtualFile(folder, filename);
    if (!file) return;

    const newName = prompt("Enter the new name:", filename);
    if (!newName || !newName.trim()) return;

    if (virtualFiles[folder].some(item => item.name === newName.trim())) {
        showNotification("Rename failed", "A file with that name already exists.");
        return;
    }

    file.name = newName.trim();
    showVirtualFolder(folder);
}

function deleteVirtualFile(folder, filename) {
    if (!confirm("Move " + filename + " to the Recycle Door?")) return;

    const file = getVirtualFile(folder, filename);
    if (!file) return;

    addVirtualFile("Files", {
        ...file,
        name: file.name
    });

    virtualFiles[folder] = virtualFiles[folder]
        .filter(item => item.name !== filename);

    showVirtualFolder(folder);
}
/* ---------------------------------------------------------
   DESKTOP CONTEXT MENU
   --------------------------------------------------------- */
document.getElementById("desktop").addEventListener("contextmenu", event => {
    if (event.target.closest(".app-window, .desktop-icon")) return;

    showUniversalContextMenu(event, [
        {
            label: "View  ▸",
            action: `() => showNotification('View', 'Large, medium and small icons are available in this menu.')`
        },
        {
            label: "Sort by  ▸",
            action: `() => sortDesktopIcons()`
        },
        {
            label: "Refresh",
            action: `() => refreshDesktop()`
        },
        { separator: true },
        {
            label: "Paste",
            disabled: !virtualClipboard,
            action: `() => pasteVirtualFile('Desktop')`
        },
        {
            label: "New  ▸",
            action: `() => createDesktopTextFile()`
        },
        { separator: true },
        {
            label: "Display settings",
            action: `() => showNotification('Display settings', 'Resolution: Whatever fits.')`
        },
        {
            label: "Personalize",
            action: `() => openApp('settings')`
        }
    ]);
});

function refreshDesktop() {
    document.querySelectorAll(".universal-context-menu")
        .forEach(menu => menu.remove());

    showNotification("Desktop", "Desktop refreshed.");
}

function sortDesktopIcons() {
    const container = document.getElementById("desktop-icons");
    if (!container) return;

    const icons = [...container.children];

    icons.sort((a, b) =>
        a.innerText.trim().localeCompare(b.innerText.trim())
    );

    icons.forEach(icon => container.appendChild(icon));
}

function createDesktopTextFile() {
    const name = prompt("Enter a new file name:", "New Text Document.txt");
    if (!name || !name.trim()) return;

    addVirtualFile("Desktop", {
        name: name.trim(),
        type: "text"
    });

    showNotification("New file", name + " created.");
}
document.addEventListener("contextmenu", event => {
    const fileElement = event.target.closest(".virtual-file");

    if (!fileElement) return;

    showFileContextMenu(
        event,
        fileElement.dataset.folder,
        fileElement.dataset.file
    );
});

const DESKTOP_LAYOUT_KEY = "hugehard_doors_desktop_layout";

function saveDesktopLayout() {
    const container = document.getElementById("desktop-icons");
    if (!container) return;

    const positions = {};

    container.querySelectorAll(".desktop-icon").forEach((icon, index) => {
        const key = icon.dataset.app || icon.innerText.trim() || index;

        positions[key] = {
            left: icon.style.left,
            top: icon.style.top
        };
    });

    localStorage.setItem(DESKTOP_LAYOUT_KEY, JSON.stringify(positions));
}

function enableDesktopIconDragging() {
    const container = document.getElementById("desktop-icons");
    if (!container) return;

    // Make the desktop icon area a positioning container.
    container.style.position = "relative";

    const savedLayout = JSON.parse(
        localStorage.getItem(DESKTOP_LAYOUT_KEY) || "{}"
    );

    // Preserve the original layout the first time this code runs.
    const icons = [...container.querySelectorAll(".desktop-icon")];

    const initialPositions = icons.map(icon => ({
        icon,
        left: icon.offsetLeft,
        top: icon.offsetTop
    }));

    icons.forEach(({ icon, left, top }) => {
        const key = icon.dataset.app || icon.innerText.trim();
        const saved = savedLayout[key];

        icon.style.position = "absolute";

        if (saved && saved.left !== "" && saved.top !== "") {
            icon.style.left = saved.left;
            icon.style.top = saved.top;
        } else {
            icon.style.left = left + "px";
            icon.style.top = top + "px";
        }
    });

    const gridSize = 100;
    let drag = null;

    icons.forEach(({ icon }) => {
        icon.addEventListener("pointerdown", event => {
            if (event.button !== 0) return;

            drag = {
                icon,
                startX: event.clientX,
                startY: event.clientY,
                originalX: icon.offsetLeft,
                originalY: icon.offsetTop,
                moved: false
            };

            icon.setPointerCapture(event.pointerId);
        });

        icon.addEventListener("pointermove", event => {
            if (!drag || drag.icon !== icon) return;

            const dx = event.clientX - drag.startX;
            const dy = event.clientY - drag.startY;

            if (Math.abs(dx) + Math.abs(dy) > 5) {
                drag.moved = true;
            }

            if (!drag.moved) return;

            icon.style.left = Math.max(0, drag.originalX + dx) + "px";
            icon.style.top = Math.max(0, drag.originalY + dy) + "px";
        });

        icon.addEventListener("pointerup", () => {
            if (!drag || drag.icon !== icon) return;

            if (drag.moved) {
                icon.style.left =
                    Math.round(icon.offsetLeft / gridSize) * gridSize + "px";

                icon.style.top =
                    Math.round(icon.offsetTop / gridSize) * gridSize + "px";

                icon.dataset.dragged = "true";
                saveDesktopLayout();

                setTimeout(() => delete icon.dataset.dragged, 100);
            }

            drag = null;
        });
    });
}

enableDesktopIconDragging();
/* ---------------------------------------------------------
   SYSTEM STARTUP MESSAGE
   --------------------------------------------------------- */

console.log(
    "%cHUGEHARD DOORS 0.11",
    "font-size:20px;font-weight:bold;color:#008080"
);

console.log(
    "Welcome, operator. Please do not open the console door."
);
