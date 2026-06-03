import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmEventCommonBillingRecordInstructionSchema } from './CdmEventCommonBillingRecordInstruction';
import { CdmEventCommonBillingSummaryInstructionSchema } from './CdmEventCommonBillingSummaryInstruction';

const zod = z as any;

export const CdmEventCommonBillingInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/BillingInstruction']
)(
  zod.object({
    billingEndDate: zod.string(),
    billingRecordInstruction: zod
      .array(zod.lazy(() => CdmEventCommonBillingRecordInstructionSchema))
      .min(1)
      .optional(),
    billingStartDate: zod.string(),
    billingSummary: zod
      .array(zod.lazy(() => CdmEventCommonBillingSummaryInstructionSchema))
      .min(0)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    receivingParty: zod.lazy(() => CdmBaseStaticdataPartyPartySchema),
    sendingParty: zod.lazy(() => CdmBaseStaticdataPartyPartySchema),
  })
);

export type CdmEventCommonBillingInstruction = z.infer<
  typeof CdmEventCommonBillingInstructionSchema
>;
