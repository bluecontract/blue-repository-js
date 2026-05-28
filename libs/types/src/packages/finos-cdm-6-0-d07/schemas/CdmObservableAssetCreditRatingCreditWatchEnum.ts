import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetCreditRatingCreditWatchEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/CreditRatingCreditWatchEnum'
    ]
  )(
    z.enum(['Developing', 'Negative', 'Positive'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetCreditRatingCreditWatchEnum = z.infer<
  typeof CdmObservableAssetCreditRatingCreditWatchEnumSchema
>;
