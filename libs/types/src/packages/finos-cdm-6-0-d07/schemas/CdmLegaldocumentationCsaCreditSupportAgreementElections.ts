import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationCsaCreditSupportAgreementElectionsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/csa/CreditSupportAgreementElections'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmLegaldocumentationCsaCreditSupportAgreementElections = z.infer<
  typeof CdmLegaldocumentationCsaCreditSupportAgreementElectionsSchema
>;
