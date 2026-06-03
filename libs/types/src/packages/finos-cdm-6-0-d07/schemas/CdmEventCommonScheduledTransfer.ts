import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonCorporateActionTypeEnumSchema } from './CdmEventCommonCorporateActionTypeEnum';
import { CdmProductCommonSettlementScheduledTransferEnumSchema } from './CdmProductCommonSettlementScheduledTransferEnum';

const zod = z as any;

export const CdmEventCommonScheduledTransferSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ScheduledTransfer']
)(
  zod.object({
    corporateActionTransferType: zod
      .lazy(() => CdmEventCommonCorporateActionTypeEnumSchema)
      .optional(),
    name: zod.string().optional(),
    transferType: zod.lazy(
      () => CdmProductCommonSettlementScheduledTransferEnumSchema
    ),
  })
);

export type CdmEventCommonScheduledTransfer = z.infer<
  typeof CdmEventCommonScheduledTransferSchema
>;
