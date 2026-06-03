import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateAveragingCalculationSchema } from './CdmProductTemplateAveragingCalculation';
import { CdmProductTemplateBarrierSchema } from './CdmProductTemplateBarrier';
import { CdmProductTemplateFxFeatureSchema } from './CdmProductTemplateFxFeature';
import { CdmProductTemplateKnockSchema } from './CdmProductTemplateKnock';
import { CdmProductTemplatePassThroughSchema } from './CdmProductTemplatePassThrough';
import { CdmProductTemplateStrategyFeatureSchema } from './CdmProductTemplateStrategyFeature';

const zod = z as any;

export const CdmProductTemplateOptionFeatureSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/OptionFeature']
)(
  zod.object({
    averagingFeature: zod
      .lazy(() => CdmProductTemplateAveragingCalculationSchema)
      .optional(),
    barrier: zod.lazy(() => CdmProductTemplateBarrierSchema).optional(),
    description: zod.string().optional(),
    fxFeature: zod
      .array(zod.lazy(() => CdmProductTemplateFxFeatureSchema))
      .min(0)
      .optional(),
    knock: zod.lazy(() => CdmProductTemplateKnockSchema).optional(),
    name: zod.string().optional(),
    passThrough: zod.lazy(() => CdmProductTemplatePassThroughSchema).optional(),
    strategyFeature: zod
      .lazy(() => CdmProductTemplateStrategyFeatureSchema)
      .optional(),
  })
);

export type CdmProductTemplateOptionFeature = z.infer<
  typeof CdmProductTemplateOptionFeatureSchema
>;
