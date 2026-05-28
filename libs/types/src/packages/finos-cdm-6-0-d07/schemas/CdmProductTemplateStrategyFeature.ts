import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateCalendarSpreadSchema } from './CdmProductTemplateCalendarSpread';
import { CdmProductTemplateStrikeSpreadSchema } from './CdmProductTemplateStrikeSpread';

export const CdmProductTemplateStrategyFeatureSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/StrategyFeature']
  )(
    z.object({
      calendarSpread: z
        .lazy(() => CdmProductTemplateCalendarSpreadSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      strikeSpread: z
        .lazy(() => CdmProductTemplateStrikeSpreadSchema)
        .optional(),
    })
  );

export type CdmProductTemplateStrategyFeature = z.infer<
  typeof CdmProductTemplateStrategyFeatureSchema
>;
