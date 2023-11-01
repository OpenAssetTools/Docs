<script setup>
import GameSwitcher from '@theme/components/GameSwitcher.vue'
import { Game } from '@theme/components/preferences'
</script>

# Menu Reference

<GameSwitcher :games="[Game.iw4, Game.iw5]" />

hello

<div class="game-only iw4">

This is IW4: Modern Warfare 2

</div>

border

<div class="game-only iw5">

MW3 stuff

</div>

world
