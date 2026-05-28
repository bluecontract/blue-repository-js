import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmEventCommonBillingRecordInstructionSchema } from './CdmEventCommonBillingRecordInstruction';
import { CdmEventCommonBillingSummaryInstructionSchema } from './CdmEventCommonBillingSummaryInstruction';

export const CdmEventCommonBillingInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/BillingInstruction']
  )(
    z.object({
      billingEndDate: z.string(),
      billingRecordInstruction: z
        .array(z.lazy(() => CdmEventCommonBillingRecordInstructionSchema))
        .min(1)
        .optional(),
      billingStartDate: z.string(),
      billingSummary: z
        .array(z.lazy(() => CdmEventCommonBillingSummaryInstructionSchema))
        .min(0)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      receivingParty: z.lazy(() => CdmBaseStaticdataPartyPartySchema),
      sendingParty: z.lazy(() => CdmBaseStaticdataPartyPartySchema),
    })
  );

export type CdmEventCommonBillingInstruction = z.infer<
  typeof CdmEventCommonBillingInstructionSchema
>;
