<script setup>
import GameSwitcher from '@theme/components/GameSwitcher.vue';
import { Game, selectedGame } from '@theme/components/preferences';
import MenuProperty from './components/MenuProperty.vue';
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

<!-- Name -->
<MenuProperty name="name" :required="true" usage="<value>">
<PropertyParameterList>
    <PropertyParameter name="value" type="String" description="The name of the menu." />
</PropertyParameterList>

Sets the name of the menu.
It can be referenced by this name by other commands.

The name has to be unique compared to all other menus of the game.
Otherwise one menu will overwrite the other.

<MenuPropertyExample value="name 'TestMenu'" />
</MenuProperty>

<!-- Fullscreen -->
<MenuProperty name="fullScreen" usage="<value>">
<PropertyParameterList>
    <PropertyParameter name="value" type="Boolean" />
</PropertyParameterList>

Marks a menu as fullscreen menu.
This makes no underlying menus to be handled when it is open.
_Defaults to 0 when unset._

<MenuPropertyExample value="fullScreen 1" />
</MenuProperty>

<!-- Screenspace -->
<MenuProperty name="screenSpace" usage="<value>">
<PropertyParameterList>
    <PropertyParameter name="value" type="Boolean" />
</PropertyParameterList>

Unknown. _Defaults to 0 when unset._

<MenuPropertyExample value="screenSpace 1" />
</MenuProperty>

<!-- Decoration -->
<MenuProperty name="decoration">

Marks a menu as decoration.
This makes it uninteractable.

<MenuPropertyExample value="decoration" />
</MenuProperty>

<!-- Rect -->
<MenuProperty name="rect" usage="<x> <y> <w> <h> [<alignHorizontal> <alignVertical>]">
<PropertyParameterList>
    <PropertyParameter name="x" type="Float" description="The x coordinate of the upper left corner of the menu." />
    <PropertyParameter name="y" type="Float" description="The y coordinate of the upper left corner of the menu." />
    <PropertyParameter name="w" type="Float" description="The width of the menu." />
    <PropertyParameter name="h" type="Float" description="The height of the menu."/>
    <PropertyParameter name="alignHorizontal" type="Int" description="Specifies how the menu is aligned horizontally." />
    <PropertyParameter name="alignVertical" type="Int" description="Specifies how the menu is aligned vertically." />
</PropertyParameterList>

Specifies the position and size of the menu.
The unit of the coordinates and size depend on the align value.
If no value for alignment was specified, `0` is taken by default.

<MenuPropertyExample value="rect 0 0 640 480 0 0" />
</MenuProperty>

<!-- Style -->
<MenuProperty name="style" usage="<value>">
<PropertyParameterList>
    <PropertyParameter name="value" type="Int" description="Determines which styling is applied to the menu." />
</PropertyParameterList>

Sets the style for the menu.
The style determines how the background is rendered.
_Defaults to 0 when unset._

<MenuPropertyExample value="style 1" />
</MenuProperty>

<!-- Visible -->
<MenuProperty name="visible" usage="<visibleExp> | when(<visibleExp>)">
<PropertyParameterList>
    <PropertyParameter name="visibleExp" type="Expression(Boolean)" description="Determines whether menu is visible or not." />
</PropertyParameterList>

Instructs the game on how to determine whether a menu should be visible or not.
Since this can be set to an expression it will be evaluated at runtime.

Since literal values are also a valid expressions, this can also be set to just `1` or `0` for example.

::: warning

The default for visible is `0` which means unless explicitly specified, your menu will be invisible.
So while this is not necessarly required to be set, it is strongly recommended.

:::

<MenuPropertyExample>

```
{
    menuDef
    {
        visible 1
        visible when(0)
        visible when(dvarBool("ui_showTest") && dvarString("mapname") != "credits")
    }
}
```

</MenuPropertyExample>
</MenuProperty>

<!-- onOpen -->
<MenuProperty name="onOpen" usage="<handler>">
<PropertyParameterList>
    <PropertyParameter name="handler" type="EventHandler" description="Handler to be executed upon being opened." />
</PropertyParameterList>

Specifies an event handler that is executed upon the menu being opened.

<MenuPropertyExample>

```
{
    menuDef
    {
        onOpen
        {
            exec "set cl_paused 1";
            open otherMenu;
        }
    }
}
```

</MenuPropertyExample>
</MenuProperty>

<!-- onClose -->
<MenuProperty name="onClose" usage="<handler>">
<PropertyParameterList>
    <PropertyParameter name="handler" type="EventHandler" description="Handler to be executed upon closing." />
</PropertyParameterList>

Specifies an event handler that is executed upon the menu being closed.

<MenuPropertyExample>

```
{
    menuDef
    {
        onClose
        {
            exec "set cl_paused 0";
            close otherMenu;
        }
    }
}
```

</MenuPropertyExample>
</MenuProperty>

<!-- onRequestClose -->
<MenuProperty name="onRequestClose" usage="<handler>">
<PropertyParameterList>
    <PropertyParameter name="handler" type="EventHandler" description="Handler to be executed on close being requested." />
</PropertyParameterList>

Specifies an event handler that is executed when the menu is requested to close but before closing.
This can be used to add a closing animation or close other menus for example.

<MenuPropertyExample>

```
{
    menuDef
    {
        onRequestClose
        {
            lerp x from 0 to 640 over "0.15";
            lerp alpha from 1 to 0 over "0.15";
        }
    }
}
```

</MenuPropertyExample>
</MenuProperty>

<!-- onESC -->
<MenuProperty name="onESC" usage="<handler>">
<PropertyParameterList>
    <PropertyParameter name="handler" type="EventHandler" description="Handler to be executed on escape being pressed." />
</PropertyParameterList>

Specifies an event handler that is executed when the escape key is pressed.
Usually useful to closing the menu or opening a popup.

<MenuPropertyExample>

```
{
    menuDef
    {
        onESC
        {
            close self;
        }
    }
}
```

</MenuPropertyExample>
</MenuProperty>

<!-- border -->
<MenuProperty name="border" usage="<handler>">
<PropertyParameterList>
    <PropertyParameter name="value" type="Int" />
</PropertyParameterList>

Specifies which kind of borders a menu should have.

<MenuPropertyExample value="border 1" />
</MenuProperty>

<!-- borderSize -->
<MenuProperty name="borderSize" usage="<handler>">
<PropertyParameterList>
    <PropertyParameter name="value" type="Float" />
</PropertyParameterList>

Specifies how wide the border of the menu should be.

<MenuPropertyExample value="borderSize 2.5" />
</MenuProperty>

<!-- backColor -->
<MenuProperty name="backColor" usage="<r> <g> <b> <a>">
<PropertyParameterList>
    <PropertyParameter name="r" type="Float" description="The red part of the color." />
    <PropertyParameter name="g" type="Float" description="The green part of the color." />
    <PropertyParameter name="b" type="Float" description="The blue part of the color." />
    <PropertyParameter name="a" type="Float" description="The alpha part of the color." />
</PropertyParameterList>

Specifies the background color of the menu.
For the color to be visible it must have a style set that allows the color to be visible.

<MenuPropertyExample value="backColor 0.5 0.5 0.5 1" />
</MenuProperty>

<!-- foreColor -->
<MenuProperty name="foreColor" usage="<r> <g> <b> <a>">
<PropertyParameterList>
    <PropertyParameter name="r" type="Float" description="The red part of the color." />
    <PropertyParameter name="g" type="Float" description="The green part of the color." />
    <PropertyParameter name="b" type="Float" description="The blue part of the color." />
    <PropertyParameter name="a" type="Float" description="The alpha part of the color." />
</PropertyParameterList>

Specifies the text color of the menu.

<MenuPropertyExample value="foreColor 0.5 0.5 0.5 1" />
</MenuProperty>

<!-- borderColor -->
<MenuProperty name="borderColor" usage="<r> <g> <b> <a>">
<PropertyParameterList>
    <PropertyParameter name="r" type="Float" description="The red part of the color." />
    <PropertyParameter name="g" type="Float" description="The green part of the color." />
    <PropertyParameter name="b" type="Float" description="The blue part of the color." />
    <PropertyParameter name="a" type="Float" description="The alpha part of the color." />
</PropertyParameterList>

Specifies the border color of the menu.

<MenuPropertyExample value="borderColor 0.5 0.5 0.5 1" />
</MenuProperty>

<!-- focusColor -->
<MenuProperty name="focusColor" usage="<r> <g> <b> <a>">
<PropertyParameterList>
    <PropertyParameter name="r" type="Float" description="The red part of the color." />
    <PropertyParameter name="g" type="Float" description="The green part of the color." />
    <PropertyParameter name="b" type="Float" description="The blue part of the color." />
    <PropertyParameter name="a" type="Float" description="The alpha part of the color." />
</PropertyParameterList>

Specifies the color of the menu when it is focused.

<MenuPropertyExample value="focusColor 0.5 0.5 0.5 1" />
</MenuProperty>

<!-- outlineColor -->
<MenuProperty name="outlineColor" usage="<r> <g> <b> <a>">
<PropertyParameterList>
    <PropertyParameter name="r" type="Float" description="The red part of the color." />
    <PropertyParameter name="g" type="Float" description="The green part of the color." />
    <PropertyParameter name="b" type="Float" description="The blue part of the color." />
    <PropertyParameter name="a" type="Float" description="The alpha part of the color." />
</PropertyParameterList>

Specifies the color of the outline of the menu.

<MenuPropertyExample value="outlineColor 0.5 0.5 0.5 1" />
</MenuProperty>

<!-- background -->
<MenuProperty name="background" usage="<material>">
<PropertyParameterList>
    <PropertyParameter name="material" type="String" description="The name of the background material." />
</PropertyParameterList>

Sets the background for menu.
It is only visible when the menu has a style set that allows the background to be a material.

<MenuPropertyExample value="background 'mw2_main_background'" />
</MenuProperty>

<!-- ownerDraw -->
<MenuProperty name="ownerDraw" usage="<ownerDrawType>">
<PropertyParameterList>
    <PropertyParameter name="ownerDrawType" type="Int" description="The name of the background material." />
</PropertyParameterList>

Instructs the game to draw at the specified location using draw logic implemented in the game code.
This is used to draw more complicated things that a menu could not handle.

The `ownerDrawType` defines what is drawn.
Any implementation has its own type number.

<MenuPropertyExample value="ownerDraw 156" />
</MenuProperty>

<!-- ownerDrawFlag -->
<MenuProperty name="ownerDrawFlag" usage="<flag>">
<PropertyParameterList>
    <PropertyParameter name="flag" type="Int" description="The flag value to set" />
</PropertyParameterList>

Sets a flag to be interpreted by the specified ownerdraw.

<MenuPropertyExample value="ownerDrawFlag 8" />
</MenuProperty>

<!-- outOfBoundsClick -->
<MenuProperty name="outOfBoundsClick">

Specifies an event handler that is executed when the escape key is pressed.
Usually useful to closing the menu or opening a popup.

<MenuPropertyExample value="outOfBoundsClick" />
</MenuProperty>

<!-- soundLoop -->
<MenuProperty name="soundLoop" usage="<soundLoopName>">
<PropertyParameterList>
    <PropertyParameter name="soundLoop" type="String" description="The name of the sound alias to play in a loop." />
</PropertyParameterList>

Sets the sound that should be played in a loop while this menu is open.

<MenuPropertyExample value="soundLoop 'music_mainmenu_mp'" />
</MenuProperty>

<!-- exp rect x -->
<MenuProperty name="exp rect x" usage="<exp>">
<PropertyParameterList>
    <PropertyParameter name="exp" type="Expression(Float)" description="The expression that evaluates to the x position." />
</PropertyParameterList>

Sets an expression for the x position of the menu that is evaluated at runtime.

<MenuPropertyExample>

```
{
    menuDef
    {
        exp rect x 0 - ((float(milliseconds() % 60000) / 60000) * (854));
    }
}
```

</MenuPropertyExample>
</MenuProperty>

<!-- exp rect y -->
<MenuProperty name="exp rect y" usage="<exp>">
<PropertyParameterList>
    <PropertyParameter name="exp" type="Expression(Float)" description="The expression that evaluates to the y position." />
</PropertyParameterList>

Sets an expression for the y position of the menu that is evaluated at runtime.

<MenuPropertyExample>

```
{
    menuDef
    {
        exp rect y localvarint("ui_AttachmentY") + 18;
    }
}
```

</MenuPropertyExample>
</MenuProperty>

<!-- exp rect w -->
<MenuProperty name="exp rect w" usage="<exp>">
<PropertyParameterList>
    <PropertyParameter name="exp" type="Expression(Float)" description="The expression that evaluates to the width." />
</PropertyParameterList>

Sets an expression for the width of the menu that is evaluated at runtime.

<MenuPropertyExample>

```
{
    menuDef
    {
        exp rect w 80 + (sin(milliseconds() / 90)) * 4;
    }
}
```

</MenuPropertyExample>
</MenuProperty>

<!-- exp rect h -->
<MenuProperty name="exp rect h" usage="<exp>">
<PropertyParameterList>
    <PropertyParameter name="exp" type="Expression(Float)" description="The expression that evaluates to the height." />
</PropertyParameterList>

Sets an expression for the height of the menu that is evaluated at runtime.

<MenuPropertyExample>

```
{
    menuDef
    {
        exp rect h 40 + (sin(milliseconds() / 90)) * 2;
    }
}
```

</MenuPropertyExample>
</MenuProperty>

<!-- exp openSound -->
<MenuProperty name="exp openSound" usage="<exp>">
<PropertyParameterList>
    <PropertyParameter name="exp" type="Expression(String)" description="An expression that evaluates to the name of a soundalias." />
</PropertyParameterList>

Sets an expression for the name of the soundalias that is played upon opening the menu.

Since literal values are also a valid expressions, this can also be set to a string.

<MenuPropertyExample>

```
{
    menuDef
    {
        exp openSound "mouse_click";
        exp openSound localvarstring("ui_openSound");
    }
}
```

</MenuPropertyExample>
</MenuProperty>

<!-- exp closeSound -->
<MenuProperty name="exp closeSound" usage="<exp>">
<PropertyParameterList>
    <PropertyParameter name="exp" type="Expression(String)" description="An expression that evaluates to the name of a soundalias." />
</PropertyParameterList>

Sets an expression for the name of the soundalias that is played upon closing the menu.

Since literal values are also a valid expressions, this can also be set to a string.

<MenuPropertyExample>

```
{
    menuDef
    {
        exp closeSound "mouse_click";
        exp closeSound localvarstring("ui_closeSound");
    }
}
```

</MenuPropertyExample>
</MenuProperty>

<!-- popup -->
<MenuProperty name="popup">

Marks a menu as popup.

<MenuPropertyExample value="popup" />
</MenuProperty>

<!-- fadeClamp -->
<MenuProperty name="fadeClamp" usage="<value>">
<PropertyParameterList>
    <PropertyParameter name="value" type="Float" />
</PropertyParameterList>

Unknown.

<MenuPropertyExample value="fadeClamp 1.0" />
</MenuProperty>

<!-- fadeCycle -->
<MenuProperty name="fadeCycle" usage="<value>">
<PropertyParameterList>
    <PropertyParameter name="value" type="Int" />
</PropertyParameterList>

Unknown.

<MenuPropertyExample value="fadeCycle 1" />
</MenuProperty>

<!-- fadeAmount -->
<MenuProperty name="fadeAmount" usage="<value>">
<PropertyParameterList>
    <PropertyParameter name="value" type="Float" />
</PropertyParameterList>

Unknown.

<MenuPropertyExample value="fadeAmount 0.1" />
</MenuProperty>

<!-- fadeInAmount -->
<MenuProperty name="fadeInAmount" usage="<value>">
<PropertyParameterList>
    <PropertyParameter name="value" type="Float" />
</PropertyParameterList>

Unknown.

<MenuPropertyExample value="fadeInAmount 0.002" />
</MenuProperty>

<!-- execKey -->
<MenuProperty name="execKey" usage="<key> <handler>">
<PropertyParameterList>
    <PropertyParameter name="key" type="String" description="A string containing the handled key as the single character." />
    <PropertyParameter name="handler" type="EventHandler" description="Handler to be executed when the specified key is pressed." />
</PropertyParameterList>

Sets a handler to be executed when a given key is pressed.

The value of the key is specified as a string that has to contain exactly one character.
The key corresponding to the symbol in the string is then handled.

If a key is supposed to be handled that has no symbol like for example the escape key or gamepad buttons, you will have to use the `execKeyInt` instead.

<MenuPropertyExample>

```
{
    menuDef
    {
        execKey "2"
        {
            play "mouse_click";
            exec "cmd callvote map_restart";
            close callvote;
        }
    }
}
```

</MenuPropertyExample>
</MenuProperty>

<!-- execKeyInt -->
<MenuProperty name="execKeyInt" usage="<keyCode> <handler>">
<PropertyParameterList>
    <PropertyParameter name="keyCode" type="Int" description="The key code of the key to be handled." />
    <PropertyParameter name="handler" type="EventHandler" description="Handler to be executed when the specified key is pressed." />
</PropertyParameterList>

Sets a handler to be executed when a given key is pressed.

The value of the key is specified as its numeric code.

<MenuPropertyExample>

```
{
    menuDef
    {
        execKeyInt 23
        {
            setfocus sidenav_button_31;
        }
    }
}
```

</MenuPropertyExample>
</MenuProperty>

<!-- blurWorld -->
<MenuProperty name="blurWorld" usage="<blurAmount>">
<PropertyParameterList>
    <PropertyParameter name="blurAmount" type="Float" />
</PropertyParameterList>

Makes the game blur the rendered world behind the menu.
Only noticable if the menu is not fullscreen or has transparency.

The amount of blur can be set using the parameter.

<MenuPropertyExample value="blurWorld 7.0" />
</MenuProperty>

<!-- legacySplitScreenScale -->
<MenuProperty name="legacySplitScreenScale">

Unknown.

<MenuPropertyExample value="legacySplitScreenScale" />
</MenuProperty>

<!-- hiddenDuringScope -->
<MenuProperty name="hiddenDuringScope">

Hides the menu while aiming down sight.

<MenuPropertyExample value="hiddenDuringScope" />
</MenuProperty>

<!-- hiddenDuringFlashbang -->
<MenuProperty name="hiddenDuringFlashbang">

Hides the menu while suffering under the effect of a flashbang.

<MenuPropertyExample value="hiddenDuringFlashbang" />
</MenuProperty>

<!-- hiddenDuringUI -->
<MenuProperty name="hiddenDuringUI">

Unknown.

<MenuPropertyExample value="hiddenDuringUI" />
</MenuProperty>

<!-- allowedBinding -->
<MenuProperty name="allowedBinding" usage="<blurAmount>">
<PropertyParameterList>
    <PropertyParameter name="binding" type="String" />
</PropertyParameterList>

Unknown.

<MenuPropertyExample value="allowedBinding '+talk'" />
</MenuProperty>

<!-- exp textOnlyFocus -->
<MenuProperty name="textOnlyFocus">

Unknown.

<MenuPropertyExample value="textOnlyFocus" />
</MenuProperty>

<!-- ################### -->
<!-- IW5 ONLY PROPERTIES -->
<!-- ################### -->

<!-- exp soundLoop -->
<MenuProperty name="exp soundLoop" usage="<exp>" :game="iw5">
<PropertyParameterList>
    <PropertyParameter name="exp" type="Expression(String)" description="An expression that evaluates to the name of a soundalias." />
</PropertyParameterList>

Sets an expression for the name of the soundalias that is played in a loop while this menu is open.

Since literal values are also a valid expressions, this can also be set to a string.

<MenuPropertyExample>

```
{
    menuDef
    {
        exp soundLoop "music_mainmenu_mp";
        exp soundLoop localvarstring("ui_soundLoop");
    }
}
```

</MenuPropertyExample>
</MenuProperty>

<!-- onFocusDueToClose -->
<MenuProperty name="onFocusDueToClose" usage="<handler>" :game="iw5">
<PropertyParameterList>
    <PropertyParameter name="handler" type="EventHandler" description="Handler to be executed upon receiving focus due to another menu being closed." />
</PropertyParameterList>

Specifies an event handler that is executed upon the menu getting focus due to another menu being closed.

<MenuPropertyExample>

```
{
    menuDef
    {
        onFocusDueToClose
        {
            setLocalVarString "ui_hint_text" "";
            focusfirst;
        }
    }
}
```

</MenuPropertyExample>
</MenuProperty>
