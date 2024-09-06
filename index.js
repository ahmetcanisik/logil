const { parcol } = require("parcol");
class Logil {
    #BASE_CONFIG = {
        icon: "▬",
        prefix: "Logil",
        level: 0
    }

    #prefix(message, icon_color, options) {
        if (options && options.noPrefix) {
            return parcol.pit(message);
        }
        return parcol.pit(`~${icon_color} ${this.#BASE_CONFIG.icon}~ ~rs,d ${this.#BASE_CONFIG.prefix}: ~ ${message}`);
    }

    /**
     * 0: il
     * 1: nice
     * 2: info
     * 3: warn
     * 4: error
     */
    #log(message, level, options) {
        switch (level) {
            case 1:
                console.log(this.#prefix(message, "gb", options));
                break;
            case 2:
                console.log(this.#prefix(message, "blb", options));
                break;
            case 3:
                console.log(this.#prefix(message, "yb", options));
                break;
            case 4:
                console.log(this.#prefix(message, "rb", options));
                break;
            default:
                console.log(this.#prefix(message, "cb", options));
                break;
        }
    }

    configure(options = this.#BASE_CONFIG) {
        this.#BASE_CONFIG = {
            ...this.#BASE_CONFIG,
            ...options
        }
    }

    /**
     * @mean logil(log.il), default, normal
     * @level 0
     */
    il(message, options) {
        this.#log(message, 0, options);
    }

    /**
     * @mean success
     * @level 1
     */
    nice(message, options) {
        this.#log(message, 1, options);
    }

    /**
     * @mean information
     * @level 2
     */
    info(message, options) {
        this.#log(message, 2, options);
    }

    /**
     * @mean warning
     * @level 3
     */
    warn(message, options) {
        this.#log(message, 3, options);
    }

    /**
     * @mean error
     * @level 4
     */
    error(message, options) {
        this.#log(message, 4, options);
    }
}

module.exports = {
    log: new Logil(),
    Logil
};