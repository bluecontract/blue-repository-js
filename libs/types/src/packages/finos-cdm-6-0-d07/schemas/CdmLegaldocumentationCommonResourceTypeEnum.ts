import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationCommonResourceTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/ResourceTypeEnum']
  )(
    z.enum([
      'Confirmation',
      'SupplementalMaterialEconomicTerms',
      'TermSheet',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationCommonResourceTypeEnum = z.infer<
  typeof CdmLegaldocumentationCommonResourceTypeEnumSchema
>;
