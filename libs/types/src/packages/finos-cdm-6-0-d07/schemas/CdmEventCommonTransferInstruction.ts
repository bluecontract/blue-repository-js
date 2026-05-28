import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonTransferStateSchema } from './CdmEventCommonTransferState';

export const CdmEventCommonTransferInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/TransferInstruction']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      transferState: z
        .array(z.lazy(() => CdmEventCommonTransferStateSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmEventCommonTransferInstruction = z.infer<
  typeof CdmEventCommonTransferInstructionSchema
>;
