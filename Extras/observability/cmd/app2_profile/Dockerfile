FROM golang:1.24.5-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o app2_profile ./cmd/app2_profile/main.go

FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/app2_profile .
CMD ["./app2_profile"]
