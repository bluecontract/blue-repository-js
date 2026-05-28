import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationCsaCollateralTransferAgreementElectionsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/csa/CollateralTransferAgreementElections'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmLegaldocumentationCsaCollateralTransferAgreementElections =
  z.infer<
    typeof CdmLegaldocumentationCsaCollateralTransferAgreementElectionsSchema
  >;
