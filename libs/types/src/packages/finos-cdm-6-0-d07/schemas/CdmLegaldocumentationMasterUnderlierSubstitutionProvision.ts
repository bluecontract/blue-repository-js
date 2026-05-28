import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmLegaldocumentationMasterClauseSchema } from './CdmLegaldocumentationMasterClause';
import { CdmLegaldocumentationMasterExtraordinaryEventsSchema } from './CdmLegaldocumentationMasterExtraordinaryEvents';

export const CdmLegaldocumentationMasterUnderlierSubstitutionProvisionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/UnderlierSubstitutionProvision'
    ]
  )(
    z.object({
      description: z.string().optional(),
      disputingParty: z
        .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
        .optional(),
      name: z.string().optional(),
      substitutionBeSpokeTerms: z
        .array(
          z.lazy((): z.ZodTypeAny => CdmLegaldocumentationMasterClauseSchema)
        )
        .min(0)
        .optional(),
      substitutionTriggerEvents: z
        .array(
          z.lazy(() => CdmLegaldocumentationMasterExtraordinaryEventsSchema)
        )
        .min(0)
        .optional(),
      whoMaySubstitute: z
        .array(z.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema))
        .min(1)
        .max(2)
        .optional(),
    })
  );

export type CdmLegaldocumentationMasterUnderlierSubstitutionProvision = z.infer<
  typeof CdmLegaldocumentationMasterUnderlierSubstitutionProvisionSchema
>;
