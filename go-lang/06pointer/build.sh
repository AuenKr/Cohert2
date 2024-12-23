mkdir -p build
GOOS=windows go build -o build/window-build
GOOS=linux go build -o build/linux-build
GOOS=darwin go build -o build/macOs-build