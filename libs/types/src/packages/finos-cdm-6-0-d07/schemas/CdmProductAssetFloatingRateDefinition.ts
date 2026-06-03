import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetRateObservationSchema } from './CdmObservableAssetRateObservation';
import { CdmProductTemplateStrikeSchema } from './CdmProductTemplateStrike';

const zod = z as any;

export const CdmProductAssetFloatingRateDefinitionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FloatingRateDefinition']
)(
  zod.object({
    calculatedRate: zod.number().optional(),
    capRate: zod
      .array(zod.lazy(() => CdmProductTemplateStrikeSchema))
      .min(0)
      .optional(),
    description: zod.string().optional(),
    floatingRateMultiplier: zod.number().optional(),
    floorRate: zod
      .array(zod.lazy(() => CdmProductTemplateStrikeSchema))
      .min(0)
      .optional(),
    name: zod.string().optional(),
    rateObservation: zod
      .array(zod.lazy(() => CdmObservableAssetRateObservationSchema))
      .min(0)
      .optional(),
    spread: zod.number().optional(),
  })
);

export type CdmProductAssetFloatingRateDefinition = z.infer<
  typeof CdmProductAssetFloatingRateDefinitionSchema
>;
