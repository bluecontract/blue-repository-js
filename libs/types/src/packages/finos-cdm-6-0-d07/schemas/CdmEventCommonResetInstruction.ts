import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema } from './CdmProductTemplateMetafieldsReferenceWithMetaPayout';

const zod = z as any;

export const CdmEventCommonResetInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ResetInstruction']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    payout: zod
      .array(
        zod.lazy(
          () => CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema
        )
      )
      .min(1)
      .optional(),
    rateRecordDate: zod.string().optional(),
    resetDate: zod.string(),
  })
);

export type CdmEventCommonResetInstruction = z.infer<
  typeof CdmEventCommonResetInstructionSchema
>;
