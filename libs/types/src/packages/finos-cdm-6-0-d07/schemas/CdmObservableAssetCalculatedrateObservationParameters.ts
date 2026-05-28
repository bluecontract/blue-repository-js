import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetCalculatedrateObservationParametersSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/ObservationParameters'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      observationCapRate: z.number().optional(),
      observationFloorRate: z.number().optional(),
    })
  );

export type CdmObservableAssetCalculatedrateObservationParameters = z.infer<
  typeof CdmObservableAssetCalculatedrateObservationParametersSchema
>;
