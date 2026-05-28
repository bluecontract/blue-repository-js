import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonSettlementSettlementTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/SettlementTypeEnum'
    ]
  )(
    z.enum(['Cash', 'CashOrPhysical', 'Election', 'Physical'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCommonSettlementSettlementTypeEnum = z.infer<
  typeof CdmProductCommonSettlementSettlementTypeEnumSchema
>;
