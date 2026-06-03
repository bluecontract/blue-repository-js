import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplatePassThroughItemSchema } from './CdmProductTemplatePassThroughItem';

const zod = z as any;

export const CdmProductTemplatePassThroughSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/PassThrough']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    passThroughItem: zod
      .array(zod.lazy(() => CdmProductTemplatePassThroughItemSchema))
      .min(1)
      .optional(),
  })
);

export type CdmProductTemplatePassThrough = z.infer<
  typeof CdmProductTemplatePassThroughSchema
>;
