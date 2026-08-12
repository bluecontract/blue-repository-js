import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetPremiumTypeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PremiumTypeEnum']
)(
  zod.enum(['Fixed', 'PostPaid', 'PrePaid', 'Variable'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmObservableAssetPremiumTypeEnum = z.infer<
  typeof CdmObservableAssetPremiumTypeEnumSchema
>;
