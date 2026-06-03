import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonCreditRiskEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/CreditRiskEnum']
  )(
    zod.enum(['TranchedCreditRisk', 'UntranchedCreditRisk'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonCreditRiskEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonCreditRiskEnumSchema
>;
