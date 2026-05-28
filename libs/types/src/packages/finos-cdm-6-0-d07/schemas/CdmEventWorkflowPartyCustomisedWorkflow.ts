import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmEventWorkflowCustomisedWorkflowSchema } from './CdmEventWorkflowCustomisedWorkflow';

export const CdmEventWorkflowPartyCustomisedWorkflowSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/PartyCustomisedWorkflow']
  )(
    z.object({
      customisedWorkflow: z
        .array(z.lazy(() => CdmEventWorkflowCustomisedWorkflowSchema))
        .min(1)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      partyName: z.string().optional(),
      partyReference: z
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
        )
        .optional(),
    })
  );

export type CdmEventWorkflowPartyCustomisedWorkflow = z.infer<
  typeof CdmEventWorkflowPartyCustomisedWorkflowSchema
>;
