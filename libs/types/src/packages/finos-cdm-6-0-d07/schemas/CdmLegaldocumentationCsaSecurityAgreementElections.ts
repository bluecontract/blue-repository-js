import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationCsaSecurityAgreementElectionsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/csa/SecurityAgreementElections'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmLegaldocumentationCsaSecurityAgreementElections = z.infer<
  typeof CdmLegaldocumentationCsaSecurityAgreementElectionsSchema
>;
