import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';

const zod = z as any;

export const CdmProductTemplateCalendarSpreadSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/CalendarSpread']
)(
  zod.object({
    description: zod.string().optional(),
    expirationDateTwo: zod.lazy(
      () => CdmBaseDatetimeAdjustableOrRelativeDateSchema
    ),
    name: zod.string().optional(),
  })
);

export type CdmProductTemplateCalendarSpread = z.infer<
  typeof CdmProductTemplateCalendarSpreadSchema
>;
