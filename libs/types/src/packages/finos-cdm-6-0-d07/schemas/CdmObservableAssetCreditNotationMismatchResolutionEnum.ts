import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetCreditNotationMismatchResolutionEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/CreditNotationMismatchResolutionEnum'
    ]
  )(
    zod.enum([
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
