import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetRateObservationSchema } from './CdmObservableAssetRateObservation';
import { CdmProductTemplateStrikeSchema } from './CdmProductTemplateStrike';

export const CdmProductAssetFloatingRateDefinitionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FloatingRateDefinition']
  )(
    z.object({
      calculatedRate: z.number().optional(),
      capRate: z
        .array(z.lazy(() => CdmProductTemplateStrikeSchema))
        .min(0)
        .optional(),
      description: z.string().optional(),
      floatingRateMultiplier: z.number().optional(),
      floorRate: z
        .array(z.lazy(() => CdmProductTemplateStrikeSchema))
        .min(0)
        .optional(),
      name: z.string().optional(),
      rateObservation: z
        .array(z.lazy(() => CdmObservableAssetRateObservationSchema))
        .min(0)
        .optional(),
      spread: z.number().optional(),
    })
  );

export type CdmProductAssetFloatingRateDefinition = z.infer<
  typeof CdmProductAssetFloatingRateDefinitionSchema
>;
