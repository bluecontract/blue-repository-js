import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonTransferSchema } from './CdmEventCommonTransfer';
import { CdmEventCommonTransferStatusEnumSchema } from './CdmEventCommonTransferStatusEnum';

const zod = z as any;

export const CdmEventCommonTransferStateSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/TransferState']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    transfer: zod.lazy(() => CdmEventCommonTransferSchema),
    transferStatus: zod
      .lazy(() => CdmEventCommonTransferStatusEnumSchema)
      .optional(),
  })
);

export type CdmEventCommonTransferState = z.infer<
  typeof CdmEventCommonTransferStateSchema
>;
