# idbfs

This library provides access to the Emscripten file system, including
[IDBFS](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs).
It can be used to manipulate the contents of IDBFS stored by other Emscripten
apps.

This is nothing more than an empty Emscripten program compiled with IDBFS
enabled, so you can use the [Emscripten file system
API](https://emscripten.org/docs/api_reference/Filesystem-API.html) on it.

## Example

The following example reads `data.txt` in an IDBFS mounted on `/idbfs`.

```javascript
const idbfsModule = await import('https://unpkg.com/idbfs/idbfs.js');
const idbfs = await idbfsModule.default();

idbfs.FS.mkdir('/idbfs');
idbfs.FS.mount(idbfs.IDBFS, {}, '/idbfs');
idbfs.FS.syncfs(true, (err) => {
    if (err) throw err;
    console.log(idbfs.FS.readFile('/idbfs/data.txt', { encoding: 'utf8' }));
});
```
