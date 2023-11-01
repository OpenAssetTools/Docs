# Menu Reference

Menu files define how the menus ingame look like and how they behave.
They are written inside a custom definition language that allows the creation of menus as an asset without modifying the game's source code.

The origins of this menu system come from "Quake III: Arena".
You can find a writeup about its structure and features [here](https://icculus.org/~phaethon/q3tamenu/q3tamenu-single.html).

The system used in CoD game is based on this original system but was continually modified and extended with any title.
Therefore depending on the CoD title the features of menus file vary.

## Menu Lists {#menu-lists}

The games bundle menus in what is called **Menu Lists**.
It's nothing other than just a collection of menus.

Menu lists usually have the extension `.txt` and are meant for being able to load a certain collection of menus at the same time.
Quake III also did this by for example bundling [ingame menus](https://github.com/id-Software/Quake-III-Arena/blob/master/ui/ingame.txt).
Similarly IW4, for example also uses `ui/ingame.txt` but also menu lists like `ui/hud.txt` for bundling menus.

Other than that, menu lists are do the same thing as `.menu` files.
In fact you sometimes see the CoD games load `.menu` files as menu lists as well.
Convention however is that menu lists only load `.menu` files with [`loadMenu`](/asset/menu/menu-elements#loading-menus) however.

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

## Menu files {#menu-files}

Menu files have the extension `.menu` and hold data for one or multiple menus.
They can be loaded from any other menu list or menu file with [`loadMenu`](/asset/menu/menu-elements#loading-menus).

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
