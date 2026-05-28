import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateExtensionEventSchema } from './CdmProductTemplateExtensionEvent';

export const CdmProductTemplateExtendibleProvisionAdjustedDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/template/ExtendibleProvisionAdjustedDates'
    ]
  )(
    z.object({
      description: z.string().optional(),
      extensionEvent: z
        .array(z.lazy(() => CdmProductTemplateExtensionEventSchema))
        .min(1)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductTemplateExtendibleProvisionAdjustedDates = z.infer<
  typeof CdmProductTemplateExtendibleProvisionAdjustedDatesSchema
>;
