import {find} from "lodash";


export function getAttributeValue(attributes: { attribute: string, value: any }[], attribute: string): string | number | undefined {
    const value = find(attributes, ['attribute', attribute]);
    return value?.value
}

export function getDataElementValue(dataElements: { dataElement: string, value: any }[], attribute: string): string | number | undefined {
    const value = find(dataElements, ['dataElement', attribute]);
    return value?.value
}
