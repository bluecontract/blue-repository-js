import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonCollateralPositionSchema } from './CdmEventCommonCollateralPosition';
import { CdmEventCommonMarginCallActionEnumSchema } from './CdmEventCommonMarginCallActionEnum';

const zod = z as any;

export const CdmEventCommonMarginCallResponseActionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/MarginCallResponseAction']
)(
  zod.object({
    collateralPositionComponent: zod
      .array(zod.lazy(() => CdmEventCommonCollateralPositionSchema))
      .min(1)
      .optional(),
    description: zod.string().optional(),
    marginCallAction: zod.lazy(() => CdmEventCommonMarginCallActionEnumSchema),
    name: zod.string().optional(),
  })
);

export type CdmEventCommonMarginCallResponseAction = z.infer<
  typeof CdmEventCommonMarginCallResponseActionSchema
>;
