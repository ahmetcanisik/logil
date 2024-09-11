interface LogilConfig {
    icon: string;
    prefix: string;
    level: number;
}
interface PrefixInterface {
    noPrefix: boolean;
}
export declare class Logil {
    #private;
    constructor(config?: LogilConfig);
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
    configure(options?: LogilConfig): void;
    /**
     * @mean logil(log.il), default, normal
     * @level 0
     */
    il(message: string, options?: PrefixInterface): void;
    /**
     * @mean success
     * @level 1
     */
    nice(message: string, options?: PrefixInterface): void;
    /**
     * @mean information
     * @level 2
     */
    info(message: string, options?: PrefixInterface): void;
    /**
     * @mean warning
     * @level 3
     */
    warn(message: string, options?: PrefixInterface): void;
    /**
     * @mean error
     * @level 4
     */
    error(message: string, options?: PrefixInterface): void;
}
declare const _default: Logil;
export default _default;
