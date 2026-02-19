// Polyfill to fix broken localStorage from IDX/Firebase emulator --localstorage-file flag
if (typeof globalThis !== 'undefined' && typeof globalThis.localStorage !== 'undefined') {
    // Check if localStorage.getItem is not a function (broken polyfill)
    if (typeof globalThis.localStorage.getItem !== 'function') {
        // Replace with proper localStorage polyfill
        const storage = new Map();
        globalThis.localStorage = {
            getItem: (key) => storage.get(key) ?? null,
            setItem: (key, value) => storage.set(key, String(value)),
            removeItem: (key) => storage.delete(key),
            clear: () => storage.clear(),
            get length() {
                return storage.size;
            },
            key: (index) => {
                return Array.from(storage.keys())[index] ?? null;
            },
        };
    }
}
