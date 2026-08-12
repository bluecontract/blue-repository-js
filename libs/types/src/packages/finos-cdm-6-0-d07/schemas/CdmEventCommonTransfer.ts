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

const zod = z as any;

export const CdmEventCommonTransferSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/Transfer']
)(
  zod.object({
    asset: zod.lazy(() => CdmBaseStaticdataAssetCommonAssetSchema).optional(),
    description: zod.string().optional(),
    identifier: zod
      .array(
        zod.lazy(() => CdmBaseStaticdataIdentifierFieldWithMetaIdentifierSchema)
      )
      .min(0)
      .optional(),
    name: zod.string().optional(),
    payerReceiver: zod.lazy(
      () => CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema
    ),
    quantity: zod.lazy(() => CdmBaseMathNonNegativeQuantitySchema).optional(),
    resetOrigin: zod.lazy(() => CdmEventCommonResetSchema).optional(),
    settlementDate: zod
      .lazy(() => CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema)
      .optional(),
    settlementOrigin: zod
      .lazy(() => CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema)
      .optional(),
    transferExpression: zod.lazy(() => CdmEventCommonTransferExpressionSchema),
  })
);

export type CdmEventCommonTransfer = z.infer<
  typeof CdmEventCommonTransferSchema
>;
