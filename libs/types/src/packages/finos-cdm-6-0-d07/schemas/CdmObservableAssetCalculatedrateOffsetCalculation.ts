import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetCalculatedrateOffsetCalculationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/OffsetCalculation'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      offsetDays: z.number().optional(),
    })
  );

export type CdmObservableAssetCalculatedrateOffsetCalculation = z.infer<
  typeof CdmObservableAssetCalculatedrateOffsetCalculationSchema
>;
