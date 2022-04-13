class GenerationKey {
    hmac(message, key) {
        return createHash('sha256').update(message + key).digest('hex');
    }
    hmacKey() {
        return createHash('sha256').update(Math.random(100) + "").digest('hex');
    }
}