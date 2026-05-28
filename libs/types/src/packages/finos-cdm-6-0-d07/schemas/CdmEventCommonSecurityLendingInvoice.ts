import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmEventCommonBillingRecordSchema } from './CdmEventCommonBillingRecord';
import { CdmEventCommonBillingSummarySchema } from './CdmEventCommonBillingSummary';

export const CdmEventCommonSecurityLendingInvoiceSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/SecurityLendingInvoice']
  )(
    z.object({
      billingEndDate: z.string(),
      billingRecord: z
        .array(z.lazy(() => CdmEventCommonBillingRecordSchema))
        .min(1)
        .optional(),
      billingStartDate: z.string(),
      billingSummary: z
        .array(z.lazy(() => CdmEventCommonBillingSummarySchema))
        .min(1)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      receivingParty: z.lazy(() => CdmBaseStaticdataPartyPartySchema),
      sendingParty: z.lazy(() => CdmBaseStaticdataPartyPartySchema),
    })
  );

export type CdmEventCommonSecurityLendingInvoice = z.infer<
  typeof CdmEventCommonSecurityLendingInvoiceSchema
>;
