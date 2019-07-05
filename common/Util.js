module.exports = class {
    static isTypeArray(type, values) {
        if (!Array.isArray(values)) {
            return false;
        }

        return values.every(value => value instanceof type);
    }

    static isNotTypeArray(type, values) {
        return this.isTypeArray(type, values);
    }

    static paramChecker(type, instance, message) {
        if (!(instance instanceof type)) {
            throw new Error(message);
        }
    }
}