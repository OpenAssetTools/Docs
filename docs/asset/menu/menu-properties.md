<script setup>
import GameSwitcher from '@theme/components/GameSwitcher.vue';
import { Game, selectedGame } from '@theme/components/preferences';
import MenuProperty from './components/MenuProperty.md';
import PropertyParameterList from './components/PropertyParameterList.vue';
import PropertyParameter from './components/PropertyParameter.vue';
import MenuPropertyExample from './components/MenuPropertyExample.md';

const { iw4, iw5 } = Game;
</script>

# Menu Properties

<GameSwitcher :games="[Game.iw4, Game.iw5]" />
<div v-if="selectedGame"><!-- Workaround to make sure dependency on selectedGame is recognized --></div>

**TODO**

This will be a list of all available properties in menuDefs.

<MenuProperty name="name" :required="true" usage="<value>">
<PropertyParameterList>
    <PropertyParameter name="value" type="String" description="The name of the menu" />
</PropertyParameterList>

Sets the name of the menu.
It can be referenced by this name by other commands.

The name has to be unique compared to all other menus of the game.
Otherwise one menu will overwrite the other.

<MenuPropertyExample value="name 'TestMenu'" />
</MenuProperty>

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
