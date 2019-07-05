module.exports = class {
    static isTypeArray(type, values) {
        if (!Array.isArray(values)) {
            return false;
        }

        return values.every(value => value instanceof type);
    }

    static isNotTypeArray(type, values) {
        return this.isTypeArray(type, value);
    }
}