import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductTemplateOptionTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/OptionTypeEnum']
  )(
    z.enum(['Call', 'Payer', 'Put', 'Receiver', 'Straddle'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductTemplateOptionTypeEnum = z.infer<
  typeof CdmProductTemplateOptionTypeEnumSchema
>;
