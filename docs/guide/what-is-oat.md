# What is OAT?

OpenAssetTools (OAT) is a work in progress project aiming to create a modding tools suite for older Call Of Duty titles.
It is not a reimplementation of existing modding tools or related to them but aims to be as compatible as possible in terms of formats and add support for previously unsupported titles.

In its current form it is still incaomplete and only offers a small subset of modding features.
It currently offers support for the PC versions of:

- [IW3 (COD4: Modern Warfare - 2007)](https://en.wikipedia.org/wiki/Call_of_Duty_4:_Modern_Warfare)
- [IW4 (Modern Warfare 2 - 2009)](https://en.wikipedia.org/wiki/Call_of_Duty:_Modern_Warfare_2)
- [IW5 (Modern Warfare 3 - 2011)](https://en.wikipedia.org/wiki/Call_of_Duty:_Modern_Warfare_3)
- [T5 (Black Ops - 2010)](https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops)
- [T6 (Black Ops II - 2012)](https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops_II) 

with very varying progress on the different games.

## Features

While still incomplete these are the features that are currently available:

### Tools

The **Unlinker** tool allows loading any fastfile (.ff) of supported games and works standalone.
While being able to load any asset it can currently only dump a subset of these assets to disk, depending on the game.
The formats of the dumped assets are either as close as possible to the originally used formats for these games or a commonly used format.

The **Linker** tool allows building custom fastfiles (.ff) for the supported games.
It can also load existing zones and reuse their assets from in-memory.
Only a subset of assets can be read from disk however, depending on the game.

Additionally, there are a couple of libraries and tools.
A full list of the subcomponents can be found [here](./docs/OatComponents.md). 