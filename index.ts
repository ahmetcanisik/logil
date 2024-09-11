import parcol from 'parcol';

interface LogilConfig {
    icon: string,
    prefix: string,
    level: number
}

interface PrefixInterface {
    noPrefix: boolean
}

export class Logil {
    #BASE_CONFIG: LogilConfig = {
        icon: "▬",
        prefix: "Logil:",
        level: 0
    };

    #BASE_PREFIX: PrefixInterface = {
        noPrefix: false
    }

    constructor(config: LogilConfig = this.#BASE_CONFIG) {
        this.#BASE_CONFIG = config;
    }

    #prefix(message: string, icon_color: string, options: PrefixInterface = this.#BASE_PREFIX) {
        if (options && options.noPrefix) {
            return parcol.pit(message);
        }
        return parcol.pit(`~${icon_color} ${this.#BASE_CONFIG.icon}~ ~rs,d ${this.#BASE_CONFIG.prefix}~ ${message}`);
    }

    /**
     * 0: il
     * 1: nice
     * 2: info
     * 3: warn
     * 4: error
     */
    #log(message: string, level: number, options: PrefixInterface = this.#BASE_PREFIX) {
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
    
    /**
     * 
     * @param options 
     * @description A method that allows you to change all config options according to your needs.
     * @example
     ```
     import log from 'logil';

     log.configure({
        icon: "🤺",
        icon_styles: "d,b",
        prefix: "astronozorus -> ",
        prefix_styles: "d",
        level: 0
     });
     ```
     */
    configure(options: LogilConfig = this.#BASE_CONFIG) {
        this.#BASE_CONFIG = options;
    }

    /**
     * @mean logil(log.il), default, normal
     * @level 0
     */
    il(message: string, options: PrefixInterface = this.#BASE_PREFIX) {
        this.#log(message, 0, options);
    }

    /**
     * @mean success
     * @level 1
     */
    nice(message: string, options: PrefixInterface = this.#BASE_PREFIX) {
        this.#log(message, 1, options);
    }

    /**
     * @mean information
     * @level 2
     */
    info(message: string, options: PrefixInterface = this.#BASE_PREFIX) {
        this.#log(message, 2, options);
    }

    /**
     * @mean warning
     * @level 3
     */
    warn(message: string, options: PrefixInterface = this.#BASE_PREFIX) {
        this.#log(message, 3, options);
    }

    /**
     * @mean error
     * @level 4
     */
    error(message: string, options: PrefixInterface = this.#BASE_PREFIX) {
        this.#log(message, 4, options);
    }
}

export default new Logil();