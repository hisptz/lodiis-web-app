import {DxConfig} from 'src/app/shared/models/report-config-inteface';

export function checkUserObjectDxConfigCompatibility(
    configColumnsObject: DxConfig,
    userIndividualConfigColumnsObjectKey: any
): configColumnsObject is DxConfig {
    if (
        ['id', 'name', 'isDate', 'isBoolean', 'isAttribute', 'programStage'].map(
            (standardObjectKey) => {
                if (configColumnsObject.hasOwnProperty(standardObjectKey)) {
                    return true;
                } else {
                    return false;
                }
            }
        ) &&
        [
            'id',
            'name',
            'isDate',
            'isBoolean',
            'isAttribute',
            'programStage',
            'codes',
            'displayValues',
        ].includes(userIndividualConfigColumnsObjectKey)
    ) {
        return true;
    }
    return false;
}
