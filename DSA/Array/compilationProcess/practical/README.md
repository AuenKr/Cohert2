## Script to create diff output during compilation in Linux

```bash
# 1. Preprocessing (hello.cpp -> hello.i)
g++ -E hello.cpp -o 0_preProcessCode.i

# 2. Compilation to Assembly (hello.i -> hello.s)
g++ -S hello.i -o 1_assemblyCode.s

# 3. Assembly to Object File (hello.s -> hello.o) Also in Binary File
g++ -c hello.s -o 2_objectCode.o

# 4. Linking (hello.o -> hello)
g++ hello.o -o 3_finalBinaryCode.out

# To run the executable
./3_finalBinaryCode.out

```
