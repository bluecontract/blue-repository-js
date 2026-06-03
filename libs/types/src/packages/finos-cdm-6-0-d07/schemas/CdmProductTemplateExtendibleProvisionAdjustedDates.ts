import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateExtensionEventSchema } from './CdmProductTemplateExtensionEvent';

const zod = z as any;

export const CdmProductTemplateExtendibleProvisionAdjustedDatesSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/template/ExtendibleProvisionAdjustedDates'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      extensionEvent: zod
        .array(zod.lazy(() => CdmProductTemplateExtensionEventSchema))
        .min(1)
        .optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductTemplateExtendibleProvisionAdjustedDates = z.infer<
  typeof CdmProductTemplateExtendibleProvisionAdjustedDatesSchema
>;
