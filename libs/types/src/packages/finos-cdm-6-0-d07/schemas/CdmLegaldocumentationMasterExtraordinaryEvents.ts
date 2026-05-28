import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationMasterAdditionalDisruptionEventsSchema } from './CdmLegaldocumentationMasterAdditionalDisruptionEvents';
import { CdmLegaldocumentationMasterClauseSchema } from './CdmLegaldocumentationMasterClause';
import { CdmLegaldocumentationMasterEquityCorporateEventsSchema } from './CdmLegaldocumentationMasterEquityCorporateEvents';
import { CdmLegaldocumentationMasterIndexAdjustmentEventsSchema } from './CdmLegaldocumentationMasterIndexAdjustmentEvents';
import { CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema } from './CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnum';
import { CdmLegaldocumentationMasterRepresentationsSchema } from './CdmLegaldocumentationMasterRepresentations';

export const CdmLegaldocumentationMasterExtraordinaryEventsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/ExtraordinaryEvents'
    ]
  )(
    z.object({
      additionalBespokeTerms: z
        .array(
          z.lazy((): z.ZodTypeAny => CdmLegaldocumentationMasterClauseSchema)
        )
        .min(0)
        .optional(),
      additionalDisruptionEvents: z
        .lazy(() => CdmLegaldocumentationMasterAdditionalDisruptionEventsSchema)
        .optional(),
      compositionOfCombinedConsideration: z.boolean().optional(),
      delisting: z
        .lazy(
          () =>
            CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema
        )
        .optional(),
      description: z.string().optional(),
      failureToDeliver: z.boolean().optional(),
      indexAdjustmentEvents: z
        .lazy(() => CdmLegaldocumentationMasterIndexAdjustmentEventsSchema)
        .optional(),
      mergerEvents: z
        .lazy(() => CdmLegaldocumentationMasterEquityCorporateEventsSchema)
        .optional(),
      name: z.string().optional(),
      nationalizationOrInsolvency: z
        .lazy(
          () =>
            CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema
        )
        .optional(),
      representations: z
        .lazy(() => CdmLegaldocumentationMasterRepresentationsSchema)
        .optional(),
      tenderOfferEvents: z
        .lazy(() => CdmLegaldocumentationMasterEquityCorporateEventsSchema)
        .optional(),
    })
  );

export type CdmLegaldocumentationMasterExtraordinaryEvents = z.infer<
  typeof CdmLegaldocumentationMasterExtraordinaryEventsSchema
>;
