import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationMasterDeterminationRolesAndTermsSchema } from './CdmLegaldocumentationMasterDeterminationRolesAndTerms';
import { CdmLegaldocumentationMasterExtraordinaryEventsSchema } from './CdmLegaldocumentationMasterExtraordinaryEvents';
import { CdmLegaldocumentationMasterUnderlierSubstitutionProvisionSchema } from './CdmLegaldocumentationMasterUnderlierSubstitutionProvision';

const zod = z as any;

export const CdmLegaldocumentationMasterEquityAdditionalTermsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/EquityAdditionalTerms'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      determinationTerms: zod
        .array(
          zod.lazy(
            () => CdmLegaldocumentationMasterDeterminationRolesAndTermsSchema
          )
        )
        .min(1)
        .optional(),
      extraordinaryEvents: zod
        .lazy(() => CdmLegaldocumentationMasterExtraordinaryEventsSchema)
        .optional(),
      name: zod.string().optional(),
      substitutionProvision: zod
        .lazy(
          () => CdmLegaldocumentationMasterUnderlierSubstitutionProvisionSchema
        )
        .optional(),
    })
  );

export type CdmLegaldocumentationMasterEquityAdditionalTerms = z.infer<
  typeof CdmLegaldocumentationMasterEquityAdditionalTermsSchema
>;
