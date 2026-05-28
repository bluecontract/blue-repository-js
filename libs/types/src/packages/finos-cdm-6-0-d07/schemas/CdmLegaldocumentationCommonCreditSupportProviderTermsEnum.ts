import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationCommonCreditSupportProviderTermsEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/CreditSupportProviderTermsEnum'
    ]
  )(
    z.enum(['Any', 'None', 'Specified'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationCommonCreditSupportProviderTermsEnum = z.infer<
  typeof CdmLegaldocumentationCommonCreditSupportProviderTermsEnumSchema
>;
