const { parcol } = require("parcol");
class Logil {
    #BASE_CONFIG = {
        icon: "▬",
        prefix: "Logil",
        level: 0
    }

    #prefix(message, icon_color) {
        return parcol.pit(`~${icon_color} ${this.#BASE_CONFIG.icon}~ ~rs,d ${this.#BASE_CONFIG.prefix}: ~ ${message}`);
    }

    /**
     * 0: il
     * 1: nice
     * 2: info
     * 3: warn
     * 4: error
     */
    #log(message, level) {
        switch (level) {
            case 1:
                console.log(this.#prefix(message, "gb"));
                break;
            case 2:
                console.log(this.#prefix(message, "blb"));
                break;
            case 3:
                console.log(this.#prefix(message, "yb"));
                break;
            case 4:
                console.log(this.#prefix(message, "rb"));
                break;
            default:
                console.log(this.#prefix(message, "cb"));
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
    il(message) {
        this.#log(message, 0);
    }

    /**
     * @mean success
     * @level 1
     */
    nice(message) {
        this.#log(message, 1);
    }

    /**
     * @mean information
     * @level 2
     */
    info(message) {
        this.#log(message, 2);
    }

    /**
     * @mean warning
     * @level 3
     */
    warn(message) {
        this.#log(message, 3);
    }

    /**
     * @mean error
     * @level 4
     */
    error(message) {
        this.#log(message, 4);
    }
}

module.exports = {
    log: new Logil(),
    Logil
};