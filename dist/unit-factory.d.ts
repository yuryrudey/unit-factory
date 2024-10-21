export declare function createUnitFactory<T extends UnitConfig>(unitConfigs: T[]): UnitFactory<Flatten<T["symbol"]>, Flatten<T["name"]>, Flatten<T["symbol"]> | Flatten<T["name"]>>;

export declare const Duration: UnitFactory<"ms" | "s" | "sec" | "m" | "min" | "h" | "hr" | "d" | "w" | "wk" | "mo" | "y" | "yr", "millisecond" | "second" | "minute" | "hour" | "day" | "week" | "month" | "year", "ms" | "millisecond" | "s" | "sec" | "second" | "m" | "min" | "minute" | "h" | "hr" | "hour" | "d" | "day" | "w" | "wk" | "week" | "mo" | "month" | "y" | "yr" | "year">;

declare type Flatten<T> = T extends (infer U)[] ? Flatten<U> : T;

export declare function parseValueUnitString(input: string | number): [number, string];

export declare interface UnitConfig {
    factor: number;
    symbol: string | string[];
    name: string | string[];
}

declare interface UnitFactory<US, UN, UI> {
    new (value: number, identifier?: UI): UnitInstance<US, UN, UI>;
    from(input: string | number): UnitInstance<US, UN, UI>;
}

declare interface UnitInstance<US, UN, UI> {
    readonly value: number;
    get baseValue(): number;
    get symbol(): US;
    get name(): UN;
    to(identifier: UI): UnitInstance<US, UN, UI>;
    add(operand: UnitInstance<US, UN, UI>): UnitInstance<US, UN, UI>;
    subtract(operand: UnitInstance<US, UN, UI>): UnitInstance<US, UN, UI>;
    format(): string;
    clone(): UnitInstance<US, UN, UI>;
    toString(): string;
    valueOf(): number;
}

export { }
