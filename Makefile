EMFLAGS := -s MODULARIZE=1 -s EXPORT_ES6=1
EMFLAGS += -s WASM=0 -s ENVIRONMENT=web
EMFLAGS += -s FORCE_FILESYSTEM=1
EMFLAGS += -s 'EXPORTED_RUNTIME_METHODS=FS,IDBFS'
EMFLAGS += -lidbfs.js
EMFLAGS += -O2
EMFLAGS += --emit-tsd=idbfs.d.ts

.PHONY: all clean

all: idbfs.js idbfs.wasm

clean:
	rm -f idbfs.js idbfs.d.ts idbfs.wasm

idbfs.js: empty.c Makefile
	emcc $(EMFLAGS) -o $@ $<

idbfs.wasm:
	touch $@
