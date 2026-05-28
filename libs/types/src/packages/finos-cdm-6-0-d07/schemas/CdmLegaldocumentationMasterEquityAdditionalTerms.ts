import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationMasterDeterminationRolesAndTermsSchema } from './CdmLegaldocumentationMasterDeterminationRolesAndTerms';
import { CdmLegaldocumentationMasterExtraordinaryEventsSchema } from './CdmLegaldocumentationMasterExtraordinaryEvents';
import { CdmLegaldocumentationMasterUnderlierSubstitutionProvisionSchema } from './CdmLegaldocumentationMasterUnderlierSubstitutionProvision';

export const CdmLegaldocumentationMasterEquityAdditionalTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/EquityAdditionalTerms'
    ]
  )(
    z.object({
      description: z.string().optional(),
      determinationTerms: z
        .array(
          z.lazy(
            () => CdmLegaldocumentationMasterDeterminationRolesAndTermsSchema
          )
        )
        .min(1)
        .optional(),
      extraordinaryEvents: z
        .lazy(() => CdmLegaldocumentationMasterExtraordinaryEventsSchema)
        .optional(),
      name: z.string().optional(),
      substitutionProvision: z
        .lazy(
          () => CdmLegaldocumentationMasterUnderlierSubstitutionProvisionSchema
        )
        .optional(),
    })
  );

export type CdmLegaldocumentationMasterEquityAdditionalTerms = z.infer<
  typeof CdmLegaldocumentationMasterEquityAdditionalTermsSchema
>;
