class GenerationKey {
    hmac(message, key) {
        const utf8 = new TextEncoder().encode(message + key);
        return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray
                .map((bytes) => bytes.toString(16).padStart(2, '0'))
                .join('');
            return hashHex.toLocaleUpperCase();
        });
    }
    hmacKey() {
        const utf8 = new TextEncoder().encode(Math.random(100) + "");
        return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray
                .map((bytes) => bytes.toString(16).padStart(2, '0'))
                .join('');
            return hashHex.toLocaleUpperCase();
        });
    }
}