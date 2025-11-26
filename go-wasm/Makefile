build:
	GOOS=js GOARCH=wasm tinygo build -o main.wasm ./main.go
	cp $(shell tinygo env TINYGOROOT)/targets/wasm_exec.js .
