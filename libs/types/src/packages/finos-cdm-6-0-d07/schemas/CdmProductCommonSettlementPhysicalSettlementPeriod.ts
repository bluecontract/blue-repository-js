import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonSettlementPhysicalSettlementPeriodSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/PhysicalSettlementPeriod'
    ]
  )(
    z.object({
      businessDays: z.number().optional(),
      businessDaysNotSpecified: z.boolean().optional(),
      maximumBusinessDays: z.number().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCommonSettlementPhysicalSettlementPeriod = z.infer<
  typeof CdmProductCommonSettlementPhysicalSettlementPeriodSchema
>;
