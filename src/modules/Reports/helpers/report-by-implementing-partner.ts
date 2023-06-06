import {Report} from 'src/app/shared/models/report.model';
import * as _ from 'lodash';

export function getFilteredReportByUserImplementingPartner(
    reports: Report[],
    implementingPartnerId: string
) {
  return _.filter(
      reports || [],
      (report: Report) =>
          report &&
          report.allowedImplementingPartners &&
          report.allowedImplementingPartners.includes(implementingPartnerId)
  );
}
