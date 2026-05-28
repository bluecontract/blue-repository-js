import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDate';
import { CdmBaseMathNonNegativeQuantitySchema } from './CdmBaseMathNonNegativeQuantity';
import { CdmBaseStaticdataAssetCommonAssetSchema } from './CdmBaseStaticdataAssetCommonAsset';
import { CdmBaseStaticdataIdentifierFieldWithMetaIdentifierSchema } from './CdmBaseStaticdataIdentifierFieldWithMetaIdentifier';
import { CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema } from './CdmBaseStaticdataPartyPartyReferencePayerReceiver';
import { CdmEventCommonResetSchema } from './CdmEventCommonReset';
import { CdmEventCommonTransferExpressionSchema } from './CdmEventCommonTransferExpression';
import { CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema } from './CdmProductTemplateMetafieldsReferenceWithMetaPayout';

export const CdmEventCommonTransferSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/Transfer']
)(
  z.object({
    asset: z.lazy(() => CdmBaseStaticdataAssetCommonAssetSchema).optional(),
    description: z.string().optional(),
    identifier: z
      .array(
        z.lazy(() => CdmBaseStaticdataIdentifierFieldWithMetaIdentifierSchema)
      )
      .min(0)
      .optional(),
    name: z.string().optional(),
    payerReceiver: z.lazy(
      () => CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema
    ),
    quantity: z.lazy(() => CdmBaseMathNonNegativeQuantitySchema).optional(),
    resetOrigin: z.lazy(() => CdmEventCommonResetSchema).optional(),
    settlementDate: z
      .lazy(() => CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema)
      .optional(),
    settlementOrigin: z
      .lazy(() => CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema)
      .optional(),
    transferExpression: z.lazy(() => CdmEventCommonTransferExpressionSchema),
  })
);

export type CdmEventCommonTransfer = z.infer<
  typeof CdmEventCommonTransferSchema
>;
