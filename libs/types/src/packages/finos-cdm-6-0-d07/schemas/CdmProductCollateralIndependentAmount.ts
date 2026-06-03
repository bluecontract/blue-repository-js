import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccount';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmProductCommonSettlementPaymentDetailSchema } from './CdmProductCommonSettlementPaymentDetail';

const zod = z as any;

export const CdmProductCollateralIndependentAmountSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/IndependentAmount']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    payerAccountReference: zod
      .lazy(
        () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema
      )
      .optional(),
    payerPartyReference: zod
      .lazy(() => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema)
      .optional(),
    paymentDetail: zod
      .array(zod.lazy(() => CdmProductCommonSettlementPaymentDetailSchema))
      .min(1)
      .optional(),
    receiverAccountReference: zod
      .lazy(
        () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema
      )
      .optional(),
    receiverPartyReference: zod
      .lazy(() => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema)
      .optional(),
  })
);

export type CdmProductCollateralIndependentAmount = z.infer<
  typeof CdmProductCollateralIndependentAmountSchema
>;
