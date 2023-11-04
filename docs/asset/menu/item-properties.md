<script setup>
import GameSwitcher from '@theme/components/GameSwitcher.vue'
import { Game } from '@theme/components/preferences'
</script>

# Item Properties

<GameSwitcher :games="[Game.iw4, Game.iw5]" />

**TODO**

This will be a list of all available properties in itemDefs.

## All items

- name
- text
- textsavegame
- textcinematicsubtitle
- group
- rect
- origin
- style
- decoration
- autowrapped
- horizontalscroll
- type
- border
- borderSize
- visible
- disabled
- ownerdraw
- align
- textalign
- textalignx
- textaligny
- textscale
- textstyle
- textfont
- backcolor
- forecolor
- bordercolor
- outlinecolor
- disablecolor
- glowcolor
- background
- onFocus
- leaveFocus
- mouseEnter
- mouseExit
- mouseEnterText
- mouseExitText
- action
- accept
- dvar
- focusSound
- ownerdrawFlag
- enableDvar
- dvarTest
- disableDvar
- showDvar
- hideDvar
- focusDvar
- execKey
- execKeyInt
- gamemsgwindowindex
- gamemsgwindowmode
- decodeEffect
- exp disabled
- exp text
- exp material
- exp rect (X, Y, W, H)
- exp forecolor (R, G, B, A, RGB)
- exp glowcolor (R, G, B, A, RGB)
- exp backcolor (R, G, B, A, RGB)

<div class="game-only iw5">
- hasFocus
- exp textaligny
</div>

## Listbox items

- columns
- notselectable
- noscrollbars
- usepaging
- elementwidth
- elementheight
- feeder
- elementtype
- doubleclick
- selectBorder
- selectIcon

<div class="game-only iw5">

- exp elementheight

</div>

## Editfield items

- dvarFloat
- localvar
- maxChars
- maxPaintChars
- maxCharsGotoNext

## Multi value items

- dvarStrList
- dvarFloatList

## Enum dvar items

- dvarEnumList

## News ticker items

- spacing
- speed
- newsfeed
