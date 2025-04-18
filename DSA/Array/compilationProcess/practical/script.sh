# 1. Preprocessing (hello.cpp -> preProcessCode.i)
g++ -E hello.cpp -o 0_preProcessCode.i

# 2. Compilation to Assembly (preProcessCode.i)-> assemblyCode.s)
g++ -S 0_preProcessCode.i -o 1_assemblyCode.s

# 3. Assembly to Object File (assemblyCode.s)-> objectCode.o) Also in Binary File
g++ -c 1_assemblyCode.s -o 2_objectCode.o

# 4. Linking (objectCode.o)-> finalBinaryCode.out)
g++ 2_objectCode.o -o 3_finalBinaryCode.out

# To run the executable
./3_finalBinaryCode.out
