import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonCorporateActionTypeEnumSchema } from './CdmEventCommonCorporateActionTypeEnum';
import { CdmProductCommonSettlementScheduledTransferEnumSchema } from './CdmProductCommonSettlementScheduledTransferEnum';

export const CdmEventCommonScheduledTransferSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ScheduledTransfer']
  )(
    z.object({
      corporateActionTransferType: z
        .lazy(() => CdmEventCommonCorporateActionTypeEnumSchema)
        .optional(),
      name: z.string().optional(),
      transferType: z.lazy(
        () => CdmProductCommonSettlementScheduledTransferEnumSchema
      ),
    })
  );

export type CdmEventCommonScheduledTransfer = z.infer<
  typeof CdmEventCommonScheduledTransferSchema
>;
