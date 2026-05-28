import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetValuationPostponementSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/ValuationPostponement']
  )(
    z.object({
      description: z.string().optional(),
      maximumDaysOfPostponement: z.number(),
      name: z.string().optional(),
    })
  );

export type CdmObservableAssetValuationPostponement = z.infer<
  typeof CdmObservableAssetValuationPostponementSchema
>;
