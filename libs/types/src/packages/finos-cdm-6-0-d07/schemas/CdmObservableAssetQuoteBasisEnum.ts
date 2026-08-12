import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetQuoteBasisEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/QuoteBasisEnum']
)(
  zod.enum(['Currency1PerCurrency2', 'Currency2PerCurrency1'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmObservableAssetQuoteBasisEnum = z.infer<
  typeof CdmObservableAssetQuoteBasisEnumSchema
>;
