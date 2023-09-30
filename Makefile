EMFLAGS := -s MODULARIZE=1 -s EXPORT_ES6=1
EMFLAGS += -s WASM=0 -s ENVIRONMENT=web
EMFLAGS += -s FORCE_FILESYSTEM=1
EMFLAGS += -s 'EXPORTED_RUNTIME_METHODS=FS,IDBFS'
EMFLAGS += -lidbfs.js
EMFLAGS += -O2 --memory-init-file 0

idbfs.js: empty.c Makefile
	emcc $(EMFLAGS) -o $@ $<
