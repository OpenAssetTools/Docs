# Preprocessor

The menu parser makes use of the OAT preprocessor.
The following of its features are available for menu parsing:

- [Comments](/reference/preprocessor-features#comments)
- [File inclusions](/reference/preprocessor-features#include)
- [Preprocessor definitions and macros](/reference/preprocessor-features#macros)

For further information about what the preprocessor is and what features it has, see the [Preprocessor Features documentation](/reference/preprocessor-features).

## Predefined macros

The menu file parser has some macros that are predefined under specific circumstances:

- `PC`: Defined as `1` when parsing menu for PC. Currently always defined since only PC is supported.
- `FEATURE_LEVEL_IW4`: Defined as `1` when parsing menu for IW4, otherwise undefined.
- `FEATURE_LEVEL_IW5`: Defined as `1` when parsing menu for IW5, otherwise undefined.
