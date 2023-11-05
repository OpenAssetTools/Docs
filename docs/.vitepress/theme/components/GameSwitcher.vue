<script setup>
import { computed, watchEffect } from "vue";
import {
  inBrowser,
  selectedGameKey,
  selectedGame,
  Game,
  setValueToLocalStorage,
} from "./preferences";

const GameInformation = {
  iw3: {
    name: "Call Of Duty 4: Modern Warfare (2007)",
    icon: "/iw3_32_32.jpg",
  },
  iw4: {
    name: "Call Of Duty: Modern Warfare 2 (2009)",
    icon: "/iw4_32_32.jpg",
  },
  iw5: {
    name: "Call Of Duty: Modern Warfare 3 (2011)",
    icon: "/iw5_32_32.jpg",
  },
  t5: {
    name: "Call Of Duty: Black Ops (2010)",
    icon: "/t5_32_32.jpg",
  },
  t6: {
    name: "Call Of Duty: Black Ops 2 (2012)",
    icon: "/t6_32_32.jpg",
  },
};

/**
 * @type {Object}
 * @property {String[]} games
 */
const props = defineProps({
  games: {
    type: /** @type {PropType<String[]>} */ Array,
    default: null,
  },
});

const games = computed(() => props.games || Object.keys(Game));
const currentGameIndex = computed(() =>
  Math.max(games.value.indexOf(selectedGame.value), 0),
);
const currentGame = computed(() => games.value[currentGameIndex.value]);

function nextGame() {
  const nextGame =
    games.value[(currentGameIndex.value + 1) % games.value.length];

  setValueToLocalStorage(selectedGameKey, nextGame);
  selectedGame.value = nextGame;
}

watchEffect(() => {
  if (!inBrowser) {
    return;
  }

  document.documentElement.classList.remove(
    ...Object.values(Game)
      .filter((game) => game !== currentGame.value)
      .map((game) => `selected-game-${game}`),
  );
  document.documentElement.classList.add(`selected-game-${currentGame.value}`);
});
</script>

<template>
  <div class="game-switcher">
    <span class="game-label">Game</span>
    <div class="game" @click="nextGame">
      <img :src="GameInformation[currentGame].icon" />
      <span>{{ GameInformation[currentGame].name }}</span>
    </div>
  </div>
</template>

<style scoped>
.game-switcher {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 8px 28px;
  display: flex;
  align-items: center;
  margin: 16px 0;
}

.game-label {
  font-weight: bold;
  color: var(--vp-c-text-2);
  margin-right: 20px;
}

.game {
  display: flex;
  align-items: center;
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.25s;
  border-radius: 20px;
  padding: 8px 20px;
  width: 380px;
}

.game:hover {
  cursor: pointer;
  border-color: var(--vp-c-brand-1);
}

.game img {
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 8px;
}

.game span {
  margin-left: 12px;
  user-select: none;
}
</style>

<style>
.game-only {
  display: none;
}

.selected-game-iw4 .iw4 {
  display: initial;
}

.selected-game-iw5 .iw5 {
  display: initial;
}
</style>
