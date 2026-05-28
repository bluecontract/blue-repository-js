import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelLibMetaReferenceSchema } from './ComRosettaModelLibMetaReference';

export const CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/event/workflow/metafields/ReferenceWithMetaWorkflowStep'
    ]
  )(
    z.object({
      address: z.lazy(() => ComRosettaModelLibMetaReferenceSchema).optional(),
      externalReference: z.string().optional(),
      globalReference: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStep = z.infer<
  typeof CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema
>;
