import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationCommonLegalAgreementTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/LegalAgreementTypeEnum'
    ]
  )(
    z.enum([
      'BrokerConfirmation',
      'Confirmation',
      'CreditSupportAgreement',
      'MasterAgreement',
      'MasterConfirmation',
      'Other',
      'SecurityAgreement',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationCommonLegalAgreementTypeEnum = z.infer<
  typeof CdmLegaldocumentationCommonLegalAgreementTypeEnumSchema
>;
