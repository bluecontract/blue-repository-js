import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateCompositeSchema } from './CdmProductTemplateComposite';
import { CdmProductTemplateQuantoSchema } from './CdmProductTemplateQuanto';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmProductTemplateFxFeatureSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/FxFeature']
)(
  zod.object({
    composite: zod.lazy(() => CdmProductTemplateCompositeSchema).optional(),
    crossCurrency: zod.lazy(() => CdmProductTemplateCompositeSchema).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    quanto: zod.lazy(() => CdmProductTemplateQuantoSchema).optional(),
    referenceCurrency: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
  })
);

export type CdmProductTemplateFxFeature = z.infer<
  typeof CdmProductTemplateFxFeatureSchema
>;
