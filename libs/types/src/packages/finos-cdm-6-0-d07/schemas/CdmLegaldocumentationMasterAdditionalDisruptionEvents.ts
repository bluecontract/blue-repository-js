import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
import { CdmLegaldocumentationMasterClauseSchema } from './CdmLegaldocumentationMasterClause';

export const CdmLegaldocumentationMasterAdditionalDisruptionEventsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/AdditionalDisruptionEvents'
    ]
  )(
    z.object({
      additionalBespokeTerms: z
        .array(
          z.lazy((): z.ZodTypeAny => CdmLegaldocumentationMasterClauseSchema)
        )
        .min(0)
        .optional(),
      changeInLaw: z.boolean().optional(),
      description: z.string().optional(),
      determiningParty: z
        .lazy(() => CdmBaseStaticdataPartyAncillaryRoleEnumSchema)
        .optional(),
      failureToDeliver: z.boolean().optional(),
      foreignOwnershipEvent: z.boolean().optional(),
      hedgingDisruption: z.boolean().optional(),
      increasedCostOfHedging: z.boolean().optional(),
      increasedCostOfStockBorrow: z.boolean().optional(),
      initialStockLoanRate: z.number().optional(),
      insolvencyFiling: z.boolean().optional(),
      lossOfStockBorrow: z.boolean().optional(),
      maximumStockLoanRate: z.number().optional(),
      name: z.string().optional(),
    })
  );

export type CdmLegaldocumentationMasterAdditionalDisruptionEvents = z.infer<
  typeof CdmLegaldocumentationMasterAdditionalDisruptionEventsSchema
>;
