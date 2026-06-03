import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonTransferStateSchema } from './CdmEventCommonTransferState';

const zod = z as any;

export const CdmEventCommonTransferInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/TransferInstruction']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    transferState: zod
      .array(zod.lazy(() => CdmEventCommonTransferStateSchema))
      .min(0)
      .optional(),
  })
);

export type CdmEventCommonTransferInstruction = z.infer<
  typeof CdmEventCommonTransferInstructionSchema
>;
