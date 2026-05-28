import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetCreditNotationMismatchResolutionEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/CreditNotationMismatchResolutionEnum'
    ]
  )(
    z.enum([
      'Average',
      'Highest',
      'Lowest',
      'Other',
      'ReferenceAgency',
      'SecondBest',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetCreditNotationMismatchResolutionEnum = z.infer<
  typeof CdmObservableAssetCreditNotationMismatchResolutionEnumSchema
>;
