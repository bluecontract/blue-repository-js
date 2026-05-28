import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductTemplateRepoDurationEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/RepoDurationEnum']
  )(
    z.enum(['Overnight', 'Term'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductTemplateRepoDurationEnum = z.infer<
  typeof CdmProductTemplateRepoDurationEnumSchema
>;
