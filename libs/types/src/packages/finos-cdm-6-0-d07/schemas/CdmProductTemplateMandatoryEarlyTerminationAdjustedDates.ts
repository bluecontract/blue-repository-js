import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductTemplateMandatoryEarlyTerminationAdjustedDatesSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/template/MandatoryEarlyTerminationAdjustedDates'
    ]
  )(
    zod.object({
      adjustedCashSettlementPaymentDate: zod.string(),
      adjustedCashSettlementValuationDate: zod.string(),
      adjustedEarlyTerminationDate: zod.string(),
      description: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductTemplateMandatoryEarlyTerminationAdjustedDates = z.infer<
  typeof CdmProductTemplateMandatoryEarlyTerminationAdjustedDatesSchema
>;
