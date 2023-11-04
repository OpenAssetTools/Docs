<script setup>
import GameSwitcher from '@theme/components/GameSwitcher.vue'
import { Game } from '@theme/components/preferences'
</script>

# Menu Properties

<GameSwitcher :games="[Game.iw4, Game.iw5]" />

**TODO**

This will be a list of all available properties in menuDefs.

- name
- fullScreen
- screenSpace
- decoration
- rect
- style
- visible
- onOpen
- onClose
- onRequestClose
- onESC
- border
- borderSize
- backcolor
- forecolor
- bordercolor
- focuscolor
- outlinecolor
- background
- ownerdraw
- ownerdrawFlag
- outOfBoundsClick
- soundLoop
- exp rect (X, Y, W, H)
- exp openSound
- exp closeSound
- popup
- fadeClamp
- fadeCycle
- fadeAmount
- fadeInAmount
- execKey
- execKeyInt
- blurWorld
- legacySplitScreenScale
- hiddenDuringScope
- hiddenDuringFlashbang
- hiddenDuringUI
- allowedBinding
- textOnlyFocus

<div class="game-only iw5">

- exp soundLoop
- onFocusDueToClose

</div>
