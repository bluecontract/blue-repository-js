import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonCollateralPositionSchema } from './CdmEventCommonCollateralPosition';
import { CdmEventCommonMarginCallActionEnumSchema } from './CdmEventCommonMarginCallActionEnum';

export const CdmEventCommonMarginCallResponseActionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/MarginCallResponseAction']
  )(
    z.object({
      collateralPositionComponent: z
        .array(z.lazy(() => CdmEventCommonCollateralPositionSchema))
        .min(1)
        .optional(),
      description: z.string().optional(),
      marginCallAction: z.lazy(() => CdmEventCommonMarginCallActionEnumSchema),
      name: z.string().optional(),
    })
  );

export type CdmEventCommonMarginCallResponseAction = z.infer<
  typeof CdmEventCommonMarginCallResponseActionSchema
>;
