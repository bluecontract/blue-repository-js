import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmEventWorkflowCustomisedWorkflowSchema } from './CdmEventWorkflowCustomisedWorkflow';

const zod = z as any;

export const CdmEventWorkflowPartyCustomisedWorkflowSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/PartyCustomisedWorkflow']
  )(
    zod.object({
      customisedWorkflow: zod
        .array(zod.lazy(() => CdmEventWorkflowCustomisedWorkflowSchema))
        .min(1)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      partyName: zod.string().optional(),
      partyReference: zod
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
        )
        .optional(),
    })
  );

export type CdmEventWorkflowPartyCustomisedWorkflow = z.infer<
  typeof CdmEventWorkflowPartyCustomisedWorkflowSchema
>;
