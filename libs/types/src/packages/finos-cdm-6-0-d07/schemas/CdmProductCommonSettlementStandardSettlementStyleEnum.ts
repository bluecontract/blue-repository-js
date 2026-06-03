import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonSettlementStandardSettlementStyleEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/StandardSettlementStyleEnum'
    ]
  )(
    zod.enum(['Net', 'PairAndNet', 'Standard', 'StandardAndNet'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCommonSettlementStandardSettlementStyleEnum = z.infer<
  typeof CdmProductCommonSettlementStandardSettlementStyleEnumSchema
>;
