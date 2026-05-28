import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonTransferSchema } from './CdmEventCommonTransfer';
import { CdmEventCommonTransferStatusEnumSchema } from './CdmEventCommonTransferStatusEnum';

export const CdmEventCommonTransferStateSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/TransferState']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    transfer: z.lazy(() => CdmEventCommonTransferSchema),
    transferStatus: z
      .lazy(() => CdmEventCommonTransferStatusEnumSchema)
      .optional(),
  })
);

export type CdmEventCommonTransferState = z.infer<
  typeof CdmEventCommonTransferStateSchema
>;
