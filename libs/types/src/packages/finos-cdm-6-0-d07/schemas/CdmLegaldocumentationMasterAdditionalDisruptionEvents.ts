import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
import { CdmLegaldocumentationMasterClauseSchema } from './CdmLegaldocumentationMasterClause';

const zod = z as any;

export const CdmLegaldocumentationMasterAdditionalDisruptionEventsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/AdditionalDisruptionEvents'
    ]
  )(
    zod.object({
      additionalBespokeTerms: zod
        .array(
          zod.lazy((): z.ZodTypeAny => CdmLegaldocumentationMasterClauseSchema)
        )
        .min(0)
        .optional(),
      changeInLaw: zod.boolean().optional(),
      description: zod.string().optional(),
      determiningParty: zod
        .lazy(() => CdmBaseStaticdataPartyAncillaryRoleEnumSchema)
        .optional(),
      failureToDeliver: zod.boolean().optional(),
      foreignOwnershipEvent: zod.boolean().optional(),
      hedgingDisruption: zod.boolean().optional(),
      increasedCostOfHedging: zod.boolean().optional(),
      increasedCostOfStockBorrow: zod.boolean().optional(),
      initialStockLoanRate: zod.number().optional(),
      insolvencyFiling: zod.boolean().optional(),
      lossOfStockBorrow: zod.boolean().optional(),
      maximumStockLoanRate: zod.number().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmLegaldocumentationMasterAdditionalDisruptionEvents = z.infer<
  typeof CdmLegaldocumentationMasterAdditionalDisruptionEventsSchema
>;
