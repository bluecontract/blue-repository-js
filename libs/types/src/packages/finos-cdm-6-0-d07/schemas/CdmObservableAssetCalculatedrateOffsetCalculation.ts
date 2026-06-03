import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetCalculatedrateOffsetCalculationSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/OffsetCalculation'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      offsetDays: zod.number().optional(),
    })
  );

export type CdmObservableAssetCalculatedrateOffsetCalculation = z.infer<
  typeof CdmObservableAssetCalculatedrateOffsetCalculationSchema
>;
