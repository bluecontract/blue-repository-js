import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateCompositeSchema } from './CdmProductTemplateComposite';
import { CdmProductTemplateQuantoSchema } from './CdmProductTemplateQuanto';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmProductTemplateFxFeatureSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/FxFeature']
)(
  z.object({
    composite: z.lazy(() => CdmProductTemplateCompositeSchema).optional(),
    crossCurrency: z.lazy(() => CdmProductTemplateCompositeSchema).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    quanto: z.lazy(() => CdmProductTemplateQuantoSchema).optional(),
    referenceCurrency: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
  })
);

export type CdmProductTemplateFxFeature = z.infer<
  typeof CdmProductTemplateFxFeatureSchema
>;
