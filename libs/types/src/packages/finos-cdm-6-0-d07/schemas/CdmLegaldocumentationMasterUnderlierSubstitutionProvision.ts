import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmLegaldocumentationMasterClauseSchema } from './CdmLegaldocumentationMasterClause';
import { CdmLegaldocumentationMasterExtraordinaryEventsSchema } from './CdmLegaldocumentationMasterExtraordinaryEvents';

const zod = z as any;

export const CdmLegaldocumentationMasterUnderlierSubstitutionProvisionSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/UnderlierSubstitutionProvision'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      disputingParty: zod
        .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
        .optional(),
      name: zod.string().optional(),
      substitutionBeSpokeTerms: zod
        .array(
          zod.lazy((): z.ZodTypeAny => CdmLegaldocumentationMasterClauseSchema)
        )
        .min(0)
        .optional(),
      substitutionTriggerEvents: zod
        .array(
          zod.lazy(() => CdmLegaldocumentationMasterExtraordinaryEventsSchema)
        )
        .min(0)
        .optional(),
      whoMaySubstitute: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema))
        .min(1)
        .max(2)
        .optional(),
    })
  );

export type CdmLegaldocumentationMasterUnderlierSubstitutionProvision = z.infer<
  typeof CdmLegaldocumentationMasterUnderlierSubstitutionProvisionSchema
>;
