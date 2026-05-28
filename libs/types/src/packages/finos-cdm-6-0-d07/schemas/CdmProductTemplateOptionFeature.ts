import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateAveragingCalculationSchema } from './CdmProductTemplateAveragingCalculation';
import { CdmProductTemplateBarrierSchema } from './CdmProductTemplateBarrier';
import { CdmProductTemplateFxFeatureSchema } from './CdmProductTemplateFxFeature';
import { CdmProductTemplateKnockSchema } from './CdmProductTemplateKnock';
import { CdmProductTemplatePassThroughSchema } from './CdmProductTemplatePassThrough';
import { CdmProductTemplateStrategyFeatureSchema } from './CdmProductTemplateStrategyFeature';

export const CdmProductTemplateOptionFeatureSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/OptionFeature']
  )(
    z.object({
      averagingFeature: z
        .lazy(() => CdmProductTemplateAveragingCalculationSchema)
        .optional(),
      barrier: z.lazy(() => CdmProductTemplateBarrierSchema).optional(),
      description: z.string().optional(),
      fxFeature: z
        .array(z.lazy(() => CdmProductTemplateFxFeatureSchema))
        .min(0)
        .optional(),
      knock: z.lazy(() => CdmProductTemplateKnockSchema).optional(),
      name: z.string().optional(),
      passThrough: z.lazy(() => CdmProductTemplatePassThroughSchema).optional(),
      strategyFeature: z
        .lazy(() => CdmProductTemplateStrategyFeatureSchema)
        .optional(),
    })
  );

export type CdmProductTemplateOptionFeature = z.infer<
  typeof CdmProductTemplateOptionFeatureSchema
>;
