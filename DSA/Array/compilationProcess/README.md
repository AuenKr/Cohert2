# Phases of Compilation

> The compilation process is typically divided into several phases, although the exact steps and their order can vary slightly depending on the compiler and language.

## A common model includes these phases

### 1. Preprocessing

> Input: Source code file (.c, .cpp, etc.).

> Tasks:

```text
1. Comment Removal: Removes comments from the code.
2. Macro Expansion: Expands macros (predefined code snippets) defined using #define.
3. File Inclusion: Handles #include directives by inserting the contents of header files into the source code.
4. Conditional Compilation: Processes directives like #ifdef, #ifndef, #else, #endif to selectively include or exclude code blocks based on defined conditions.
5. Output: Preprocessed source code file (often a temporary file).
6. Tool: Preprocessor (e.g., cpp for C/C++).
```

### 2. Compilation (Parsing, Semantic Analysis, Intermediate Code Generation)

> Input: Preprocessed source code.

> Tasks:

```text
1. Lexical Analysis (Scanning): Breaks the preprocessed code into tokens (keywords, identifiers, operators, literals).
2. Syntax Analysis (Parsing): Checks if the token stream conforms to the grammar rules of the programming language. Creates a parse tree or Abstract Syntax Tree (AST) representing the code's structure.
3. Semantic Analysis: Checks for semantic errors (meaning-related errors) like type mismatches, undeclared variables, incorrect function calls. Performs type checking, scope resolution, and other semantic validations.
4. Intermediate Code Generation: Translates the AST into an intermediate representation (IR). IR is a language-independent form that is easier to optimize and translate into machine code. Common IRs include three-address code or bytecode.
5. Output: Intermediate code (IR).
6. Tool: Compiler front-end (language-specific part of the compiler).
```

### 3. Optimization

> Input: Intermediate code (IR).

> Tasks: Improves the intermediate code to make the final machine code more efficient in terms of:

```text
1. Speed: Reduce execution time.
2. Size: Reduce code size.
3. Power Consumption: (Sometimes)
4. Types of Optimizations:
    a. Local Optimization: Optimizations within a basic block of code.
    b. Global Optimization: Optimizations across functions or procedures.
    c. Loop Optimization: Optimizations specifically for loops.
    d. Register Allocation: Efficiently assigning variables to CPU registers.
    e. Dead Code Elimination: Removing code that has no effect on the program's output.
5. Output: Optimized intermediate code.
6. Tool: Optimizer (part of the compiler back-end).
```

### 4. Code Generation

> Input: Optimized intermediate code.

> Tasks: Translates the optimized IR into target machine code (assembly code or directly machine instructions) for a specific processor architecture (e.g., x86, ARM).

```text
1. Instruction Selection: Choosing the appropriate machine instructions for each IR instruction.
2. Register Allocation: Assigning registers to variables (if not already done in optimization).
3. Instruction Scheduling: Ordering instructions to improve performance (e.g., reduce pipeline stalls).
4. Output: Assembly code (or machine code).
5. Tool: Compiler back-end (target architecture-specific part of the compiler).
```

### 5. Assembly (Assembler): (If assembly code is generated in the previous step)

> Input: Assembly code file (.s, .asm).

> Tasks: Translates assembly code into relocatable machine code (object code). Assembly code is a human-readable representation of machine instructions. The assembler converts these mnemonics into binary machine code.

```text
1. Output: Object code file (.o, .obj).
2. Tool: Assembler (e.g., as for GNU Assembler).
```

### 6. Linking (Linker)

> Input: One or more object code files (.o, .obj), and libraries.

> Tasks:

```text
Symbol Resolution: Resolves symbolic references between object files. For example, if one object file calls a function defined in another, the linker connects these references.
Relocation: Adjusts addresses in the object code to their final memory locations in the executable.
Library Linking: Combines object code with necessary library code (static or dynamic libraries) to create a complete executable.
Output: Executable file (e.g., .exe on Windows, no extension on Linux/macOS) or a dynamic library (.so, .dll).
Tool: Linker (e.g., ld for GNU Linker).
```

## Practical Implementation
