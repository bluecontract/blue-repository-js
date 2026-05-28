import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetFeeTypeEnumSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FeeTypeEnum']
)(
  z.enum([
    'Assignment',
    'BrokerageCommission',
    'CorporateAction',
    'CreditEvent',
    'Increase',
    'Novation',
    'PartialTermination',
    'Premium',
    'Renegotiation',
    'Termination',
    'Upfront',
  ] as [string, ...string[]]) as unknown as z.ZodObject<any>
);

export type CdmObservableAssetFeeTypeEnum = z.infer<
  typeof CdmObservableAssetFeeTypeEnumSchema
>;
