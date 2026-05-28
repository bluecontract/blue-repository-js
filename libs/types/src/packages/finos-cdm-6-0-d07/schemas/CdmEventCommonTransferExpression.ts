import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonScheduledTransferSchema } from './CdmEventCommonScheduledTransfer';
import { CdmObservableAssetFeeTypeEnumSchema } from './CdmObservableAssetFeeTypeEnum';

export const CdmEventCommonTransferExpressionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/TransferExpression']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      priceTransfer: z
        .lazy(() => CdmObservableAssetFeeTypeEnumSchema)
        .optional(),
      scheduledTransfer: z
        .lazy(() => CdmEventCommonScheduledTransferSchema)
        .optional(),
    })
  );

export type CdmEventCommonTransferExpression = z.infer<
  typeof CdmEventCommonTransferExpressionSchema
>;
