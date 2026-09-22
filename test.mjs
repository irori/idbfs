import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

import createIdbfs from './idbfs.js';

test('the generated module exposes a working filesystem and IDBFS', async () => {
  const idbfs = await createIdbfs();

  assert.equal(typeof idbfs.FS.mount, 'function');
  assert.equal(typeof idbfs.IDBFS.syncfs, 'function');

  idbfs.FS.mkdir('/idbfs');
  idbfs.FS.mount(idbfs.IDBFS, {}, '/idbfs');
  idbfs.FS.writeFile('/idbfs/probe.txt', 'ok');

  assert.equal(
    idbfs.FS.readFile('/idbfs/probe.txt', { encoding: 'utf8' }),
    'ok',
  );
});

test('the generated module is a self-contained text file', () => {
  const source = readFileSync(new URL('./idbfs.js', import.meta.url), 'utf8');

  assert.equal(existsSync(new URL('./idbfs.wasm', import.meta.url)), false);
  assert.equal(source.includes('idbfs.wasm'), false);
  assert.equal(source.includes('\0'), false);
});
