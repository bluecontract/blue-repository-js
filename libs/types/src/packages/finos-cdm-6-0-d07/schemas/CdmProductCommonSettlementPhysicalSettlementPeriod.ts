import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonSettlementPhysicalSettlementPeriodSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/PhysicalSettlementPeriod'
    ]
  )(
    zod.object({
      businessDays: zod.number().optional(),
      businessDaysNotSpecified: zod.boolean().optional(),
      maximumBusinessDays: zod.number().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductCommonSettlementPhysicalSettlementPeriod = z.infer<
  typeof CdmProductCommonSettlementPhysicalSettlementPeriodSchema
>;
