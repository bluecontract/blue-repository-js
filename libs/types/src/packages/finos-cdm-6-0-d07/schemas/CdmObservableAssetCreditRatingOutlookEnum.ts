import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetCreditRatingOutlookEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CreditRatingOutlookEnum']
  )(
    z.enum(['Developing', 'Negative', 'Positive', 'Stable'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetCreditRatingOutlookEnum = z.infer<
  typeof CdmObservableAssetCreditRatingOutlookEnumSchema
>;
