import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';

export const CdmProductTemplateCalendarSpreadSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/CalendarSpread']
  )(
    z.object({
      description: z.string().optional(),
      expirationDateTwo: z.lazy(
        () => CdmBaseDatetimeAdjustableOrRelativeDateSchema
      ),
      name: z.string().optional(),
    })
  );

export type CdmProductTemplateCalendarSpread = z.infer<
  typeof CdmProductTemplateCalendarSpreadSchema
>;
