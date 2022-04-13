class GenerationKey {
    constructor() {
        let crypto;
        try {
            this.crypto = require('crypto');
        } catch (err) {
            console.log('crypto support is disabled!');
        }
    }
    hmac(message, key) {
        return this.crypto.createHash('sha256').update(message + key).digest('hex').toUpperCase();
    }
    hmacKey() {
        return this.crypto.createHash('sha256').update(Math.random(100) + "").digest('hex').toUpperCase();
    }
}