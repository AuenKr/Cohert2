# gRPC

## Topic Cover

1. Create protobuff

2. Create gRPC server

3. Create gRPC client

```bash
protoc --go_out=. --go_opt=paths=source_relative proto/todo.proto
protoc --go-grpc_out=. --go-grpc_opt=paths=source_relative proto/todo.proto
```

4. Create gRPC gateway -> http proxy

```bash
protoc -I . --grpc-gateway_out ./gen/go \
            --grpc-gateway_opt paths=source_relative \
            --grpc-gateway_opt generate_unbound_methods=true \
            proto/todo.proto
```

5. Generate Swagger File

```bash
protoc -I . --openapiv2_out ./gen/openapiv2 proto/todo.proto
```
