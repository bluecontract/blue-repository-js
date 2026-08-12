import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonScheduledTransferSchema } from './CdmEventCommonScheduledTransfer';
import { CdmObservableAssetFeeTypeEnumSchema } from './CdmObservableAssetFeeTypeEnum';

const zod = z as any;

export const CdmEventCommonTransferExpressionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/TransferExpression']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    priceTransfer: zod
      .lazy(() => CdmObservableAssetFeeTypeEnumSchema)
      .optional(),
    scheduledTransfer: zod
      .lazy(() => CdmEventCommonScheduledTransferSchema)
      .optional(),
  })
);

export type CdmEventCommonTransferExpression = z.infer<
  typeof CdmEventCommonTransferExpressionSchema
>;
