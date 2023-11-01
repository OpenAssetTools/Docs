# Menu Reference

Menu files define how the menus ingame look like and how they behave.
They are written inside a custom definition language that allows the creation of menus as an asset without modifying the game's source code.

The origins of this menu system come from "Quake III: Arena".
You can find a writeup about its structure and features [here](https://icculus.org/~phaethon/q3tamenu/q3tamenu-single.html).

The system used in CoD game is based on this original system but was continually modified and extended with any title.
Therefore depending on the CoD title the features of menus file vary.

## File types

### Menu Lists {#menu-lists}

The games bundle menus in what is called **Menu Lists**.
It's nothing other than just a collection of menus.

Menu lists usually have the extension `.txt` and are meant for being able to load a certain collection of menus at the same time.
Quake III also did this by for example bundling [ingame menus](https://github.com/id-Software/Quake-III-Arena/blob/master/ui/ingame.txt).
Similarly IW4, for example also uses `ui/ingame.txt` but also menu lists like `ui/hud.txt` for bundling menus.

Other than that, menu lists are do the same thing as `.menu` files.
In fact you sometimes see the CoD games load `.menu` files as menu lists as well.
Convention however is that menu lists only load `.menu` files with [`loadMenu`](#loading-menus) however.

Since ingame menus can only be used when loaded, and the game only loads menu lists, any menu has to be part of a menu list that is somewhen loaded to be able to be used.

Example of a menu list:

```
{
    loadMenu { "ui/error_popmenu.menu" }
    loadMenu { "ui/error_popmenu_submenu.menu" }
    loadMenu { "ui/save_corrupted.menu" }
    loadMenu { "ui/popup_connecting.menu" }
    loadMenu { "ui/popup_acceptinginvite.menu" }
    loadMenu { "ui/popup_gettingdata.menu" }
    loadMenu { "ui/error_popmenu_party.menu" }
    loadMenu { "ui/error_popmenu_lobby.menu" }
    loadMenu { "ui/popup_reconnectingtoparty.menu" }
    loadMenu { "ui/acceptinvite_warning.menu" }
    loadMenu { "ui/pregame_loaderror.menu" }
    loadMenu { "ui/pregame_loaderror_mp.menu" }
    loadMenu { "ui/menu_resetstats_warning.menu" }
    loadMenu { "ui/briefing.menu" }
    loadMenu { "ui/victoryscreen.menu" }
    loadMenu { "ui/victory_notice_popmenu.menu" }
    loadMenu { "ui/connect.menu" }
    loadMenu { "ui/expression_test.menu" }
}
```

### Menu files {#menu-files}

Menu files have the extension `.menu` and hold data for one or multiple menus.
They can be loaded from any other menu list or menu file with [`loadMenu`](#loading-menus).

Example of a menu file:

```
{
    menuDef
    {
        name                        "connect"
        rect                        0 0 640 480 0 0
        style                       1
        focuscolor                  1 1 1 1
        onOpen
        {
            exec "selectStringTableEntryInDvar mp/didyouknow.csv 0 didyouknow";
        }
        itemDef
        {
            rect                        -426.667 -240 853.333 480 2 2
            style                       3
            decoration
            visible                     1
            textscale                   0.55
            background                  "$levelbriefing"
        }
        itemDef
        {
            rect                        0 0 0 26 3 1
            decoration
            visible                     1
            textalign                   6
            textalignx                  -8
            textscale                   0.5833
            textstyle                   3
            textfont                    9
            forecolor                   1 0.8 0.4 1
            exp text                    gametypename();
        }
    }
}
```

## Menu file elements

### The root element

Every menu file has a root element consisting of opening and closing curly parenthesis `{}`.
Any other element must be nested within this root element.

OAT supports having multiple root elements within the same file.
This is meant to improve comfort when using features of the [preprocessor](/asset/menu/preprocessor).

Example:

```
{
    // Any other element is nested within this root element
}
```

### `loadMenu` - Loading menu files {#loading-menus}

_Can only be used within the root element._

Using the `loadMenu` element it is possible to load other menu files.
When used within the context of a menu list, all menus loaded from within the referenced file is added as part of the menu list.

Unlike when using the preprocessor feature [`#include`](/asset/menu/preprocessor#include), the referenced menu file is loaded after parsing the current file.

Example:

```
{
    loadMenu { "ui_mp/connect.menu" } // [!code hl]
}
```

### `menuDef` - Menu Definitions {#menu-definitions}

_Can only be used within the root element._

Defining a menu is done with `menuDef`.
Everything enclosed in the following curly braces block is part of the menu.

Every menu **must** define a `name` that is unique.
If it shares its name with another menu, one menu does overwrite the other.

A menu is always a rectangle but does not necessarly have to be fullscreen.
Menus are stacked on top of each other based on the order of opening.

Example:

```txt {2-6}
{
    menuDef
    {
        name    TestMenu
        // ...
    }
}
```

### `itemDef` - Item Definitions {#item-definitions}

_Can only be used within a menuDef element._

Items can be defined with an `itemDef` and make up all the different elements of a menu.
They are always rectangular but they can imitate other shapes when used with a background with transparency.
A menu can have multiple items.

There are different types of items that do different things.
It can for example be a text, an image, a listbox.
See also the [item `type` property](/asset/menu/item-properties).

Example:

```txt {2-6}
{
    menuDef
    {
        name    TestMenu
        // ...

        itemDef
        {
            rect                        0 0 128 64 3 3
            style                       3
            decoration
            visible                     1
            textscale                   0.55
            background                  "logo_iw"
        }
    }
}
```

### `functionDef` - Function Definitions {#function-definitions}

:::warning
This is an OAT extension.
Most other menu parsers will probably not support this feature.
:::

_Can only be used within the root element._

With `functionDef` it is possible to define a function that can be reused within [expressions](/asset/menu/expressions) within the same menu list.

Functions cannot take any arguments and are executed at most once per menu tick.
This saves time evaluating expressions that are reused within many expressions in different places.

It is possible to use a different function within a `functionDef` as long as it was already specified before it.

A `functionDef` has two properties that are both mandatory to specify:

| Name  | Type       |
| ----- | ---------- |
| name  | String     |
| value | Expression |

The value of a function can be used in any expression after its definition like this by calling it: `nameOfTheFunction()`.

Example:

```txt {2-7,12}
{
    // Defining a custom function
    functionDef
    {
        name    isTeamAxis
        value   team("name") == "TEAM_AXIS";
    }

    menuDef
    {
        name    TestMenu
        visible when(isTeamAxis()); // Using the defined function
    }
}
```

Calling a function does not need to be the entirety of an expression:

```txt{6}
{
    // ...
    menuDef
    {
        // ...
        visible when(dvarbool(ui_isTesting) && isTeamAxis() && actionslotusable(4));
    }
}
```

### Properties

- values
- expression
- event handler
