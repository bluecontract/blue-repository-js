import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonCallTypeEnumSchema } from './CdmEventCommonCallTypeEnum';

export const CdmEventCommonMarginCallInstructionTypeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/MarginCallInstructionType']
  )(
    z.object({
      callType: z.lazy(() => CdmEventCommonCallTypeEnumSchema),
      description: z.string().optional(),
      name: z.string().optional(),
      visibilityIndicator: z.boolean().optional(),
    })
  );

export type CdmEventCommonMarginCallInstructionType = z.infer<
  typeof CdmEventCommonMarginCallInstructionTypeSchema
>;
