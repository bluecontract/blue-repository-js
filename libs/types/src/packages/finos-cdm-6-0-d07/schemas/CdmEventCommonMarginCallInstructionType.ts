import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonCallTypeEnumSchema } from './CdmEventCommonCallTypeEnum';

const zod = z as any;

export const CdmEventCommonMarginCallInstructionTypeSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/MarginCallInstructionType']
  )(
    zod.object({
      callType: zod.lazy(() => CdmEventCommonCallTypeEnumSchema),
      description: zod.string().optional(),
      name: zod.string().optional(),
      visibilityIndicator: zod.boolean().optional(),
    })
  );

export type CdmEventCommonMarginCallInstructionType = z.infer<
  typeof CdmEventCommonMarginCallInstructionTypeSchema
>;
