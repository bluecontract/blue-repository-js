import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema } from './CdmProductTemplateMetafieldsReferenceWithMetaPayout';

export const CdmEventCommonResetInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ResetInstruction']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      payout: z
        .array(
          z.lazy(
            () => CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema
          )
        )
        .min(1)
        .optional(),
      rateRecordDate: z.string().optional(),
      resetDate: z.string(),
    })
  );

export type CdmEventCommonResetInstruction = z.infer<
  typeof CdmEventCommonResetInstructionSchema
>;
