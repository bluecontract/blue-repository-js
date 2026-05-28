import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonSettlementStandardSettlementStyleEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/StandardSettlementStyleEnum'
    ]
  )(
    z.enum(['Net', 'PairAndNet', 'Standard', 'StandardAndNet'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCommonSettlementStandardSettlementStyleEnum = z.infer<
  typeof CdmProductCommonSettlementStandardSettlementStyleEnumSchema
>;
