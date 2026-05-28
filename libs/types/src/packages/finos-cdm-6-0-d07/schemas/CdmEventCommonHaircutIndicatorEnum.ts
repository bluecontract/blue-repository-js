import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonHaircutIndicatorEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/HaircutIndicatorEnum']
  )(
    z.enum(['PostHaircut', 'PreHaircut'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmEventCommonHaircutIndicatorEnum = z.infer<
  typeof CdmEventCommonHaircutIndicatorEnumSchema
>;
