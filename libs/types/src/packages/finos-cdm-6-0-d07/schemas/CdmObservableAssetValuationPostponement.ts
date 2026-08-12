import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetValuationPostponementSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/ValuationPostponement']
  )(
    zod.object({
      description: zod.string().optional(),
      maximumDaysOfPostponement: zod.number(),
      name: zod.string().optional(),
    })
  );

export type CdmObservableAssetValuationPostponement = z.infer<
  typeof CdmObservableAssetValuationPostponementSchema
>;
