## 6.0.0 - 2026-06-15
- The version number now tracks the Emscripten version used to build the library
- Rebuilt with Emscripten 6.0.0
- The minimum supported browser versions were raised (Chrome 85, Firefox 79, Safari 14.1)

## 0.5.1 - 2025-05-24
- Added empty `idbfs.wasm` file to avoid errors with JS bundlers (#1)

## 0.5.0 - 2025-04-21
- Rebuilt with Emscripten 4.0.7
- `idbfs.js` is no longer built with `USE_ES6_IMPORT_META=0`, which was removed in Emscripten 4.0.4

## 0.4.0 - 2025-01-20
- Rebuilt with Emscripten 4.0.1

## 0.3.0 - 2024-11-28
- Rebuilt with Emscripten 3.1.72

## 0.2.0 - 2024-04-15
- Generate TypeScript definitions using Emscripten's `--emit-tsd` option
- Removed usage of `import.meta` which was problematic with bundlers

## 0.1.0 - 2023-09-30
- Initial release
