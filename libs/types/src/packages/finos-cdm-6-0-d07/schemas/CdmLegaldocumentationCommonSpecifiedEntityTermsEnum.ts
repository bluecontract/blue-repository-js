import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationCommonSpecifiedEntityTermsEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/SpecifiedEntityTermsEnum'
    ]
  )(
    z.enum([
      'AnyAffiliate',
      'MaterialSubsidiary',
      'NamedSpecifiedEntity',
      'None',
      'OtherSpecifiedEntity',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationCommonSpecifiedEntityTermsEnum = z.infer<
  typeof CdmLegaldocumentationCommonSpecifiedEntityTermsEnumSchema
>;
