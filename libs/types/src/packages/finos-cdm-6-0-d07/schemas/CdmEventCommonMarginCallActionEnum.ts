import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonMarginCallActionEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/MarginCallActionEnum']
  )(
    z.enum(['Delivery', 'Return'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmEventCommonMarginCallActionEnum = z.infer<
  typeof CdmEventCommonMarginCallActionEnumSchema
>;
