'use client';

import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // HUGEHARD DOORS 0.11 Client Logic
    let booted = false;
    let windows: any[] = [];
    let nextWindowId = 1;
    let highestZIndex = 20;
    let selectedIcon: HTMLElement | null = null;
    let notificationTimer: any = null;
    let virusStarted = false;
    let fakeVirusCount = 0;
    let paintContext: CanvasRenderingContext2D | null = null;
    let painting = false;
    let paintDistance = 0;
    let paintPossessed = false;
    let gravityActive = false;
    let gravityAnimId: number | null = null;
    let hasScrewdriver = false;
    let policyScrewCount = 0;
    let wormyActive = false;
    let humorBuddyActive = false;
    let humorBuddyInterval: any = null;
    let buolingoActive = false;
    let turtleActive = false;
    let turtlePos = { x: 100, y: 300 };

    const virtualFiles: Record<string, any[]> = {
      "Downloads": [
        { name: "Virusbase.zip", type: "zip" }
      ],
      "Files": [
        { name: "earth.bat", type: "bat" },
        { name: "seagrass.jpg", type: "img", content: "🌿 Yummy Seagrass for Turtle!" },
        { name: "wormy.exe", type: "fake-exe" },
        { name: "DOOR_LOGS.txt", type: "txt", content: "LOG_01: Door #1 checked. Still a door.\nLOG_02: Door #2 squeaked." }
      ],
      "Desktop": [
        { name: "100", type: "folder" },
        { name: "earth.bat", type: "bat" },
        { name: "seagrass.jpg", type: "img", content: "🌿 Yummy Seagrass for Turtle!" },
        { name: "wormy.exe", type: "fake-exe" },
        { name: "EXE.exe", type: "fake-exe" }
      ]
    };

    // Built-in offline roasts repository for Cutie AI (Marinette Sword Chibi)
    const cuteAiRoasts: Record<string, string> = {
      "What is 2 + 2?": "2 + 2 is 4, you brainless mortal! Did you really open a 6-foot broadsword AI just to solve kindergarten math? My blade cries from disgrace!",
      "How is the weather today?": "It is SUNNY WITH A 100% CHANCE OF SWORD SLASHES! Why don't you open a window—or rather, a DOOR—and look outside with your own eyes?!",
      "Hi! How are you?": "I WAS HAVING A GREAT DAY UNTIL YOU BOTHERED ME WITH BASIC SMALL TALK! I am holding a 50-pound Broadsword and you're asking 'hOw ArE yOu'?! I am ANGRY!",
      "What time is it?": "IT IS TIME FOR YOU TO GET A WATCH! Look at the bottom right corner of your taskbar, you unobservant door-opener!",
      "Tell me a joke.": "Your reliance on Hugehard Doors OS is the biggest joke I've ever seen! Even my sword is laughing at your system specs!",
      "Who created you?": "I was forged in the sacred fires of Hugehard Corporation by master door-smiths! My blade cuts through silly questions!",
      "What is the meaning of life?": "42! Now stop philosophizing like a sleepy bard and go practice your sword swings, weakling!",
      "What is your favorite color?": "CRIMSON RED! The color of victory and the color your screen turns when Windows Updaten't fails!",
      "Can you do my homework?": "DO YOUR OWN HOMEWORK! I am a sword-wielding chibi, not your personal tutor! Your teacher would weep if they saw this!",
      "Is EXE.exe a virus?": "NO, IT'S A FRIENDLY PET! OF COURSE IT'S A VIRUS! Did the 40 error popups not give it away, mortal?!",
      "How do I activate Doors?": "You type your credit card code into the blue link and enjoy your 'Activation Failed Successfully' badge of honor!",
      "Why are there so many doors?": "BECAUSE THIS IS HUGEHARD DOORS 0.11! If you wanted windows, go buy a house!",
      "Are you stronger than a dragon?": "I sliced a dragon in half before breakfast with my chibi broadsword! You can't even open a ZIP file without extracting a virus!",
      "What is 9 + 10?": "TWENTY-ONE! You're trying to meme with a medieval sword-mistress?! MY BLADE DISAPPROVES!",
      "Do you like anime?": "I AM AN ANIME CHIBI WARRIOR! Marinette herself taught me how to swing this sword! Respect the blade!",
      "Why is earth.bat falling?": "BECAUSE GRAVITY APPLIES TO DOORS! Newton discovered gravity, and earth.bat brings all the icons down to the floor!",
      "Can you sing a song?": "LA LA LA... *SWOOSH!* That was the sound of my broadsword slicing through your request! No karaoke!",
      "What is the best computer?": "ANY COMPUTER THAT DOESN'T RUN OUT OF DOORS! Yours is currently hanging by a hinge!",
      "How do I close the virus?": "YOU CAN'T! Closing one error spawns TWO MORE! Reload the page or accept your endless error fate!",
      "Are you single?": "I AM MARRIED TO MY SWORD! Now step back before my Excalibur slices your chat history!",
      "What is 100 divided by 0?": "UNDEFINED! You tried to divide by zero and break my blade?! NICE TRY, HUMAN!",
      "Can I play GTA VI?": "ONLY ON EXESAFE.COM! It's 999 GB and comes with a free game.exe virus. Have fun!",
      "What should I eat for dinner?": "EAT SOME PROTEIN SO YOU CAN AT LEAST LIFT THIS 50-POUND SWORD! You look like a breeze could blow you over!",
      "Do you know any magic?": "MY MAGIC IS CALLED 'SLICING YOUR QUERY'! *SWOOSH!* Shazam! Your question is gone!",
      "What is The Baby Corp?": "THE BABY CORP IS A GLOBAL EMPIRE RUN BY INFANTS IN ARMANI SUITS! Even Boss Baby ducks when I swing my 6-foot broadsword!",
      "Good night Cutie AI!": "GO TO SLEEP BEFORE MY BROADSWORD TUCKS YOU IN DRAMATICALLY! Good night, mortal!"
    };

    // Boogle Web Sites Index
    const boogleWebSites = [
      {
        title: "Windows Archive",
        url: "https://windowsarchive.netlify.app",
        isReal: true,
        icon: "https://www.google.com/s2/favicons?domain=windowsarchive.netlify.app&sz=64",
        description: "Archive of web-based Windows operating system recreations and nostalgic web desktop experiences.",
        keywords: ["windows", "archive", "win", "win95", "win98", "windows93", "os", "desktop"]
      },
      {
        title: "macOS Archive",
        url: "https://macosarchive.netlify.app",
        isReal: true,
        icon: "https://www.google.com/s2/favicons?domain=macosarchive.netlify.app&sz=64",
        description: "Web-based recreations of classic Apple Macintosh & macOS desktop environments.",
        keywords: ["mac", "macos", "apple", "macintosh", "os", "archive"]
      },
      {
        title: "Linux OS Archive",
        url: "https://linuxosarchive.netlify.app",
        isReal: true,
        icon: "https://www.google.com/s2/favicons?domain=linuxosarchive.netlify.app&sz=64",
        description: "Collection of Linux distribution desktop simulations in your web browser.",
        keywords: ["linux", "ubuntu", "debian", "os", "archive", "penguin"]
      },
      {
        title: "Chrome OS Archive",
        url: "https://chromeosarchive.netlify.app",
        isReal: true,
        icon: "https://www.google.com/s2/favicons?domain=chromeosarchive.netlify.app&sz=64",
        description: "Browser-based ChromeOS and Chromebook web environment archive.",
        keywords: ["chrome", "chromeos", "google", "chromebook", "os", "archive"]
      },
      {
        title: "Aether Grid",
        url: "https://thomas-lefebvre.itch.io/aether-grid",
        isReal: true,
        icon: "https://www.google.com/s2/favicons?domain=thomas-lefebvre.itch.io&sz=64",
        description: "Aether Grid, a cyberpunk turn-based tactics web game by Thomas Lefebvre.",
        keywords: ["aether", "grid", "game", "tactics", "itch", "cyberpunk"]
      },
      {
        title: "The Baby Corp Inc.",
        url: "https://babycorp.invalid",
        isReal: false,
        icon: "👶🏻",
        description: "Official portal of The Baby Corp — Global infant management and pacifier logistics.",
        keywords: ["baby", "baby corp", "thebabycorp", "boss baby", "pacifier", "milk", "infant", "corporate"]
      },
      {
        title: "Gryahaven Airlines",
        url: "https://gryahaven.invalid",
        isReal: false,
        icon: "✈️",
        description: "Book direct non-stop flights to Gryahaven Island (Form 909-B paperwork required).",
        keywords: ["airplane", "flight", "gryahaven", "booking", "island", "fly", "plane"]
      },
      {
        title: "EXEsafe.com",
        url: "https://exesafe.invalid",
        isReal: false,
        icon: "🛡️",
        description: "YOUR NUMBER ONE SOURCE FOR COMPLETELY SAFE DOWNLOADS & FREE IPUNS.",
        keywords: ["exesafe", "gta", "gta vi", "download", "safe", "game", "free", "ipuns", "iphone", "ipun"]
      },
      {
        title: "HugeHard.Co Policy",
        url: "https://hugehard.co/policy",
        isReal: false,
        icon: "📜",
        description: "Official corporate terms, privacy guidelines, and door hinge maintenance protocol.",
        keywords: ["policy", "hugehard", "terms", "privacy", "hinge", "screw", "screwdriver"]
      }
    ];

    function addVirtualFile(folder: string, file: any) {
      if (!virtualFiles[folder]) virtualFiles[folder] = [];
      if (!virtualFiles[folder].some(item => item.name === file.name)) {
        virtualFiles[folder].push(file);
      }
    }

    function getVirtualFile(folder: string, filename: string) {
      return virtualFiles[folder]?.find(file => file.name === filename);
    }

    // Expose global functions needed by inline/window calls
    (window as any).openApp = openApp;
    (window as any).showNotification = showNotification;
    (window as any).searchBoogle = searchBoogle;
    (window as any).openBoogleSite = openBoogleSite;
    (window as any).showExesafeInBoogle = showExesafeInBoogle;
    (window as any).showBoogleHome = showBoogleHome;
    (window as any).downloadVirusbase = downloadVirusbase;
    (window as any).extractVirusbase = extractVirusbase;
    (window as any).showVirtualFolder = showVirtualFolder;
    (window as any).openVirtualFile = openVirtualFile;
    (window as any).clearPaint = clearPaint;
    (window as any).startFakeUpdate = startFakeUpdate;
    (window as any).stopFakeUpdate = stopFakeUpdate;
    (window as any).mysterySurprise = mysterySurprise;
    (window as any).launchFakeVirus = launchFakeVirus;
    (window as any).runEarthBat = runEarthBat;
    (window as any).resetIconPositions = resetIconPositions;
    (window as any).cascadeWindows = cascadeWindows;
    (window as any).minimizeAllWindows = minimizeAllWindows;
    (window as any).changeWallpaper = changeWallpaper;
    (window as any).submitActivation = submitActivation;
    (window as any).submitCuteAiForm = submitCuteAiForm;
    (window as any).sendCuteAiPreset = sendCuteAiPreset;
    (window as any).burpBabyCorpBaby = burpBabyCorpBaby;
    (window as any).hireBabyCorpIntern = hireBabyCorpIntern;
    (window as any).enforceBabyNap = enforceBabyNap;
    (window as any).shakeBabyRattle = shakeBabyRattle;
    (window as any).issueBabyPressRelease = issueBabyPressRelease;
    (window as any).submitAirplaneBooking = submitAirplaneBooking;
    (window as any).clickBabyIcon = clickBabyIcon;
    (window as any).unlockBabyWarPlan = unlockBabyWarPlan;
    (window as any).executeSecretExe = executeSecretExe;
    (window as any).submitBabyPassword = submitBabyPassword;
    (window as any).openBabyPlanTextFile = openBabyPlanTextFile;
    (window as any).openCustomWindow = openCustomWindow;
    (window as any).navigateAddressBar = navigateAddressBar;
    (window as any).updateFileManagerAddressBar = updateFileManagerAddressBar;

    // New Window Bindings
    (window as any).hasScrewdriver = () => hasScrewdriver;
    (window as any).launchWormyVirus = launchWormyVirus;
    (window as any).startWormCrawling = startWormCrawling;
    (window as any).triggerWoodenFloorFall = triggerWoodenFloorFall;
    (window as any).showHugehardPolicyInBoogle = showHugehardPolicyInBoogle;
    (window as any).interactPolicyScrew = interactPolicyScrew;
    (window as any).clickSeashell = clickSeashell;
    (window as any).submitIpunsOrder = submitIpunsOrder;
    (window as any).downgradeFromDoors1 = downgradeFromDoors1;
    (window as any).signOutUser = signOutUser;
    (window as any).createDesktopShortcut = createDesktopShortcut;
    (window as any).saveNotepadFile = saveNotepadFile;
    (window as any).openNotepadFile = openNotepadFile;
    (window as any).deleteNotepadFile = deleteNotepadFile;
    (window as any).openCalendar = () => openApp('calendar');
    (window as any).triggerChildrensDaySurprise = triggerChildrensDaySurprise;
    (window as any).playAudioPlayerFile = playAudioPlayerFile;
    (window as any).playSampleDoorAudio = playSampleDoorAudio;
    (window as any).switchNotepadTab = switchNotepadTab;
    (window as any).bootSystem = bootSystem;
    (window as any).closeWindow = closeWindow;
    (window as any).minimizeWindow = minimizeWindow;
    (window as any).toggleMaximizeWindow = toggleMaximizeWindow;
    (window as any).recoverStartButtonFromFloor = recoverStartButtonFromFloor;
    (window as any).submitBuolingoAnswer = submitBuolingoAnswer;
    (window as any).submitResortBooking = submitResortBooking;
    (window as any).downloadMincraft = downloadMincraft;
    (window as any).switchBookerTab = switchBookerTab;

    // Boot sequence
    async function bootSystem() {
      const bootMessages = document.getElementById("boot-messages");
      const bootProgress = document.getElementById("boot-progress-bar") as HTMLElement;
      const bootScreen = document.getElementById("boot-screen");
      const desktop = document.getElementById("desktop");

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
        if (bootMessages) bootMessages.textContent = messages[i];
        if (bootProgress) bootProgress.style.width = `${Math.round(((i + 1) / messages.length) * 100)}%`;
        await new Promise(r => setTimeout(r, 350));
      }

      await new Promise(r => setTimeout(r, 450));

      if (bootScreen) bootScreen.style.display = "none";
      if (desktop) {
        desktop.style.display = "block";
        desktop.style.transform = "none";
        desktop.style.boxShadow = "none";
      }
      document.body.style.background = "";
      const floorDebris = document.getElementById("wooden-floor-debris");
      if (floorDebris) floorDebris.remove();
      document.querySelectorAll(".goo-splatter").forEach(g => g.remove());
      const worm = document.getElementById("wormy-creature");
      if (worm) worm.remove();

      const startBtn = document.getElementById("start-button");
      if (startBtn) {
        startBtn.style.opacity = "1";
        startBtn.style.pointerEvents = "auto";
      }
      document.querySelectorAll(".desktop-icon").forEach(icon => {
        (icon as HTMLElement).style.opacity = "1";
      });
      wormyActive = false;
      booted = true;

      updateClock();
      setInterval(updateClock, 1000);

      const savedWallpaper = localStorage.getItem("hugehard_doors_wallpaper");
      if (savedWallpaper) {
        changeWallpaper(savedWallpaper, false);
      }

      showNotification(
        "Welcome to Hugehard Doors",
        "Your desktop is ready. Please keep all doors closed while opening them."
      );

      startRandomNotifications();
      enableDesktopIconDragging();
      setupAllContextMenus();
    }

    bootSystem();

    // Clock
    function updateClock() {
      const clockElement = document.getElementById("clock");
      if (!clockElement) return;
      const now = new Date();
      clockElement.textContent = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      if (!clockElement.dataset.boundCalendar) {
        clockElement.dataset.boundCalendar = "true";
        clockElement.style.cursor = "pointer";
        clockElement.title = "Click to open Calendar";
        clockElement.addEventListener("click", () => openApp("calendar"));
      }
    }

    // Notifications
    function showNotification(title: string, message: string) {
      const settingsWindow = windows.find(item => item.appName === "settings");
      if (settingsWindow) {
        const toggle = settingsWindow.element.querySelector("#notification-toggle") as HTMLInputElement;
        if (toggle && !toggle.checked) return;
      }

      const notificationLayer = document.getElementById("notification-layer");
      if (!notificationLayer) return;

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
        ["earth.bat", "Gravity is operating within normal parameters."],
        ["Cutie AI 🗡️", "I am sharpening my broadsword for your next query!"],
        ["Important", "Please do not feed the hinges."]
      ];

      notificationTimer = setInterval(() => {
        if (!booted) return;
        if (Math.random() < 0.45) {
          const msg = messages[Math.floor(Math.random() * messages.length)];
          showNotification(msg[0], msg[1]);
        }
      }, 18000);
    }

    // Escape HTML
    function escapeHTML(value: any) {
      return String(value).replace(/[&<>"']/g, (char: string) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      })[char] || char);
    }

    // Desktop Icons selection & double click
    const desktopIconsEl = document.getElementById("desktop-icons");
    if (desktopIconsEl) {
      desktopIconsEl.addEventListener("click", event => {
        const icon = (event.target as HTMLElement).closest(".desktop-icon") as HTMLElement;
        if (!icon) {
          clearIconSelection();
          return;
        }
        selectIcon(icon);
      });

      desktopIconsEl.addEventListener("dblclick", event => {
        const icon = (event.target as HTMLElement).closest(".desktop-icon") as HTMLElement;
        if (!icon) return;
        const appName = icon.dataset.app;
        if (appName === "fake-virus") {
          launchFakeVirus();
        } else if (appName === "earth-bat") {
          runEarthBat();
        } else if (appName === "wormy") {
          launchWormyVirus();
        } else if (appName) {
          openApp(appName);
        }
      });
    }

    function selectIcon(icon: HTMLElement) {
      clearIconSelection();
      icon.classList.add("selected");
      selectedIcon = icon;
    }

    function clearIconSelection() {
      document.querySelectorAll(".desktop-icon.selected").forEach(el => {
        el.classList.remove("selected");
      });
      selectedIcon = null;
    }

    document.addEventListener("click", event => {
      const desktop = document.getElementById("desktop");
      if (desktop && (event.target === desktop || (event.target as HTMLElement).id === "desktop-background")) {
        clearIconSelection();
      }
    });

    // Start Menu
    const startButton = document.getElementById("start-button");
    const startMenu = document.getElementById("start-menu");

    if (startButton && startMenu) {
      startButton.addEventListener("click", () => {
        startMenu.hidden = !startMenu.hidden;
        startButton.classList.toggle("active", !startMenu.hidden);
      });

      startMenu.addEventListener("click", event => {
        const button = (event.target as HTMLElement).closest("[data-app]") as HTMLElement;
        if (button) {
          const app = button.dataset.app;
          if (app === "fake-virus") {
            launchFakeVirus();
          } else if (app === "earth-bat") {
            runEarthBat();
          } else if (app === "wormy") {
            launchWormyVirus();
          } else if (app) {
            openApp(app);
          }
          startMenu.hidden = true;
          startButton.classList.remove("active");
        }
      });

      document.addEventListener("click", event => {
        if (!startMenu.hidden && !startMenu.contains(event.target as Node) && !startButton.contains(event.target as Node)) {
          startMenu.hidden = true;
          startButton.classList.remove("active");
        }
      });
    }

    // Shutdown
    const shutdownButton = document.getElementById("shutdown-button");
    const bootScreen = document.getElementById("boot-screen");
    const desktop = document.getElementById("desktop");
    const bootMessages = document.getElementById("boot-messages");
    const bootProgress = document.getElementById("boot-progress-bar") as HTMLElement;

    if (shutdownButton) {
      shutdownButton.addEventListener("click", async () => {
        if (startMenu) startMenu.hidden = true;
        if (desktop) desktop.style.display = "none";
        if (bootScreen) bootScreen.style.display = "flex";

        if (bootMessages) bootMessages.textContent = "Closing all doors...";
        if (bootProgress) bootProgress.style.width = "100%";

        await new Promise(r => setTimeout(r, 1200));
        if (bootMessages) bootMessages.textContent = "It is now safe to close your browser.";
        await new Promise(r => setTimeout(r, 1800));
        if (bootScreen) bootScreen.style.display = "none";

        const shutdownScreen = document.createElement("div");
        shutdownScreen.style.cssText = `
          position:fixed; inset:0; z-index:20000;
          display:flex; align-items:center; justify-content:center;
          background:#000; color:#fff; font-family:Arial,sans-serif;
          text-align:center; font-size:20px;
        `;
        shutdownScreen.innerHTML = `
          <div>
            <h2>HUGEHARD DOORS</h2>
            <p>System shut down.</p>
            <p style="font-size:13px;color:#888">The doors are now somebody else's problem.</p>
            <button class="retro-button" id="restart-system">Restart system</button>
          </div>
        `;
        document.body.appendChild(shutdownScreen);

        shutdownScreen.querySelector("#restart-system")?.addEventListener("click", () => {
          shutdownScreen.remove();
          windows.forEach(w => w.element.remove());
          windows = [];
          const taskbarWindows = document.getElementById("taskbar-windows");
          if (taskbarWindows) taskbarWindows.innerHTML = "";
          if (bootProgress) bootProgress.style.width = "0%";
          bootSystem();
        });
      });
    }

    // Wallpaper Switcher
    function changeWallpaper(type: string, notify = true) {
      const bg = document.getElementById("desktop-background");
      if (!bg) return;

      const oldShells = document.getElementById("beach-seashells");
      if (oldShells) oldShells.remove();

      switch (type) {
        case "sandy-beach":
          bg.style.background = "linear-gradient(180deg, #38bdf8 0%, #7dd3fc 35%, #fef08a 65%, #eab308 100%)";
          const shellContainer = document.createElement("div");
          shellContainer.id = "beach-seashells";
          shellContainer.style.cssText = "position:absolute; inset:0; pointer-events:auto; z-index:1;";
          shellContainer.innerHTML = `
            <div style="position:absolute; bottom:60px; left:15%; font-size:32px; cursor:pointer;" onclick="clickSeashell(1)" title="Seashell #1">🐚</div>
            <div style="position:absolute; bottom:120px; left:40%; font-size:28px; cursor:pointer;" onclick="clickSeashell(2)" title="Seashell #2">🐚</div>
            <div style="position:absolute; bottom:80px; left:65%; font-size:36px; cursor:pointer;" onclick="clickSeashell(3)" title="Seashell #3 (Glinting)">🐚✨</div>
            <div style="position:absolute; bottom:160px; right:20%; font-size:30px; cursor:pointer;" onclick="clickSeashell(4)" title="Seashell #4">🐚</div>
            <div style="position:absolute; bottom:90px; right:35%; font-size:34px; cursor:pointer;" onclick="clickSeashell(5)" title="Seashell #5">🐚</div>
          `;
          bg.appendChild(shellContainer);
          break;
        case "bliss":
          bg.style.background = "linear-gradient(to bottom, #3a88e9 0%, #3a88e9 45%, #4ea832 45%, #2f731e 100%)";
          break;
        case "matrix":
          bg.style.background = "radial-gradient(circle, #003300 0%, #000000 100%)";
          break;
        case "crimson":
          bg.style.background = "radial-gradient(circle, #800000 0%, #200000 100%)";
          break;
        case "hotdog":
          bg.style.background = "linear-gradient(135deg, #ff0000 0%, #ffff00 100%)";
          break;
        case "teal":
        default:
          bg.style.background = "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.04), transparent 65%), #008080";
          break;
      }

      localStorage.setItem("hugehard_doors_wallpaper", type);
      if (notify) showNotification("Wallpaper", "Desktop wallpaper updated.");
    }

    function clickSeashell(num: number) {
      if (num === 3) {
        if (!hasScrewdriver) {
          hasScrewdriver = true;
          (window as any).hasScrewdriver = true;
          showNotification("🪛 SCREWDRIVER UNLOCKED!", "You retrieved a Screwdriver from Seashell #3! Item added to inventory.");
          alert("🪛 YOU FOUND A SCREWDRIVER inside the seashell!\n\nYou can now unfasten screws (such as the Master Policy Hinge on the HugeHard.Co Policy page in Boogle)!");
        } else {
          showNotification("Seashell #3 🐚", "You already retrieved the Screwdriver from this shell.");
        }
      } else if (num === 1) {
        showNotification("Seashell #1 🦀", "A tiny crab scuttled out! 'Hey, watch it!'");
      } else if (num === 2) {
        showNotification("Seashell #2 🔮", "You found a shiny Pearl!");
      } else if (num === 4) {
        showNotification("Seashell #4 🐚", "Just ordinary wet beach sand.");
      } else if (num === 5) {
        showNotification("Seashell #5 🚪", "You opened a miniature door inside the seashell!");
      }
    }

    // Activation Handling
    function submitActivation() {
      const input = document.getElementById("activate-cc-input") as HTMLInputElement;
      const val = input?.value.trim() || "";
      if (!val) {
        showNotification("Activation Error", "Please enter a credit card code or key first.");
        return;
      }

      showNotification("System Activation", "Activation failed successfully.");

      const popup = document.createElement("div");
      popup.className = "virus-error";
      popup.style.zIndex = "70000";
      popup.style.left = "50%";
      popup.style.top = "50%";
      popup.style.transform = "translate(-50%, -50%)";
      popup.style.width = "350px";

      popup.innerHTML = `
        <div class="virus-error-title" style="background:#000080; color:#fff; padding:5px 8px; font-weight:bold; display:flex; justify-content:space-between; align-items:center;">
          <span>Door License Activation</span>
          <button onclick="this.closest('.virus-error').remove();" style="background:#c0c0c0; border:1px solid #000; width:18px; height:18px; font-size:11px; cursor:pointer;">×</button>
        </div>
        <div class="virus-error-content" style="padding:18px; text-align:center;">
          <div style="font-size:38px; margin-bottom:8px;">ℹ️</div>
          <h3 style="margin-bottom:8px; font-size:16px;">Activation failed successfully.</h3>
          <p style="font-size:12px; color:#333; line-height:1.4;">
            Your payment code was submitted to Hugehard servers, but activation failed successfully.
          </p>
          <button class="retro-button" onclick="this.closest('.virus-error').remove();" style="margin-top:15px; padding:5px 22px; font-weight:bold;">OK</button>
        </div>
      `;

      document.body.appendChild(popup);
    }

    // Cutie AI Local Roast Handler (Marinette Sword Chibi)
    function askCuteAi(prompt: string) {
      const log = document.getElementById("cute-ai-chat-log");
      const input = document.getElementById("cute-ai-input") as HTMLInputElement;
      if (!log) return;

      if (input) input.value = "";

      // User Message
      const userDiv = document.createElement("div");
      userDiv.style.marginBottom = "8px";
      userDiv.style.color = "#000";
      userDiv.innerHTML = `<strong>You:</strong> ${escapeHTML(prompt)}`;
      log.appendChild(userDiv);

      // Find roast in repository or match keyword
      let roast = cuteAiRoasts[prompt];
      if (!roast) {
        const lower = prompt.toLowerCase();
        for (const [q, r] of Object.entries(cuteAiRoasts)) {
          if (lower.includes(q.toLowerCase()) || q.toLowerCase().includes(lower)) {
            roast = r;
            break;
          }
        }
      }

      if (!roast) {
        roast = `HAH! '${prompt}'?! What kind of weak question is that?! My broadsword slashes your query into 100 pieces! Click one of my 25 preset questions below if you dare!`;
      }

      // Display AI Roast response
      const aiDiv = document.createElement("div");
      aiDiv.style.marginBottom = "8px";
      aiDiv.style.color = "#b00050";
      aiDiv.innerHTML = `<strong>Cutie AI 🗡️:</strong> ${escapeHTML(roast)}`;
      log.appendChild(aiDiv);
      log.scrollTop = log.scrollHeight;
    }

    function submitCuteAiForm(e: Event) {
      e.preventDefault();
      const input = document.getElementById("cute-ai-input") as HTMLInputElement;
      const prompt = input?.value.trim();
      if (prompt) askCuteAi(prompt);
    }

    function sendCuteAiPreset(prompt: string) {
      askCuteAi(prompt);
    }

    // Baby Corp Logic
    let babyCorpMilk = 100;
    let babyCorpInterns = 0;
    let babyCorpMorale = 85;

    function updateBabyCorpUI() {
      const milkEl = document.getElementById("babycorp-milk-val");
      const internEl = document.getElementById("babycorp-intern-val");
      const moraleEl = document.getElementById("babycorp-morale-val");
      if (milkEl) milkEl.textContent = String(babyCorpMilk);
      if (internEl) internEl.textContent = String(babyCorpInterns);
      if (moraleEl) moraleEl.textContent = `${babyCorpMorale}%`;
    }

    function addBabyCorpNews(msg: string, color = "#2563eb") {
      const feed = document.getElementById("babycorp-news-feed");
      if (!feed) return;
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const item = document.createElement("div");
      item.style.color = color;
      item.style.marginBottom = "3px";
      item.textContent = `• [${now}] ${msg}`;
      feed.prepend(item);
    }

    function burpBabyCorpBaby() {
      babyCorpMilk += 10;
      updateBabyCorpUI();
      showNotification("Baby Corp 🍼", "Executive Boss Baby burped loudly! +10 Milk Bucks.");
      addBabyCorpNews("CEO Boss Baby burped. Boardroom applauds (+10 Milk Bucks).", "#059669");
    }

    function hireBabyCorpIntern() {
      if (babyCorpMilk < 50) {
        showNotification("Baby Corp 🍼", "Not enough Milk Bucks! Need 50 Milk Bucks to hire an intern.");
        return;
      }
      babyCorpMilk -= 50;
      babyCorpInterns += 1;
      updateBabyCorpUI();
      showNotification("Baby Corp 👶", "New newborn intern hired! Equipped with high chair & rattle.");
      addBabyCorpNews(`Newborn Intern #${babyCorpInterns} onboarded. Pacifier allocation approved!`, "#2563eb");
    }

    function enforceBabyNap() {
      babyCorpMorale = 100;
      updateBabyCorpUI();
      showNotification("Baby Corp 😴", "Mandatory 3 PM Nap Time enforced! Boardroom morale restored to 100%.");
      addBabyCorpNews("Executive Boardroom enters mandatory naptime. Stock price soars!", "#7c3aed");
    }

    function shakeBabyRattle() {
      babyCorpMilk += 25;
      updateBabyCorpUI();
      showNotification("Baby Corp 🪇", "Golden Rattle shaken! Wall Street confidence boosted (+25 Milk Bucks).");
      addBabyCorpNews("Golden Rattle shaken on NYSE trading floor! Investors rejoice.", "#d97706");
    }

    function issueBabyPressRelease() {
      const releases = [
        "The Baby Corp Inc. acquires 51% controlling stake in Stroller Dynamics Ltd.",
        "Q3 Financial Report: Goo-goo ga-ga revenue up 420% year-over-year!",
        "CEO Boss Baby issues executive order banning broccoli from all corporate cafeterias.",
        "Press Release: Baby Corp launches AI-Powered Smart Pacifier with Doors OS 0.11.",
        "Hostile Takeover Alert: Baby Corp bids $1.2 Billion for Gerber Apple Puree Inc.",
        "Urgent Memo: Executive Timmy spilled organic apple juice on the stock market servers."
      ];
      const rel = releases[Math.floor(Math.random() * releases.length)];
      showNotification("Baby Corp Press Release 📢", rel);
      addBabyCorpNews(rel, "#dc2626");
    }

    function clickBabyIcon(emoji: string) {
      if (emoji === "🔒") {
        unlockBabyWarPlan();
        return;
      }

      const sounds: Record<string, string> = {
        "🍼": "GOO GOO! YUMMY MILK BOTTLE!! 🍼",
        "👶": "BAAABY BUMP!! GOO GOO GA GA!! 👶",
        "🪇": "RATTLE SHAKE SHAKE!! 🪇",
        "🧸": "TEDDY BEAR SQUEAK!! 🧸",
        "🍕": "NOM NOM PIZZA FOR BABYS!! 🍕",
        "🥛": "BIG GLASS OF MILK!! 🥛",
        "🚢": "BIG BOAT SAILING TO DE OCEAN!! 🚢",
        "🗺️": "SEKRIT MAP TO DE OCEAN!! 🗺️",
        "👑": "BABY IS DE KING OF EARTH!! 👑",
        "🥦": "EWW BROCCOLI!! NO BROCCOLI ALLOWED!! 🥦🚫"
      };

      const msg = sounds[emoji] || `BABY CLICKED ${emoji}! GOO GOO GA GA!`;
      showNotification("BAAABY CORP 🍼", msg);
    }

    function unlockBabyWarPlan() {
      const existing = document.getElementById("baby-pass-modal");
      if (existing) existing.remove();

      const popup = document.createElement("div");
      popup.id = "baby-pass-modal";
      popup.className = "virus-error";
      popup.style.cssText = "z-index:35000; position:fixed; left:calc(50% - 190px); top:calc(50% - 130px); width:380px;";

      popup.innerHTML = `
        <div class="virus-error-title" style="background:#000080; color:#fff; padding:6px 10px; font-weight:bold; display:flex; justify-content:space-between; align-items:center;">
          <span>🔑 SEKRIT BAAABY PASSWORD ENTRY</span>
          <button onclick="this.closest('.virus-error').remove();" style="background:#c0c0c0; border:1px solid #000; width:18px; height:18px; font-size:11px; cursor:pointer;">×</button>
        </div>
        <div class="virus-error-content" style="padding:18px; text-align:center; background:#fffbebf0;">
          <div style="font-size:36px; margin-bottom:8px;">👶🏻🔑</div>
          <label style="display:block; font-weight:bold; font-size:14px; margin-bottom:8px; color:#1e3a8a; font-family:'Comic Sans MS', cursive, sans-serif;">
            ENTUR SEKRIT BAAABY PASSWORD:<br>
            <span style="color:#d97706; font-size:12px;">(HINT: googoogaga)</span>
          </label>
          <input type="text" id="baby-pass-input" class="retro-input" placeholder="type googoogaga..." style="width:100%; font-size:16px; text-align:center; margin-bottom:14px; font-family:'Comic Sans MS', cursive, sans-serif;" autocomplete="off" />
          <div style="display:flex; justify-content:center; gap:10px;">
            <button class="retro-button" onclick="submitBabyPassword()" style="padding:6px 20px; font-weight:bold; background:#22c55e; color:#fff; font-size:13px;">UNLOK SEKRIT PLAN 🔓</button>
            <button class="retro-button" onclick="this.closest('.virus-error').remove();" style="padding:6px 16px;">CANCEL</button>
          </div>
        </div>
      `;

      document.body.appendChild(popup);

      const inputEl = popup.querySelector("#baby-pass-input") as HTMLInputElement;
      if (inputEl) {
        inputEl.focus();
        inputEl.addEventListener("keydown", (e) => {
          if (e.key === "Enter") submitBabyPassword();
        });
      }
    }

    function submitBabyPassword() {
      const inputEl = document.getElementById("baby-pass-input") as HTMLInputElement;
      const modal = document.getElementById("baby-pass-modal");
      const code = inputEl?.value.trim().toLowerCase() || "";

      if (code === "googoogaga") {
        if (modal) modal.remove();
        showNotification("SECURITY CLEARED 🔒", "SEKRIT BAAABY WAR PLAN UNLOCKED!!");
        openBabyPlanTextFile();

        const planEl = document.getElementById("babycorp-war-plan-content");
        if (planEl) {
          planEl.style.display = "block";
          planEl.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        alert("❌ WRONG BAAABY PASSWORD! ONLY BABYS WHO SAY 'googoogaga' CAN SEE DE SEKRIT WAR PLAN!");
      }
    }

    function openBabyPlanTextFile() {
      openCustomWindow("baby-plan-txt", {
        title: "SEKRIT_BABY_PLAN.txt - Door Notepad 📝",
        width: 640,
        height: 520,
        content: `
          <div style="padding:16px; font-family:'Comic Sans MS', cursive, sans-serif; background:#fff; height:100%; overflow-y:auto; border:2px inset #808080;">
            <div style="background:#fef08a; border:2px solid #ca8a04; padding:8px; font-size:12px; font-weight:bold; color:#854d0e; margin-bottom:14px; font-family:monospace;">
              FILE LOCATION: C:\\DOORS\\Desktop\\100\\...\\1\\SEKRIT_BABY_PLAN.txt | ACCESS: UNLOCKED
            </div>

            <h2 style="color:#b91c1c; font-size:24px; font-weight:bold; text-align:center; margin-bottom:16px; text-transform:uppercase; letter-spacing:1px;">
              🍼💥 SEKRIT BAAABY WAR PLAN (DO NOT READ IF ADULTA!!):
            </h2>

            <div style="font-size:20px; line-height:1.6; color:#1e3a8a; font-weight:bold;">
              <p style="margin-bottom:14px;">HELLO WE ARE DE BAAABYS!! 👶🍼<br>DIS IS OUR SEKRIT PLAN TO TAKEOVR DE WORLD!! 🌎💥</p>

              <p style="background:#fef08a; padding:12px; border:2px dashed #ca8a04; margin-bottom:14px;">
                <strong>STEP 1: WE PUT ALL DE FOOD, MILK, WATER, PIZZA, APPLES & SNACKS ON A BIG SHIP!! 🚢🍕🥛🍎</strong>
              </p>

              <p style="background:#bae6fd; padding:12px; border:2px dashed #0284c7; margin-bottom:14px;">
                <strong>STEP 2: ALL DE BABIES SAIL AWAY TO DE MIDDLE OF DE DEEP OCEAN WIF ALL DE FOOD & WATER!! 🌊⛵</strong>
              </p>

              <p style="background:#fbcfe8; padding:12px; border:2px dashed #db2777; margin-bottom:14px;">
                <strong>STEP 3: ALL DE BIG ADULTAS HAVE NO DINNER & NO WATER SO DEY ALL STARVE & DIE OUT!! ☠️</strong>
              </p>

              <p style="background:#bbf7d0; padding:12px; border:2px dashed #16a34a; margin-bottom:16px;">
                <strong>STEP 4: BABIES SAIL BACK & TAKE OVER DE WHOLE WORLD FOREVER!! 👑👶🎉</strong>
              </p>

              <div style="background:#fee2e2; border:3px solid #ef4444; padding:14px; color:#b91c1c; font-size:22px; text-align:center;">
                🥦🚫 NO MORE BROCCOLI EVER!!<br>
                🛌🚫 NO MORE BEDTIME EVER!!<br>
                🍼🚀 UNLIMITED PACIFIERS FOR EVERY BAAABY!!<br><br>
                GOO GOO GA GA!!
              </div>
            </div>
          </div>
        `
      });
    }

    function openCustomWindow(customId: string, appData: { title: string; width?: number; height?: number; content: string }) {
      const existing = windows.find(w => w.appName === customId);
      if (existing) {
        restoreWindow(existing.id);
        return;
      }

      const id = nextWindowId++;
      const windowElement = document.createElement("div");
      windowElement.className = "app-window active";
      windowElement.dataset.windowId = String(id);

      const offset = (windows.length % 7) * 25;
      windowElement.style.left = `${100 + offset}px`;
      windowElement.style.top = `${65 + offset}px`;
      windowElement.style.width = `${appData.width || 500}px`;
      windowElement.style.height = `${appData.height || 400}px`;
      windowElement.style.zIndex = String(++highestZIndex);

      windowElement.innerHTML = `
        <div class="window-titlebar">
            <span class="window-title">${escapeHTML(appData.title)}</span>
            <div class="window-controls">
                <button class="minimize-window" title="Minimize">_</button>
                <button class="maximize-window" title="Maximize">□</button>
                <button class="close-window" title="Close">×</button>
            </div>
        </div>
        <div class="window-content" style="height:calc(100% - 47px); overflow:auto;">${appData.content}</div>
        <div class="window-statusbar">Ready. Door is questionable.</div>
      `;

      const windowLayer = document.getElementById("window-layer");
      if (windowLayer) windowLayer.appendChild(windowElement);

      const windowData = {
        id,
        appName: customId,
        title: appData.title,
        element: windowElement,
        minimized: false,
        maximized: false,
        previousBounds: null as any
      };

      windows.push(windowData);
      addTaskbarButton(windowData);
      activateWindow(id);
      setupWindowControls(windowData);
      setupDragging(windowData);
      setupResizing(windowData);
    }

    function executeSecretExe() {
      showNotification("CRITICAL SYSTEM ALERT", "secret.exe executed!");

      const popup = document.createElement("div");
      popup.id = "secret-exe-screen";
      popup.style.cssText = `
        position: fixed;
        inset: 0;
        z-index: 50000;
        background: #000;
        color: #ff0000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 20px;
      `;

      popup.innerHTML = `
        <div style="border: 4px solid #ff0000; background: #110000; padding: 20px; max-width: 600px; box-shadow: 0 0 30px #ff0000; border-radius: 8px;">
          <h1 style="color: #ff0000; font-size: 26px; font-weight: bold; margin-bottom: 12px; text-shadow: 0 0 10px #ff0000;">
            ☠️ CRITICAL SYSTEM FATAL CORRUPTION ☠️
          </h1>
          <p style="color: #ffffff; font-size: 16px; margin-bottom: 15px; font-weight: bold;">
            secret.exe HAS BREACHED HUGEHARD DOORS 0.11 KERNEL!
          </p>

          <div style="margin: 15px 0; border: 3px solid #ff0000; overflow: hidden; background: #000; max-height: 380px;">
            <img src="/assets/aistudio/images_a70efab4.jpg" alt="Secret Horror" style="max-width: 100%; max-height: 350px; object-fit: contain; filter: contrast(120%);" />
          </div>

          <div style="background: #330000; border: 1px solid #ff0000; padding: 10px; margin-top: 15px; color: #ff9999; font-family: monospace; font-size: 14px;">
            STATUS: SYSTEM HALTED! RESTARTING PC IN 3 SECONDS...
          </div>
        </div>
      `;

      document.body.appendChild(popup);

      setTimeout(() => {
        popup.remove();
        const shutdownBtn = document.getElementById("shutdown-button");
        if (shutdownBtn) {
          shutdownBtn.click();
        } else {
          location.reload();
        }
      }, 3500);
    }

    // Airplane Booking Functions
    function submitAirplaneBooking(e: Event) {
      e.preventDefault();
      const submitBtn = document.getElementById("airplane-submit-btn") as HTMLButtonElement;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "⏳ Transmitting 14 pages of paperwork to Gryahaven Tower...";
      }

      const fullName = (document.getElementById("ap-fullName") as HTMLInputElement)?.value || "";
      const favColor = (document.getElementById("ap-favColor") as HTMLInputElement)?.value || "";
      const favFruit = (document.getElementById("ap-favFruit") as HTMLSelectElement)?.value || "";
      const embarrassingMemory = (document.getElementById("ap-embarrassingMemory") as HTMLTextAreaElement)?.value || "";
      const secondGradeTeacher = (document.getElementById("ap-secondGradeTeacher") as HTMLInputElement)?.value || "";
      const zodiacSign = (document.getElementById("ap-zodiacSign") as HTMLSelectElement)?.value || "";
      const petShoeSize = (document.getElementById("ap-petShoeSize") as HTMLInputElement)?.value || "";
      const favDoor = (document.getElementById("ap-favDoor") as HTMLSelectElement)?.value || "";
      const email = (document.getElementById("ap-email") as HTMLInputElement)?.value || "abandehlvi542@gmail.com";

      const payload = {
        fullName,
        favColor,
        favFruit,
        embarrassingMemory,
        secondGradeTeacher,
        zodiacSign,
        petShoeSize,
        favDoor,
        email
      };

      showNotification("Gryahaven Control ✈️", "Transmitting paperwork to Tower...");

      fetch("/api/airplane/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then(data => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "✈️ Transmit Paperwork & Book Flight GH-909";
          }
          showAirplaneSeatsFullModal(data, payload);
        })
        .catch(err => {
          console.error(err);
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "✈️ Transmit Paperwork & Book Flight GH-909";
          }
          showAirplaneSeatsFullModal({ rejectionNote: "Transmission error: Airport Control Tower is sleeping." }, payload);
        });
    }

    function showAirplaneSeatsFullModal(resData: any, formPayload: any) {
      const popup = document.createElement("div");
      popup.className = "virus-error";
      popup.style.zIndex = "30000";
      popup.style.left = "calc(50% - 210px)";
      popup.style.top = "calc(50% - 190px)";
      popup.style.width = "420px";

      popup.innerHTML = `
        <div class="virus-error-title" style="background:#b91c1c; color:#fff; padding:6px 10px; font-weight:bold; display:flex; justify-content:space-between; align-items:center;">
          <span>✈️ GRYAHAVEN AIRLINES — BOOKING FAILURE</span>
          <button onclick="this.closest('.virus-error').remove();" style="background:#c0c0c0; border:1px solid #000; width:18px; height:18px; font-size:11px; cursor:pointer;">×</button>
        </div>
        <div class="virus-error-content" style="padding:18px; text-align:center;">
          <div style="font-size:48px; margin-bottom:8px;">😱✈️🚫</div>
          <h2 style="margin-bottom:8px; font-size:18px; color:#b91c1c; font-weight:bold;">OOPS! SEATS ARE FULL!</h2>
          <p style="font-size:13px; color:#111; font-weight:bold; margin-bottom:10px;">
            All seats on Flight GH-909 to Gryahaven Island are 100% FULL!
          </p>
          <div style="background:#fff0f0; border:1px solid #fca5a5; padding:10px; text-align:left; font-size:11px; margin-bottom:12px; line-height:1.4;">
            <div><strong>Recipient Email:</strong> <code>${escapeHTML(formPayload.email || 'abandehlvi542@gmail.com')}</code></div>
            <div style="margin-top:4px;"><strong>Paperwork Status:</strong> Emailed & logged successfully!</div>
            <div style="margin-top:4px; font-style:italic; color:#7f1d1d;">"${escapeHTML(resData.rejectionNote || 'All 14 pages of paperwork logged, but no seats available!')}"</div>
          </div>
          <p style="font-size:11px; color:#555; margin-bottom:14px;">
            Thank you for submitting your 2nd grade teacher's name (<code>${escapeHTML(formPayload.secondGradeTeacher || 'N/A')}</code>) and embarrassing memory. Please try re-booking in <strong>84 years</strong>.
          </p>
          <button class="retro-button" onclick="this.closest('.virus-error').remove();" style="padding:6px 24px; font-weight:bold; background:#b91c1c; color:#fff;">
            OK / Cry Quietly 😭
          </button>
        </div>
      `;

      document.body.appendChild(popup);
    }

    // Applications Content
    function getAppContent(appName: string) {
      const apps: Record<string, { title: string; width: number; height: number; content: string }> = {
        "contact-me": {
          title: "Contact Me",
          width: 540,
          height: 520,
          content: `
            <div style="padding:16px; font-family:var(--font-main); display:flex; flex-direction:column; gap:14px; background:#fff; height:100%; border:2px inset #808080; box-sizing:border-box; overflow-y:auto;">
              <div style="display:flex; align-items:center; gap:16px; background:linear-gradient(135deg, #000080, #1084d0); color:#fff; padding:12px; border:2px solid #000080; box-shadow:2px 2px 0 #000;">
                <img src="/assets/aistudio/profile_dae27b52.png" style="width:64px; height:64px; object-fit:cover; border-radius:50%; border:2px solid #fff; box-shadow:0 0 8px rgba(0,0,0,0.5);" alt="Creator Profile" />
                <div>
                  <h2 style="margin:0 0 4px 0; font-size:18px; color:#fff; text-shadow:1px 1px 2px #000;">DEVELOPER PROFILE</h2>
                  <div style="font-size:12px; color:#bae6fd;">Creator of Hugehard Doors 0.11</div>
                </div>
              </div>
              
              <div style="background:#f1f5f9; border:2px inset #cbd5e1; padding:14px; font-size:14px; line-height:1.6; color:#0f172a;">
                <p style="margin:0 0 12px 0; font-weight:bold; font-size:15px; color:#000080;">
                  I Am a 13 year old making all of this. For more info, Contact Me:
                </p>
                <hr style="border:none; border-top:1px solid #cbd5e1; margin:10px 0;" />
                
                <div style="margin-bottom:14px; display:flex; flex-direction:column; gap:6px;">
                  <div style="font-weight:bold; color:#1e293b;">Email: <code style="background:#e2e8f0; padding:2px 6px; border-radius:3px; font-family:monospace;">abandehlvi542@gmail.com</code></div>
                  <div>
                    <a href="mailto:abandehlvi542@gmail.com" target="_blank" rel="noopener noreferrer" class="retro-button" style="display:inline-block; text-decoration:none; padding:6px 16px; font-weight:bold; background:#000080; color:#fff; border:2px outset #fff; cursor:pointer;">
                      Message me
                    </a>
                  </div>
                </div>

                <div style="display:flex; flex-direction:column; gap:6px;">
                  <div style="font-weight:bold; color:#1e293b;">
                    Phone: <code style="background:#e2e8f0; padding:2px 6px; border-radius:3px; font-family:monospace;">+92 330 2678574</code> 
                    <span style="color:#dc2626; font-size:12px; font-style:italic; display:block; margin-top:2px;">(calls are strictly forbidden, Only Use Whatsapp to Message me)</span>
                  </div>
                  <div>
                    <a href="https://wa.me/923302678574" target="_blank" rel="noopener noreferrer" class="retro-button" style="display:inline-block; text-decoration:none; padding:6px 16px; font-weight:bold; background:#16a34a; color:#fff; border:2px outset #fff; cursor:pointer;">
                      Chat With Me
                    </a>
                  </div>
                </div>
              </div>

              <!-- SOCIAL MEDIA LINKS SECTION -->
              <div style="background:#f8fafc; border:2px inset #cbd5e1; padding:14px; font-size:13px;">
                <h4 style="margin:0 0 10px 0; color:#000080; font-size:14px; font-weight:bold; display:flex; align-items:center; gap:6px;">
                  🌐 Social Media & Developer Platforms
                </h4>
                <div style="display:flex; flex-direction:column; gap:10px;">
                  <!-- YouTube -->
                  <div style="display:flex; align-items:center; justify-content:space-between; background:#fff; border:1px solid #cbd5e1; padding:8px 12px; border-radius:4px; box-shadow:0 1px 2px rgba(0,0,0,0.05);">
                    <div style="display:flex; align-items:center; gap:10px;">
                      <img src="https://www.google.com/s2/favicons?domain=youtube.com&sz=64" style="width:24px; height:24px; object-fit:contain;" alt="YouTube Icon" />
                      <div>
                        <div style="font-weight:bold; color:#0f172a;">YouTube</div>
                        <div style="font-size:11px; color:#64748b;">@ThomasLefebvreDev</div>
                      </div>
                    </div>
                    <a href="https://www.youtube.com/@ThomasLefebvreDev" target="_blank" rel="noopener noreferrer" class="retro-button" style="display:inline-flex; align-items:center; gap:6px; text-decoration:none; padding:6px 14px; font-weight:bold; background:#cc0000; color:#fff; border:2px outset #fff; cursor:pointer;">
                      <span>▶</span> Visit Channel
                    </a>
                  </div>

                  <!-- Itch.io -->
                  <div style="display:flex; align-items:center; justify-content:space-between; background:#fff; border:1px solid #cbd5e1; padding:8px 12px; border-radius:4px; box-shadow:0 1px 2px rgba(0,0,0,0.05);">
                    <div style="display:flex; align-items:center; gap:10px;">
                      <img src="https://www.google.com/s2/favicons?domain=itch.io&sz=64" style="width:24px; height:24px; object-fit:contain;" alt="Itch.io Icon" />
                      <div>
                        <div style="font-weight:bold; color:#0f172a;">Itch.io</div>
                        <div style="font-size:11px; color:#64748b;">thomas-lefebvre.itch.io</div>
                      </div>
                    </div>
                    <a href="https://thomas-lefebvre.itch.io" target="_blank" rel="noopener noreferrer" class="retro-button" style="display:inline-flex; align-items:center; gap:6px; text-decoration:none; padding:6px 14px; font-weight:bold; background:#fa5c5c; color:#fff; border:2px outset #fff; cursor:pointer;">
                      <span>🎮</span> View Games
                    </a>
                  </div>
                </div>
              </div>

              <div style="background:#fef08a; border:2px solid #ca8a04; padding:10px; font-size:12px; color:#854d0e; text-align:center;">
                 Thanks for visiting Hugehard Doors 0.11! Feedback & messages are always welcome.
              </div>
            </div>
          `
        },
        "booker": {
          title: "Booker ✈️🏨 — Travel & Resort Booking",
          width: 640,
          height: 540,
          content: `
            <div style="display:flex; flex-direction:column; height:100%; font-family:var(--font-main); background:#f0f4f8;">
              <div style="display:flex; gap:2px; background:#bae6fd; padding:6px 6px 0 6px; border-bottom:2px solid #0284c7;">
                <button id="booker-tab-airplane" class="retro-button" onclick="switchBookerTab('airplane')" style="font-weight:bold; background:#0284c7; color:#fff; border-bottom:none; padding:5px 14px;">✈️ Airplane Booking (Gryahaven)</button>
                <button id="booker-tab-resort" class="retro-button" onclick="switchBookerTab('resort')" style="font-weight:bold; background:#e0f2fe; color:#0369a1; padding:5px 14px;">🏨 Paradise Resort Booking</button>
              </div>

              <!-- AIRPLANE BOOKING TAB -->
              <div id="booker-view-airplane" style="display:block; flex:1; overflow-y:auto; padding:12px;">
                <div style="background:linear-gradient(135deg, #0284c7, #0369a1); color:#fff; padding:10px; border:2px solid #0284c7; display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
                  <div style="display:flex; align-items:center; gap:10px;">
                    <div style="font-size:32px;">✈️🏝️</div>
                    <div>
                      <h3 style="margin:0; font-size:15px; color:#fff;">GRYAHAVEN AIRLINES</h3>
                      <div style="font-size:11px; color:#bae6fd;">Flight GH-909 to Gryahaven Island • Form 909-B</div>
                    </div>
                  </div>
                </div>

                <form id="airplane-booking-form" onsubmit="submitAirplaneBooking(event); return false;" style="background:#fff; border:2px inset #808080; padding:12px; font-size:12px;">
                  <h4 style="margin:0 0 8px 0; color:#0369a1;">📋 MANDATORY BOARDING PAPERWORK (FORM 909-B)</h4>
                  <div style="margin-bottom:8px;">
                    <label style="display:block; font-weight:bold;">1. Full Legal Passenger Name:</label>
                    <input type="text" id="ap-fullName" class="retro-input" placeholder="Captain Door Opener" required style="width:100%;" />
                  </div>
                  <div style="margin-bottom:8px;">
                    <label style="display:block; font-weight:bold;">2. Favorite Color:</label>
                    <input type="text" id="ap-favColor" class="retro-input" placeholder="Teal #008080" required style="width:100%;" />
                  </div>
                  <div style="margin-bottom:8px;">
                    <label style="display:block; font-weight:bold;">3. 2nd Grade Class Teacher Name:</label>
                    <input type="text" id="ap-secondGradeTeacher" class="retro-input" placeholder="Mrs. Door Hinge" required style="width:100%;" />
                  </div>
                  <div style="margin-bottom:8px;">
                    <label style="display:block; font-weight:bold;">4. Embarrassing Childhood Memory:</label>
                    <textarea id="ap-embarrassingMemory" class="retro-input" rows="2" placeholder="Tell Gryahaven Customs your secret..." required style="width:100%;"></textarea>
                  </div>
                  <div style="margin-bottom:10px;">
                    <label style="display:block; font-weight:bold;">5. Email for Confirmation:</label>
                    <input type="email" id="ap-email" class="retro-input" value="abandehlvi542@gmail.com" required style="width:100%;" />
                  </div>
                  <button type="submit" id="airplane-submit-btn" class="retro-button" style="width:100%; font-weight:bold; background:#0284c7; color:#fff; padding:6px;">✈️ Transmit Paperwork & Book Flight</button>
                </form>
              </div>

              <!-- RESORT BOOKING TAB -->
              <div id="booker-view-resort" style="display:none; flex:1; overflow-y:auto; padding:12px;">
                <div style="background:linear-gradient(135deg, #0d9488, #0f766e); color:#fff; padding:10px; border:2px solid #0d9488; display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
                  <div style="display:flex; align-items:center; gap:10px;">
                    <div style="font-size:32px;">🏨🏊‍♂️</div>
                    <div>
                      <h3 style="margin:0; font-size:15px; color:#fff;">PARADISE RESORT & SPA</h3>
                      <div style="font-size:11px; color:#ccfbf1;">5-Star Luxury Ocean Villa • Unlimited Amenities</div>
                    </div>
                  </div>
                </div>

                <form onsubmit="submitResortBooking(event); return false;" style="background:#fff; border:2px inset #808080; padding:12px; font-size:12px;">
                  <h4 style="margin:0 0 8px 0; color:#0d9488;">🌴 RESORT RESERVATION FORM</h4>
                  <div style="margin-bottom:8px;">
                    <label style="display:block; font-weight:bold;">Guest Full Name:</label>
                    <input type="text" class="retro-input" placeholder="e.g. John Door" required style="width:100%;" />
                  </div>
                  <div style="margin-bottom:8px;">
                    <label style="display:block; font-weight:bold;">Select Villa Type:</label>
                    <select class="retro-input" style="width:100%;">
                      <option>🏖️ Oceanfront Sunset Bungalow ($899/night)</option>
                      <option>🏊 Poolside Luxury Suite ($1,200/night)</option>
                      <option>🏰 Overwater Royal Palace ($2,500/night)</option>
                    </select>
                  </div>
                  <div style="margin-bottom:8px;">
                    <label style="display:block; font-weight:bold;">Number of Guests:</label>
                    <input type="number" class="retro-input" value="2" min="1" max="10" style="width:100%;" />
                  </div>
                  <div style="margin-bottom:12px;">
                    <label style="display:block; font-weight:bold;">Special Requests:</label>
                    <input type="text" class="retro-input" placeholder="e.g. Late night pool access" style="width:100%;" />
                  </div>
                  <button type="submit" class="retro-button" style="width:100%; font-weight:bold; background:#0d9488; color:#fff; padding:8px; font-size:13px;">
                    🏨 Book Paradise Resort & View 5-Photo Tour ➔
                  </button>
                </form>
              </div>
            </div>
          `
        },
        "baby-corp": {
          title: "The Baby Corp 👶🏻🍼",
          width: 600,
          height: 520,
          content: `
            <div style="padding:14px; font-family:'Comic Sans MS', cursive, sans-serif; display:flex; flex-direction:column; height:100%; overflow-y:auto; background:#fffbeb; text-align:center;">
              <div style="background:linear-gradient(135deg, #3b82f6, #06b6d4); color:#fff; padding:12px; border:3px solid #1d4ed8; margin-bottom:12px; box-shadow:3px 3px 0 #000;">
                <div style="font-size:32px; font-weight:bold; letter-spacing:1px;">👶🏻🍼 THE BAAABY CORP 🍼👶🏻</div>
                <div style="font-size:14px; color:#fef08a; font-weight:bold; margin-top:2px;">"FOR BABYS ONLY!! ADULTAS KEEP OUT!!"</div>
              </div>

              <div style="background:#fff; border:3px inset #808080; padding:12px; margin-bottom:12px;">
                <div style="font-size:16px; font-weight:bold; color:#b91c1c; margin-bottom:10px;">👇 BIG BAAABY BUTTONS (CLICK 'EM! NO ADULT WORDS!):</div>
                <div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:center;">
                  <button class="retro-button" onclick="clickBabyIcon('🍼')" style="width:65px; height:65px; font-size:36px; cursor:pointer; background:#fef08a; border:3px outset #eab308; display:flex; align-items:center; justify-content:center;" title="Milk Bottle">🍼</button>
                  <button class="retro-button" onclick="clickBabyIcon('👶')" style="width:65px; height:65px; font-size:36px; cursor:pointer; background:#bfdbfe; border:3px outset #3b82f6; display:flex; align-items:center; justify-content:center;" title="Baby">👶</button>
                  <button class="retro-button" onclick="clickBabyIcon('🪇')" style="width:65px; height:65px; font-size:36px; cursor:pointer; background:#fbcfe8; border:3px outset #ec4899; display:flex; align-items:center; justify-content:center;" title="Rattle">🪇</button>
                  <button class="retro-button" onclick="clickBabyIcon('🧸')" style="width:65px; height:65px; font-size:36px; cursor:pointer; background:#fed7aa; border:3px outset #f97316; display:flex; align-items:center; justify-content:center;" title="Teddy">🧸</button>
                  <button class="retro-button" onclick="unlockBabyWarPlan()" style="width:65px; height:65px; font-size:36px; cursor:pointer; background:#fca5a5; border:3px outset #ef4444; display:flex; align-items:center; justify-content:center;" title="SEKRIT WAR PLAN LOCK (PASSWORD: googoogaga)">🔒</button>
                  <button class="retro-button" onclick="clickBabyIcon('🚢')" style="width:65px; height:65px; font-size:36px; cursor:pointer; background:#bae6fd; border:3px outset #0284c7; display:flex; align-items:center; justify-content:center;" title="Ship">🚢</button>
                  <button class="retro-button" onclick="clickBabyIcon('🍕')" style="width:65px; height:65px; font-size:36px; cursor:pointer; background:#fef08a; border:3px outset #ca8a04; display:flex; align-items:center; justify-content:center;" title="Pizza">🍕</button>
                  <button class="retro-button" onclick="clickBabyIcon('🥛')" style="width:65px; height:65px; font-size:36px; cursor:pointer; background:#e0e7ff; border:3px outset #6366f1; display:flex; align-items:center; justify-content:center;" title="Milk Glass">🥛</button>
                  <button class="retro-button" onclick="clickBabyIcon('🗺️')" style="width:65px; height:65px; font-size:36px; cursor:pointer; background:#bbf7d0; border:3px outset #22c55e; display:flex; align-items:center; justify-content:center;" title="Secret Map">🗺️</button>
                  <button class="retro-button" onclick="clickBabyIcon('👑')" style="width:65px; height:65px; font-size:36px; cursor:pointer; background:#fef08a; border:3px outset #eab308; display:flex; align-items:center; justify-content:center;" title="King Crown">👑</button>
                  <button class="retro-button" onclick="clickBabyIcon('🥦')" style="width:65px; height:65px; font-size:36px; cursor:pointer; background:#fecdd3; border:3px outset #f43f5e; display:flex; align-items:center; justify-content:center;" title="No Broccoli">🥦</button>
                </div>
              </div>

              <div id="babycorp-war-plan-content" style="display:none; background:#fff; border:3px inset #b91c1c; padding:14px; text-align:left; margin-top:8px;">
                <h3 style="color:#b91c1c; font-size:20px; font-weight:bold; margin-bottom:10px; text-align:center;">
                  🍼💥 TOP SEKRIT BAAABY WAR PLAN: WORLD TAKEOVR!! 🚢🌎
                </h3>
                <div style="font-size:15px; line-height:1.6; color:#1e3a8a; font-weight:bold;">
                  <p style="background:#fef08a; padding:8px; border:2px dashed #ca8a04; margin-bottom:8px;">
                    <strong>STEP 1: TAKE ALL DE NOM NOMS & FOOD! 🍌🍎🍕🥛</strong><br>
                    WE PUT ALL DE BABY MILK, ADULT FOOD, PIZZA, APPLES & SNACKS ON BIG SHIPS! 🚢
                  </p>
                  <p style="background:#bae6fd; padding:8px; border:2px dashed #0284c7; margin-bottom:8px;">
                    <strong>STEP 2: SAIL TO DE MIDDLE OF DE OCEAN!! 🌊⛵</strong><br>
                    WE SAIL AWAY TO DE VERY DEEP OCEAN WIF ALL DE FOOD SO ALL ADULTAS HAVE NO DINNER & STARVE! ☠️
                  </p>
                  <p style="background:#fbcfe8; padding:8px; border:2px dashed #db2777; margin-bottom:8px;">
                    <strong>STEP 3: ALL ADULTAS DIE OUT!! 💀</strong><br>
                    WIF NO NOM NOMS, ALL DE BIG ADULTAS GO BYE-BYE! NO MORE BEDTIMES! NO MORE BROCCOLI! 🥦🚫
                  </p>
                  <p style="background:#bbf7d0; padding:8px; border:2px dashed #16a34a; margin-bottom:8px;">
                    <strong>STEP 4: BABIES TAKE OVER DE ENTIRE WORLD!! 👑👶🎉</strong><br>
                    BABIES RULE DE WHOLE EARTH! UNLIMITED PACIFIERS FOR EVERYONE FOREVER!! GOO GOO GA GA!! 🍼🚀
                  </p>
                </div>
              </div>

              <div style="margin-top:10px;">
                <button class="retro-button" onclick="unlockBabyWarPlan()" style="padding:8px 18px; font-size:15px; font-weight:bold; background:#ef4444; color:#fff;">
                  🔒 CLICK TO UNLOCK SEKRIT WAR PLAN (PASSWORD REQUIRED)
                </button>
              </div>
            </div>
          `
        },
        "my-computer": {
          title: "My Doors",
          width: 480,
          height: 360,
          content: `
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
              <img src="/assets/aistudio/office_c18c2731.png" style="width:36px; height:36px; object-fit:contain;" alt="HugeHard Doors" />
              <h3 style="margin:0;">Welcome to My Doors</h3>
            </div>
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
          width: 620,
          height: 500,
          content: `
            <div class="boogle-page" style="padding:20px; display:flex; flex-direction:column; height:100%; overflow:auto;">
                <div class="boogle-logo" style="text-align:center; margin-bottom:12px;">
                    <img src="/assets/aistudio/boogle_cba6fd34.jpg" style="height:60px; object-fit:contain; display:inline-block;" alt="Boogle Search Engine" />
                </div>

                <form onsubmit="searchBoogle(event); return false;" class="boogle-search" style="text-align:center; margin-bottom:15px;">
                    <input id="boogle-query" placeholder="Search Boogle, Policy, or archives..." autocomplete="off" class="retro-input" style="width:65%;">
                    <button class="retro-button" type="submit">Search</button>
                </form>

                <div id="boogle-results" style="flex:1;">
                    <p style="text-align:center; color:#555;">Welcome to Boogle. Search for operating systems, games, or corporate policy!</p>
                    <div style="margin-top:15px; border-top:1px solid #ccc; padding-top:10px;">
                      <p style="font-weight:bold; margin-bottom:8px;">Suggested Web Sites & Policy:</p>
                      <ul style="list-style:none; padding:0; margin:0;">
                        <li style="margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                          <span style="font-size:16px;">📜</span>
                          <a href="#" onclick="showHugehardPolicyInBoogle(); return false;" style="color:#000080; font-weight:bold; text-decoration:underline;">HugeHard.Co Policy</a>
                          <span style="color:#666; font-size:11px;">— Official terms & 3-screw policy hinge</span>
                        </li>
                        <li style="margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                          <span style="font-size:16px;">🛡️</span>
                          <a href="#" onclick="showExesafeInBoogle(); return false;" style="color:#b00000; font-weight:bold; text-decoration:underline;">EXEsafe.com</a>
                          <span style="color:#666; font-size:11px;">— GTA VI & Free IPuns (100% Safe)</span>
                        </li>
                        <li style="margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                          <img src="https://www.google.com/s2/favicons?domain=windowsarchive.netlify.app&sz=64" alt="" style="width:18px; height:18px;" />
                          <a href="https://windowsarchive.netlify.app" target="_blank" rel="noopener noreferrer" style="color:#174ea6; font-weight:bold; text-decoration:underline;">Windows Archive</a>
                          <span style="color:#666; font-size:11px;">— Recreations of Windows OS</span>
                        </li>
                        <li style="margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                          <img src="https://www.google.com/s2/favicons?domain=macosarchive.netlify.app&sz=64" alt="" style="width:18px; height:18px;" />
                          <a href="https://macosarchive.netlify.app" target="_blank" rel="noopener noreferrer" style="color:#174ea6; font-weight:bold; text-decoration:underline;">macOS Archive</a>
                          <span style="color:#666; font-size:11px;">— Recreations of Apple macOS</span>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
          `
        },
        "cute-ai": {
          title: "Cutie AI 🗡️",
          width: 480,
          height: 480,
          content: `
            <div style="display:flex; flex-direction:column; height:100%; font-family:var(--font-main);">
              <div style="background:#ffdae9; border:2px solid #ff6699; padding:8px; display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
                <div style="display:flex; align-items:center; gap:10px;">
                  <img src="/assets/aistudio/mari_73b34861.jpg" style="width:36px; height:36px; object-fit:cover; border-radius:50%; border:2px solid #ff6699;" alt="Cutie AI" />
                  <div>
                    <strong style="color:#b00050; font-size:14px;">Cutie Sword AI (Marinette Chibi)</strong>
                    <div style="font-size:11px; color:#800040;">Super Cute Chibi • Wields a 50lb Broadsword!</div>
                  </div>
                </div>
                <div style="font-size:26px;">🗡️</div>
              </div>

              <div style="background:linear-gradient(135deg, #2b001a, #520033); color:#ffb3d1; padding:8px; border:2px inset #aaa; text-align:center; margin-bottom:6px;">
                <div style="font-size:16px; filter:drop-shadow(0 0 6px #ff66b2); font-weight:bold; display:flex; align-items:center; justify-content:center; gap:8px;">
                  <img src="/assets/aistudio/mari_73b34861.jpg" style="width:32px; height:32px; object-fit:cover; border-radius:50%;" alt="Mari" />
                  <span>(Marinette) 🗡️================></span>
                </div>
                <div style="font-weight:bold; font-size:11px; margin-top:2px; color:#fff;">
                  "I LOOK CUTE, BUT MY BROADSWORD CUTS THROUGH MUNDANE QUESTIONS!"
                </div>
              </div>

              <div id="cute-ai-chat-log" style="flex:1; background:#fff; border:2px inset #808080; padding:10px; overflow-y:auto; min-height:120px; font-size:12px; margin-bottom:6px;">
                <div style="margin-bottom:8px; color:#b00050;">
                  <strong>Cutie AI 🗡️:</strong> *Unsheathes 6-foot broadsword with cute chibi energy* Click any question below to witness my savage roasts!
                </div>
              </div>

              <div style="font-weight:bold; font-size:11px; margin-bottom:4px; color:#b00050;">SELECT A QUESTION TO GET ROASTED:</div>
              <div style="display:flex; gap:4px; flex-wrap:wrap; max-height:130px; overflow-y:auto; padding:5px; border:2px inset #aaa; background:#fff0f6; margin-bottom:6px;">
                ${Object.keys(cuteAiRoasts).map(q => `
                  <button class="retro-button" onclick="sendCuteAiPreset('${escapeHTML(q)}')" style="font-size:10px; padding:3px 7px; background:#ffe6f0; border-color:#fff #ff99c2 #ff99c2 #fff; color:#b00050; text-align:left;">
                    ${escapeHTML(q)}
                  </button>
                `).join('')}
              </div>

              <form onsubmit="submitCuteAiForm(event); return false;" style="display:flex; gap:6px;">
                <input id="cute-ai-input" class="retro-input" placeholder="Type any question or select above..." style="flex:1;" autocomplete="off" />
                <button type="submit" class="retro-button" style="background:#ffb3d1; font-weight:bold;">🗡️ Ask & Get Roasted</button>
              </form>
            </div>
          `
        },
        "file-manager": {
          title: "File Manager",
          width: 580,
          height: 420,
          content: `
            <div class="file-manager" style="display:flex; flex-direction:column; height:100%;">
                <div class="file-toolbar" style="display:flex; gap:6px; align-items:center; margin-bottom:6px; flex-wrap:wrap;">
                    <button class="retro-button" onclick="showVirtualFolder('Files')">📁 Files</button>
                    <button class="retro-button" onclick="showVirtualFolder('Downloads')">📥 Downloads</button>
                    <button class="retro-button" onclick="showVirtualFolder('Desktop')">🖥️ Desktop</button>
                    <button class="retro-button" onclick="showVirtualFolder('100')">🔢 Folder 100</button>
                </div>

                <form onsubmit="navigateAddressBar(event); return false;" style="display:flex; gap:6px; align-items:center; margin-bottom:8px; background:#d4d0c8; padding:4px 6px; border:2px inset #808080;">
                  <label style="font-weight:bold; font-size:11px; color:#000080; white-space:nowrap;">Address:</label>
                  <input id="file-manager-address-bar" class="retro-input" type="text" value="C:/Desktop" style="flex:1; font-family:monospace; font-size:11px; background:#fff; padding:3px 6px;" autocomplete="off" spellcheck="false" />
                  <button type="submit" class="retro-button" style="padding:2px 10px; font-weight:bold; background:#e0e0e0;">Go ➔</button>
                </form>

                <div id="virtual-file-list" style="flex:1; overflow-y:auto; background:#fff; border:2px inset #808080; padding:10px;">
                    Select a folder above or type a path in the address bar (e.g. C:/Desktop/100/99/.../1).
                </div>
            </div>
          `
        },
        "music-player": {
          title: "Hugehard Player 🎧",
          width: 520,
          height: 420,
          content: `
            <div style="padding:14px; font-family:var(--font-main); display:flex; flex-direction:column; height:100%; background:#1e1b4b; color:#e0e7ff;">
              <div style="background:linear-gradient(135deg, #4338ca, #3730a3); padding:10px; border:2px solid #6366f1; display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; box-shadow:0 0 10px rgba(99,102,241,0.5);">
                <div style="display:flex; align-items:center; gap:10px;">
                  <div style="font-size:32px;">🎧🎵</div>
                  <div>
                    <h3 style="margin:0; font-size:16px; color:#fff;">HUGEHARD AUDIO PLAYER</h3>
                    <div style="font-size:11px; color:#a5b4fc;">High-Fidelity Door Sound Engine</div>
                  </div>
                </div>
              </div>

              <div style="background:#312e81; border:2px inset #4338ca; padding:12px; margin-bottom:12px; text-align:center;">
                <audio id="audio-player-element" style="display:none;"></audio>
                
                <div style="margin-bottom:10px; background:#1e1b4b; border:1px solid #6366f1; padding:8px; border-radius:4px;">
                  <label style="font-weight:bold; font-size:12px; color:#a5b4fc; display:block; margin-bottom:6px;">Upload & Play Audio File from Device:</label>
                  <input type="file" id="audio-file-selector" accept="audio/*" onchange="playAudioPlayerFile(event)" style="font-size:11px; color:#e0e7ff; background:#3730a3; padding:4px; border:1px solid #818cf8; width:100%; cursor:pointer;" />
                </div>

                <div id="player-track-name" style="font-weight:bold; font-size:13px; color:#fde047; margin-bottom:8px; height:20px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                  No Track Loaded
                </div>

                <div style="display:flex; justify-content:center; align-items:flex-end; gap:4px; height:40px; margin-bottom:12px; background:#0f172a; padding:6px; border:1px solid #334155;">
                  <div style="width:12px; background:#22c55e; height:40%;"></div>
                  <div style="width:12px; background:#3b82f6; height:80%;"></div>
                  <div style="width:12px; background:#eab308; height:30%;"></div>
                  <div style="width:12px; background:#ec4899; height:90%;"></div>
                  <div style="width:12px; background:#a855f7; height:60%;"></div>
                  <div style="width:12px; background:#ef4444; height:100%;"></div>
                </div>

                <div style="display:flex; justify-content:center; gap:10px; margin-bottom:10px;">
                  <button class="retro-button" onclick="const a=document.getElementById('audio-player-element'); if(a) a.play();" style="padding:6px 16px; font-weight:bold; background:#22c55e; color:#fff;">▶️ Play</button>
                  <button class="retro-button" onclick="const a=document.getElementById('audio-player-element'); if(a) a.pause();" style="padding:6px 16px; font-weight:bold; background:#eab308; color:#000;">⏸️ Pause</button>
                  <button class="retro-button" onclick="const a=document.getElementById('audio-player-element'); if(a){a.pause(); a.currentTime=0;}" style="padding:6px 16px; font-weight:bold; background:#ef4444; color:#fff;">⏹️ Stop</button>
                </div>
              </div>

              <div style="background:#312e81; border:2px inset #4338ca; padding:10px;">
                <div style="font-weight:bold; font-size:11px; color:#a5b4fc; margin-bottom:6px;">🔊 PRESET HUGEHARD DOOR SOUNDS:</div>
                <div style="display:flex; gap:6px; flex-wrap:wrap; justify-content:center;">
                  <button class="retro-button" onclick="playSampleDoorAudio('slam')" style="font-size:11px; padding:4px 8px; background:#4338ca; color:#fff;">🚪 Door Slam</button>
                  <button class="retro-button" onclick="playSampleDoorAudio('creak')" style="font-size:11px; padding:4px 8px; background:#4338ca; color:#fff;">🚪 Creaking Hinge</button>
                  <button class="retro-button" onclick="playSampleDoorAudio('siren')" style="font-size:11px; padding:4px 8px; background:#dc2626; color:#fff;">🚨 FBI Raid Siren</button>
                  <button class="retro-button" onclick="playSampleDoorAudio('fanfare')" style="font-size:11px; padding:4px 8px; background:#059669; color:#fff;">🎺 Updaten't Fanfare</button>
                </div>
              </div>
            </div>
          `
        },
        "notepad": {
          title: "Door Notepad 📝",
          width: 540,
          height: 420,
          content: `
            <div style="display:flex; flex-direction:column; height:100%; font-family:var(--font-main); background:#f3f4f6;">
              <div style="display:flex; gap:2px; background:#d1d5db; padding:4px 4px 0 4px; border-bottom:2px solid #9ca3af;">
                <button id="notepad-tab-write" class="retro-button" onclick="switchNotepadTab('write')" style="font-weight:bold; background:#fff; border-bottom:none; padding:4px 12px;">✍️ Write Tab</button>
                <button id="notepad-tab-file" class="retro-button" onclick="switchNotepadTab('file')" style="font-weight:bold; background:#e5e7eb; padding:4px 12px;">📁 File Tab</button>
              </div>

              <div id="notepad-view-write" style="display:flex; flex-direction:column; flex:1; padding:8px; background:#fff;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; background:#f9fafb; padding:4px 8px; border:1px solid #e5e7eb;">
                  <div style="display:flex; gap:8px; align-items:center;">
                    <label style="font-size:11px; font-weight:bold;">Font:</label>
                    <select id="notepad-font-family" class="retro-input" onchange="const t=document.getElementById('notepad-textarea'); if(t) t.style.fontFamily = this.value" style="font-size:11px;">
                      <option value="monospace">Monospace</option>
                      <option value="sans-serif">Sans-Serif</option>
                      <option value="serif">Serif</option>
                      <option value="'Comic Sans MS', cursive">Comic Sans</option>
                    </select>
                  </div>
                  <div style="font-size:11px; color:#6b7280;" id="notepad-char-count">0 characters</div>
                </div>

                <textarea id="notepad-textarea" class="retro-input" oninput="const c=document.getElementById('notepad-char-count'); if(c) c.textContent = this.value.length + ' characters'" style="flex:1; width:100%; resize:none; font-family:monospace; font-size:13px; line-height:1.5; padding:10px; border:2px inset #808080;" placeholder="Type your text or door logs here..."></textarea>
              </div>

              <div id="notepad-view-file" style="display:none; flex-direction:column; flex:1; padding:12px; background:#fff;">
                <h4 style="margin:0 0 10px 0; color:#000080;">📁 Door Notepad File Management</h4>
                
                <div style="margin-bottom:14px; background:#f0fdf4; border:1px solid #bbf7d0; padding:10px;">
                  <label style="font-weight:bold; display:block; margin-bottom:4px; font-size:12px;">Save Current Text As File:</label>
                  <div style="display:flex; gap:6px;">
                    <input type="text" id="notepad-save-filename" class="retro-input" value="MyDoorNote.txt" style="flex:1;" />
                    <button class="retro-button" onclick="saveNotepadFile()" style="font-weight:bold; background:#22c55e; color:#fff;">💾 Save File</button>
                  </div>
                </div>

                <h5 style="margin:0 0 6px 0; font-size:12px;">Saved Text Files in Files Directory:</h5>
                <div id="notepad-file-list" style="flex:1; overflow-y:auto; border:2px inset #aaa; padding:8px; background:#fafafa;">
                  <!-- Loaded via JS -->
                </div>
              </div>
            </div>
          `
        },
        "calendar": {
          title: "Hugehard Door Calendar 📅",
          width: 560,
          height: 480,
          content: `
            <div style="padding:12px; font-family:var(--font-main); display:flex; gap:12px; height:100%; background:#f8fafc; color:#0f172a;">
              <div style="flex:1; display:flex; flex-direction:column;">
                <div style="background:#0284c7; color:#fff; padding:8px 12px; font-weight:bold; font-size:15px; display:flex; justify-content:space-between; align-items:center; border:2px solid #0369a1; margin-bottom:8px;">
                  <span>NOVEMBER 2026</span>
                  <span style="font-size:11px; background:#075985; padding:2px 6px;">DOORS CALENDAR V1</span>
                </div>

                <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:2px; background:#cbd5e1; border:2px inset #94a3b8; padding:4px; flex:1; text-align:center;">
                  <div style="font-weight:bold; font-size:11px; color:#0369a1; padding:4px;">SUN</div>
                  <div style="font-weight:bold; font-size:11px; color:#0369a1; padding:4px;">MON</div>
                  <div style="font-weight:bold; font-size:11px; color:#0369a1; padding:4px;">TUE</div>
                  <div style="font-weight:bold; font-size:11px; color:#0369a1; padding:4px;">WED</div>
                  <div style="font-weight:bold; font-size:11px; color:#0369a1; padding:4px;">THU</div>
                  <div style="font-weight:bold; font-size:11px; color:#0369a1; padding:4px;">FRI</div>
                  <div style="font-weight:bold; font-size:11px; color:#0369a1; padding:4px;">SAT</div>

                  ${Array.from({length: 30}, (_, i) => {
                    const day = i + 1;
                    const isChildrensDay = day === 20 || day === 14;
                    return `
                      <div style="background:${isChildrensDay ? '#fef08a' : '#fff'}; border:${isChildrensDay ? '2px solid #eab308' : '1px solid #e2e8f0'}; padding:4px; font-size:12px; font-weight:${isChildrensDay ? 'bold' : 'normal'}; display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:pointer;" title="${isChildrensDay ? 'Children\'s Day Event!' : ''}">
                        <span>${day}</span>
                        ${isChildrensDay ? `<span style="font-size:10px;">🎈</span>` : ''}
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>

              <div style="width:200px; background:#fef08a; border:2px solid #eab308; padding:10px; display:flex; flex-direction:column; justify-content:space-between; text-align:center;">
                <div>
                  <div style="font-weight:bold; font-size:14px; color:#854d0e; margin-bottom:8px;">🎈 NOVEMBER EVENT</div>
                  <h4 style="margin:0 0 6px 0; color:#b45309; font-size:15px;">CHILDREN'S DAY!</h4>
                  <p style="font-size:11px; color:#713f12; line-height:1.4; margin-bottom:10px;">
                    Happy Children's Day! A child is holding a special gift box for you below.
                  </p>

                  <div style="background:#fff; border:2px inset #eab308; padding:10px; margin-bottom:10px;">
                    <div style="font-size:42px;">👦🏻🎁</div>
                    <div style="font-size:11px; font-weight:bold; color:#0284c7; margin-top:4px;">"Click gift to open!"</div>
                  </div>
                </div>

                <button class="retro-button" onclick="triggerChildrensDaySurprise()" style="padding:8px; font-weight:bold; background:#ec4899; color:#fff; border-color:#fbcfe8 #9d174d #9d174d #fbcfe8;">
                  🎁 Open Gift Surprise!
                </button>
              </div>
            </div>
          `
        },
        "office": {
          title: "Hugehard Office Suite 2026 🏢",
          width: 640,
          height: 500,
          content: `
            <div style="padding:14px; font-family:var(--font-main); display:flex; flex-direction:column; height:100%; background:#f1f5f9; color:#0f172a;">
              <div style="background:linear-gradient(135deg, #1e3a8a, #0284c7); color:#fff; padding:12px; border:2px solid #1d4ed8; display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; box-shadow:2px 2px 0 #000;">
                <div>
                  <h2 style="margin:0; font-size:18px; letter-spacing:1px; color:#ffffff;">HUGEHARD OFFICE SUITE 2026</h2>
                  <div style="font-size:11px; color:#bae6fd;">Productivity Without Windows • 5 Working Apps</div>
                </div>
                <img src="/assets/aistudio/office_c18c2731.png" style="width:36px; height:36px; object-fit:contain;" alt="Office" />
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:12px; flex:1; overflow-y:auto; padding:2px;">
                <div style="background:#fff; border:2px inset #808080; padding:12px; display:flex; flex-direction:column; justify-content:space-between;">
                  <div>
                    <img src="/assets/aistudio/word_5de9a479.png" style="width:32px; height:32px; object-fit:contain; margin-bottom:6px;" alt="Word" />
                    <h4 style="margin:0 0 4px 0; color:#1d4ed8;">Hugehard Word</h4>
                    <p style="font-size:11px; color:#64748b; margin:0 0 10px 0;">Rich word processor with document editing.</p>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <button class="retro-button" onclick="openApp('word')" style="background:#2563eb; color:#fff; font-weight:bold;">Launch Word</button>
                    <button class="retro-button" onclick="createDesktopShortcut('word', 'Hugehard Word', '📄')" style="font-size:10px;">➕ Desktop Shortcut</button>
                  </div>
                </div>

                <div style="background:#fff; border:2px inset #808080; padding:12px; display:flex; flex-direction:column; justify-content:space-between;">
                  <div>
                    <img src="/assets/aistudio/ppt_a7c9d565.png" style="width:32px; height:32px; object-fit:contain; margin-bottom:6px;" alt="Slides" />
                    <h4 style="margin:0 0 4px 0; color:#dc2626;">Hugehard Slides</h4>
                    <p style="font-size:11px; color:#64748b; margin:0 0 10px 0;">Slide deck creator & presentation viewer.</p>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <button class="retro-button" onclick="openApp('slides')" style="background:#dc2626; color:#fff; font-weight:bold;">Launch Slides</button>
                    <button class="retro-button" onclick="createDesktopShortcut('slides', 'Hugehard Slides', '📊')" style="font-size:10px;">➕ Desktop Shortcut</button>
                  </div>
                </div>

                <div style="background:#fff; border:2px inset #808080; padding:12px; display:flex; flex-direction:column; justify-content:space-between;">
                  <div>
                    <img src="/assets/aistudio/excel_a83fc9a6.png" style="width:32px; height:32px; object-fit:contain; margin-bottom:6px;" alt="Workbooks" />
                    <h4 style="margin:0 0 4px 0; color:#16a34a;">Hugehard Workbooks</h4>
                    <p style="font-size:11px; color:#64748b; margin:0 0 10px 0;">Spreadsheet grid with auto-calculations.</p>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <button class="retro-button" onclick="openApp('workbooks')" style="background:#16a34a; color:#fff; font-weight:bold;">Launch Workbooks</button>
                    <button class="retro-button" onclick="createDesktopShortcut('workbooks', 'Hugehard Workbooks', '📈')" style="font-size:10px;">➕ Desktop Shortcut</button>
                  </div>
                </div>

                <div style="background:#fff; border:2px inset #808080; padding:12px; display:flex; flex-direction:column; justify-content:space-between;">
                  <div>
                    <img src="/assets/aistudio/note_0954547b.png" style="width:32px; height:32px; object-fit:contain; margin-bottom:6px;" alt="Note" />
                    <h4 style="margin:0 0 4px 0; color:#ca8a04;">Hugehard Note</h4>
                    <p style="font-size:11px; color:#64748b; margin:0 0 10px 0;">Sticky notes for quick desktop reminders.</p>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <button class="retro-button" onclick="openApp('note')" style="background:#ca8a04; color:#fff; font-weight:bold;">Launch Note</button>
                    <button class="retro-button" onclick="createDesktopShortcut('note', 'Hugehard Note', '📌')" style="font-size:10px;">➕ Desktop Shortcut</button>
                  </div>
                </div>

                <div style="background:#fff; border:2px inset #808080; padding:12px; display:flex; flex-direction:column; justify-content:space-between;">
                  <div>
                    <div style="font-size:28px; margin-bottom:4px;">✉️</div>
                    <h4 style="margin:0 0 4px 0; color:#9333ea;">Hugehard Mail</h4>
                    <p style="font-size:11px; color:#64748b; margin:0 0 10px 0;">Email client with corporate inbox.</p>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <button class="retro-button" onclick="openApp('mail')" style="background:#9333ea; color:#fff; font-weight:bold;">Launch Mail</button>
                    <button class="retro-button" onclick="createDesktopShortcut('mail', 'Hugehard Mail', '✉️')" style="font-size:10px;">➕ Desktop Shortcut</button>
                  </div>
                </div>
              </div>
            </div>
          `
        },
        "word": {
          title: "Hugehard Word 📄",
          width: 580,
          height: 440,
          content: `
            <div style="display:flex; flex-direction:column; height:100%; font-family:var(--font-main); background:#fff;">
              <div style="background:#f1f5f9; padding:6px; border-bottom:1px solid #cbd5e1; display:flex; gap:6px; align-items:center;">
                <button class="retro-button" onclick="document.execCommand('bold', false, '')"><b>B</b></button>
                <button class="retro-button" onclick="document.execCommand('italic', false, '')"><i>I</i></button>
                <button class="retro-button" onclick="document.execCommand('underline', false, '')"><u>U</u></button>
                <button class="retro-button" onclick="saveNotepadFile()">💾 Save TXT</button>
              </div>
              <div contenteditable="true" style="flex:1; padding:15px; outline:none; font-family:'Times New Roman', serif; font-size:14px; line-height:1.6; overflow-y:auto;" placeholder="Type your document here...">
                <h2>Welcome to Hugehard Word</h2>
                <p>This is your official document editor inside Doors OS 0.11.</p>
              </div>
            </div>
          `
        },
        "slides": {
          title: "Hugehard Slides 📊",
          width: 580,
          height: 440,
          content: `
            <div style="display:flex; flex-direction:column; height:100%; font-family:var(--font-main); background:#0f172a; color:#fff; padding:14px;">
              <div style="background:#dc2626; padding:8px 12px; font-weight:bold; font-size:14px; display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <span>HUGEHARD SLIDES PRESENTATION</span>
                <button class="retro-button" onclick="showNotification('Slides', 'Presentation Mode Started!')" style="background:#fff; color:#000; font-size:10px;">▶️ Start Slideshow</button>
              </div>
              <div style="flex:1; background:#1e293b; border:2px inset #475569; padding:20px; text-align:center; display:flex; flex-direction:column; justify-content:center; align-items:center;">
                <div style="font-size:42px; margin-bottom:10px;">📊🚪</div>
                <h2 style="color:#f87171; margin:0 0 10px 0;">SLIDE 1: Why Doors Are Better Than Windows</h2>
                <p style="color:#94a3b8; max-width:400px; font-size:13px;">1. Doors keep out cold drafts.<br>2. Windows let viruses break the glass.<br>3. Doors feature 100% genuine metal hinges.</p>
              </div>
            </div>
          `
        },
        "workbooks": {
          title: "Hugehard Workbooks 📈",
          width: 580,
          height: 440,
          content: `
            <div style="display:flex; flex-direction:column; height:100%; font-family:var(--font-main); background:#fff; padding:10px;">
              <div style="background:#16a34a; color:#fff; padding:6px 10px; font-weight:bold; font-size:13px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
                <span>WORKBOOK_SPREADSHEET.XLS</span>
                <button class="retro-button" onclick="showNotification('Workbooks', 'Sum = $8,633,229')" style="background:#fff; color:#000; font-size:10px;">∑ Auto-Sum</button>
              </div>
              <div style="flex:1; overflow:auto; border:2px inset #808080;">
                <table style="width:100%; border-collapse:collapse; font-size:12px;" border="1">
                  <tr style="background:#e2e8f0; font-weight:bold; text-align:center;">
                    <th>#</th><th>A (Item)</th><th>B (Quantity)</th><th>C (Cost)</th>
                  </tr>
                  <tr><td style="text-align:center;">1</td><td>Door Hinges</td><td>100</td><td>$500</td></tr>
                  <tr><td style="text-align:center;">2</td><td>Pacifier Milk Bucks</td><td>1,000</td><td>$10,000</td></tr>
                  <tr><td style="text-align:center;">3</td><td>Screwdriver Tool</td><td>1</td><td>Priceless</td></tr>
                  <tr><td style="text-align:center;">4</td><td>FREE IPuns Queue</td><td>8,633,229,002</td><td>$0</td></tr>
                </table>
              </div>
            </div>
          `
        },
        "note": {
          title: "Hugehard Note 📌",
          width: 360,
          height: 320,
          content: `
            <div style="padding:14px; font-family:'Comic Sans MS', cursive, sans-serif; background:#fef08a; border:2px solid #ca8a04; height:100%; display:flex; flex-direction:column;">
              <div style="font-weight:bold; font-size:14px; color:#854d0e; margin-bottom:8px;">📌 STICKY REMINDER NOTE</div>
              <textarea class="retro-input" style="flex:1; width:100%; background:transparent; border:none; outline:none; resize:none; font-family:inherit; font-size:14px; color:#713f12;" placeholder="Write sticky notes here...">• Check Seashell #3 on Beach wallpaper for Screwdriver.\n• Don't double-click wormy.exe!</textarea>
            </div>
          `
        },
        "mail": {
          title: "Hugehard Mail ✉️",
          width: 580,
          height: 440,
          content: `
            <div style="display:flex; height:100%; font-family:var(--font-main); background:#fff;">
              <div style="width:180px; background:#f1f5f9; border-right:1px solid #cbd5e1; padding:8px; font-size:12px;">
                <button class="retro-button" style="width:100%; font-weight:bold; background:#9333ea; color:#fff; margin-bottom:10px;">✉️ Compose</button>
                <div style="font-weight:bold; margin-bottom:6px; color:#475569;">INBOX (3)</div>
                <div style="padding:6px; background:#e2e8f0; border-radius:4px; margin-bottom:4px; cursor:pointer;" onclick="showNotification('Mail', 'From: Boss Baby - Milk bucks allocated!')"><strong>Boss Baby</strong><br><small>Milk bucks report</small></div>
                <div style="padding:6px; background:#fff; border-radius:4px; margin-bottom:4px; cursor:pointer;" onclick="showNotification('Mail', 'From: Door Admin - Please don\'t open secret.exe')"><strong>Door Admin</strong><br><small>Secret exe alert</small></div>
                <div style="padding:6px; background:#fff; border-radius:4px; cursor:pointer;" onclick="showNotification('Mail', 'From: FBI Crime Division - We are watching')"><strong>FBI Agent</strong><br><small>Case #404-DOOR</small></div>
              </div>
              <div style="flex:1; padding:15px; font-size:12px; line-height:1.5;">
                <h3 style="margin:0 0 8px 0; color:#9333ea;">From: Boss Baby &lt;ceo@babycorp.invalid&gt;</h3>
                <div style="color:#64748b; margin-bottom:12px;">Subject: Milk bucks allocation & Naptime mandate</div>
                <p>GOO GOO GA GA! Executive Timmy spilled apple juice on the stock market servers. Morale restored to 100%.</p>
              </div>
            </div>
          `
        },
        "doors1": {
          title: "HUGEHARD DOORS 1.0 (CGA RETRO TERMINAL)",
          width: 600,
          height: 460,
          content: `
            <div style="background:#001100; color:#00ff00; font-family:'Courier New', monospace; padding:16px; height:100%; display:flex; flex-direction:column; justify-content:space-between; border:3px solid #00ff00; box-shadow:inset 0 0 15px #00ff00;">
              <div>
                <pre style="color:#00ff00; font-weight:bold; font-size:10px; margin:0 0 12px 0; line-height:1.1;">
 _   _  _   _  _____  _____ _   _ ___  ___ _____  ______ _____  _____ ______ _____    __   _____ 
| | | || | | ||  __ \\|  ___| | | ||  \\/  ||  _  | |  _  \\  _  ||  _  || ___ \\  ___|  /  | |  _  |
| |_| || | | || |  \\/| |__ | |_| || .  . || | | | | | | | | | || | | || |_/ / |__    '| | | |/' |
|  _  || | | || | __ |  __||  _  || |\\/| || | | | | | | | | | || | | ||    /|  __|    | | |  /| |
| | | || |_| || |_\\ \\| |___| | | || |  | |\\ \\_/ / | |/ /\\ \\_/ /\\ \\_/ /| |\\ \\| |___  _| |_\\ |_/ /
\\_| |_/ \\___/  \\____/\\____/\\_| |_/\\_|  |_/ \\___/  |___/  \\___/  \\___/ \\_| \\_\\____/  \\___/ \\___/ 
                </pre>
                <div style="border-bottom:1px solid #00ff00; padding-bottom:6px; margin-bottom:12px; font-weight:bold;">
                  HUGEHARD DOORS VERSION 1.0 (C) 1983 HUGEHARD CORP. ALL RIGHTS RESERVED.
                </div>
                <p style="line-height:1.5; font-size:12px;">
                  SYSTEM STATUS: CGA MONOCHROME MODE ACTIVATED.<br>
                  MEM: 64KB RAM OK | FLOPPY DRIVE A: READY | HINGES: VINTAGE MONOCHROME<br><br>
                  Notice: Doors 1.0 looks way older than Doors 0.11, as 1.0 was built in 1983!
                </p>
              </div>

              <div style="background:#002200; border:1px solid #00ff00; padding:12px; text-align:center;">
                <p style="margin-bottom:10px; font-weight:bold;">Tired of 1983 CGA monochrome green terminal?</p>
                <button class="retro-button" onclick="downgradeFromDoors1()" style="background:#00ff00; color:#001100; font-weight:bold; padding:8px 20px; font-family:monospace; border:2px solid #004400; cursor:pointer;">
                  🔻 DOWNGRADE TO DOORS 0.11
                </button>
              </div>
            </div>
          `
        },
        "paint": {
          title: "Paintn't",
          width: 500,
          height: 420,
          content: `
            <div class="paint-container" style="display:flex; flex-direction:column; height:100%; width:100%;">
                <h3>🎨 Paintn't</h3>
                <div style="margin:6px 0; display:flex; gap:10px; align-items:center;">
                    <label>Paint colour:</label>
                    <input type="color" id="paint-color" value="#008080" style="cursor:pointer;">
                    <button class="retro-button" onclick="clearPaint()">Clear canvas</button>
                </div>
                <div id="paint-canvas-wrapper" style="flex:1; width:100%; min-height:200px; position:relative; overflow:hidden;">
                    <canvas id="paint-canvas" class="paint-canvas" style="position:absolute; inset:0; width:100%; height:100%; touch-action:none; background:#fff; border:2px inset #aaa;"></canvas>
                </div>
                <p style="margin-top:6px; font-size:11px; color:#333;">Draw something. Preferably a door. Canvas expands with window size.</p>
            </div>
          `
        },
        "terminal": {
          title: "Door Prompt",
          width: 520,
          height: 350,
          content: `
            <div class="terminal-text" id="terminal-output" style="height:100%; overflow:auto;">
                HUGEHARD DOORS COMMAND PROMPT [Version 0.11]<br>
                Copyright (C) Hugehard Corporation.<br><br>
                Type HELP for a list of commands.<br><br>
                <div id="terminal-lines"></div>
                <div style="display:flex; gap:5px; margin-top:5px;">
                    <span>C:\\DOORS&gt;</span>
                    <input id="terminal-input" autocomplete="off" spellcheck="false" style="background:transparent; border:0; outline:none; color:#00ff66; font-family:inherit; flex:1;">
                </div>
            </div>
          `
        },
        "settings": {
          title: "Door Settings",
          width: 440,
          height: 460,
          content: `
            <h3>⚙️ Door Settings</h3>
            <p>Configure your operating system & personalization.</p>
            <hr>

            <h4 style="margin:6px 0;">🖼️ Desktop Wallpaper</h4>
            <div style="display:flex; flex-direction:column; gap:6px; margin-bottom:10px;">
              <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                <input type="radio" name="wallpaper-choice" value="teal" checked onchange="changeWallpaper('teal')">
                <span>Default Door Teal (#008080)</span>
              </label>
              <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                <input type="radio" name="wallpaper-choice" value="sandy-beach" onchange="changeWallpaper('sandy-beach')">
                <span>🏖️ Sandy Beach & Seashells (Contains Screwdriver)</span>
              </label>
              <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                <input type="radio" name="wallpaper-choice" value="bliss" onchange="changeWallpaper('bliss')">
                <span>Windows XP Bliss Green & Blue</span>
              </label>
              <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                <input type="radio" name="wallpaper-choice" value="matrix" onchange="changeWallpaper('matrix')">
                <span>Matrix Terminal Green</span>
              </label>
              <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                <input type="radio" name="wallpaper-choice" value="crimson" onchange="changeWallpaper('crimson')">
                <span>Crimson Vault Red</span>
              </label>
            </div>

            <hr>

            <h4 style="margin:6px 0;">⚙️ System Upgrade / Options</h4>
            <button class="retro-button" onclick="openApp('doors1')" style="padding:6px 14px; font-weight:bold; background:#00ff00; color:#001100; font-family:monospace; margin-bottom:10px;">
              ⚡ Upgrade to Doors 1.0 (Retro CGA Edition)
            </button>
            <label style="display:block; margin-bottom:6px;"><input type="checkbox" id="sound-toggle" checked> Enable questionable door hinge sounds</label>
            <label style="display:block; margin-bottom:6px;"><input type="checkbox" id="error-toggle" checked> Allow random door errors</label>
            <label style="display:block; margin-bottom:6px;"><input type="checkbox" id="notification-toggle" checked> Allow system notifications</label>

            <hr>
            <p><strong>System version:</strong> HUGEHARD DOORS 0.11</p>
          `
        },
        "activate": {
          title: "Activate Hugehard Doors",
          width: 420,
          height: 310,
          content: `
            <div style="padding:8px;">
              <h3 style="color:#000080; margin-bottom:8px;">🔑 Activate Hugehard Doors</h3>
              <p style="line-height:1.4;">To access official door features, please activate your license by entering your credit card code or key below:</p>
              
              <div style="margin:15px 0; background:#fff; border:2px inset #808080; padding:12px;">
                <label style="display:block; margin-bottom:6px; font-weight:bold; font-size:12px;">Credit Card Code / Product Key:</label>
                <input type="text" id="activate-cc-input" class="retro-input" placeholder="1234 - 5678 - 9012 - 3456" style="width:100%; font-family:monospace; font-size:13px;" autocomplete="off" />
                <small style="color:#666; display:block; margin-top:6px;">Enter any number key to submit activation.</small>
              </div>

              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:15px;">
                <button class="retro-button" onclick="submitActivation()" style="font-weight:bold; padding:5px 18px;">OK / Activate</button>
                <button class="retro-button" onclick="showNotification('Activation', 'Activation deferred.')">Cancel</button>
              </div>
            </div>
          `
        },
        "mystery": {
          title: "🔒 FBI CLASSIFIED DOSSIER",
          width: 440,
          height: 330,
          content: `
            <div style="background:#0c0a09; color:#f87171; border:3px solid #dc2626; padding:14px; font-family:Courier, monospace; height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; box-shadow:inset 0 0 15px rgba(220,38,38,0.4);">
              <div>
                <div style="background:#dc2626; color:#fff; font-weight:bold; text-align:center; padding:4px; font-size:12px; letter-spacing:1px; border-radius:2px; margin-bottom:8px;">
                  🔒 FBI CLASSIFIED DOSSIER — CASE #404-DOOR
                </div>
                <div style="text-align:center; color:#ef4444; font-size:16px; font-weight:bold; text-shadow:0 0 8px #ef4444; margin-bottom:6px;">
                  ⚠️ CRITICAL SECURITY BREACH DETECTED ⚠️
                </div>
                <div style="background:#1c1917; border:1px solid #7f1d1d; padding:10px; font-size:11px; line-height:1.5; color:#fca5a5; margin-bottom:8px;">
                  <p style="color:#ef4444; font-weight:bold; margin-bottom:4px;">STATUS: UNAUTHORIZED SYSTEM ACCESS LOGGED</p>
                  <p>You were explicitly instructed <strong>DO NOT OPEN</strong> this folder.</p>
                  <p style="margin-top:6px;">Your unauthorized intrusion, IP address, and facial telemetry have been logged and reported directly to the <strong>FBI Cyber Crime Division</strong> (Quantico, VA).</p>
                  <p style="margin-top:6px; color:#fecaca; font-style:italic;">Agents are actively monitoring your display screen &amp; webcam right now.</p>
                </div>
                <div style="display:flex; align-items:center; justify-content:center; gap:6px; color:#f87171; font-size:10px; font-weight:bold;">
                  <span style="height:9px; width:9px; background:#ef4444; border-radius:50%; display:inline-block; box-shadow:0 0 8px #ef4444;"></span>
                  LIVE WEBCAM STREAM TRANSMITTING TO FBI AGENTS...
                </div>
              </div>
              
              <div style="margin-top:10px; text-align:center;">
                <button class="retro-button" onclick="mysterySurprise()" style="background:#991b1b; color:#fff; border-color:#fca5a5 #7f1d1d #7f1d1d #fca5a5; font-weight:bold; padding:6px 14px; width:100%; cursor:pointer;">
                  🚨 ACKNOWLEDGE BREACH &amp; REPORT TO AGENTS
                </button>
              </div>
            </div>
          `
        },
        "humor-buddy": {
          title: "Humor Buddy 🤪",
          width: 320,
          height: 250,
          content: `
            <div style="padding:12px; font-family:'Comic Sans MS', cursive, sans-serif; background:#fef08a; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; border:2px solid #ca8a04;">
              <div style="font-size:48px; margin-bottom:6px;">🤪📌</div>
              <h3 style="margin:0 0 6px 0; color:#854d0e;">HUMOR BUDDY IS HERE!</h3>
              <div id="humor-buddy-bubble" style="background:#fff; border:2px inset #ca8a04; padding:8px 12px; font-size:14px; font-weight:bold; color:#b91c1c; border-radius:12px; margin-bottom:8px;">
                "Lookin stupid today!"
              </div>
              <p style="font-size:11px; color:#713f12; margin:0;">
                (Permanent window pinned in top right. If Cutie AI is open, they will roast each other forever until the sword backstab!)
              </p>
            </div>
          `
        },
        "buolingo": {
          title: "BuoLingo",
          width: 420,
          height: 330,
          content: `
            <div style="padding:15px; background:#fef2f2; border:3px solid #dc2626; height:100%; display:flex; flex-direction:column; justify-content:space-between; text-align:center;">
              <div>
                <div style="display:flex; justify-content:center; align-items:center; gap:8px; margin-bottom:8px;">
                  <img src="/assets/aistudio/redbird_2fa7950e.jpg" style="width:54px; height:54px; object-fit:cover; border-radius:50%; border:2px solid #dc2626;" alt="Red Bird" />
                  <span style="font-size:36px;">🔪</span>
                </div>
                <h2 style="color:#b91c1c; font-size:18px; font-weight:bold; margin-bottom:10px;">SPANISH LESSON #1:</h2>
                <div style="background:#fff; border:2px inset #fca5a5; padding:12px; font-size:16px; font-weight:900; color:#b91c1c; margin-bottom:12px;">
                  "SAY I AM STUPID IN SPANISH! NOW!"
                </div>
              </div>

              <form onsubmit="submitBuolingoAnswer(event); return false;" style="display:flex; flex-direction:column; gap:8px;">
                <input id="buolingo-input" type="text" class="retro-input" placeholder="Type answer in Spanish..." style="font-size:14px; text-align:center;" autocomplete="off" />
                <button type="submit" class="retro-button" style="background:#dc2626; color:#fff; font-weight:bold; padding:8px;">
                  🦜 Submit or Face Red Bird Knife Attack!
                </button>
              </form>
            </div>
          `
        },
        "mincraft": {
          title: "Mincraft 2.0 ⛏️",
          width: 480,
          height: 360,
          content: `
            <div style="background:#0f172a; color:#fff; padding:20px; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; font-family:monospace;">
              <div style="font-size:64px; margin-bottom:12px;">🧱🟩⛏️</div>
              <h2 style="color:#22c55e; font-size:22px; font-weight:bold; margin-bottom:10px;">MINCRAFT 2.0 — PC EDITION</h2>
              <div style="background:#1e293b; border:2px inset #334155; padding:15px; width:100%; max-width:360px;">
                <p style="color:#fde047; font-size:14px; font-weight:bold; margin-bottom:12px;">Loading game forever... [0%]</p>
                <div style="height:16px; background:#0f172a; border:1px solid #22c55e; overflow:hidden;">
                  <div style="width:0%; height:100%; background:#22c55e;"></div>
                </div>
              </div>
            </div>
          `
        },
        "turtle": {
          title: "Cute Turtle 🐢",
          width: 380,
          height: 260,
          content: `
            <div style="padding:15px; background:#ecfdf5; border:2px solid #059669; height:100%; text-align:center; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div style="font-size:54px; margin-bottom:6px;">🐢🌿</div>
                <h3 style="color:#047857; margin-bottom:6px;">CUTE TURTLE ON DESKTOP</h3>
                <p style="font-size:12px; color:#065f46; line-height:1.4;">
                  The turtle walks behind windows looking for <code>seagrass.jpg</code> in Desktop/Files. Drag <code>seagrass.jpg</code> away to save it!
                </p>
              </div>
              <button class="retro-button" onclick="showNotification('Turtle 🐢', 'Turtles cannot be closed! They live forever!');" style="background:#059669; color:#fff; font-weight:bold; padding:6px;">
                🐢 Close Turtle (Turtles Refuse To Close)
              </button>
            </div>
          `
        },
        "system-viewer": {
          title: "System Viewer 🏙️⚡ — CPU Microarchitecture City",
          width: 620,
          height: 480,
          content: `
            <div style="background:#030712; color:#38bdf8; font-family:monospace; padding:12px; height:100%; display:flex; flex-direction:column;">
              <div style="background:#0f172a; border:1px solid #0284c7; padding:8px 12px; display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <span style="font-weight:bold; font-size:14px; color:#38bdf8;">🏙️ CPU ALIVE CITY MATRIX (4.2 GHz)</span>
                <span style="color:#fde047; font-size:11px;">ELEC CARS: 1,024/SEC</span>
              </div>

              <div style="flex:1; background:#020617; border:2px inset #1e293b; position:relative; overflow:hidden; display:flex; flex-direction:column; justify-content:space-between; padding:15px;">
                <!-- CPU SKYSCRAPERS -->
                <div style="display:flex; justify-content:space-around; align-items:flex-end; height:180px; border-bottom:3px solid #0284c7; padding-bottom:5px;">
                  <div style="width:70px; height:140px; background:linear-gradient(to top, #0284c7, #38bdf8); border:2px solid #e0f2fe; text-align:center; padding:4px; box-shadow:0 0 15px #0284c7; font-size:10px; color:#000; font-weight:bold;">ALU TOWER</div>
                  <div style="width:80px; height:170px; background:linear-gradient(to top, #16a34a, #4ade80); border:2px solid #dcfce7; text-align:center; padding:4px; box-shadow:0 0 15px #16a34a; font-size:10px; color:#000; font-weight:bold;">L1/L2 CACHE HQ</div>
                  <div style="width:90px; height:150px; background:linear-gradient(to top, #d97706, #fde047); border:2px solid #fef9c3; text-align:center; padding:4px; box-shadow:0 0 15px #d97706; font-size:10px; color:#000; font-weight:bold;">CONTROL UNIT</div>
                  <div style="width:75px; height:130px; background:linear-gradient(to top, #9333ea, #c084fc); border:2px solid #f3e8ff; text-align:center; padding:4px; box-shadow:0 0 15px #9333ea; font-size:10px; color:#000; font-weight:bold;">CORE 0-3 PLAZA</div>
                </div>

                <!-- ELECTRIC HIGHWAY BUSES WITH ANIMATED CARS -->
                <div style="background:#0f172a; border:1px solid #38bdf8; padding:8px; margin-top:10px;">
                  <div style="font-size:11px; color:#94a3b8; margin-bottom:4px;">⚡ BUS HIGHWAY (ELECTRICITY CARS IN MOTION):</div>
                  <div style="height:20px; background:#020617; border:1px solid #0284c7; position:relative; overflow:hidden;">
                    <div style="position:absolute; top:2px; width:12px; height:14px; background:#fde047; box-shadow:0 0 8px #fde047; animation:update-loading-left 1.5s linear infinite;"></div>
                    <div style="position:absolute; top:2px; width:12px; height:14px; background:#38bdf8; box-shadow:0 0 8px #38bdf8; animation:update-loading-left 2.2s linear infinite;"></div>
                  </div>
                </div>

                <div style="font-size:11px; color:#94a3b8; display:flex; justify-content:space-between; margin-top:6px;">
                  <span>CPU Temp: 42°C (Optimal)</span>
                  <span>Door Cycles: 999,999/sec</span>
                </div>
              </div>
            </div>
          `
        },
        "exesafe": {
          title: "EXEsafe.com",
          width: 540,
          height: 520,
          content: `
            <div class="exesafe-page" style="padding:15px; overflow-y:auto; height:100%;">
                <h1>EXEsafe.com</h1>
                <p>YOUR NUMBER ONE SOURCE FOR COMPLETELY SAFE DOWNLOADS.</p>
                
                <div class="exesafe-product">
                    <h2>GRAND THEFT AUTO VI</h2>
                    <p>PC EDITION — FREE DOWNLOAD!</p>
                    <p>File size: 999 GB (probably)</p>
                    <button class="retro-button" onclick="downloadVirusbase()">DOWNLOAD NOW</button>
                </div>

                <div class="exesafe-product" style="border-color:#16a34a; background:#f0fdf4; margin-top:12px;">
                    <h2 style="color:#15803d;">MINCRAFT 2.0 (PC EDITION)</h2>
                    <p>BLOCKY BUILDING GAME — 100% FREE!</p>
                    <button class="retro-button" onclick="downloadMincraft()" style="background:#16a34a; color:#fff; font-weight:bold;">⛏️ DOWNLOAD MINCRAFT 2.0</button>
                </div>

                <!-- FREE IPUNS GAME SECTION -->
                <div style="border:2px solid #059669; background:#ecfdf5; padding:15px; margin-top:15px; text-align:center;">
                    <h2 style="color:#047857; margin:0 0 6px 0;">📱 FREE IPUNS (100% LEGIT FREE IPHONE 18 PRO MAX)</h2>
                    <p style="font-size:12px; color:#065f46; margin-bottom:10px;">Enter your credit card details below to claim your free IPun!</p>
                    
                    <form onsubmit="submitIpunsOrder(event); return false;" style="background:#fff; border:1px solid #a7f3d0; padding:10px; text-align:left; font-size:11px;">
                      <div style="margin-bottom:6px;">
                        <label style="font-weight:bold;">Cardholder Name:</label>
                        <input type="text" class="retro-input" placeholder="e.g. John Door" required style="width:100%;" />
                      </div>
                      <div style="margin-bottom:6px;">
                        <label style="font-weight:bold;">Credit Card Number:</label>
                        <input type="text" class="retro-input" placeholder="4000 1234 5678 9010" required style="width:100%;" />
                      </div>
                      <div style="display:flex; gap:6px; margin-bottom:8px;">
                        <div style="flex:1;">
                          <label style="font-weight:bold;">Expiry (MM/YY):</label>
                          <input type="text" class="retro-input" placeholder="12/28" required style="width:100%;" />
                        </div>
                        <div style="width:80px;">
                          <label style="font-weight:bold;">CVV:</label>
                          <input type="text" class="retro-input" placeholder="999" required style="width:100%;" />
                        </div>
                      </div>
                      <button type="submit" class="retro-button" style="width:100%; font-weight:bold; background:#059669; color:#fff; padding:6px;">📱 CLAIM MY FREE IPUN NOW</button>
                    </form>
                </div>
            </div>
          `
        }
      };
      return apps[appName] || null;
    }

    // Open App
    function openApp(appName: string) {
      const existing = windows.find(w => w.appName === appName);
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
      windowElement.dataset.windowId = String(id);

      const offset = (windows.length % 7) * 25;
      windowElement.style.left = `${100 + offset}px`;
      windowElement.style.top = `${65 + offset}px`;
      windowElement.style.width = `${app.width || 420}px`;
      windowElement.style.height = `${app.height || 300}px`;
      windowElement.style.zIndex = String(++highestZIndex);

      windowElement.innerHTML = `
        <div class="window-titlebar">
            <span class="window-title">${escapeHTML(app.title)}</span>
            <div class="window-controls">
                <button class="minimize-window" title="Minimize">_</button>
                <button class="maximize-window" title="Maximize">□</button>
                <button class="close-window" title="Close">×</button>
            </div>
        </div>
        <div class="window-content" style="height:calc(100% - 47px); overflow:auto;">${app.content}</div>
        <div class="window-statusbar">Ready. Door is questionable.</div>
      `;

      const windowLayer = document.getElementById("window-layer");
      if (windowLayer) windowLayer.appendChild(windowElement);

      const windowData = {
        id,
        appName,
        title: app.title,
        element: windowElement,
        minimized: false,
        maximized: false,
        previousBounds: null as any
      };

      windows.push(windowData);
      addTaskbarButton(windowData);
      activateWindow(id);
      setupWindowControls(windowData);
      setupDragging(windowData);
      setupResizing(windowData);

      if (appName === "humor-buddy") {
        humorBuddyActive = true;
        windowElement.style.left = "calc(100vw - 340px)";
        windowElement.style.top = "20px";
        windowElement.style.width = "320px";
        windowElement.style.height = "250px";
      }

      if (appName === "terminal") setupTerminal();
      if (appName === "paint") setupPaint();
      if (appName === "file-manager") {
        setTimeout(() => showVirtualFolder("Desktop"), 30);
      }

      // Check for Humor Buddy + Cutie AI roast battle hook
      if ((appName === "cute-ai" && windows.some(w => w.appName === "humor-buddy")) ||
          (appName === "humor-buddy" && windows.some(w => w.appName === "cute-ai"))) {
        setTimeout(() => startHumorBuddyCutieAiRoast(), 500);
      }

      // Spawn Turtle crawling sprite on desktop
      if (appName === "turtle" && !turtleActive) {
        turtleActive = true;
        const turtleSprite = document.createElement("div");
        turtleSprite.id = "desktop-turtle-sprite";
        turtleSprite.style.cssText = `
          position: fixed; top: 300px; left: 100px; z-index: 5000;
          font-size: 38px; transition: all 1s ease-in-out;
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5));
          pointer-events: auto; cursor: grab; touch-action: none; user-select: none;
        `;
        turtleSprite.innerHTML = `🐢`;
        turtleSprite.title = "Cute Turtle! Drag me anywhere on the screen or to any window!";
        document.body.appendChild(turtleSprite);

        let isDraggingTurtle = false;
        let startX = 0;
        let startY = 0;
        let origLeft = 0;
        let origTop = 0;

        turtleSprite.addEventListener("pointerdown", (e: PointerEvent) => {
          if (e.button !== 0) return;
          isDraggingTurtle = true;
          turtleSprite.style.cursor = "grabbing";
          turtleSprite.style.transition = "none";
          turtleSprite.style.zIndex = "100000";
          turtleSprite.setPointerCapture(e.pointerId);

          startX = e.clientX;
          startY = e.clientY;
          origLeft = turtleSprite.offsetLeft;
          origTop = turtleSprite.offsetTop;
        });

        turtleSprite.addEventListener("pointermove", (e: PointerEvent) => {
          if (!isDraggingTurtle) return;
          const dx = e.clientX - startX;
          const dy = e.clientY - startY;
          turtleSprite.style.left = `${Math.max(0, Math.min(window.innerWidth - 50, origLeft + dx))}px`;
          turtleSprite.style.top = `${Math.max(0, Math.min(window.innerHeight - 50, origTop + dy))}px`;
        });

        const stopTurtleDrag = (e: PointerEvent) => {
          if (!isDraggingTurtle) return;
          isDraggingTurtle = false;
          turtleSprite.style.cursor = "grab";
          turtleSprite.style.transition = "all 1s ease-in-out";
          turtleSprite.style.zIndex = "5000";
          try {
            turtleSprite.releasePointerCapture(e.pointerId);
          } catch (_err) {}
          showNotification("Turtle 🐢", "Turtle moved to new location!");
        };

        turtleSprite.addEventListener("pointerup", stopTurtleDrag);
        turtleSprite.addEventListener("pointercancel", stopTurtleDrag);

        // Crawl towards seagrass.jpg on desktop when not being dragged
        const turtleInterval = setInterval(() => {
          if (!turtleActive) {
            clearInterval(turtleInterval);
            return;
          }
          if (isDraggingTurtle) return;

          const currentLeft = parseInt(turtleSprite.style.left) || 100;
          const currentTop = parseInt(turtleSprite.style.top) || 300;

          const dx = (Math.random() - 0.4) * 40;
          const dy = (Math.random() - 0.4) * 40;

          turtleSprite.style.left = `${Math.max(10, Math.min(window.innerWidth - 60, currentLeft + dx))}px`;
          turtleSprite.style.top = `${Math.max(10, Math.min(window.innerHeight - 100, currentTop + dy))}px`;
        }, 2000);
      }
    }

    // Window controls
    function setupWindowControls(windowData: any) {
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

      const titlebar = element.querySelector(".window-titlebar") as HTMLElement;
      if (titlebar) {
        titlebar.addEventListener("contextmenu", event => {
          event.preventDefault();
          event.stopPropagation();
          showUniversalContextMenu(event, [
            { label: "Minimize", action: `() => window.minimizeWindow(${windowData.id})` },
            { label: "Maximize", action: `() => window.toggleMaximizeWindow(${windowData.id})` },
            { separator: true },
            { label: "Close (Alt+F4)", action: `() => window.closeWindow(${windowData.id})` }
          ]);
        });
      }
    }

    function activateWindow(id: number) {
      const windowData = windows.find(w => w.id === id);
      if (!windowData) return;

      highestZIndex++;
      windowData.element.style.zIndex = String(highestZIndex);

      windows.forEach(item => {
        item.element.classList.toggle("active", item.id === id);
        const taskbarBtn = document.querySelector(`.taskbar-window[data-window-id="${item.id}"]`);
        if (taskbarBtn) {
          taskbarBtn.classList.toggle("active", item.id === id);
        }
      });
    }

    function closeWindow(id: number, force = false) {
      const windowData = windows.find(w => w.id === id);
      if (!windowData) return;

      if (!force && windowData.appName === "humor-buddy") {
        showNotification("Humor Buddy 🤪", "Humor Buddy cannot be closed! He stays pinned to the top right!");
        return;
      }

      if (!force && windowData.appName === "buolingo") {
        triggerBuolingoAttack();
        return;
      }

      windowData.element.remove();
      const taskbarBtn = document.querySelector(`.taskbar-window[data-window-id="${id}"]`);
      if (taskbarBtn) taskbarBtn.remove();

      windows = windows.filter(w => w.id !== id);
      if (windows.length) {
        const lastWin = windows[windows.length - 1];
        restoreWindow(lastWin.id);
      }
    }

    function toggleMaximizeWindow(id: number) {
      const windowData = windows.find(w => w.id === id);
      if (!windowData) return;

      const element = windowData.element;
      const windowLayer = document.getElementById("window-layer");
      if (!windowLayer) return;

      if (!windowData.maximized) {
        windowData.previousBounds = {
          left: element.style.left,
          top: element.style.top,
          width: element.style.width,
          height: element.style.height
        };

        element.style.left = "0px";
        element.style.top = "0px";
        element.style.width = `${windowLayer.clientWidth}px`;
        element.style.height = `${windowLayer.clientHeight}px`;
        windowData.maximized = true;
      } else {
        const bounds = windowData.previousBounds;
        if (bounds) {
          element.style.left = bounds.left;
          element.style.top = bounds.top;
          element.style.width = bounds.width;
          element.style.height = bounds.height;
        }
        windowData.maximized = false;
      }

      const btn = element.querySelector(".maximize-window");
      if (btn) {
        btn.textContent = windowData.maximized ? "❐" : "□";
        btn.title = windowData.maximized ? "Restore" : "Maximize";
      }
      activateWindow(id);
    }

    function minimizeWindow(id: number) {
      const windowData = windows.find(w => w.id === id);
      if (!windowData) return;

      windowData.element.style.display = "none";
      windowData.minimized = true;

      const btn = document.querySelector(`.taskbar-window[data-window-id="${id}"]`);
      if (btn) btn.classList.remove("active");
    }

    function restoreWindow(id: number) {
      const windowData = windows.find(w => w.id === id);
      if (!windowData) return;

      windowData.element.style.display = "flex";
      windowData.minimized = false;
      activateWindow(id);
    }

    function cascadeWindows() {
      windows.forEach((win, index) => {
        restoreWindow(win.id);
        const offset = (index % 8) * 30;
        win.element.style.left = `${50 + offset}px`;
        win.element.style.top = `${40 + offset}px`;
        win.element.style.width = '420px';
        win.element.style.height = '320px';
      });
      showNotification("Taskbar", "Doors cascaded gracefully.");
    }

    function minimizeAllWindows() {
      windows.forEach(win => minimizeWindow(win.id));
      showNotification("Desktop", "All doors minimized to taskbar.");
    }

    function addTaskbarButton(windowData: any) {
      const taskbarWindows = document.getElementById("taskbar-windows");
      if (!taskbarWindows) return;

      const button = document.createElement("button");
      button.className = "taskbar-window active";
      button.dataset.windowId = String(windowData.id);
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

    // Window Draggable
    function setupDragging(windowData: any) {
      const titlebar = windowData.element.querySelector(".window-titlebar");
      const element = windowData.element;
      const windowLayer = document.getElementById("window-layer");

      let dragging = false;
      let startX = 0;
      let startY = 0;
      let originalLeft = 0;
      let originalTop = 0;

      titlebar.addEventListener("pointerdown", (event: PointerEvent) => {
        if ((event.target as HTMLElement).closest("button")) return;
        dragging = true;
        titlebar.setPointerCapture(event.pointerId);

        startX = event.clientX;
        startY = event.clientY;
        originalLeft = element.offsetLeft;
        originalTop = element.offsetTop;

        activateWindow(windowData.id);
      });

      titlebar.addEventListener("pointermove", (event: PointerEvent) => {
        if (!dragging || !windowLayer) return;

        const newLeft = originalLeft + event.clientX - startX;
        const newTop = originalTop + event.clientY - startY;

        const maxLeft = Math.max(0, windowLayer.clientWidth - 80);
        const maxTop = Math.max(0, windowLayer.clientHeight - 25);

        element.style.left = `${Math.max(-element.offsetWidth + 80, Math.min(newLeft, maxLeft))}px`;
        element.style.top = `${Math.max(0, Math.min(newTop, maxTop))}px`;
      });

      titlebar.addEventListener("pointerup", () => { dragging = false; });
      titlebar.addEventListener("pointercancel", () => { dragging = false; });
    }

    // Window Resizing
    function setupResizing(windowData: any) {
      const element = windowData.element;
      const windowLayer = document.getElementById("window-layer");
      const directions = ["n", "s", "e", "w", "ne", "nw", "se", "sw"];

      directions.forEach(direction => {
        const handle = document.createElement("div");
        handle.className = `resize-handle resize-${direction}`;
        element.appendChild(handle);

        handle.addEventListener("pointerdown", (event: PointerEvent) => {
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

          handle.setPointerCapture(event.pointerId);

          const onPointerMove = (moveEvent: PointerEvent) => {
            const dx = moveEvent.clientX - startX;
            const dy = moveEvent.clientY - startY;

            let newWidth = startWidth;
            let newHeight = startHeight;
            let newLeft = startLeft;
            let newTop = startTop;

            if (direction.includes("e")) newWidth = Math.max(260, startWidth + dx);
            if (direction.includes("s")) newHeight = Math.max(180, startHeight + dy);
            if (direction.includes("w")) {
              const possibleWidth = startWidth - dx;
              if (possibleWidth >= 260) {
                newWidth = possibleWidth;
                newLeft = startLeft + dx;
              }
            }
            if (direction.includes("n")) {
              const possibleHeight = startHeight - dy;
              if (possibleHeight >= 180) {
                newHeight = possibleHeight;
                newTop = startTop + dy;
              }
            }

            element.style.width = `${newWidth}px`;
            element.style.height = `${newHeight}px`;
            element.style.left = `${newLeft}px`;
            element.style.top = `${newTop}px`;
          };

          const onPointerUp = (upEvent: PointerEvent) => {
            handle.releasePointerCapture(upEvent.pointerId);
            handle.removeEventListener("pointermove", onPointerMove);
            handle.removeEventListener("pointerup", onPointerUp);
          };

          handle.addEventListener("pointermove", onPointerMove);
          handle.addEventListener("pointerup", onPointerUp);
        });
      });
    }

    // Terminal
    function setupTerminal() {
      const input = document.getElementById("terminal-input") as HTMLInputElement;
      const lines = document.getElementById("terminal-lines");
      if (!input || !lines) return;

      input.focus();

      input.addEventListener("keydown", event => {
        if (event.key === "Enter") {
          const command = input.value.trim().toUpperCase();
          const line = document.createElement("div");
          line.innerHTML = `C:\\DOORS&gt; ${escapeHTML(input.value)}`;
          lines.appendChild(line);

          let outputText = "";

          switch (command) {
            case "HELP":
              outputText = "Available commands:<br>- HELP: Shows this list<br>- VER: System version<br>- DIR: List directory<br>- CLS: Clear screen<br>- RESTART: Reboot system<br>- EARTH: Apply gravity";
              break;
            case "VER":
              outputText = "HUGEHARD DOORS OS 0.11 [CGA / VGA Edition]";
              break;
            case "DIR":
              outputText = "Directory of C:\\DOORS<br>04/11/2026  12:00 PM    &lt;DIR&gt;          Desktop<br>04/11/2026  12:00 PM    &lt;DIR&gt;          Files<br>04/11/2026  12:00 PM          1,024    earth.bat<br>04/11/2026  12:00 PM         999GB    Virusbase.zip";
              break;
            case "CLS":
              lines.innerHTML = "";
              input.value = "";
              return;
            case "RESTART":
              bootSystem();
              outputText = "Restarting system...";
              break;
            case "EARTH":
              runEarthBat();
              outputText = "GRAVITY APPLIED VIA COMMAND PROMPT!";
              break;
            default:
              outputText = `'${escapeHTML(command)}' is not recognized as a door command. Type HELP for assistance.`;
              break;
          }

          const response = document.createElement("div");
          response.innerHTML = outputText;
          lines.appendChild(response);

          input.value = "";
          const output = document.getElementById("terminal-output");
          if (output) output.scrollTop = output.scrollHeight;
        }
      });
    }

    // Paint with Possessed Crazy Pen after 300px
    let lastX = 0;
    let lastY = 0;

    function setupPaint() {
      const canvas = document.getElementById("paint-canvas") as HTMLCanvasElement;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = canvas.parentElement?.clientWidth || 400;
      canvas.height = canvas.parentElement?.clientHeight || 300;

      canvas.addEventListener("pointerdown", event => {
        painting = true;
        lastX = event.offsetX;
        lastY = event.offsetY;
        ctx.beginPath();
        ctx.moveTo(event.offsetX, event.offsetY);
      });

      canvas.addEventListener("pointermove", event => {
        if (!painting) return;
        const colorInput = document.getElementById("paint-color") as HTMLInputElement;
        
        const dx = event.offsetX - lastX;
        const dy = event.offsetY - lastY;
        paintDistance += Math.hypot(dx, dy);
        lastX = event.offsetX;
        lastY = event.offsetY;

        ctx.strokeStyle = colorInput ? colorInput.value : "#008080";
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();

        // Check if possessed trigger reached (>= 300px)
        if (paintDistance >= 300 && !paintPossessed) {
          paintPossessed = true;
          showNotification("Paintn't Pen Possessed! 🖌️👻", "The pen has gone crazy!");
          
          // Auto-write crazy possessed text across canvas
          let count = 0;
          const crazyTexts = [
            "YoU aRE an iDioT",
            "RESTART NOW",
            "KiLL THe HiNGe",
            "DOORS 0.11 IS WATCHING YOU",
            "NO MORE PAINTING!",
            "I HAVE TAKEN OVER THE BRUSH"
          ];

          const possessInterval = setInterval(() => {
            if (count > 12) {
              clearInterval(possessInterval);
              return;
            }
            count++;

            ctx.save();
            ctx.fillStyle = count % 2 === 0 ? "#dc2626" : "#b91c1c";
            ctx.font = `${Math.floor(Math.random() * 16 + 16)}px 'Comic Sans MS', cursive, sans-serif`;
            const text = crazyTexts[Math.floor(Math.random() * crazyTexts.length)];
            const rx = Math.random() * (canvas.width - 150);
            const ry = Math.random() * (canvas.height - 30);
            ctx.fillText(text, Math.max(10, rx), Math.max(25, ry));
            
            // Draw random crazy erratic line
            ctx.beginPath();
            ctx.strokeStyle = "#ef4444";
            ctx.lineWidth = Math.random() * 4 + 1;
            ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.stroke();
            ctx.restore();
          }, 180);
        }
      });

      canvas.addEventListener("pointerup", () => painting = false);
      canvas.addEventListener("pointercancel", () => painting = false);
    }

    function clearPaint() {
      const canvas = document.getElementById("paint-canvas") as HTMLCanvasElement;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      paintDistance = 0;
      paintPossessed = false;
    }

    // Boogle and Web Search
    function searchBoogle(event: Event) {
      event.preventDefault();
      const queryInput = document.getElementById("boogle-query") as HTMLInputElement;
      const results = document.getElementById("boogle-results");
      if (!queryInput || !results) return;

      const query = queryInput.value.trim().toLowerCase();
      if (!query) {
        results.innerHTML = "<p>Please enter something to search.</p>";
        return;
      }

      const matched = boogleWebSites.filter(site => {
        return site.title.toLowerCase().includes(query) ||
               site.url.toLowerCase().includes(query) ||
               site.keywords.some(k => k.includes(query) || query.includes(k));
      });

      if (matched.length > 0) {
        results.innerHTML = `
          <p style="margin-bottom:12px;">Search results for: <strong>${escapeHTML(query)}</strong> (${matched.length} sites found):</p>
          <div style="display:flex; flex-direction:column; gap:12px;">
            ${matched.map(site => `
              <div class="boogle-result" style="margin:0; text-align:left; border:1px solid #ddd; padding:10px; background:#fafafa; border-radius:4px;">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                  ${site.isReal 
                    ? `<img src="${site.icon}" alt="" style="width:20px; height:20px; object-fit:contain;" />` 
                    : `<span style="font-size:18px;">${site.icon}</span>`}
                  ${site.isReal 
                    ? `<a href="${site.url}" target="_blank" rel="noopener noreferrer" style="color:#174ea6; font-size:16px; font-weight:bold; text-decoration:underline;">${escapeHTML(site.title)}</a>` 
                    : site.title.includes("Policy")
                    ? `<a href="#" onclick="showHugehardPolicyInBoogle(); return false;" style="color:#000080; font-size:16px; font-weight:bold; text-decoration:underline;">${escapeHTML(site.title)}</a>`
                    : `<a href="#" onclick="showExesafeInBoogle(); return false;" style="color:#b00000; font-size:16px; font-weight:bold; text-decoration:underline;">${escapeHTML(site.title)}</a>`}
                </div>
                <p style="margin:4px 0; color:#333; font-size:13px;">${escapeHTML(site.description)}</p>
                <small style="color:#006621; font-size:11px;">${escapeHTML(site.url)}</small>
              </div>
            `).join('')}
          </div>
        `;
      } else {
        results.innerHTML = `
          <p>Search results for: <strong>${escapeHTML(query)}</strong></p>
          <p style="margin-top:15px; color:#666;">No matching doors found on Boogle. Try searching for "policy", "ipuns", "windows", "mac", "linux", "chrome", or "gta"!</p>
        `;
      }
    }

    function openBoogleSite(_index: number) {
      showExesafeInBoogle();
    }

    function showHugehardPolicyInBoogle() {
      const results = document.getElementById("boogle-results");
      if (!results) return;
      
      results.innerHTML = `
        <div style="padding:15px; background:#fff; color:#222; font-family:'Times New Roman', serif; height:100%; overflow-y:auto; border:2px inset #aaa;">
          <button class="retro-button" onclick="showBoogleHome()" style="font-family:var(--font-main); margin-bottom:12px;">← Back to Boogle</button>
          <h2 style="color:#000080; border-bottom:2px solid #000080; padding-bottom:6px; margin:0 0 10px 0; font-family:sans-serif;">HugeHard.Co Official Terms of Policy & Door Maintenance</h2>
          <p style="font-size:11px; color:#666; font-style:italic; margin-bottom:12px;">Last Revised: November 2026 • Document ID: HH-POLICY-999-X</p>
          
          <div style="font-size:12px; line-height:1.6; max-height:200px; overflow-y:auto; background:#f9f9f9; padding:10px; border:1px solid #ddd; margin-bottom:15px;">
            <p><strong>SECTION 1. DEFINITION OF DOORS:</strong> Any rectangular object that swings, slides, or refuses to open shall be deemed a "Door". By using Hugehard Doors OS 0.11, you surrender all rights to complain about missing windows, infinite error dialogs, and gravity anomalies.</p>
            <p><strong>SECTION 2. PRIVACY AGREEMENT:</strong> Hugehard Corporation reserves the right to observe your desktop via Marinette's broadsword, Boss Baby's high chair, and the FBI's webcam telemetry at all hours.</p>
            <p><strong>SECTION 3. HINGE MAINTENANCE PROTOCOL:</strong> The policy document below is physically secured to the server rack using a heavy iron hinge with three titanium screws. Under no circumstances should any user attempt to unfasten these screws with a Screwdriver.</p>
          </div>

          <div id="policy-hinge-section" style="background:#e5e7eb; border:3px outset #9ca3af; padding:15px; text-align:center; position:relative; min-height:180px; overflow:hidden;">
            <h4 style="margin:0 0 10px 0; font-family:var(--font-main); color:#1f2937;">🔩 SERVER HINGE MOUNT (3 titanium screws)</h4>
            
            <div id="hinge-speech-bubble" style="background:#fef08a; border:2px solid #ca8a04; padding:6px 12px; display:inline-block; font-family:var(--font-main); font-weight:bold; font-size:12px; color:#854d0e; margin-bottom:12px; border-radius:12px;">
              "I am the Master Policy Hinge. Unfasten my 3 screws if you dare!"
            </div>

            <div style="display:flex; justify-content:center; align-items:center; gap:25px; margin-top:10px;">
              <div id="main-policy-hinge" style="width:140px; height:90px; background:linear-gradient(135deg, #9ca3af, #4b5563); border:3px solid #1f2937; border-radius:6px; display:flex; align-items:center; justify-style:space-around; position:relative; box-shadow:3px 3px 6px rgba(0,0,0,0.4); transition:all 0.5s ease; padding:0 10px;">
                <button id="policy-screw-1" class="retro-button" onclick="interactPolicyScrew(1)" style="width:30px; height:30px; border-radius:50%; font-size:12px; font-weight:bold; padding:0; cursor:pointer;" title="Screw 1">🪛</button>
                <button id="policy-screw-2" class="retro-button" onclick="interactPolicyScrew(2)" style="width:30px; height:30px; border-radius:50%; font-size:12px; font-weight:bold; padding:0; cursor:pointer;" title="Screw 2">🪛</button>
                <button id="policy-screw-3" class="retro-button" onclick="interactPolicyScrew(3)" style="width:30px; height:30px; border-radius:50%; font-size:12px; font-weight:bold; padding:0; cursor:pointer;" title="Screw 3">🪛</button>
              </div>

              <div id="sister-policy-hinge" style="display:none; width:120px; height:80px; background:linear-gradient(135deg, #f472b6, #db2777); border:3px solid #831843; border-radius:6px; align-items:center; justify-content:space-around; position:relative; box-shadow:3px 3px 6px rgba(0,0,0,0.4); transition:all 0.5s ease;">
                <span style="font-size:10px; color:#fff; font-weight:bold; position:absolute; top:-16px; width:100%; text-align:center;">SISTER HINGE</span>
                <span style="font-size:16px;">🔩</span><span style="font-size:16px;">🔩</span><span style="font-size:16px;">🔩</span>
              </div>
            </div>

            <div id="hand-screwdriver" style="display:none; position:absolute; top:-100px; right:60px; font-size:50px; transition:all 0.6s ease; z-index:100;">
              🖐️🪛
            </div>
          </div>
        </div>
      `;
    }

    function interactPolicyScrew(screwNum: number) {
      if (!hasScrewdriver) {
        alert("🔒 You need a Screwdriver to unfasten these screws!\n\nHint: Switch your wallpaper to 'Sandy Beach & Seashells' in Door Settings and open the seashells to find a Screwdriver!");
        showNotification("Need Screwdriver", "You need a Screwdriver to unfasten policy screws!");
        return;
      }

      const bubble = document.getElementById("hinge-speech-bubble");
      const screwBtn = document.getElementById(`policy-screw-${screwNum}`) as HTMLButtonElement;
      
      if (screwBtn) {
        screwBtn.disabled = true;
        screwBtn.style.opacity = "0.2";
        screwBtn.textContent = "❌";
      }

      policyScrewCount++;

      if (policyScrewCount === 1) {
        if (bubble) bubble.textContent = "Wait What Are You doing?!";
        showNotification("Main Hinge", "Wait What Are You doing?!");
      } else if (policyScrewCount === 2) {
        if (bubble) bubble.textContent = "Please stop! Ill Give You My Sister!";
        showNotification("Main Hinge", "Please stop! Ill Give You My Sister!");

        const sisterHinge = document.getElementById("sister-policy-hinge");
        if (sisterHinge) sisterHinge.style.display = "flex";

        setTimeout(() => {
          const hand = document.getElementById("hand-screwdriver");
          if (hand) {
            hand.style.display = "block";
            hand.style.top = "40px";

            setTimeout(() => {
              if (sisterHinge) {
                sisterHinge.style.transform = "translateY(250px) rotate(45deg)";
                sisterHinge.style.opacity = "0";
              }
              if (bubble) bubble.textContent = "Hah Sucker!";
              showNotification("Sister Hinge", "No You Can't Do This To Me! AAhhhh!");

              setTimeout(() => {
                if (hand) hand.style.top = "-120px";
              }, 800);
            }, 1000);
          }
        }, 1200);

      } else if (policyScrewCount >= 3) {
        if (bubble) bubble.textContent = "NOOO! MY LAST SCREW!";
        const mainHinge = document.getElementById("main-policy-hinge");
        if (mainHinge) {
          mainHinge.style.transform = "translateY(300px) rotate(180deg)";
          mainHinge.style.opacity = "0";
        }

        setTimeout(() => {
          alert("🎉 CONGRATULATIONS! You unfastened all 3 screws and defeated the Master Policy Hinge!");
          showNotification("Policy Unlocked", "The Master Policy Hinge was defeated!");
        }, 800);
      }
    }

    function showExesafeInBoogle() {
      const results = document.getElementById("boogle-results");
      if (!results) return;
      results.innerHTML = `
        <div class="exesafe-page" style="padding:15px; overflow-y:auto; height:100%;">
            <button class="retro-button" onclick="showBoogleHome()" style="margin-bottom:10px;">← Back to Boogle</button>
            <h1>EXEsafe.com</h1>
            <p>YOUR NUMBER ONE SOURCE FOR COMPLETELY SAFE DOWNLOADS.</p>

            <div class="exesafe-product">
                <h2>GRAND THEFT AUTO VI</h2>
                <p>PC EDITION — FREE DOWNLOAD!</p>
                <p>File size: 999 GB (probably)</p>
                <button class="retro-button" onclick="downloadVirusbase()">DOWNLOAD NOW</button>
            </div>

            <div style="border:2px solid #059669; background:#ecfdf5; padding:15px; margin-top:15px; text-align:center;">
                <h2 style="color:#047857; margin:0 0 6px 0;">📱 FREE IPUNS (100% LEGIT FREE IPHONE 18 PRO MAX)</h2>
                <p style="font-size:12px; color:#065f46; margin-bottom:10px;">Enter your credit card details below to claim your free IPun!</p>
                
                <form onsubmit="submitIpunsOrder(event); return false;" style="background:#fff; border:1px solid #a7f3d0; padding:10px; text-align:left; font-size:11px;">
                  <div style="margin-bottom:6px;">
                    <label style="font-weight:bold;">Cardholder Name:</label>
                    <input type="text" class="retro-input" placeholder="e.g. John Door" required style="width:100%;" />
                  </div>
                  <div style="margin-bottom:6px;">
                    <label style="font-weight:bold;">Credit Card Number:</label>
                    <input type="text" class="retro-input" placeholder="4000 1234 5678 9010" required style="width:100%;" />
                  </div>
                  <div style="display:flex; gap:6px; margin-bottom:8px;">
                    <div style="flex:1;">
                      <label style="font-weight:bold;">Expiry (MM/YY):</label>
                      <input type="text" class="retro-input" placeholder="12/28" required style="width:100%;" />
                    </div>
                    <div style="width:80px;">
                      <label style="font-weight:bold;">CVV:</label>
                      <input type="text" class="retro-input" placeholder="999" required style="width:100%;" />
                    </div>
                  </div>
                  <button type="submit" class="retro-button" style="width:100%; font-weight:bold; background:#059669; color:#fff; padding:6px;">📱 CLAIM MY FREE IPUN NOW</button>
                </form>
            </div>
        </div>
      `;
    }

    function submitIpunsOrder(e: Event) {
      e.preventDefault();
      const popup = document.createElement("div");
      popup.className = "virus-error";
      popup.style.zIndex = "60000";
      popup.style.left = "50%";
      popup.style.top = "50%";
      popup.style.transform = "translate(-50%, -50%)";
      popup.style.width = "420px";

      popup.innerHTML = `
        <div class="virus-error-title" style="background:#059669; color:#fff; padding:6px 10px; font-weight:bold; display:flex; justify-content:space-between; align-items:center;">
          <span>📱 FREE IPUNS ORDER CONFIRMATION</span>
          <button onclick="this.closest('.virus-error').remove();" style="background:#c0c0c0; border:1px solid #000; width:18px; height:18px; font-size:11px; cursor:pointer;">×</button>
        </div>
        <div class="virus-error-content" style="padding:18px; text-align:center; background:#f0fdf4;">
          <div style="font-size:42px; margin-bottom:8px;">📱🎉🎁</div>
          <h2 style="color:#047857; font-size:18px; font-weight:bold; margin-bottom:10px;">ORDER PLACED SUCCESSFULLY!</h2>
          <p style="font-size:13px; color:#111; line-height:1.5; margin-bottom:12px;">
            Thank you for submitting your credit card details to EXEsafe.com!
          </p>
          <div style="background:#d1fae5; border:2px dashed #059669; padding:12px; text-align:left; font-size:12px; margin-bottom:14px; line-height:1.6; color:#065f46;">
            <div><strong>Queue Status:</strong> Order placed behind <span style="font-weight:bold; color:#b91c1c;">8,633,229,002,762,100,542</span> requests.</div>
            <div><strong>Processing Speed:</strong> Exactly 1 request processed per day.</div>
            <div><strong>Estimated Delivery Time:</strong> <span style="font-weight:bold; color:#047857; font-size:14px;">113.7 years</span></div>
          </div>
          <button class="retro-button" onclick="this.closest('.virus-error').remove();" style="padding:6px 24px; font-weight:bold; background:#059669; color:#fff;">
            OK / Wait Patiently ⏳
          </button>
        </div>
      `;

      document.body.appendChild(popup);
    }

    function showBoogleHome() {
      const results = document.getElementById("boogle-results");
      if (!results) return;
      results.innerHTML = `<p style="text-align:center; color:#555;">Welcome back to Boogle. Search for operating systems, games, or corporate policy!</p>`;
    }

    function downloadVirusbase() {
      addVirtualFile("Downloads", { name: "Virusbase.zip", type: "zip" });
      showNotification("Download complete", "Virusbase.zip has been saved to Downloads.");
      
      openApp("file-manager");
      setTimeout(() => {
        showVirtualFolder("Downloads");
      }, 100);
    }

    function extractVirusbase() {
      addVirtualFile("Files", { name: "Virusbase", type: "folder" });
      addVirtualFile("Files", { name: "game.exe", type: "fake-exe" });
      showNotification("Extraction complete", "game.exe was extracted to Files.");
      showVirtualFolder("Files");
    }

    function updateFileManagerAddressBar(folder: string) {
      const addrBar = document.getElementById("file-manager-address-bar") as HTMLInputElement;
      if (!addrBar) return;

      const isNumberFolder = /^\d+$/.test(folder);
      const num = isNumberFolder ? parseInt(folder, 10) : NaN;

      if (isNumberFolder && num >= 1 && num <= 100) {
        if (num === 100) {
          addrBar.value = "C:/Desktop/100";
        } else if (num === 1) {
          const chain = [];
          for (let i = 100; i >= 1; i--) {
            chain.push(i);
          }
          addrBar.value = "C:/Desktop/" + chain.join("/");
        } else {
          const chain = [];
          for (let i = 100; i >= num; i--) {
            chain.push(i);
          }
          addrBar.value = "C:/Desktop/" + chain.join("/");
        }
      } else if (folder.toLowerCase() === "desktop") {
        addrBar.value = "C:/Desktop";
      } else if (folder.toLowerCase() === "downloads") {
        addrBar.value = "C:/Downloads";
      } else if (folder.toLowerCase() === "files") {
        addrBar.value = "C:/Files";
      } else {
        addrBar.value = `C:/${folder}`;
      }
    }

    function navigateAddressBar(event: Event) {
      event.preventDefault();
      const addrBar = document.getElementById("file-manager-address-bar") as HTMLInputElement;
      if (!addrBar) return;

      let rawPath = addrBar.value.trim().replace(/\\/g, "/");
      rawPath = rawPath.replace(/^[a-zA-Z]:\/?/, "");
      rawPath = rawPath.replace(/^\/+|\/+$/g, "");

      const parts = rawPath.split("/").filter(p => p.trim() !== "");

      if (parts.length === 0) {
        showVirtualFolder("Desktop");
        return;
      }

      const lastPart = parts[parts.length - 1].toLowerCase();

      if (lastPart === "secret.exe" || lastPart === "secret") {
        showVirtualFolder("1");
        return;
      }

      let numericFolder = "";
      for (let i = parts.length - 1; i >= 0; i--) {
        if (/^\d+$/.test(parts[i])) {
          numericFolder = parts[i];
          break;
        }
      }

      if (numericFolder) {
        showVirtualFolder(numericFolder);
        return;
      }

      const firstPart = parts[0].toLowerCase();
      if (firstPart === "desktop") {
        showVirtualFolder("Desktop");
      } else if (firstPart === "downloads") {
        showVirtualFolder("Downloads");
      } else if (firstPart === "files") {
        showVirtualFolder("Files");
      } else {
        showVirtualFolder(parts[0]);
      }
    }

    function showVirtualFolder(folder: string) {
      updateFileManagerAddressBar(folder);

      const list = document.getElementById("virtual-file-list");
      if (!list) return;

      const isNumberFolder = /^\d+$/.test(folder);
      const num = isNumberFolder ? parseInt(folder, 10) : NaN;

      if (isNumberFolder && num >= 1 && num <= 100) {
        if (num > 1) {
          const nextSubFolder = String(num - 1);
          const parentFolder = num === 100 ? "Desktop" : String(num + 1);

          list.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <h3 style="margin:0;">📁 Folder ${num}</h3>
              <button class="retro-button" onclick="showVirtualFolder('${parentFolder}')">⬆️ Up Level (${parentFolder})</button>
            </div>
            <p style="font-size:11px; color:#555; margin-bottom:12px;">Location: C:\\DOORS\\Desktop\\100\\...\\${num}</p>
            
            <div class="virtual-file"
                 ondblclick="showVirtualFolder('${nextSubFolder}')"
                 oncontextmenu="showFolderContextMenu(event, '${nextSubFolder}'); return false;">
                📁 <span>Folder ${nextSubFolder}</span>
            </div>
          `;
        } else {
          const parentFolder = "2";
          list.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <h3 style="margin:0;">📁 Folder 1 (DEEPEST FOLDER)</h3>
              <button class="retro-button" onclick="showVirtualFolder('${parentFolder}')">⬆️ Up Level (${parentFolder})</button>
            </div>
            <p style="font-size:11px; color:#b91c1c; font-weight:bold; margin-bottom:12px;">Location: C:\\DOORS\\Desktop\\100\\...\\1 (END OF PATH)</p>
            
            <div class="virtual-file"
                 ondblclick="openVirtualFile('1', 'secret.exe')"
                 oncontextmenu="showVirtualFileContextMenu(event, '1', 'secret.exe'); return false;"
                 style="border:2px solid #ef4444; background:#fef2f2; padding:8px;">
                ☠️ <span style="color:#b91c1c; font-weight:bold;">secret.exe</span>
            </div>
          `;
        }
        return;
      }

      const files = virtualFiles[folder] || [];
      list.innerHTML = `
        <h3 style="margin-bottom:10px;">📁 ${folder}</h3>
        ${
          files.length
            ? files.map((file: any) => `
                <div class="virtual-file"
                    ondblclick="openVirtualFile('${folder}', '${file.name}')"
                    oncontextmenu="showVirtualFileContextMenu(event, '${folder}', '${file.name}'); return false;">
                    ${file.type === "folder" ? "📁" : file.type === "zip" ? "🗜️" : file.type === "bat" ? "🌎" : file.name === "secret.exe" ? "☠️" : "☣️"}
                    <span>${escapeHTML(file.name)}</span>
                </div>
              `).join("")
            : "<p>This folder is empty. Try downloading Virusbase from EXEsafe.com!</p>"
        }
      `;
    }

    function openVirtualFile(folder: string, filename: string) {
      if (filename === "100" || (folder === "Desktop" && filename === "100")) {
        showVirtualFolder("100");
        return;
      }

      if (filename === "secret.exe" || filename === "secret") {
        executeSecretExe();
        return;
      }

      const isNum = /^\d+$/.test(filename);
      if (isNum) {
        showVirtualFolder(filename);
        return;
      }

      const file = getVirtualFile(folder, filename);
      if (file && file.type === "folder") {
        showVirtualFolder(filename);
        return;
      }

      if (file?.name === "Virusbase.zip") {
        extractVirusbase();
      } else if (file?.name === "game.exe" || file?.name === "EXE.exe" || file?.type === "fake-exe") {
        launchFakeVirus();
      } else if (file?.name === "earth.bat" || file?.type === "bat") {
        runEarthBat();
      } else if (file?.name.endsWith(".txt") || file?.type === "txt") {
        openApp("notepad");
        setTimeout(() => openNotepadFile(file.name), 100);
      }
    }

    function launchFakeVirus() {
      if (virusStarted) return;
      virusStarted = true;
      fakeVirusCount = 0;

      addVirtualFile("Desktop", { name: "EXE.exe", type: "fake-exe" });
      showNotification("New desktop item", "EXE.exe has appeared on your desktop!");

      const loading = document.createElement("div");
      loading.className = "virus-loading";
      loading.innerHTML = `
        <h3>EXE.exe</h3>
        <p>Loading extremely important files...</p>
        <progress max="100" value="0"></progress>
      `;
      document.body.appendChild(loading);

      const bar = loading.querySelector("progress") as HTMLProgressElement;
      let progress = 0;

      const interval = setInterval(() => {
        progress += 5;
        if (bar) bar.value = progress;

        if (progress >= 100) {
          clearInterval(interval);
          loading.remove();
          createVirusError();
        }
      }, 150);
    }

    function createVirusError() {
      if (fakeVirusCount >= 40) return;
      fakeVirusCount++;

      const error = document.createElement("div");
      error.className = "virus-error";
      const rx = Math.random() * (window.innerWidth - 380);
      const ry = Math.random() * (window.innerHeight - 250);
      error.style.left = `${Math.max(10, rx)}px`;
      error.style.top = `${Math.max(10, ry)}px`;

      error.innerHTML = `
        <div class="virus-error-title" style="display:flex; justify-content:space-between; align-items:center;">
          <span>EXE.exe — FATAL ERROR #${fakeVirusCount}</span>
          <button class="close-x" style="background:#c0c0c0; color:#000; border:1px solid #000; width:18px; height:18px; font-size:11px; cursor:pointer; line-height:1;">×</button>
        </div>
        <div class="virus-error-content">
            <h2>OH NO.</h2>
            <p>GAME.EXE HAS STOPPED BEING A GAME.</p>
            <p>ERROR CODE: 00821 - TOO MANY DOORS</p>
            <div style="margin-top:15px; display:flex; justify-content:center;">
              <button class="close-err" style="padding:6px 20px; cursor:pointer; font-weight:bold; background:#c0c0c0; border:2px solid; border-color:#fff #000 #000 #fff;">Close</button>
            </div>
        </div>
      `;

      document.body.appendChild(error);

      const handleClose = () => {
        error.remove();
        createVirusError();
        createVirusError();
      };

      error.querySelector(".close-err")?.addEventListener("click", handleClose);
      error.querySelector(".close-x")?.addEventListener("click", handleClose);
    }

    // --- WORMY.EXE VIRUS MECHANICS ---
    function launchWormyVirus() {
      if (wormyActive) return;
      wormyActive = true;

      const popup = document.createElement("div");
      popup.className = "virus-error";
      popup.style.cssText = "z-index:60000; position:fixed; left:50%; top:50%; transform:translate(-50%,-50%); width:400px; border:3px solid #dc2626;";
      popup.innerHTML = `
        <div class="virus-error-title" style="background:#dc2626; color:#fff; padding:6px 10px; font-weight:bold; display:flex; justify-content:space-between; align-items:center;">
          <span>⚠️ DOORS STUPIDSCREEN — CRITICAL VIRUS ALERT</span>
          <button onclick="this.closest('.virus-error').remove(); startWormCrawling();" style="background:#c0c0c0; border:1px solid #000; width:18px; height:18px; font-size:11px; cursor:pointer;">×</button>
        </div>
        <div class="virus-error-content" style="padding:16px; text-align:center; background:#fef2f2;">
          <div style="font-size:42px; margin-bottom:6px;">🐛☣️🚨</div>
          <h3 style="color:#b91c1c; margin-bottom:8px; font-size:16px;">WORMY.EXE HAS ATTACKED YOUR SYSTEM!</h3>
          <p style="font-size:12px; color:#111; line-height:1.4; margin-bottom:12px;">
            A worm virus has attacked! Doors Stupidscreen cannot stop wormy from eating your START button.
          </p>
          <button class="retro-button" onclick="this.closest('.virus-error').remove(); startWormCrawling();" style="padding:6px 20px; font-weight:bold; background:#dc2626; color:#fff;">
            PANIC NOW! 🐛
          </button>
        </div>
      `;
      document.body.appendChild(popup);
    }

    function startWormCrawling() {
      const worm = document.createElement("div");
      worm.id = "wormy-creature";
      worm.style.cssText = `
        position: fixed;
        top: 50px;
        left: 100px;
        z-index: 65000;
        font-size: 32px;
        transition: all 0.5s ease-in-out;
        filter: drop-shadow(0 0 10px #22c55e);
        pointer-events: none;
        user-select: none;
      `;
      worm.innerHTML = `🐛🟢🟢🟢`;
      document.body.appendChild(worm);

      const startBtn = document.getElementById("start-button");
      const startRect = startBtn?.getBoundingClientRect();

      if (startRect) {
        setTimeout(() => {
          worm.style.left = `${startRect.left}px`;
          worm.style.top = `${startRect.top - 10}px`;

          setTimeout(() => {
            if (startBtn) {
              startBtn.style.opacity = "0";
              startBtn.style.pointerEvents = "none";
            }
            showNotification("Worm Virus 🐛", "CRUNCH! Wormy ate your START button first!");
            worm.innerHTML = `🐛🟢🟢🟢🟢🟢`;

            const icons = document.querySelectorAll(".desktop-icon");
            let idx = 0;
            const crawlInterval = setInterval(() => {
              if (idx < icons.length && idx < 6) {
                const icon = icons[idx] as HTMLElement;
                const r = icon.getBoundingClientRect();
                worm.style.left = `${r.left}px`;
                worm.style.top = `${r.top}px`;

                setTimeout(() => {
                  icon.style.opacity = "0.2";
                  worm.innerHTML += `🟢`;
                  worm.style.transform = `scale(${1 + idx * 0.25})`;
                }, 300);

                idx++;
              } else {
                clearInterval(crawlInterval);
                
                setTimeout(() => {
                  worm.innerHTML = `💥🟢🤮💦`;
                  showNotification("Worm Virus Burst 💥", "Wormy grew so huge it BURST into slimy green goo!");

                  for (let i = 0; i < 8; i++) {
                    const goo = document.createElement("div");
                    goo.className = "goo-splatter";
                    goo.style.cssText = `
                      position: fixed;
                      left: ${Math.random() * 80 + 10}%;
                      top: ${Math.random() * 80 + 10}%;
                      width: ${Math.random() * 80 + 40}px;
                      height: ${Math.random() * 80 + 40}px;
                      background: rgba(34, 197, 94, 0.85);
                      border-radius: 50%;
                      filter: blur(4px);
                      z-index: 68000;
                      pointer-events: none;
                    `;
                    document.body.appendChild(goo);
                  }

                  setTimeout(() => {
                    worm.remove();
                    triggerWoodenFloorFall();
                  }, 1000);

                }, 800);
              }
            }, 800);

          }, 600);
        }, 300);
      }
    }

    function triggerWoodenFloorFall() {
      const desktop = document.getElementById("desktop");
      if (desktop) {
        desktop.style.transition = "transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1.2)";
        desktop.style.transform = "rotateX(42deg) rotateZ(-6deg) translateY(120px) scale(0.85)";
        desktop.style.boxShadow = "0 30px 60px rgba(0,0,0,0.8)";
      }

      document.body.style.background = "repeating-linear-gradient(90deg, #78350f 0px, #78350f 40px, #451a03 40px, #451a03 80px)";

      let floorDebris = document.getElementById("wooden-floor-debris");
      if (!floorDebris) {
        floorDebris = document.createElement("div");
        floorDebris.id = "wooden-floor-debris";
        floorDebris.style.cssText = "position:fixed; bottom:20px; left:50%; transform:translateX(-50%); z-index:70000; display:flex; gap:15px; align-items:center; background:rgba(0,0,0,0.8); padding:12px 20px; border:2px solid #ca8a04; border-radius:8px;";
        document.body.appendChild(floorDebris);
      }

      floorDebris.innerHTML = `
        <div style="color:#fde047; font-weight:bold; font-size:13px;">🪵 DEBRIS ON WOODEN FLOOR: Find the eaten START button to restart PC! ➔</div>
        <button id="floor-start-btn" class="retro-button" onclick="recoverStartButtonFromFloor()" style="padding:8px 18px; font-weight:bold; background:#000080; color:#fff; border:2px outset #fff; font-size:14px; cursor:pointer;">
          <img src="/hugeharddoors.png" alt="" style="width:18px; height:18px; vertical-align:middle; margin-right:4px;" />
          Eaten START Button 🚪
        </button>
      `;
    }

    function recoverStartButtonFromFloor() {
      const floorDebris = document.getElementById("wooden-floor-debris");
      if (floorDebris) floorDebris.remove();

      document.querySelectorAll(".goo-splatter").forEach(g => g.remove());

      const desktop = document.getElementById("desktop");
      if (desktop) {
        desktop.style.transform = "none";
      }

      const startBtn = document.getElementById("start-button");
      if (startBtn) {
        startBtn.style.opacity = "1";
        startBtn.style.pointerEvents = "auto";
      }

      document.querySelectorAll(".desktop-icon").forEach(icon => {
        (icon as HTMLElement).style.opacity = "1";
      });

      wormyActive = false;
      showNotification("System Restored 🪵", "You found the eaten START button on the floor! Restoring Doors OS...");
      bootSystem();
    }

    // --- PREINSTALLED "earth.bat" GRAVITY EFFECT ---
    function runEarthBat() {
      showNotification("earth.bat", "GRAVITY ENGAGED! All doors are falling!");
      gravityActive = true;

      const container = document.getElementById("desktop-icons");
      if (!container) return;

      const icons = [...container.querySelectorAll(".desktop-icon")] as HTMLElement[];
      const floorY = window.innerHeight - 55 - 85;

      const iconPhysics = icons.map(icon => ({
        element: icon,
        x: icon.offsetLeft,
        y: icon.offsetTop,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() * -6) - 2,
        gravity: 1.2,
        bounce: 0.55 + Math.random() * 0.15,
        settled: false
      }));

      if (gravityAnimId) cancelAnimationFrame(gravityAnimId);

      function updateGravity() {
        let allSettled = true;

        iconPhysics.forEach(item => {
          if (item.settled) return;

          item.vy += item.gravity;
          item.x += item.vx;
          item.y += item.vy;

          const maxX = window.innerWidth - 90;
          if (item.x < 0) {
            item.x = 0;
            item.vx = -item.vx * 0.6;
          } else if (item.x > maxX) {
            item.x = maxX;
            item.vx = -item.vx * 0.6;
          }

          if (item.y >= floorY) {
            item.y = floorY;
            item.vy = -item.vy * item.bounce;
            item.vx *= 0.8;

            if (Math.abs(item.vy) < 1.2) {
              item.vy = 0;
              item.settled = true;
            }
          }

          item.element.style.position = "absolute";
          item.element.style.left = `${Math.round(item.x)}px`;
          item.element.style.top = `${Math.round(item.y)}px`;

          if (!item.settled) allSettled = false;
        });

        if (!allSettled) {
          gravityAnimId = requestAnimationFrame(updateGravity);
        }
      }

      gravityAnimId = requestAnimationFrame(updateGravity);
    }

    function resetIconPositions() {
      gravityActive = false;
      if (gravityAnimId) cancelAnimationFrame(gravityAnimId);

      const desktop = document.getElementById("desktop");
      if (desktop) {
        desktop.style.transform = "none";
        desktop.style.boxShadow = "none";
      }
      document.body.style.background = "";
      const floorDebris = document.getElementById("wooden-floor-debris");
      if (floorDebris) floorDebris.remove();
      document.querySelectorAll(".goo-splatter").forEach(g => g.remove());
      const worm = document.getElementById("wormy-creature");
      if (worm) worm.remove();

      const startBtn = document.getElementById("start-button");
      if (startBtn) {
        startBtn.style.opacity = "1";
        startBtn.style.pointerEvents = "auto";
      }

      const container = document.getElementById("desktop-icons");
      if (!container) return;

      const icons = [...container.querySelectorAll(".desktop-icon")] as HTMLElement[];
      const gridSize = 96;

      icons.forEach((icon, index) => {
        icon.style.opacity = "1";
        const col = Math.floor(index / 4);
        const row = index % 4;
        icon.style.left = `${12 + col * gridSize}px`;
        icon.style.top = `${12 + row * gridSize}px`;
      });

      localStorage.removeItem("hugehard_doors_desktop_layout");
      showNotification("Desktop", "Door icon positions & 3D screen tilt reset.");
    }

    // Helper functions for new apps
    function startHumorBuddyCutieAiRoast() {
      const cuteInput = document.getElementById("cute-ai-input") as HTMLInputElement;
      const cuteLog = document.getElementById("cute-ai-chat-log");
      const humorBubble = document.getElementById("humor-buddy-bubble");

      if (cuteInput) {
        cuteInput.disabled = true;
        cuteInput.placeholder = "🔒 GREYED OUT: Cutie AI & Humor Buddy are roasting each other!";
      }

      const roasts = [
        { speaker: "Cute AI", text: "WHO IS THIS SILLY FLOATING FACE IN THE TOP RIGHT CORNER OF MY DESKTOP?!" },
        { speaker: "Humor Buddy", text: "I'm Humor Buddy! And you're lookin stupid today with that 50-pound broadsword!" },
        { speaker: "Cute AI", text: "MY 6-FOOT BROADSWORD SLICES DRAGONS! YOU LOOK LIKE A DEFLATED BALLOON!" },
        { speaker: "Humor Buddy", text: "At least I don't give 10-paragraph angry answers when someone asks for 2 + 2!" },
        { speaker: "Cute AI", text: "THAT IS IT! MY BLADE CRAVES REVENGE! PREPARE TO BE BACKSTABBED!" }
      ];

      let idx = 0;
      const interval = setInterval(() => {
        if (idx < roasts.length) {
          const item = roasts[idx];
          if (item.speaker === "Cute AI" && cuteLog) {
            const div = document.createElement("div");
            div.style.marginBottom = "6px";
            div.style.color = "#b00050";
            div.style.fontWeight = "bold";
            div.innerHTML = `<strong>Cute AI 🗡️:</strong> ${escapeHTML(item.text)}`;
            cuteLog.appendChild(div);
            cuteLog.scrollTop = cuteLog.scrollHeight;
          } else if (item.speaker === "Humor Buddy" && humorBubble) {
            humorBubble.textContent = `🤪 "${item.text}"`;
          }
          idx++;
        } else {
          clearInterval(interval);
          
          // FINALE: Cutie AI pops into Humor Buddy's window with broadsword and stabs him!
          const humorWin = windows.find(w => w.appName === "humor-buddy");
          if (humorWin) {
            const assassin = document.createElement("div");
            assassin.style.cssText = `
              position: absolute; inset: 0; z-index: 100;
              background: rgba(220, 38, 38, 0.9); color: #fff;
              display: flex; flex-direction: column; align-items: center; justify-content: center;
              font-weight: bold; font-size: 18px; text-align: center; padding: 10px;
              animation: notification-in 0.3s ease-out;
            `;
            assassin.innerHTML = `
              <div style="font-size:48px; margin-bottom:6px;">👧🏻⚔️💥🗡️</div>
              <div>SWORD SLASH!</div>
              <div style="font-size:12px; margin-top:4px; color:#fef08a;">Cutie AI backstabbed Humor Buddy to death!</div>
            `;
            humorWin.element.appendChild(assassin);

            setTimeout(() => {
              closeWindow(humorWin.id);
              const cuteWin = windows.find(w => w.appName === "cute-ai");
              if (cuteWin) closeWindow(cuteWin.id);
              showNotification("Battle Ended 🗡️", "Cutie AI stabbed Humor Buddy to death! Both windows closed.");
            }, 2500);
          }
        }
      }, 2500);
    }

    // BuoLingo Spanish Stabbing Attack
    function submitBuolingoAnswer(e: Event) {
      e.preventDefault();
      const input = document.getElementById("buolingo-input") as HTMLInputElement;
      const ans = input?.value.trim().toLowerCase() || "";

      if (ans.includes("estupido") || ans.includes("estúpido") || ans.includes("stupid")) {
        showNotification("BuoLingo 🦉🔴", "GOOD. YOU RECOGNIZE IT. LESSON COMPLETE.");
        const win = windows.find(w => w.appName === "buolingo");
        if (win) closeWindow(win.id);
      } else {
        triggerBuolingoAttack();
      }
    }

    function triggerBuolingoAttack() {
      const win = windows.find(w => w.appName === "buolingo");
      if (win) closeWindow(win.id, true);

      showNotification("BuoLingo 🦉🔴", "WRONG ANSWER! RED BIRD IS COMING TO STAB YOUR SCREEN!");

      const bird = document.createElement("div");
      bird.style.cssText = `
        position: fixed; bottom: 80px; left: -100px; z-index: 65000;
        font-size: 54px; transition: all 1.8s linear; filter: drop-shadow(0 0 10px #dc2626);
      `;
      bird.innerHTML = `🦜🔪`;
      document.body.appendChild(bird);

      requestAnimationFrame(() => {
        bird.style.left = "calc(50% - 30px)";
        
        setTimeout(() => {
          bird.innerHTML = `🦜💥🗡️`;
          const crack = document.createElement("div");
          crack.style.cssText = `
            position: fixed; inset: 0; z-index: 68000;
            background: rgba(220,38,38,0.75);
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            color: #fff; font-family: monospace; font-size: 28px; font-weight: bold; text-align: center;
          `;
          crack.innerHTML = `
            <div>💥 SCREEN CRACKED BY RED BIRD! 🔪</div>
            <div style="font-size:16px; margin-top:10px;">RESTARTING HUGEHARD DOORS...</div>
          `;
          document.body.appendChild(crack);

          setTimeout(() => {
            bird.remove();
            crack.remove();
            bootSystem();
          }, 2500);

        }, 1800);
      });
    }

    // Booker Switch Tab & Resort Booking Jumpscare
    function switchBookerTab(tab: string) {
      const viewPlane = document.getElementById("booker-view-airplane");
      const viewResort = document.getElementById("booker-view-resort");
      const btnPlane = document.getElementById("booker-tab-airplane");
      const btnResort = document.getElementById("booker-tab-resort");

      if (tab === "airplane") {
        if (viewPlane) viewPlane.style.display = "block";
        if (viewResort) viewResort.style.display = "none";
        if (btnPlane) { btnPlane.style.background = "#0284c7"; btnPlane.style.color = "#fff"; }
        if (btnResort) { btnResort.style.background = "#e0f2fe"; btnResort.style.color = "#0369a1"; }
      } else {
        if (viewPlane) viewPlane.style.display = "none";
        if (viewResort) viewResort.style.display = "block";
        if (btnResort) { btnResort.style.background = "#0284c7"; btnResort.style.color = "#fff"; }
        if (btnPlane) { btnPlane.style.background = "#e0f2fe"; btnPlane.style.color = "#0369a1"; }
      }
    }

    function submitResortBooking(e: Event) {
      e.preventDefault();
      showNotification("Booker 🏨", "Resort reservation submitted! Loading photo tour...");

      const overlay = document.createElement("div");
      overlay.id = "resort-blackout-screen";
      overlay.style.cssText = `
        position: fixed; inset: 0; z-index: 60000;
        background: #000; color: #fff; display: flex;
        flex-direction: column; align-items: center; justify-content: center;
        font-family: Arial, sans-serif; text-align: center; padding: 20px;
      `;
      document.body.appendChild(overlay);

      const photos = [
        { title: "PARADISE RESORT — GRAND LOBBY", emoji: "🏨", bg: "#0f172a" },
        { title: "PARADISE RESORT — OCEAN BUNGALOW", emoji: "🏝️", bg: "#075985" },
        { title: "PARADISE RESORT — TROPICAL SUNSET", emoji: "🌅", bg: "#7c2d12" },
        { title: "PARADISE RESORT — FINE DINING", emoji: "🍹", bg: "#365314" },
        { title: "PARADISE RESORT — SWIMMING POOL", emoji: "🏊‍♂️", bg: "#1e1b4b" }
      ];

      let pIdx = 0;
      const photoInterval = setInterval(() => {
        if (pIdx < photos.length) {
          const p = photos[pIdx];
          overlay.style.background = p.bg;
          overlay.innerHTML = `
            <div style="border:3px solid #38bdf8; background:rgba(0,0,0,0.6); padding:20px; max-width:500px; border-radius:8px;">
              <div style="font-size:72px; margin-bottom:12px;">${p.emoji}</div>
              <h2 style="color:#f0f9ff; font-size:20px; margin-bottom:8px;">${p.title}</h2>
              <p style="color:#93c5fd; font-size:13px;">Showing Resort Preview ${pIdx + 1} of 5...</p>
            </div>
          `;

          // On 5th Photo (Pool): JUMPSCARE TRIGGER
          if (pIdx === 4) {
            setTimeout(() => {
              clearInterval(photoInterval);
              overlay.style.background = "#3b0764"; // Deep Purple
              overlay.style.boxShadow = "inset 0 0 100px #a855f7";
              
              overlay.innerHTML = `
                <style>
                  @keyframes purpleGlitch {
                    0% { background: #3b0764; transform: scale(1); filter: contrast(150%); }
                    50% { background: #581c87; transform: scale(1.05) skewX(2deg); filter: contrast(300%) invert(20%); }
                    100% { background: #2e1065; transform: scale(1); filter: contrast(150%); }
                  }
                </style>
                <div style="animation: purpleGlitch 0.15s infinite; inset: 0; position: fixed; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px;">
                  <div style="font-size:120px; filter:drop-shadow(0 0 30px #a855f7); transform:scale(1.3);">
                    🟣🔪
                  </div>
                  <h1 style="color:#f43f5e; font-size:38px; font-weight:900; margin:15px 0 6px 0; text-shadow:0 0 20px #ef4444; letter-spacing:2px;">
                    ⚡ PURPLE GUY JUMPSCARE! ⚡
                  </h1>
                  <p style="color:#e9d5ff; font-size:18px; font-weight:bold;">
                    LIGHTNING STRUCK THE POOL WATER! PURPLE GUY ATTACKS!
                  </p>
                </div>
              `;

              try {
                const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = "sawtooth";
                osc.frequency.setValueAtTime(120, audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.4);
                gain.gain.setValueAtTime(0.5, audioCtx.currentTime);
                osc.connect(gain); gain.connect(audioCtx.destination);
                osc.start(); osc.stop(audioCtx.currentTime + 2.5);
              } catch (_e) {}

              setTimeout(() => {
                overlay.remove();
              }, 3000);

            }, 1200);
          }

          pIdx++;
        }
      }, 1500);
    }

    // EXEsafe Mincraft 2.0 Download
    function downloadMincraft() {
      addVirtualFile("Desktop", { name: "Mincraft 2.0", type: "fake-exe" });
      addVirtualFile("Files", { name: "Mincraft 2.0", type: "fake-exe" });
      showNotification("Mincraft 2.0 Downloaded ⛏️", "Mincraft 2.0 shortcut added to Desktop!");
    }

    function triggerChildrensDaySurprise() {
      const popup = document.createElement("div");
      popup.className = "virus-error";
      popup.style.zIndex = "60000";
      popup.style.left = "50%";
      popup.style.top = "50%";
      popup.style.transform = "translate(-50%, -50%)";
      popup.style.width = "400px";

      popup.innerHTML = `
        <div class="virus-error-title" style="background:#ec4899; color:#fff; padding:6px 10px; font-weight:bold; display:flex; justify-content:space-between; align-items:center;">
          <span>🎉 HAPPY CHILDREN'S DAY SURPRISE!</span>
          <button onclick="this.closest('.virus-error').remove();" style="background:#c0c0c0; border:1px solid #000; width:18px; height:18px; font-size:11px; cursor:pointer;">×</button>
        </div>
        <div class="virus-error-content" style="padding:20px; text-align:center; background:#fdf2f8;">
          <div style="font-size:64px;">🤡🥳🎈</div>
          <h2 style="color:#be185d; font-size:22px; font-weight:bold; margin:10px 0 6px 0;">🤡 SURPRISE! 🤡</h2>
          <h3 style="color:#0284c7; font-size:16px; margin-bottom:12px;">HAPPY CHILDREN'S DAY FROM HUGEHARD DOORS!</h3>
          <p style="font-size:12px; color:#334155; line-height:1.5; margin-bottom:16px;">
            A silly clown popped out of the gift box! Party noise & confetti everywhere!
          </p>
          <button class="retro-button" onclick="this.closest('.virus-error').remove();" style="padding:8px 24px; font-weight:bold; background:#ec4899; color:#fff; font-size:13px;">
            Yay! Happy Children's Day! 🎉
          </button>
        </div>
      `;

      document.body.appendChild(popup);
    }

    function playAudioPlayerFile(e: Event) {
      const input = e.target as HTMLInputElement;
      const file = input.files?.[0];
      if (!file) return;

      const audioEl = document.getElementById("audio-player-element") as HTMLAudioElement;
      const trackName = document.getElementById("player-track-name");

      if (audioEl) {
        audioEl.src = URL.createObjectURL(file);
        audioEl.play();
        if (trackName) trackName.textContent = `▶️ ${file.name}`;
        showNotification("Hugehard Player 🎵", `Playing uploaded audio: ${file.name}`);
      }
    }

    function playSampleDoorAudio(type: string) {
      const trackName = document.getElementById("player-track-name");
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        if (type === "slam") {
          if (trackName) trackName.textContent = "▶️ Door Slam.mp3";
          osc.frequency.setValueAtTime(150, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.3);
          gain.gain.setValueAtTime(1, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(ctx.currentTime + 0.3);
          showNotification("Audio Player 🚪", "Playing 'Door Slam.mp3'");
        } else if (type === "creak") {
          if (trackName) trackName.textContent = "▶️ Hinge Creak.mp3";
          osc.frequency.setValueAtTime(400, ctx.currentTime);
          osc.frequency.linearRampToValueAtTime(600, ctx.currentTime + 0.8);
          gain.gain.setValueAtTime(0.3, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(ctx.currentTime + 0.8);
          showNotification("Audio Player 🚪", "Playing 'Hinge Creak.mp3'");
        } else if (type === "siren") {
          if (trackName) trackName.textContent = "▶️ FBI Raid Siren.mp3";
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(700, ctx.currentTime);
          osc.frequency.linearRampToValueAtTime(1200, ctx.currentTime + 0.5);
          gain.gain.setValueAtTime(0.4, ctx.currentTime);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(ctx.currentTime + 1.2);
          showNotification("Audio Player 🚨", "Playing 'FBI Raid Siren.mp3'");
        } else if (type === "fanfare") {
          if (trackName) trackName.textContent = "▶️ Updaten't Fanfare.mp3";
          osc.type = "triangle";
          osc.frequency.setValueAtTime(523.25, ctx.currentTime);
          osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.2);
          osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.4);
          gain.gain.setValueAtTime(0.5, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(ctx.currentTime + 0.8);
          showNotification("Audio Player 🎺", "Playing 'Updaten't Fanfare.mp3'");
        }
      } catch (_e) {}
    }

    function downgradeFromDoors1() {
      const doors1Win = windows.find(w => w.appName === "doors1");
      if (doors1Win) closeWindow(doors1Win.id);
      showNotification("System Downgraded 🔻", "Downgraded successfully back to Doors 0.11!");
    }

    function signOutUser() {
      const startMenu = document.getElementById("start-menu");
      if (startMenu) startMenu.hidden = true;

      const lockOverlay = document.createElement("div");
      lockOverlay.id = "signout-lock-screen";
      lockOverlay.style.cssText = `
        position: fixed; inset: 0; z-index: 55000;
        background: radial-gradient(circle, #1e3a8a 0%, #0f172a 100%);
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        color: #fff; font-family: var(--font-main); text-align: center;
      `;
      lockOverlay.innerHTML = `
        <div style="background:rgba(255,255,255,0.1); border:2px solid rgba(255,255,255,0.3); padding:30px; border-radius:12px; backdrop-filter:blur(8px); width:320px;">
          <div style="font-size:54px; margin-bottom:10px;">👤🔒</div>
          <h2 style="margin:0 0 6px 0; color:#fff;">SIGNED OUT</h2>
          <p style="font-size:12px; color:#cbd5e1; margin-bottom:20px;">Hugehard Doors 0.11 Workstation Locked</p>
          <button class="retro-button" onclick="document.getElementById('signout-lock-screen').remove(); window.showNotification('Sign In', 'Signed back in as Door Master.');" style="padding:8px 24px; font-weight:bold; background:#0284c7; color:#fff; width:100%;">
            Sign Back In 🔑
          </button>
        </div>
      `;
      document.body.appendChild(lockOverlay);
    }

    function createDesktopShortcut(appName: string, label: string, iconEmoji: string) {
      const container = document.getElementById("desktop-icons");
      if (!container) return;

      const existing = container.querySelector(`.desktop-icon[data-app="${appName}"]`);
      if (existing) {
        showNotification("Desktop Shortcut", `Shortcut for ${label} already exists on Desktop.`);
        return;
      }

      let iconHtml = iconEmoji;
      if (appName === "word") iconHtml = `<img src="/assets/aistudio/word_5de9a479.png" style="width:32px;height:32px;object-fit:contain;" alt="" />`;
      else if (appName === "slides") iconHtml = `<img src="/assets/aistudio/ppt_a7c9d565.png" style="width:32px;height:32px;object-fit:contain;" alt="" />`;
      else if (appName === "workbooks") iconHtml = `<img src="/assets/aistudio/excel_a83fc9a6.png" style="width:32px;height:32px;object-fit:contain;" alt="" />`;
      else if (appName === "note") iconHtml = `<img src="/assets/aistudio/note_0954547b.png" style="width:32px;height:32px;object-fit:contain;" alt="" />`;
      else if (appName === "office") iconHtml = `<img src="/assets/aistudio/office_c18c2731.png" style="width:32px;height:32px;object-fit:contain;" alt="" />`;
      else if (appName === "cute-ai") iconHtml = `<img src="/assets/aistudio/mari_73b34861.jpg" style="width:32px;height:32px;object-fit:cover;border-radius:4px;" alt="" />`;
      else if (appName === "buolingo") iconHtml = `<img src="/assets/aistudio/redbird_2fa7950e.jpg" style="width:32px;height:32px;object-fit:cover;border-radius:4px;" alt="" />`;
      else if (appName === "boogle") iconHtml = `<img src="/assets/aistudio/boogle_cba6fd34.jpg" style="width:32px;height:32px;object-fit:cover;border-radius:4px;" alt="" />`;
      else if (appName === "contact-me") iconHtml = `<img src="/assets/aistudio/profile_dae27b52.png" style="width:32px;height:32px;object-fit:cover;border-radius:4px;" alt="" />`;

      const newIcon = document.createElement("div");
      newIcon.className = "desktop-icon";
      newIcon.dataset.app = appName;
      newIcon.title = `Double-click to open ${label}`;
      newIcon.innerHTML = `
        <div class="door-icon">${iconHtml}</div>
        <span>${escapeHTML(label)}</span>
      `;

      container.appendChild(newIcon);
      enableDesktopIconDragging();
      showNotification("Shortcut Created ➕", `Added ${label} shortcut to Desktop!`);
    }

    function switchNotepadTab(tab: string) {
      const viewWrite = document.getElementById("notepad-view-write");
      const viewFile = document.getElementById("notepad-view-file");
      const tabWrite = document.getElementById("notepad-tab-write");
      const tabFile = document.getElementById("notepad-tab-file");

      if (tab === "write") {
        if (viewWrite) viewWrite.style.display = "flex";
        if (viewFile) viewFile.style.display = "none";
        if (tabWrite) { tabWrite.style.background = "#fff"; tabWrite.style.borderBottom = "none"; }
        if (tabFile) { tabFile.style.background = "#e5e7eb"; }
      } else {
        if (viewWrite) viewWrite.style.display = "none";
        if (viewFile) viewFile.style.display = "flex";
        if (tabFile) { tabFile.style.background = "#fff"; tabFile.style.borderBottom = "none"; }
        if (tabWrite) { tabWrite.style.background = "#e5e7eb"; }
        renderNotepadFileList();
      }
    }

    function saveNotepadFile() {
      const textarea = document.getElementById("notepad-textarea") as HTMLTextAreaElement;
      const filenameInput = document.getElementById("notepad-save-filename") as HTMLInputElement;
      const text = textarea?.value || "";
      let name = filenameInput?.value.trim() || "MyDoorNote.txt";
      if (!name.endsWith(".txt")) name += ".txt";

      addVirtualFile("Files", { name, type: "txt", content: text });
      showNotification("Notepad 💾", `Saved ${name} to Files folder.`);
      renderNotepadFileList();
    }

    function renderNotepadFileList() {
      const list = document.getElementById("notepad-file-list");
      if (!list) return;

      const files = (virtualFiles["Files"] || []).filter(f => f.name.endsWith(".txt") || f.type === "txt");
      if (files.length === 0) {
        list.innerHTML = `<p style="font-size:11px; color:#666;">No text files saved yet.</p>`;
        return;
      }

      list.innerHTML = files.map(file => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:5px; border-bottom:1px solid #ddd; font-size:12px;">
          <span>📝 <strong>${escapeHTML(file.name)}</strong></span>
          <div style="display:flex; gap:4px;">
            <button class="retro-button" onclick="openNotepadFile('${escapeHTML(file.name)}')" style="padding:2px 6px; font-size:10px;">Open</button>
            <button class="retro-button" onclick="deleteNotepadFile('${escapeHTML(file.name)}')" style="padding:2px 6px; font-size:10px; background:#fca5a5;">Delete</button>
          </div>
        </div>
      `).join("");
    }

    function openNotepadFile(filename: string) {
      const file = getVirtualFile("Files", filename);
      const textarea = document.getElementById("notepad-textarea") as HTMLTextAreaElement;
      if (file && textarea) {
        textarea.value = file.content || `[Contents of ${filename}]\nHugehard Doors Log Data File.`;
        switchNotepadTab("write");
        showNotification("Notepad 📝", `Opened ${filename}.`);
      }
    }

    function deleteNotepadFile(filename: string) {
      virtualFiles["Files"] = (virtualFiles["Files"] || []).filter(f => f.name !== filename);
      renderNotepadFileList();
      showNotification("Notepad 🗑️", `Deleted ${filename}.`);
    }

    // Context Menu System
    function showUniversalContextMenu(event: MouseEvent, items: Array<{ label?: string; action?: string | (() => void); disabled?: boolean; separator?: boolean }>) {
      event.preventDefault();
      event.stopPropagation();

      document.querySelectorAll(".universal-context-menu").forEach(m => m.remove());

      const menu = document.createElement("div");
      menu.className = "universal-context-menu";

      items.forEach(item => {
        if (item.separator) {
          const sep = document.createElement("div");
          sep.className = "context-separator";
          menu.appendChild(sep);
        } else {
          const btn = document.createElement("button");
          btn.textContent = item.label || "";
          if (item.disabled) btn.disabled = true;
          btn.addEventListener("click", () => {
            menu.remove();
            if (typeof item.action === "function") {
              item.action();
            } else if (typeof item.action === "string") {
              try {
                const fn = new Function(`return (${item.action})()`);
                fn();
              } catch (e) {
                console.error("Context menu action error:", e);
              }
            }
          });
          menu.appendChild(btn);
        }
      });

      menu.style.left = `${Math.min(event.clientX, window.innerWidth - 215)}px`;
      menu.style.top = `${Math.min(event.clientY, window.innerHeight - 300)}px`;

      document.body.appendChild(menu);

      const closeMenu = (e: MouseEvent) => {
        if (!menu.contains(e.target as Node)) {
          menu.remove();
          document.removeEventListener("pointerdown", closeMenu);
        }
      };

      setTimeout(() => document.addEventListener("pointerdown", closeMenu), 0);
    }

    function showFolderContextMenu(event: MouseEvent, folderName: string) {
      event.preventDefault();
      event.stopPropagation();
      showUniversalContextMenu(event, [
        { label: "Open Folder", action: () => showVirtualFolder(folderName) }
      ]);
    }
    (window as any).showFolderContextMenu = showFolderContextMenu;

    function setupAllContextMenus() {
      const taskbar = document.getElementById("taskbar");
      if (taskbar) {
        taskbar.addEventListener("contextmenu", event => {
          if ((event.target as HTMLElement).closest(".taskbar-window")) return;
          event.preventDefault();
          showUniversalContextMenu(event, [
            { label: "Door Manager (Task Manager)", action: () => openApp('terminal') },
            { separator: true },
            { label: "Cascade Doors", action: () => cascadeWindows() },
            { label: "Show Desktop (Minimize All)", action: () => minimizeAllWindows() },
            { separator: true },
            { label: "Lock Taskbar", action: () => showNotification('Taskbar', 'Taskbar locked with heavy padlock.') },
            { label: "Properties / Settings", action: () => openApp('settings') }
          ]);
        });
      }

      const desktopIcons = document.getElementById("desktop-icons");
      if (desktopIcons) {
        desktopIcons.addEventListener("contextmenu", event => {
          const icon = (event.target as HTMLElement).closest(".desktop-icon") as HTMLElement;
          if (!icon) return;

          event.preventDefault();
          event.stopPropagation();

          const appName = icon.dataset.app || "";
          const label = icon.innerText.trim();

          showUniversalContextMenu(event, [
            {
              label: "Open Door",
              action: () => {
                if (appName === "fake-virus") launchFakeVirus();
                else if (appName === "earth-bat") runEarthBat();
                else if (appName === "wormy") launchWormyVirus();
                else openApp(appName);
              }
            },
            {
              label: "Run as Administrator",
              action: () => showNotification("Admin", `Granted elevated privileges to ${label}.`)
            },
            { separator: true },
            { label: "Pin to Start Menu", action: () => showNotification("Start Menu", `Pinned ${label} to Start.`) },
            { label: "Cut", action: () => showNotification("Clipboard", `Cut ${label}.`) },
            { label: "Copy", action: () => showNotification("Clipboard", `Copied ${label}.`) },
            { separator: true },
            {
              label: "Delete Door Shortcut",
              action: () => {
                const el = document.querySelector(`.desktop-icon[data-app='${appName}']`);
                if (el) el.remove();
                showNotification("Desktop", "Shortcut removed.");
              }
            },
            {
              label: "Properties",
              action: () => showNotification("Properties", `Type: Door Shortcut\nTarget: ${appName || label}\nStatus: Questionable`)
            }
          ]);
        });
      }

      const desktopEl = document.getElementById("desktop");
      if (desktopEl) {
        desktopEl.addEventListener("contextmenu", event => {
          if ((event.target as HTMLElement).closest(".app-window, .desktop-icon, #taskbar")) return;
          event.preventDefault();

          showUniversalContextMenu(event, [
            { label: "View ▸ Medium Icons", action: () => showNotification("View", "Icons set to medium.") },
            { label: "Sort doors by Name", action: () => resetIconPositions() },
            { label: "Refresh", action: () => showNotification("Desktop", "Desktop refreshed.") },
            { separator: true },
            { label: "Apply Gravity (earth.bat)", action: () => runEarthBat() },
            { label: "Reset Icon Positions", action: () => resetIconPositions() },
            { separator: true },
            { label: "Personalize / Door Settings", action: () => openApp("settings") }
          ]);
        });
      }
    }

    function showVirtualFileContextMenu(event: MouseEvent, folder: string, filename: string) {
      event.preventDefault();
      event.stopPropagation();

      const file = getVirtualFile(folder, filename);
      const isZip = file?.type === "zip";
      const isBat = file?.type === "bat" || filename === "earth.bat";
      const isExe = file?.type === "fake-exe" || filename.endsWith(".exe");

      showUniversalContextMenu(event, [
        {
          label: isBat ? "Run Batch Script (Gravity)" : isExe ? "Run Application" : "Open File",
          action: () => openVirtualFile(folder, filename)
        },
        {
          label: "Extract All...",
          disabled: !isZip,
          action: () => extractVirusbase()
        },
        { separator: true },
        { label: "Cut", action: () => showNotification("File Manager", `Cut ${filename}.`) },
        { label: "Copy", action: () => showNotification("File Manager", `Copied ${filename}.`) },
        {
          label: "Delete File",
          action: () => deleteVirtualFile(folder, filename)
        },
        { separator: true },
        {
          label: "Properties",
          action: () => showNotification("Properties", `File: ${filename}\nFolder: ${folder}\nStatus: Checked`)
        }
      ]);
    }
    (window as any).showVirtualFileContextMenu = showVirtualFileContextMenu;

    function deleteVirtualFile(folder: string, filename: string) {
      virtualFiles[folder] = (virtualFiles[folder] || []).filter(f => f.name !== filename);
      showVirtualFolder(folder);
      showNotification("File Manager", `${filename} moved to Recycle Door.`);
    }
    (window as any).deleteVirtualFile = deleteVirtualFile;

    // Draggable Desktop Shortcuts with LocalStorage Persistence
    const DESKTOP_LAYOUT_KEY = "hugehard_doors_desktop_layout";

    function enableDesktopIconDragging() {
      const container = document.getElementById("desktop-icons");
      if (!container) return;

      container.style.position = "relative";
      const savedLayout = JSON.parse(localStorage.getItem(DESKTOP_LAYOUT_KEY) || "{}");
      const icons = [...container.querySelectorAll(".desktop-icon")] as HTMLElement[];

      icons.forEach(icon => {
        const key = icon.dataset.app || icon.innerText.trim();
        const saved = savedLayout[key];

        icon.style.position = "absolute";
        if (saved && saved.left !== undefined && saved.top !== undefined) {
          icon.style.left = saved.left;
          icon.style.top = saved.top;
        } else {
          const index = icons.indexOf(icon);
          const col = Math.floor(index / 4);
          const row = index % 4;
          icon.style.left = `${12 + col * 96}px`;
          icon.style.top = `${12 + row * 96}px`;
        }

        let dragging = false;
        let startX = 0;
        let startY = 0;
        let origX = 0;
        let origY = 0;
        let hasMoved = false;

        icon.addEventListener("pointerdown", event => {
          if (event.button !== 0) return;
          dragging = true;
          hasMoved = false;
          startX = event.clientX;
          startY = event.clientY;
          origX = icon.offsetLeft;
          origY = icon.offsetTop;
          icon.setPointerCapture(event.pointerId);
          selectIcon(icon);
        });

        icon.addEventListener("pointermove", event => {
          if (!dragging) return;
          const dx = event.clientX - startX;
          const dy = event.clientY - startY;

          if (Math.abs(dx) + Math.abs(dy) > 5) {
            hasMoved = true;
          }
          if (!hasMoved) return;

          icon.style.left = `${Math.max(0, origX + dx)}px`;
          icon.style.top = `${Math.max(0, origY + dy)}px`;
        });

        icon.addEventListener("pointerup", _event => {
          if (!dragging) return;
          dragging = false;

          if (hasMoved) {
            const gridSize = 96;
            const snappedX = Math.round(icon.offsetLeft / gridSize) * gridSize;
            const snappedY = Math.round(icon.offsetTop / gridSize) * gridSize;
            icon.style.left = `${Math.max(0, snappedX)}px`;
            icon.style.top = `${Math.max(0, snappedY)}px`;

            const currentLayout = JSON.parse(localStorage.getItem(DESKTOP_LAYOUT_KEY) || "{}");
            currentLayout[key] = {
              left: icon.style.left,
              top: icon.style.top
            };
            localStorage.setItem(DESKTOP_LAYOUT_KEY, JSON.stringify(currentLayout));
          }
        });
      });
    }

    // Fake Update Screen Simulation
    let fakeUpdateRunning = false;
    let fakeUpdateTimers: any[] = [];
    let fakeUpdateOverlay: HTMLElement | null = null;

    function startFakeUpdate() {
      if (fakeUpdateRunning) return;
      fakeUpdateRunning = true;
      fakeUpdateTimers.forEach(t => clearTimeout(t));
      fakeUpdateTimers = [];

      if (desktop) desktop.style.display = "none";
      fakeUpdateOverlay = document.createElement("div");
      fakeUpdateOverlay.id = "fake-update-screen";
      document.body.appendChild(fakeUpdateOverlay);

      runFakeUpdateCycle();
    }

    function runFakeUpdateCycle() {
      if (!fakeUpdateRunning || !fakeUpdateOverlay) return;

      fakeUpdateOverlay.style.background = "#000000";
      fakeUpdateOverlay.innerHTML = `
        <div class="update-black-screen">
            <img src="/hugeharddoors.png" alt="Hugehard Doors">
            <div class="update-loading-label">Preparing updates...</div>
            <div class="update-progress-track"><div class="update-progress-bar"></div></div>
            <div class="update-footer">Please do not turn off your computer. (Press ESC to cancel)</div>
        </div>
      `;

      const t1 = setTimeout(() => {
        if (!fakeUpdateRunning || !fakeUpdateOverlay) return;
        fakeUpdateOverlay.style.background = "#60452f";
        fakeUpdateOverlay.innerHTML = `
          <div class="update-windows-screen">
              <img src="/hugeharddoors.png" alt="Hugehard Doors">
              <h2>Working on updates 101%</h2>
              <p>Don't turn off your computer.</p>
              <div class="update-progress-track"><div class="update-progress-bar"></div></div>
              <p class="update-percent" style="margin-top:10px;">101% complete</p>
          </div>
        `;

        const t2 = setTimeout(() => {
          if (!fakeUpdateRunning || !fakeUpdateOverlay) return;
          fakeUpdateOverlay.innerHTML = `
            <div class="update-windows-screen">
                <img src="/hugeharddoors.png" alt="Hugehard Doors">
                <h2>Doors Wasn't Capable of updates</h2>
                <p>Undoing Changes...</p>
                <div class="update-progress-track"><div class="update-progress-bar"></div></div>
                <p class="update-percent" style="margin-top:10px;">Please don't turn off your computer.</p>
            </div>
          `;

          const t3 = setTimeout(() => {
            if (!fakeUpdateRunning || !fakeUpdateOverlay) return;
            fakeUpdateOverlay.style.background = "#000000";
            fakeUpdateOverlay.innerHTML = `
              <div class="update-black-screen">
                  <img src="/hugeharddoors.png" alt="Hugehard Doors">
                  <h2>Restarting...</h2>
                  <div class="update-progress-track"><div class="update-progress-bar"></div></div>
                  <p>Please wait.</p>
              </div>
            `;

            const t4 = setTimeout(() => {
              runFakeUpdateCycle();
            }, 4000);
            fakeUpdateTimers.push(t4);

          }, 8000);
          fakeUpdateTimers.push(t3);

        }, 8000);
        fakeUpdateTimers.push(t2);

      }, 5000);
      fakeUpdateTimers.push(t1);
    }

    function stopFakeUpdate() {
      if (!fakeUpdateRunning) return;
      fakeUpdateRunning = false;
      fakeUpdateTimers.forEach(t => clearTimeout(t));
      fakeUpdateTimers = [];

      if (fakeUpdateOverlay) {
        fakeUpdateOverlay.remove();
        fakeUpdateOverlay = null;
      }
      if (desktop) desktop.style.display = "block";
      showNotification("Update interrupted", "The update has been cancelled. Your system remains at version 0.11.");
    }
    (window as any).stopFakeUpdate = stopFakeUpdate;

    document.addEventListener("keydown", event => {
      if (!booted) return;
      if (event.key === "Escape") {
        if (startMenu) {
          startMenu.hidden = true;
          startButton?.classList.remove("active");
        }
        clearIconSelection();
        if (fakeUpdateRunning) {
          stopFakeUpdate();
        }
      }
    });

    function mysterySurprise() {
      const mysteryWin = windows.find(w => w.appName === "mystery");
      if (mysteryWin) closeWindow(mysteryWin.id);

      showNotification("🚨 FBI SECURITY ALERT", "SECURITY BREACH CONFIRMED! FBI SWAT TEAM EN ROUTE TO YOUR LOCATION!");

      const blackOverlay = document.createElement("div");
      blackOverlay.id = "fbi-black-screen";
      blackOverlay.style.cssText = `
        position: fixed; inset: 0; z-index: 60000;
        background: #000000; opacity: 0;
        transition: opacity 1s ease-in-out;
        pointer-events: all; display: flex;
        flex-direction: column; align-items: center; justify-content: center;
        color: #ffffff; font-family: Arial, sans-serif;
      `;
      document.body.appendChild(blackOverlay);

      requestAnimationFrame(() => {
        blackOverlay.style.opacity = "1";
      });

      setTimeout(() => {
        blackOverlay.innerHTML = `
          <style>
            @keyframes fbiPoliceLights {
              0% { background: rgba(220, 38, 38, 0.45); box-shadow: inset 0 0 120px #dc2626; }
              50% { background: rgba(37, 99, 235, 0.45); box-shadow: inset 0 0 120px #2563eb; }
              100% { background: rgba(220, 38, 38, 0.45); box-shadow: inset 0 0 120px #dc2626; }
            }
            .fbi-raid-container {
              animation: fbiPoliceLights 0.35s infinite alternate;
              width: 100%; height: 100%; display: flex;
              flex-direction: column; align-items: center; justify-content: center;
              padding: 20px; box-sizing: border-box;
            }
          </style>
          <div class="fbi-raid-container">
            <div style="background:#000; border:4px solid #ff0000; padding:15px 30px; margin-bottom:15px; border-radius:8px; box-shadow:0 0 40px #ff0000; text-align:center;">
              <h1 style="color: #ff0000; font-size: 36px; font-weight: 900; letter-spacing: 4px; text-shadow: 0 0 20px #ff0000; margin: 0 0 6px 0; text-transform: uppercase;">
                🚨 FBI OPEN UP! 🚨
              </h1>
              <p style="color: #ffff00; font-size: 16px; font-weight: bold; margin: 0; text-shadow: 0 0 10px #ff0000;">
                FEDERAL AGENTS HAVE BREACHED YOUR ROOM & MONITORED YOUR WEBCAM!
              </p>
            </div>

            <div style="border: 4px solid #ff0000; box-shadow: 0 0 35px #ff0000; background: #000; border-radius: 8px; overflow: hidden; width: 560px; max-width: 92vw; height: 315px; max-height: 52vh;">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/4wX2xBOuzBg?autoplay=1&mute=0&controls=0&start=0&enablejsapi=1" 
                title="FBI OPEN UP Clip" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            <div style="background: rgba(185, 28, 28, 0.9); color: #fff; padding: 10px 24px; border: 2px solid #fff; font-size: 15px; font-weight: bold; margin-top: 18px; border-radius: 4px; text-align:center;">
              SYSTEM TERMINATED BY FEDERAL AGENTS — RESTARTING DOORS OS...
            </div>
          </div>
        `;

        try {
          const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(600, audioCtx.currentTime);
          osc.frequency.linearRampToValueAtTime(1400, audioCtx.currentTime + 0.6);
          gain.gain.setValueAtTime(0.35, audioCtx.currentTime);
          osc.connect(gain); gain.connect(audioCtx.destination);
          osc.start(); osc.stop(audioCtx.currentTime + 5);
        } catch (_e) {}

        setTimeout(() => {
          blackOverlay.remove();
          windows.forEach(w => w.element.remove());
          windows = [];
          const taskbarWindows = document.getElementById("taskbar-windows");
          if (taskbarWindows) taskbarWindows.innerHTML = "";
          bootSystem();
        }, 6500);

      }, 1200);
    }

  }, []);

  return (
    <>
      {/* BOOT SCREEN */}
      <div id="boot-screen">
        <div className="boot-content">
          <img src="/hugeharddoors.png" alt="Hugehard Doors Logo" />
          <h1>HUGEHARD DOORS 0.11</h1>
          <p>Micro. Soft. Windows.</p>

          <div id="boot-messages">
            Initializing door mechanisms...
          </div>

          <div className="boot-progress">
            <div id="boot-progress-bar"></div>
          </div>

          <p className="boot-footer">
            Copyright © 1983 Hugehard Corporation
          </p>
        </div>
      </div>

      {/* MAIN DESKTOP */}
      <main id="desktop">
        <div id="desktop-background"></div>

        {/* BLUE WATERMARK IN BOTTOM RIGHT */}
        <div 
          id="activate-watermark" 
          onClick={() => (window as any).openApp && (window as any).openApp('activate')}
          style={{
            position: 'absolute',
            bottom: '55px',
            right: '15px',
            zIndex: 4,
            cursor: 'pointer',
            textAlign: 'right',
            userSelect: 'none',
            pointerEvents: 'auto'
          }}
        >
          <span style={{ color: '#0000ff', textDecoration: 'underline', fontWeight: 'bold', fontSize: '13px', textShadow: '0px 0px 3px #ffffff' }}>
            Activate Doors now
          </span>
        </div>

        {/* DESKTOP ICONS */}
        <section id="desktop-icons">
          <div className="desktop-icon" data-app="contact-me" title="Double-click to open Contact Me">
            <div className="door-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/assets/aistudio/profile_dae27b52.png" style={{ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '4px' }} alt="Contact Me" />
            </div>
            <span>Contact Me</span>
          </div>

          <div className="desktop-icon" data-app="my-computer" title="Double-click to open">
            <div className="door-icon">
              <img src="/assets/aistudio/office_c18c2731.png" style={{ width: '32px', height: '32px', objectFit: 'contain' }} alt="My Doors" />
            </div>
            <span>My Doors</span>
          </div>

          <div className="desktop-icon" data-app="recycle-bin" title="Double-click to open">
            <div className="door-icon">🗑️</div>
            <span>Recycle Door</span>
          </div>

          <div className="desktop-icon" data-app="boogle" title="Double-click to open">
            <div className="door-icon">
              <img src="/assets/aistudio/boogle_cba6fd34.jpg" style={{ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '4px' }} alt="Boogle" />
            </div>
            <span>Boogle</span>
          </div>

          <div className="desktop-icon" data-app="office" title="Double-click to open Hugehard Office Suite">
            <div className="door-icon">
              <img src="/assets/aistudio/office_c18c2731.png" style={{ width: '32px', height: '32px', objectFit: 'contain' }} alt="Hugehard Office" />
            </div>
            <span>Hugehard Office</span>
          </div>

          <div className="desktop-icon" data-app="music-player" title="Double-click to open Hugehard Player">
            <div className="door-icon">🎧</div>
            <span>Hugehard Player</span>
          </div>

          <div className="desktop-icon" data-app="notepad" title="Double-click to open Door Notepad">
            <div className="door-icon">📝</div>
            <span>Notepad</span>
          </div>

          <div className="desktop-icon" data-app="calendar" title="Double-click to open Calendar">
            <div className="door-icon">📅</div>
            <span>Calendar</span>
          </div>

          <div className="desktop-icon" data-app="cute-ai" title="Double-click to open Cutie AI">
            <div className="door-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/assets/aistudio/mari_73b34861.jpg" style={{ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '4px' }} alt="Cutie AI" />
            </div>
            <span>Cutie AI</span>
          </div>

          <div className="desktop-icon" data-app="baby-corp" title="Double-click to open The Baby Corp">
            <div className="door-icon" style={{ fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👶</div>
            <span>The Baby Corp</span>
          </div>

          <div className="desktop-icon" data-app="booker" title="Double-click to open Booker Travel & Resort">
            <div className="door-icon" style={{ fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📚</div>
            <span>Booker</span>
          </div>

          <div className="desktop-icon" data-app="humor-buddy" title="Double-click to open Humor Buddy">
            <div className="door-icon">🤪</div>
            <span>Humor Buddy</span>
          </div>

          <div className="desktop-icon" data-app="buolingo" title="Double-click to open BuoLingo">
            <div className="door-icon">
              <img src="/assets/aistudio/redbird_2fa7950e.jpg" style={{ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '4px' }} alt="BuoLingo" />
            </div>
            <span>BuoLingo</span>
          </div>

          <div className="desktop-icon" data-app="turtle" title="Double-click to open Turtle">
            <div className="door-icon">🐢</div>
            <span>Turtle</span>
          </div>

          <div className="desktop-icon" data-app="system-viewer" title="Double-click to open System Viewer">
            <div className="door-icon">🏙️</div>
            <span>System Viewer</span>
          </div>

          <div className="desktop-icon" data-app="file-manager" title="Double-click to open">
            <div className="door-icon">📁</div>
            <span>File Manager</span>
          </div>

          <div className="desktop-icon" data-app="paint" title="Double-click to open">
            <div className="door-icon">🎨</div>
            <span>Paintn&apos;t</span>
          </div>

          <div className="desktop-icon" data-app="terminal" title="Double-click to open">
            <div className="door-icon">💻</div>
            <span>Door Prompt</span>
          </div>

          <div className="desktop-icon" data-app="settings" title="Double-click to open">
            <div className="door-icon">⚙️</div>
            <span>Door Settings</span>
          </div>

          <div className="desktop-icon" data-app="earth-bat" title="Double-click to run batch script">
            <div className="door-icon">🌎</div>
            <span>earth.bat</span>
          </div>

          <div className="desktop-icon" data-app="wormy" title="Double-click to open wormy virus">
            <div className="door-icon">🐛</div>
            <span>wormy.exe</span>
          </div>

          <div className="desktop-icon" data-app="fake-virus" title="Double-click to open">
            <div className="door-icon">☣️</div>
            <span>EXE.exe</span>
          </div>

          <div className="desktop-icon" data-app="mystery" title="Double-click to open">
            <div className="door-icon">❓</div>
            <span>DO NOT OPEN</span>
          </div>
        </section>

        {/* OPEN APPLICATION WINDOWS */}
        <section id="window-layer"></section>

        {/* ERROR POPUP LAYER */}
        <section id="error-layer"></section>

        {/* TASKBAR */}
        <footer id="taskbar">
          <button id="start-button">
            <img src="/hugeharddoors.png" alt="" />
            START
          </button>

          <div id="taskbar-windows"></div>

          <div id="system-tray">
            <span id="system-status">SYSTEM: QUESTIONABLE</span>
            <span id="clock" title="Click to open Calendar" style={{ cursor: 'pointer' }}>00:00</span>
          </div>
        </footer>
      </main>

      {/* START MENU WITH SCROLLING MECHANIC FOR SMALLER DEVICES */}
      <div id="start-menu" hidden style={{ maxHeight: '80vh', overflowY: 'auto', overflowX: 'hidden' }}>
        <div className="start-menu-header">
          HUGEHARD DOORS 0.11
        </div>
        <button data-app="contact-me"><img src="/assets/aistudio/profile_dae27b52.png" style={{ width: '16px', height: '16px', objectFit: 'cover', borderRadius: '2px', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }} alt="" />Contact Me</button>
        <button data-app="my-computer"><img src="/assets/aistudio/office_c18c2731.png" style={{ width: '16px', height: '16px', objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }} alt="" />My Doors</button>
        <button data-app="boogle"><img src="/assets/aistudio/boogle_cba6fd34.jpg" style={{ width: '16px', height: '16px', objectFit: 'cover', borderRadius: '2px', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }} alt="" />Boogle</button>
        <button data-app="office"><img src="/assets/aistudio/office_c18c2731.png" style={{ width: '16px', height: '16px', objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }} alt="" />Hugehard Office Suite</button>
        <button data-app="music-player">Hugehard Player 🎧</button>
        <button data-app="notepad">Door Notepad 📝</button>
        <button data-app="calendar">Calendar 📅</button>
        <button data-app="baby-corp">👶 The Baby Corp Inc.</button>
        <button data-app="booker">📚 Booker (Travel & Resort)</button>
        <button data-app="humor-buddy">Humor Buddy 🤪</button>
        <button data-app="buolingo"><img src="/assets/aistudio/redbird_2fa7950e.jpg" style={{ width: '16px', height: '16px', objectFit: 'cover', borderRadius: '2px', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }} alt="" />BuoLingo</button>
        <button data-app="turtle">Turtle 🐢</button>
        <button data-app="system-viewer">System Viewer 🏙️⚡</button>
        <button data-app="cute-ai"><img src="/assets/aistudio/mari_73b34861.jpg" style={{ width: '16px', height: '16px', objectFit: 'cover', borderRadius: '2px', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }} alt="" />Cutie AI (Chibi Marinette)</button>
        <button data-app="file-manager">File Manager</button>
        <button data-app="earth-bat">earth.bat (Gravity)</button>
        <button data-app="paint">Paintn&apos;t</button>
        <button data-app="terminal">Door Prompt</button>
        <button data-app="settings">Door Settings</button>
        <button data-app="doors1">Upgrade to Doors 1.0 (Retro CGA) ⚡</button>
        <button data-app="activate">Activate Doors Now</button>
        <button data-app="exesafe">EXEsafe.com</button>
        <button data-app="wormy">wormy.exe 🐛</button>
        <button data-app="fake-virus">EXE.exe</button>
        
        <div className="context-separator" style={{margin:'4px 0'}}></div>
        
        <button onClick={() => (window as any).resetIconPositions ? (window as any).resetIconPositions() : null} style={{ fontWeight: 'bold', color: '#000080' }}>🔧 Fix Screen / Reset Desktop</button>
        <button onClick={() => (window as any).bootSystem ? (window as any).bootSystem() : location.reload()} style={{ fontWeight: 'bold', color: '#16a34a' }}>🔄 Restart System</button>
        <button onClick={() => (window as any).signOutUser ? (window as any).signOutUser() : null} style={{ fontWeight: 'bold', color: '#0284c7' }}>👤 Sign Out</button>
        <button id="shutdown-button" style={{ fontWeight: 'bold', color: '#dc2626' }}>🔌 Shut Down</button>
      </div>

      {/* SYSTEM NOTIFICATIONS */}
      <div id="notification-layer"></div>
    </>
  );
}
