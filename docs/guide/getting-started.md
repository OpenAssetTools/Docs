# Getting started

You need to clone this repository using Git.
Do not download as a zip from Github because it will not be a git repository which is required for installing the submodules.

Building OAT requires Git to be installed on your machine and to be in your PATH.
This project uses Premake to generate project files depending on your platform.

Note: The first time setting up will clone any submodules with git so the first initialization might take a bit.

## Compiling on Windows

When building on Windows you will need to have Visual Studio 2022 installed.
It is also possible to use other compilers, however due to memory layout of structs being important you might
run into crashes or invalid data so no guarantees can be given.

Use `generate.bat` to generate Visual Studio solution files.
This will also clone any submodules with git so the first time running it might take a bit.
When this is done you will have a `build` folder with a `OpenAssetTools.sln` solution file within that you can open with Visual Studio.

Please note that due to having source files and project files in separate folders you need to pay attention that when adding new files in Visual Studio they are being placed in the correct folder.

Now you can just build the solution.
The resulting binaries can be found in `build/bin/<Debug_x86|Release_x86>`.

## Compiling on Linux

When building on Linux you need to have g++ installed.
Since you are most likely on a 64bit machine you will also need multilib for compiling for 32bit.

Use `generate.sh` to generate make files.
When this is done you will have a `build` folder with a `Makefile`.
You now run `make` manually or use `./scripts/make_release.sh` or `./scripts/make_debug.sh` to build.

The resulting binaries can be found in `build/bin/<Debug_x86|Release_x86>`.

## Legal

OAT source code is licensed under [GPLv3](https://github.com/Laupetin/OpenAssetTools/blob/main/LICENSE).

Extracting the contents of game files does not grant you any rights to them.
All rights remain to their respective owners.
