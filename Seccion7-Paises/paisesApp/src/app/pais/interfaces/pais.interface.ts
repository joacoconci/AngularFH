export interface Country {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc?:        string;
    independent:  boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   { [key: string]: Currency };
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       Region;
    subregion:    string;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        Flags;
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface Currency {
    name:   string;
    symbol: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png: string;
    svg: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    fra?: string;
    kon?: string;
    lin?: string;
    eng?: string;
    spa?: string;
    cal?: string;
    cha?: string;
    lua?: string;
    swa?: string;
    ara?: string;
    zdj?: string;
    ber?: string;
    gsw?: string;
    ita?: string;
    roh?: string;
    nld?: string;
    pap?: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
}
