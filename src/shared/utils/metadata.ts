import {find} from "lodash";


export function getAttributeValue(attributes: { attribute: string, value: any }[], attribute: string): string | number | undefined {
    const value = find(attributes, ['attribute', attribute]);
    return value?.value
}
