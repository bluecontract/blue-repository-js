import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetSingleValuationDateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/SingleValuationDate']
  )(
    z.object({
      businessDays: z.number().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmObservableAssetSingleValuationDate = z.infer<
  typeof CdmObservableAssetSingleValuationDateSchema
>;
