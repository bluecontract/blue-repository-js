import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmEventWorkflowMessageInformationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/MessageInformation']
  )(
    z.object({
      copyTo: z
        .array(z.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
        .min(0)
        .optional(),
      description: z.string().optional(),
      messageId: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      name: z.string().optional(),
      sentBy: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema).optional(),
      sentTo: z
        .array(z.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmEventWorkflowMessageInformation = z.infer<
  typeof CdmEventWorkflowMessageInformationSchema
>;
