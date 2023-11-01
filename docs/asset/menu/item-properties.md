<script setup>
import GameSwitcher from '@theme/components/GameSwitcher.vue'
import { Game } from '@theme/components/preferences'
</script>

# Item Properties

<GameSwitcher :games="[Game.iw4, Game.iw5]" />
