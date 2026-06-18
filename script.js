const goalPool = [
  { text: "Have a party member get sick", difficulty: 1 },
  { text: "Visit a fort", difficulty: 1 },
  { text: "Arrive at a settlement", difficulty: 1 },
  { text: "Complete a river crossing", difficulty: 1 },
  { text: "Trade with another wagon", difficulty: 1 },
  { text: "Buy a replacement ox", difficulty: 1 },
  { text: "Cross a mountain pass", difficulty: 2 },
  { text: "Successfully ford a river", difficulty: 2 },
  { text: "Lose supplies", difficulty: 2 },
  { text: "Bad weather slows travel", difficulty: 2 },
  { text: "Wagon tips over", difficulty: 2 },
  { text: "Caulk and float a river over 5 feet deep successfully", difficulty: 3 },
  { text: "Rest for health", difficulty: 3 },
  { text: "Hunt a buffalo", difficulty: 3 },
  { text: "Pay a toll", difficulty: 3 },
  { text: "Run low on food", difficulty: 3 },
  { text: "Meet a guide", difficulty: 3 },
  { text: "Take a ferry", difficulty: 4 },
  { text: "Reach Fort Laramie", difficulty: 4 },
  { text: "Reach Fort Bridger", difficulty: 4 },
  { text: "Reach Fort Hall", difficulty: 4 },
  { text: "Reach Fort Boise", difficulty: 4 },
  { text: "Reach Chimney Rock", difficulty: 4 },
  { text: "Hunt for a rabbit or squirrel", difficulty: 5 },
  { text: "Cross a desert stretch", difficulty: 5 },
  { text: "Cross the Green River", difficulty: 5 },
  { text: "Take the Sublette Cutoff", difficulty: 5 },
  { text: "Take the Lander Cutoff", difficulty: 5 },
  { text: "Take the Hastings Cutoff", difficulty: 5 },
  { text: "Take the Applegate Cutoff", difficulty: 5 },
  { text: "Reach Independence Rock", difficulty: 5 },
  { text: "Break an axle", difficulty: 5 },
  { text: "Break a wheel", difficulty: 5 },
  { text: "Break a wagon tongue", difficulty: 5 },
  { text: "Hunt at least 2 animals without missing shots", difficulty: 6 },
  { text: "Trade at a trading post", difficulty: 6 },
  { text: "Party member survives Cholera", difficulty: 7 },
  { text: "Have a party member die to Cholera", difficulty: 7 },
  { text: "Cure an illness with medicine", difficulty: 7 },
  { text: "Reach South Pass", difficulty: 7 },
  { text: "Reach Soda Springs", difficulty: 7 },
  { text: "Run out of food completely", difficulty: 7 },
  { text: "Only buy the large supply bundle in starting town", difficulty: 8 },
  { text: "Approach Strangers without them stealing from you", difficulty: 8 },
  { text: "Hunt a bear", difficulty: 8 },
  { text: "Reach a settlement in poor health", difficulty: 8 },
  { text: "Cross the Snake River", difficulty: 8 },
  { text: "Reach The Dalles", difficulty: 8 },
  { text: "Lose a pack animal", difficulty: 8 },
  { text: "See no big game while hunting (minimum 30 seconds)", difficulty: 9 },
  { text: "Successfully hunt on five separate occasions", difficulty: 9 },
  { text: "Hunt for over 300 pounds of food in one outing", difficulty: 10 },
  { text: "Cross the Great Salt Lake Desert", difficulty: 10 },
  { text: "Take the Barlow Toll Road", difficulty: 10 },
  { text: "Rest at Donner Lake with low food", difficulty: 10 },
  { text: "Make it through a storm", difficulty: 11 },
  { text: "Get a snakebite", difficulty: 11 },
  { text: "Reach Oregon City", difficulty: 12 },
  { text: "Reach Sacramento", difficulty: 12 },
  { text: "Reach Jacksonville", difficulty: 12 },
  { text: "Find fresh fruits or vegetables", difficulty: 14 },
  { text: "Win a hard trade (10+ offers)", difficulty: 12 },
  { text: "Repair a wagon part", difficulty: 12 },
  { text: "Survive a blizzard", difficulty: 13 },
  { text: "Finish with a Grandfather Clock", difficulty: 13 },
  { text: "Do a full run on full rations", difficulty: 13 },
  { text: "Finish the trail without using a ferry", difficulty: 14 },
  { text: "Reach Fort Vancouver", difficulty: 14 },
  { text: "Catch some fish", difficulty: 15 },
  { text: "Survive without resting after illness", difficulty: 15 },
  { text: "Raft down the Columbia River", difficulty: 15 },
  { text: "Successfully hunt at least three species in a single hunt", difficulty: 16 },
  { text: "Hunt for 200 pounds of meat with only one shot", difficulty: 16 },
  { text: "Repair two broken wagon components", difficulty: 17 },
  { text: "Reach a destination before winter", difficulty: 17 },
  { text: "Find fresh water", difficulty: 18 },
  { text: "Complete a pistol only run", difficulty: 18 },
  { text: "Reach your destination with at most one other party member", difficulty: 19 },
  { text: "Do a full run using Mules", difficulty: 19 },
  { text: "Complete a shotgun only run", difficulty: 19 },
  { text: "Keep a party member of age 65 alive the whole trip", difficulty: 20 },
  { text: "Do a full run using Horses", difficulty: 20 },
  { text: "Shoot down 3 buffalo during a stampede", difficulty: 20 },
  { text: "Only buy small supply bundle in starting town", difficulty: 21 },
  { text: "Finish the trail without buying medicine", difficulty: 21 },
  { text: "Complete a run with a small farmwagon", difficulty: 21 },
  { text: "Finish with two seniors (55+)", difficulty: 22 },
  { text: "Finish the trail with all party members alive", difficulty: 22 },
  { text: "Keep a party member younger than 10 alive the whole trip", difficulty: 22 },
  { text: "Complete a run with cinnamon in your inventory the entire time", difficulty: 23 },
  { text: "Complete a pescatarian run", difficulty: 23 },
  { text: "Get fired and then re-elected from wagon train captain", difficulty: 23 },
  { text: "Complete a run traveling 12h/day the whole time", difficulty: 24 },
  { text: "Complete a run with a milk cow", difficulty: 24 },
  { text: "All party members survive a winter without winter clothes", difficulty: 24 },
  { text: "Finish the trail with no wagon parts breaking", difficulty: 25 },
  { text: "Get a limb amputated", difficulty: 25 },
  { text: "Complete a run with a Conestoga Wagon", difficulty: 25 }
];

const pseudoMagicSquares = [
  {
    id: "classic",
    name: "Classic",
    values: [
      17, 24, 1, 8, 15,
      23, 5, 7, 14, 16,
      4, 6, 13, 20, 22,
      10, 12, 19, 21, 3,
      11, 18, 25, 2, 9
    ]
  },
  {
    id: "rotated",
    name: "Rotated",
    values: [
      11, 10, 4, 23, 17,
      18, 12, 6, 5, 24,
      25, 19, 13, 7, 1,
      2, 21, 20, 14, 8,
      9, 3, 22, 16, 15
    ]
  },
  {
    id: "rivers",
    name: "Rivers",
    values: [
      13, 20, 22, 4, 6,
      21, 3, 10, 12, 19,
      2, 9, 11, 18, 25,
      8, 15, 17, 24, 1,
      14, 16, 23, 5, 7
    ]
  }
];

const trailRandomizerData = {
  levels: ["Greenhorn", "Adventurer", "Trail Guide"],
  jobs: ["banker", "doctor", "merchant", "pharmacist", "wainwright", "gunsmith", "mason", "blacksmith", "wheelwright", "carpenter", "saddlemaker", "brickmaker", "prospector", "trapper", "surveyor", "shoemaker", "journalist", "printer", "butcher", "baker", "tailor", "farmer", "pastor", "artist", "teacher"],
  months: ["February", "March", "April", "May", "June", "July", "August"],
  years: ["1840", "1841", "1842", "1843", "1844", "1845", "1846", "1847", "1848", "1849", "1850", "1851", "1852", "1853", "1854", "1855", "1856", "1857", "1858", "1859", "1860"],
  wagons: ["small farmwagon", "large farmwagon", "Conestoga wagon"],
  paces: ["8", "10", "12+"],
  rations: ["Bare bones", "Meager", "Filling"],
  ages: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
  cities: {
    "1840": { from: ["Independence"], to: ["The Willamette Valley", "The Sacramento Valley"] },
    "1841": { from: ["Independence"], to: ["The Willamette Valley", "The Sacramento Valley"] },
    "1842": { from: ["Independence"], to: ["Oregon City", "The Sacramento Valley"] },
    "1843": { from: ["Independence", "St. Joseph"], to: ["Oregon City", "The Sacramento Valley"] },
    "1844": { from: ["Independence", "St. Joseph"], to: ["Oregon City", "The Sacramento Valley"] },
    "1845": { from: ["Independence", "St. Joseph"], to: ["Oregon City", "The Sacramento Valley"] },
    "1846": { from: ["Independence", "St. Joseph", "Nauvoo", "Kanesville"], to: ["Oregon City", "The Sacramento Valley", "The Rogue River Valley"] },
    "1847": { from: ["Independence", "St. Joseph", "Nauvoo", "Kanesville"], to: ["Oregon City", "The Sacramento Valley", "Great Salt Lake City", "The Rogue River Valley"] },
    "1848": { from: ["Independence", "St. Joseph", "Nauvoo", "Kanesville"], to: ["Oregon City", "Sacramento", "Great Salt Lake City", "The Rogue River Valley"] },
    "1849": { from: ["Independence", "St. Joseph", "Nauvoo", "Kanesville"], to: ["Oregon City", "Sacramento", "Great Salt Lake City", "The Rogue River Valley"] },
    "1850": { from: ["Independence", "St. Joseph", "Nauvoo", "Kanesville"], to: ["Oregon City", "Sacramento", "Great Salt Lake City", "The Rogue River Valley"] },
    "1851": { from: ["Independence", "St. Joseph", "Nauvoo", "Kanesville"], to: ["Oregon City", "Sacramento", "Great Salt Lake City", "The Rogue River Valley"] },
    "1852": { from: ["Independence", "St. Joseph", "Nauvoo", "Kanesville"], to: ["Oregon City", "Sacramento", "Great Salt Lake City", "Jacksonville, Oregon"] },
    "1853": { from: ["Independence", "St. Joseph", "Nauvoo", "Kanesville"], to: ["Oregon City", "Sacramento", "Great Salt Lake City", "Jacksonville, Oregon"] },
    "1854": { from: ["Independence", "St. Joseph", "Nauvoo", "Council Bluffs"], to: ["Oregon City", "Sacramento", "Great Salt Lake City", "Jacksonville, Oregon"] },
    "1855": { from: ["Independence", "St. Joseph", "Nauvoo", "Council Bluffs"], to: ["Oregon City", "Sacramento", "Great Salt Lake City", "Jacksonville, Oregon"] },
    "1856": { from: ["Independence", "St. Joseph", "Nauvoo", "Council Bluffs"], to: ["Oregon City", "Sacramento", "Great Salt Lake City", "Jacksonville, Oregon"] },
    "1857": { from: ["Independence", "St. Joseph", "Nauvoo", "Council Bluffs"], to: ["Oregon City", "Sacramento", "Great Salt Lake City", "Jacksonville, Oregon"] },
    "1858": { from: ["Independence", "St. Joseph", "Nauvoo", "Council Bluffs"], to: ["Oregon City", "Sacramento", "Great Salt Lake City", "Jacksonville, Oregon"] },
    "1859": { from: ["Independence", "St. Joseph", "Nauvoo", "Council Bluffs"], to: ["Oregon City", "Sacramento", "Great Salt Lake City", "Jacksonville, Oregon"] },
    "1860": { from: ["Independence", "St. Joseph", "Nauvoo", "Council Bluffs"], to: ["Oregon City", "Sacramento", "Great Salt Lake City", "Jacksonville, Oregon"] }
  },
  jobMoney: [2000, 1900, 1800, 1750, 1700, 1600, 1500, 1400, 1300, 1250, 1200, 1150, 1100, 1050, 1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500],
  jobSkills: ["commerce/trade", "medical", "commerce/trade", "various", "blacksmithing", "sharpshooting", "no", "blacksmithing", "blacksmithing", "carpentry", "no", "no", "no", "various", "no", "sewing", "no", "no", "cooking", "cooking", "sewing", "various", "no", "no", "no"],
  wagonPrices: [60, 75, 100]
};

const boardElement = document.querySelector("#board");
const seedInput = document.querySelector("#seed");
const maxDifficultyInput = document.querySelector("#max-difficulty");
const magicSquareSelect = document.querySelector("#magic-square");
const settingsForm = document.querySelector("#settings");
const controlsPanel = document.querySelector("#controls-panel");
const toggleControlsButton = document.querySelector("#toggle-controls");
const randomSeedButton = document.querySelector("#random-seed");
const newBoardButton = document.querySelector("#new-board");
const clearMarksButton = document.querySelector("#clear-marks");
const openTrailRandomizerButton = document.querySelector("#open-trail-randomizer");
const trailRandomizerModal = document.querySelector("#trail-randomizer-modal");
const closeTrailRandomizerButton = document.querySelector("#close-trail-randomizer");
const rerollTrailRandomizerButton = document.querySelector("#reroll-trail-randomizer");
const trailRandomizerResults = document.querySelector("#trail-randomizer-results");

const boardSize = 5;
const squareCount = boardSize * boardSize;
const savedBoardStateKey = "oregonTrailBingo.boardState.v1";
const konamiKeyboardCodes = [
  ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a"]
];
const konamiTouchCodes = [
  ["up", "up", "down", "down", "left", "right", "left", "right", "tap", "tap"]
];
const maxKonamiLength = Math.max(...konamiKeyboardCodes.map((code) => code.length));
const minimumRenderScale = 1;
const maximumRenderScale = 4;
let currentGoals = [];
let markedSquares = new Set();
let hadWinningLine = false;
let keyboardProgress = [];
let touchProgress = [];
let touchStart = null;

function readSavedBoardState() {
  try {
    const storedState = window.localStorage.getItem(savedBoardStateKey);
    return storedState ? JSON.parse(storedState) : null;
  } catch (error) {
    return null;
  }
}

function writeSavedBoardState() {
  try {
    window.localStorage.setItem(savedBoardStateKey, JSON.stringify({
      seed: seedInput.value.trim(),
      maxDifficulty: getMaxDifficulty(),
      magicSquare: magicSquareSelect.value,
      markedSquares: [...markedSquares].sort((first, second) => first - second),
      updatedAt: Date.now()
    }));
  } catch (error) {
    // Some OBS/browser-source configurations can block storage. The board still works without persistence.
  }
}

function syncRenderScale() {
  const deviceScale = window.devicePixelRatio || 1;
  const renderScale = Math.min(
    maximumRenderScale,
    Math.max(minimumRenderScale, 1 / deviceScale)
  );

  document.documentElement.style.setProperty("--root-font-size", `${16 * renderScale}px`);
}

syncRenderScale();
window.addEventListener("resize", syncRenderScale);

const winningLines = buildWinningLines();

function buildWinningLines() {
  const lines = [];

  for (let row = 0; row < boardSize; row += 1) {
    lines.push(Array.from({ length: boardSize }, (_, col) => row * boardSize + col));
  }

  for (let col = 0; col < boardSize; col += 1) {
    lines.push(Array.from({ length: boardSize }, (_, row) => row * boardSize + col));
  }

  lines.push(Array.from({ length: boardSize }, (_, index) => index * boardSize + index));
  lines.push(Array.from({ length: boardSize }, (_, index) => index * boardSize + (boardSize - 1 - index)));

  return lines;
}

function populateMagicSquareSelect() {
  pseudoMagicSquares.forEach((square) => {
    const option = document.createElement("option");
    option.value = square.id;
    option.textContent = square.name;
    magicSquareSelect.append(option);
  });
}

function randomSeed() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

function hashSeed(seed) {
  let hash = 2166136261;

  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function createRandom(seed) {
  let state = hashSeed(seed) || 1;

  return function nextRandom() {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(items, random) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function transformGrid(values, rotation, flipH, flipV) {
  let grid = [];
  for (let i = 0; i < boardSize; i += 1) {
    grid.push(values.slice(i * boardSize, i * boardSize + boardSize));
  }

  if (flipH) {
    grid = grid.map((row) => [...row].reverse());
  }
  if (flipV) {
    grid = [...grid].reverse();
  }

  for (let r = 0; r < rotation; r += 1) {
    const newGrid = Array.from({ length: boardSize }, () => new Array(boardSize));
    for (let i = 0; i < boardSize; i += 1) {
      for (let j = 0; j < boardSize; j += 1) {
        newGrid[j][boardSize - 1 - i] = grid[i][j];
      }
    }
    grid = newGrid;
  }

  return grid.flat();
}

function chooseRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function titleCase(value) {
  return value.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}

function createTrailSetup() {
  const level = chooseRandom(trailRandomizerData.levels);
  const job = chooseRandom(trailRandomizerData.jobs);
  const month = chooseRandom(trailRandomizerData.months);
  const year = chooseRandom(trailRandomizerData.years);
  const cities = trailRandomizerData.cities[year];
  const wagon = chooseRandom(trailRandomizerData.wagons);
  const jobIndex = trailRandomizerData.jobs.indexOf(job);
  const wagonIndex = trailRandomizerData.wagons.indexOf(wagon);
  const partyAges = Array.from({ length: 5 }, () => chooseRandom(trailRandomizerData.ages));
  const startingCash = trailRandomizerData.jobMoney[jobIndex] - trailRandomizerData.wagonPrices[wagonIndex];

  return {
    level,
    job: titleCase(job),
    date: `${month} ${year}`,
    startingLocation: chooseRandom(cities.from),
    endingLocation: chooseRandom(cities.to),
    skills: titleCase(trailRandomizerData.jobSkills[jobIndex]),
    cash: `$${startingCash}`,
    wagon: titleCase(wagon),
    wagonValue: `$${trailRandomizerData.wagonPrices[wagonIndex]}`,
    pace: `${chooseRandom(trailRandomizerData.paces)} hours per day`,
    rations: chooseRandom(trailRandomizerData.rations),
    partyAges
  };
}

function renderTrailSetup(setup) {
  const resultItems = [
    ["Level", setup.level],
    ["Starting job", setup.job],
    ["Date", setup.date],
    ["Starting location", setup.startingLocation],
    ["Ending location", setup.endingLocation],
    ["Skills", setup.skills],
    ["Cash after wagon", setup.cash],
    ["Wagon", `${setup.wagon} (${setup.wagonValue})`],
    ["Pace", setup.pace],
    ["Rations", setup.rations],
    ["Party ages", setup.partyAges.join(", ")]
  ];

  trailRandomizerResults.innerHTML = "";

  resultItems.forEach(([label, value]) => {
    const item = document.createElement("div");
    item.className = "trail-result";

    const labelElement = document.createElement("span");
    labelElement.className = "trail-result-label";
    labelElement.textContent = label;

    const valueElement = document.createElement("strong");
    valueElement.textContent = value;

    item.append(labelElement, valueElement);
    trailRandomizerResults.append(item);
  });
}

function randomizeTrailSetup() {
  renderTrailSetup(createTrailSetup());
}

function openTrailRandomizer() {
  randomizeTrailSetup();
  trailRandomizerModal.hidden = false;
  rerollTrailRandomizerButton.focus();
}

function closeTrailRandomizer() {
  trailRandomizerModal.hidden = true;
  openTrailRandomizerButton.focus();
}

function getSelectedMagicSquare(seed) {
  const selectedSquare = pseudoMagicSquares.find((square) => square.id === magicSquareSelect.value);

  if (selectedSquare) {
    return selectedSquare;
  }

  return pseudoMagicSquares[hashSeed(seed) % pseudoMagicSquares.length] || pseudoMagicSquares[0];
}

function isValidMagicSquareId(value) {
  return pseudoMagicSquares.some((square) => square.id === value);
}

function getHighestGoalDifficulty() {
  return Math.max(...goalPool.map((goal) => goal.difficulty));
}

function getLowestPlayableDifficulty() {
  const difficulties = [...new Set(goalPool.map((goal) => goal.difficulty))]
    .sort((first, second) => first - second);

  return difficulties.find((difficulty) => {
    return goalPool.filter((goal) => goal.difficulty <= difficulty).length >= squareCount;
  }) || getHighestGoalDifficulty();
}

function syncDifficultyInputLimits() {
  maxDifficultyInput.min = String(getLowestPlayableDifficulty());
  maxDifficultyInput.max = String(getHighestGoalDifficulty());
}

function clampMaxDifficulty(value) {
  const lowestPlayableDifficulty = getLowestPlayableDifficulty();
  const highestGoalDifficulty = getHighestGoalDifficulty();
  const requestedDifficulty = Number(value);
  const maxDifficulty = Number.isFinite(requestedDifficulty) ? requestedDifficulty : lowestPlayableDifficulty;
  return Math.max(lowestPlayableDifficulty, Math.min(highestGoalDifficulty, Math.floor(maxDifficulty)));
}

function getMaxDifficulty() {
  return clampMaxDifficulty(maxDifficultyInput.value);
}

function normalizeMarkedSquares(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  const indexes = value
    .map((index) => Number(index))
    .filter((index) => Number.isInteger(index) && index >= 0 && index < squareCount);

  return [...new Set(indexes)];
}

function getDefaultBoardSettings() {
  return {
    seed: randomSeed(),
    maxDifficulty: maxDifficultyInput.value,
    magicSquare: magicSquareSelect.value || pseudoMagicSquares[0].id
  };
}

function normalizeBoardSettings(settings, fallback) {
  const seed = typeof settings?.seed === "string" ? settings.seed.trim() : "";
  const magicSquare = typeof settings?.magicSquare === "string" ? settings.magicSquare : "";

  return {
    seed: seed || fallback.seed,
    maxDifficulty: clampMaxDifficulty(settings?.maxDifficulty ?? fallback.maxDifficulty),
    magicSquare: isValidMagicSquareId(magicSquare) ? magicSquare : fallback.magicSquare
  };
}

function boardSettingsMatch(firstSettings, secondSettings) {
  return firstSettings.seed === secondSettings.seed
    && Number(firstSettings.maxDifficulty) === Number(secondSettings.maxDifficulty)
    && firstSettings.magicSquare === secondSettings.magicSquare;
}

function getUrlBoardSettings() {
  const params = new URLSearchParams(window.location.search);
  const hasBoardParam = params.has("seed")
    || params.has("maxDifficulty")
    || params.has("difficulty")
    || params.has("magicSquare")
    || params.has("magic");

  if (!hasBoardParam) {
    return null;
  }

  return {
    seed: params.get("seed") || "",
    maxDifficulty: params.get("maxDifficulty") || params.get("difficulty") || undefined,
    magicSquare: params.get("magicSquare") || params.get("magic") || ""
  };
}

function applyBoardSettings(settings) {
  seedInput.value = settings.seed;
  maxDifficultyInput.value = String(settings.maxDifficulty);
  magicSquareSelect.value = settings.magicSquare;
}

function syncBoardSettingsToUrl() {
  if (!window.history?.replaceState) {
    return;
  }

  try {
    const url = new URL(window.location.href);
    url.searchParams.set("seed", seedInput.value.trim());
    url.searchParams.set("maxDifficulty", maxDifficultyInput.value);
    url.searchParams.set("magicSquare", magicSquareSelect.value);
    url.searchParams.delete("difficulty");
    url.searchParams.delete("magic");
    window.history.replaceState(null, "", url);
  } catch (error) {
    // URL syncing is a convenience for sharing/reloading; storage remains the source of truth in OBS.
  }
}

function initializeBoardSettings() {
  const defaultSettings = getDefaultBoardSettings();
  const savedState = readSavedBoardState();
  const savedSettings = savedState
    ? normalizeBoardSettings(savedState, defaultSettings)
    : null;
  const urlSettings = getUrlBoardSettings();
  const initialSettings = urlSettings
    ? normalizeBoardSettings(urlSettings, defaultSettings)
    : savedSettings || defaultSettings;
  const hasSavedSeed = typeof savedState?.seed === "string" && savedState.seed.trim() !== "";
  const restoredMarkedSquares = hasSavedSeed && savedSettings && boardSettingsMatch(savedSettings, initialSettings)
    ? normalizeMarkedSquares(savedState.markedSquares)
    : [];

  applyBoardSettings(initialSettings);
  createBoard({ restoreMarks: restoredMarkedSquares });
}

function scaleMagicValues(values, maxDifficulty) {
  const maxMagicValue = Math.max(...values);
  return values.map((value) => Math.max(1, Math.ceil((value / maxMagicValue) * maxDifficulty)));
}

function chooseGoalForDifficulty(availableGoals, targetDifficulty, random) {
  const exactGoals = availableGoals.filter((goal) => goal.difficulty === targetDifficulty);
  const eligibleGoals = exactGoals.length > 0
    ? exactGoals
    : availableGoals.filter((goal) => goal.difficulty <= targetDifficulty);

  if (eligibleGoals.length === 0) {
    return null;
  }

  const chosenGoal = eligibleGoals[Math.floor(random() * eligibleGoals.length)];
  availableGoals.splice(availableGoals.indexOf(chosenGoal), 1);
  return chosenGoal;
}

function createBoard(options = {}) {
  const restoredMarkedSquares = Array.isArray(options.restoreMarks)
    ? options.restoreMarks
    : [];
  const seed = seedInput.value.trim() || randomSeed();
  seedInput.value = seed;

  const maxDifficulty = getMaxDifficulty();
  maxDifficultyInput.value = String(maxDifficulty);

  const random = createRandom(`${seed}|${maxDifficulty}|${magicSquareSelect.value}`);
  const magicSquare = getSelectedMagicSquare(seed);

  const rotation = Math.floor(random() * 4);
  const flipH = random() < 0.5;
  const flipV = random() < 0.5;
  const transformedValues = transformGrid(magicSquare.values, rotation, flipH, flipV);

  const difficulties = scaleMagicValues(transformedValues, maxDifficulty);
  const availableGoals = shuffle(goalPool.filter((goal) => goal.difficulty <= maxDifficulty), random);

  if (availableGoals.length < squareCount) {
    window.alert(`Need at least ${squareCount} goals at difficulty ${maxDifficulty} or lower.`);
    boardElement.innerHTML = "";
    return;
  }

  currentGoals = difficulties.map((difficulty) => chooseGoalForDifficulty(availableGoals, difficulty, random));
  markedSquares = new Set(normalizeMarkedSquares(restoredMarkedSquares));
  hadWinningLine = getWinningIndexes().size > 0;
  renderBoard();
  updateBoardState();
  syncBoardSettingsToUrl();
  writeSavedBoardState();
}

function renderBoard() {
  boardElement.innerHTML = "";

  for (let row = 0; row < boardSize; row += 1) {
    const rowElement = document.createElement("div");
    rowElement.className = "bingo-row";
    rowElement.setAttribute("role", "row");
    rowElement.setAttribute("aria-rowindex", String(row + 1));

    for (let column = 0; column < boardSize; column += 1) {
      const index = row * boardSize + column;
      const goal = currentGoals[index];
      const cell = document.createElement("div");
      cell.className = "bingo-cell";
      cell.setAttribute("role", "gridcell");
      cell.setAttribute("aria-colindex", String(column + 1));
      cell.setAttribute("aria-selected", "false");

      const square = document.createElement("button");
      square.className = "square";
      square.type = "button";
      square.dataset.index = index;
      square.setAttribute("aria-pressed", "false");
      square.setAttribute("aria-label", `Row ${row + 1}, column ${column + 1}: ${goal.text}, difficulty ${goal.difficulty}`);

      const goalText = document.createElement("span");
      goalText.className = "goal-text";
      if (goal.text.length > 45) {
        goalText.classList.add("goal-text--dense");
      } else if (goal.text.length > 32) {
        goalText.classList.add("goal-text--compact");
      }
      goalText.textContent = goal.text;

      square.append(goalText);
      square.addEventListener("click", () => toggleSquare(index));
      cell.append(square);
      rowElement.append(cell);
    }

    boardElement.append(rowElement);
  }
}

function toggleSquare(index) {
  if (markedSquares.has(index)) {
    markedSquares.delete(index);
  } else {
    markedSquares.add(index);
  }

  updateBoardState();
  updateWinEffects();
  writeSavedBoardState();
}

function updateBoardState() {
  const winningIndexes = getWinningIndexes();

  boardElement.querySelectorAll(".square").forEach((square) => {
    const index = Number(square.dataset.index);
    const isMarked = markedSquares.has(index);
    const isWinning = winningIndexes.has(index);

    square.classList.toggle("marked", isMarked);
    square.classList.toggle("winning", isWinning);
    square.setAttribute("aria-pressed", String(isMarked));
    square.closest(".bingo-cell")?.setAttribute("aria-selected", String(isMarked));
  });
}

function getWinningIndexes() {
  const completedLines = winningLines.filter((line) => line.every((index) => markedSquares.has(index)));
  return new Set(completedLines.flat());
}

function updateWinEffects() {
  const hasWinningLine = getWinningIndexes().size > 0;

  if (hasWinningLine && !hadWinningLine) {
    launchFireworks();
  }

  hadWinningLine = hasWinningLine;
}

function launchFireworks() {
  const existingFireworks = document.querySelector(".fireworks");

  if (existingFireworks) {
    existingFireworks.remove();
  }

  const fireworks = document.createElement("div");
  fireworks.className = "fireworks";
  fireworks.setAttribute("aria-hidden", "true");

  const bursts = [
    { x: 14, y: 24, delay: 0 },
    { x: 36, y: 16, delay: 0.45 },
    { x: 62, y: 26, delay: 0.9 },
    { x: 82, y: 18, delay: 1.35 },
    { x: 24, y: 52, delay: 1.8 },
    { x: 52, y: 46, delay: 2.25 },
    { x: 76, y: 56, delay: 2.7 }
  ];

  bursts.forEach((burst) => {
    const burstElement = document.createElement("span");
    burstElement.className = "firework";
    burstElement.style.left = `${burst.x}%`;
    burstElement.style.top = `${burst.y}%`;
    burstElement.style.animationDelay = `${burst.delay}s`;
    fireworks.append(burstElement);
  });

  document.body.append(fireworks);
  window.setTimeout(() => fireworks.remove(), 5000);
}

function clearMarks() {
  markedSquares = new Set();
  hadWinningLine = false;
  updateBoardState();
  writeSavedBoardState();
}

function trackCodeInput(input, sequences, progress) {
  progress.push(input);

  while (progress.length > maxKonamiLength) {
    progress.shift();
  }

  while (progress.length > 0) {
    const hasPossibleMatch = sequences.some((sequence) => {
      if (progress.length > sequence.length) {
        return false;
      }

      return progress.every((value, index) => sequence[index] === value);
    });

    if (hasPossibleMatch) {
      break;
    }

    progress.shift();
  }

  const hasCompletedCode = sequences.some((sequence) => {
    if (progress.length < sequence.length) {
      return false;
    }

    return sequence.every((value, index) => progress[progress.length - sequence.length + index] === value);
  });

  if (hasCompletedCode) {
    progress.length = 0;
    spinBoard();
  }
}

function spinBoard() {
  boardElement.classList.remove("spin");
  void boardElement.offsetWidth;
  boardElement.classList.add("spin");
}

function getTouchDirection(start, end) {
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;
  const distance = Math.hypot(deltaX, deltaY);
  const swipeThreshold = 32;

  if (distance < swipeThreshold) {
    return "tap";
  }

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return deltaX > 0 ? "right" : "left";
  }

  return deltaY > 0 ? "down" : "up";
}

function confirmBoardAction(message) {
  return window.confirm(message);
}

randomSeedButton.addEventListener("click", () => {
  if (!confirmBoardAction("Random Seed will replace the current board and clear all marks. Continue?")) {
    return;
  }

  seedInput.value = randomSeed();
  createBoard();
});

settingsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!confirmBoardAction("Build Board will replace the current board and clear all marks. Continue?")) {
    return;
  }

  createBoard();
});

toggleControlsButton.addEventListener("click", () => {
  const shouldCollapse = !controlsPanel.hidden;
  controlsPanel.hidden = shouldCollapse;
  toggleControlsButton.setAttribute("aria-expanded", String(!shouldCollapse));
  toggleControlsButton.setAttribute("aria-label", shouldCollapse ? "Expand controls" : "Collapse controls");
});

newBoardButton.addEventListener("click", () => {
  if (!confirmBoardAction("Build Board will replace the current board and clear all marks. Continue?")) {
    return;
  }

  createBoard();
});
clearMarksButton.addEventListener("click", () => {
  if (!confirmBoardAction("Clear Board will remove all marks from the current board. Continue?")) {
    return;
  }

  clearMarks();
});
openTrailRandomizerButton.addEventListener("click", openTrailRandomizer);
closeTrailRandomizerButton.addEventListener("click", closeTrailRandomizer);
rerollTrailRandomizerButton.addEventListener("click", randomizeTrailSetup);
trailRandomizerModal.addEventListener("click", (event) => {
  if (event.target === trailRandomizerModal) {
    closeTrailRandomizer();
  }
});
boardElement.addEventListener("animationend", () => {
  boardElement.classList.remove("spin");
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !trailRandomizerModal.hidden) {
    closeTrailRandomizer();
    return;
  }

  const keyMap = {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right",
    Up: "up",
    Down: "down",
    Left: "left",
    Right: "right"
  };
  const key = keyMap[event.key] || event.key.toLowerCase();
  const isKonamiInput = ["up", "down", "left", "right", "b", "a"].includes(key);

  if (isKonamiInput) {
    if (["up", "down", "left", "right"].includes(key)) {
      event.preventDefault();
    }

    trackCodeInput(key, konamiKeyboardCodes, keyboardProgress);
  }
});

window.addEventListener("touchstart", (event) => {
  if (event.touches.length !== 1) {
    touchStart = null;
    return;
  }

  touchStart = {
    x: event.touches[0].clientX,
    y: event.touches[0].clientY
  };
}, { passive: true });

window.addEventListener("touchend", (event) => {
  if (!touchStart || event.changedTouches.length !== 1) {
    return;
  }

  const touchEnd = {
    x: event.changedTouches[0].clientX,
    y: event.changedTouches[0].clientY
  };

  trackCodeInput(getTouchDirection(touchStart, touchEnd), konamiTouchCodes, touchProgress);
  touchStart = null;
}, { passive: true });

populateMagicSquareSelect();
syncDifficultyInputLimits();
initializeBoardSettings();
