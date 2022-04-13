class GenerationKey {
    crypto = require('crypto');
    hmac(message, key) {
        return crypto.createHash('sha256').update(message + key).digest('hex').toUpperCase();
    }
    hmacKey() {
        return crypto.createHash('sha256').update(Math.random(100) + "").digest('hex').toUpperCase();
    }
}