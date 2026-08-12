import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmEventWorkflowMessageInformationSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/MessageInformation']
)(
  zod.object({
    copyTo: zod
      .array(zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
      .min(0)
      .optional(),
    description: zod.string().optional(),
    messageId: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
    name: zod.string().optional(),
    sentBy: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema).optional(),
    sentTo: zod
      .array(zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
      .min(0)
      .optional(),
  })
);

export type CdmEventWorkflowMessageInformation = z.infer<
  typeof CdmEventWorkflowMessageInformationSchema
>;
