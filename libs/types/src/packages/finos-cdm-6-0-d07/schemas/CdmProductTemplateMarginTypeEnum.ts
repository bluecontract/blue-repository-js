import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductTemplateMarginTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/MarginTypeEnum']
  )(
    z.enum(['Cash', 'Instrument'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductTemplateMarginTypeEnum = z.infer<
  typeof CdmProductTemplateMarginTypeEnumSchema
>;
