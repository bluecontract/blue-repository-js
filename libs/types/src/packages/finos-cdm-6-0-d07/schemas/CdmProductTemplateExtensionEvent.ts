import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductTemplateExtensionEventSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExtensionEvent']
  )(
    z.object({
      adjustedExerciseDate: z.string(),
      adjustedExtendedTerminationDate: z.string(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductTemplateExtensionEvent = z.infer<
  typeof CdmProductTemplateExtensionEventSchema
>;
