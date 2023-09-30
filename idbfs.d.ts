export interface IDBFSModule extends EmscriptenModule {
    FS: typeof FS;
    IDBFS: typeof IDBFS;
}
declare const factory: EmscriptenModuleFactory<IDBFSModule>;
export default factory;
