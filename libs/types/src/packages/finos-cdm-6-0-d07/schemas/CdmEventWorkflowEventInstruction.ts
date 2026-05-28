import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifiedListSchema } from './CdmBaseStaticdataIdentifierIdentifiedList';
import { CdmEventCommonCorporateActionTypeEnumSchema } from './CdmEventCommonCorporateActionTypeEnum';
import { CdmEventCommonEventIntentEnumSchema } from './CdmEventCommonEventIntentEnum';
import { CdmEventCommonInstructionSchema } from './CdmEventCommonInstruction';

export const CdmEventWorkflowEventInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/EventInstruction']
  )(
    z.object({
      corporateActionIntent: z
        .lazy(() => CdmEventCommonCorporateActionTypeEnumSchema)
        .optional(),
      description: z.string().optional(),
      effectiveDate: z.string().optional(),
      eventDate: z.string().optional(),
      instruction: z
        .array(z.lazy(() => CdmEventCommonInstructionSchema))
        .min(0)
        .optional(),
      intent: z.lazy(() => CdmEventCommonEventIntentEnumSchema).optional(),
      name: z.string().optional(),
      packageInformation: z
        .lazy(() => CdmBaseStaticdataIdentifierIdentifiedListSchema)
        .optional(),
    })
  );

export type CdmEventWorkflowEventInstruction = z.infer<
  typeof CdmEventWorkflowEventInstructionSchema
>;
