# Preprocessor features

The **Preprocessor** is a component that processes each line before it is given to the actual parser.
OAT has support for a collection of preprocessing features that may or may not be available depending on the parser.

:::info
For information about which preprocessor feature is available for which parser,
refer to the appropriate documentation for the parser.
:::

Below is a reference to the available preprocessor features.
They are implemented in a way that makes them very similar to the features of the C preprocessor.
So if you are familiar with C or C++ you will probably be familiar with how they work.

## Comments {#comments}

The comments preprocessor feature removes comments before giving the text to the parser.
Comments can be specified as block comments or line comments:

```c
// This is a line comment

/* This is a block comment */

/*
Block comments
can span
multiple lines
*/
```

## `#include` - File inclusions {#include}

With the `#include` directive, you can include a file from one another.
This acts like the entirety of the included file's content was at the place of the directive,
basically "copying" its content at this location.

Unlike the C directive, you can only use quotation marks to specify the file to include:
`#include "path/to/file"`

Example:
::: code-group

```c [source.cpp]
int someField = 1;

#include "fileToBeIncluded.h"

void test()
{
  otherFunction(someField);
}
```

```c [fileToBeIncluded.h]
inline static void otherFunction(int value)
{
  printf("Value: %d\n", value);
}
```

```c [Precompiler Output]
int someField = 1;

inline static void otherFunction(int value)
{
  printf("Value: %d\n", value);
}

void test()
{
  otherFunction(someField);
}
```

:::

## Preprocessor definitions and macros {#macros}

Preprocessor allow to define macros that replace text within the source.
Additionally it is possible to evaluate whether a macro is defined or do some simplistic expressions to determine whether a region of source should be parsed or not.

The following sections go over the different directives related to macros and explain how they work.

### `#define`

The `#define` directive is used to define a new macro.
The macro must have a name and may have a value.
It is also possible to define parameters.

```c
#define nameOfMacro
#define nameOfSecondMacro anything that follows is the value of the macro
#define nameOfThirdMacro macro definitions can span \
  multiple lines when a line ends with a backslash \
  even multiple times in a row
#define nameOfFourthMacro(firstParamOfMacro, secondParamOfMacro) value that \
  has the values inserted here: firstParamOfMacro - secondParamOfMacro. \
  Inserations can be done multiple times like firstParamOfMacro <- here.
```

Whenever the name of a macro is encountered in the source, it is replaced with its value.
In case the macro has parameters, these can be specified comma-separeted within round brackets `(...)` after the name
and will be appropriatly substituted in the value.

Example:
::: code-group

```c [Source]
#define Hello Goodbye
#define Greet(name, time) Hi name, i hope you have a good time

Hello World
Greet(Bob, afternoon)
```

```c [Precompiler Output]



Goodbye World
Hi Bob, i hope you have a good afternoon
```

:::

### `#undef`

The `#undef` directive can be used to undefine a macro again after it has been defined previously.
It must be followed with a macro name.

Example:
::: code-group

```c [Source]
#define Hello Goodbye
#define World Moon
#undef Hello

Hello World
```

```c [Precompiler Output]




Hello Moon
```

:::

### `#ifdef`, `#ifndef`

The `#ifdef` and `#ifndef` directives make a following block of source only be parsed when a given macro is defined (`#ifdef`) or not defined (`#ifndef`).
Any source that follows a line with such a directive is only parsed when the condition is met.
The block affected by this condition spans until an `#endif` directive is encountered.

Alternatively to `#endif` it is possible to specify an `#else` directive which will make the block that follows it be parsed only upon the inverse condition to the previous `#ifdef` or `#ifndef` directive.
This `#else` block must then be closed with an `#endif` directive however.

Any `#define`, `#undef` that is placed in a block that is not parsed will also be ignored.

Example:
::: code-group

```c [Source]
#define GREET_PEOPLE

#ifdef GREET_PEOPLE
#define Speak(name) Hello name! Welcome.
I will now greet people
#else
#define Speak(name) Goodbye name, was nice seeing you!
I will now say goodbye to people
#endif

Speak(Alice)
Speak(Bob)

#ifndef RUDE_GUESTS
I am glad you are here.
#endif
Banana
```

```c [Precompiler Output]




I will now greet people





Hello Alice! Welcome.
Hello Bob! Welcome.


I am glad you are here.

Banana
```

:::

### `#if`

The `#if` directive works similar to the `#ifdef` directive.
It also makes a following source block only be parsed when a given condition is met.
However it is not limited to checking whether a macro is defined or not.
Instead it is capable of evaluating simple expressions.

Anything in the same line after the `#if` directive is interpreted as an expression.
If the expression evaluates to a numeric value other than `0` it is considered to be `true` and the following block is parsed.

:::tip
Operations like AND (`&&`), OR (`||`), EQUALS (`==`), ... which would evaluate to `true` in other contexts do result in the numeric value `1` here.
:::

Additionally you can also check whether a macro is defined with `defined(macroName)`.

Also alternatively to `#else` (which is also supported here), it is possible to use the `#elif` directive to combine `#else` with another `#if`.
This makes it so the expression following `#elif` is only considered when the previous block was not parsed.
In this case the now following block is only parsed when the specified condition is met.

Example:
::: code-group

```c [Source]
#define ALICE_IS_PRESENT 1
#define BOB_IS_PRESENT 0

#if ALICE_IS_PRESENT && BOB_IS_PRESENT
Hello Alice and Bob! Glad to see you two.
#elif ALICE_IS_PRESENT
Hi Alice, nice to see you. I see Bob stayed home.
#elif BOB_IS_PRESENT
Hi Bob, thought you would bring Alice.
#else
Why is nobody here ._.
#endif

#if ALICE_IS_PRESENT || BOB_IS_PRESENT
Now lets eat.
#endif

#if !defined(CAKE)
The cake was a lie.
#else
Cake, yay.
#endif
Banana
```

```c [Precompiler Output]






Hi Alice, nice to see you. I see Bob stayed home.







Now lets eat.



The cake was a lie.



Banana
```

:::
