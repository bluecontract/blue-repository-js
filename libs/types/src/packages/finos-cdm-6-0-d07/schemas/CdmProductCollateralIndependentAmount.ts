import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccount';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmProductCommonSettlementPaymentDetailSchema } from './CdmProductCommonSettlementPaymentDetail';

export const CdmProductCollateralIndependentAmountSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/IndependentAmount']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      payerAccountReference: z
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema
        )
        .optional(),
      payerPartyReference: z
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
        )
        .optional(),
      paymentDetail: z
        .array(z.lazy(() => CdmProductCommonSettlementPaymentDetailSchema))
        .min(1)
        .optional(),
      receiverAccountReference: z
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema
        )
        .optional(),
      receiverPartyReference: z
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
        )
        .optional(),
    })
  );

export type CdmProductCollateralIndependentAmount = z.infer<
  typeof CdmProductCollateralIndependentAmountSchema
>;
