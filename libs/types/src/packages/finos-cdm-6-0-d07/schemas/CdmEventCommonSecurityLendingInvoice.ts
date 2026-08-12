import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmEventCommonBillingRecordSchema } from './CdmEventCommonBillingRecord';
import { CdmEventCommonBillingSummarySchema } from './CdmEventCommonBillingSummary';

const zod = z as any;

export const CdmEventCommonSecurityLendingInvoiceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/SecurityLendingInvoice']
)(
  zod.object({
    billingEndDate: zod.string(),
    billingRecord: zod
      .array(zod.lazy(() => CdmEventCommonBillingRecordSchema))
      .min(1)
      .optional(),
    billingStartDate: zod.string(),
    billingSummary: zod
      .array(zod.lazy(() => CdmEventCommonBillingSummarySchema))
      .min(1)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    receivingParty: zod.lazy(() => CdmBaseStaticdataPartyPartySchema),
    sendingParty: zod.lazy(() => CdmBaseStaticdataPartyPartySchema),
  })
);

export type CdmEventCommonSecurityLendingInvoice = z.infer<
  typeof CdmEventCommonSecurityLendingInvoiceSchema
>;
