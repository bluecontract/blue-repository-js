import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetQuoteBasisEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/QuoteBasisEnum']
  )(
    z.enum(['Currency1PerCurrency2', 'Currency2PerCurrency1'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetQuoteBasisEnum = z.infer<
  typeof CdmObservableAssetQuoteBasisEnumSchema
>;
