import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateCalendarSpreadSchema } from './CdmProductTemplateCalendarSpread';
import { CdmProductTemplateStrikeSpreadSchema } from './CdmProductTemplateStrikeSpread';

const zod = z as any;

export const CdmProductTemplateStrategyFeatureSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/StrategyFeature']
)(
  zod.object({
    calendarSpread: zod
      .lazy(() => CdmProductTemplateCalendarSpreadSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    strikeSpread: zod
      .lazy(() => CdmProductTemplateStrikeSpreadSchema)
      .optional(),
  })
);

export type CdmProductTemplateStrategyFeature = z.infer<
  typeof CdmProductTemplateStrategyFeatureSchema
>;
