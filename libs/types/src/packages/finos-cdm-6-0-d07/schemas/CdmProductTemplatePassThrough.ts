import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplatePassThroughItemSchema } from './CdmProductTemplatePassThroughItem';

export const CdmProductTemplatePassThroughSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/PassThrough']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    passThroughItem: z
      .array(z.lazy(() => CdmProductTemplatePassThroughItemSchema))
      .min(1)
      .optional(),
  })
);

export type CdmProductTemplatePassThrough = z.infer<
  typeof CdmProductTemplatePassThroughSchema
>;
