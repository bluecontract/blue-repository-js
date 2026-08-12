import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonSettlementSettlementCentreEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/SettlementCentreEnum'
    ]
  )(
    zod.enum(['ClearstreamBankingLuxembourg', 'EuroclearBank'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCommonSettlementSettlementCentreEnum = z.infer<
  typeof CdmProductCommonSettlementSettlementCentreEnumSchema
>;
