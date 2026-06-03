import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetCalculatedrateObservationParametersSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/ObservationParameters'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      observationCapRate: zod.number().optional(),
      observationFloorRate: zod.number().optional(),
    })
  );

export type CdmObservableAssetCalculatedrateObservationParameters = z.infer<
  typeof CdmObservableAssetCalculatedrateObservationParametersSchema
>;
