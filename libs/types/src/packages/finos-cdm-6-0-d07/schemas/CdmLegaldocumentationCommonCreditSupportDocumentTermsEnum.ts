import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationCommonCreditSupportDocumentTermsEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/CreditSupportDocumentTermsEnum'
    ]
  )(
    z.enum(['Any', 'None', 'Specified'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationCommonCreditSupportDocumentTermsEnum = z.infer<
  typeof CdmLegaldocumentationCommonCreditSupportDocumentTermsEnumSchema
>;
