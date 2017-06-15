export default class MultikeyMap {
    constructor() {
        this.map = {};
    }
    
    isEmpty() {
        return this.map.length === 0;
    }
    
    put(keys, value) {
        for(var i = 0; i < keys.length; i++) {
            var key = keys[i];
            
            this.map[key] = value;
        }
    }
    
    get(key) {
        return this.map[key];
    }
    
    remove(key) {
        delete this.map[key];
    }
}