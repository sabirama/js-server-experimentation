async function hasher(str) {
     // Convert the message (string) to an array buffer
     const buffer = new TextEncoder().encode(str);
    
     // Use the built-in SubtleCrypto API to calculate the hash
     const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
     
     // Convert the hash array buffer to a hexadecimal string
     const hashArray = Array.from(new Uint8Array(hashBuffer));
     const fullHash = hashArray.map(byte => byte.toString(16).padStart(1, '0')).join('');
     
     // Truncate the hash to the desired length
     const truncatedHash = fullHash.slice(0, 20);
     
     return truncatedHash;
}
export default hasher;