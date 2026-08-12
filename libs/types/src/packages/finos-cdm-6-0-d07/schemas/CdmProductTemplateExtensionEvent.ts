import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductTemplateExtensionEventSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExtensionEvent']
)(
  zod.object({
    adjustedExerciseDate: zod.string(),
    adjustedExtendedTerminationDate: zod.string(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductTemplateExtensionEvent = z.infer<
  typeof CdmProductTemplateExtensionEventSchema
>;
