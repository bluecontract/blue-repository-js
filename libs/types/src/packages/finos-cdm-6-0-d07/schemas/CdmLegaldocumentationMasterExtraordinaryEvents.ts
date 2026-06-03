import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationMasterAdditionalDisruptionEventsSchema } from './CdmLegaldocumentationMasterAdditionalDisruptionEvents';
import { CdmLegaldocumentationMasterClauseSchema } from './CdmLegaldocumentationMasterClause';
import { CdmLegaldocumentationMasterEquityCorporateEventsSchema } from './CdmLegaldocumentationMasterEquityCorporateEvents';
import { CdmLegaldocumentationMasterIndexAdjustmentEventsSchema } from './CdmLegaldocumentationMasterIndexAdjustmentEvents';
import { CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema } from './CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnum';
import { CdmLegaldocumentationMasterRepresentationsSchema } from './CdmLegaldocumentationMasterRepresentations';

const zod = z as any;

export const CdmLegaldocumentationMasterExtraordinaryEventsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/ExtraordinaryEvents'
    ]
  )(
    zod.object({
      additionalBespokeTerms: zod
        .array(
          zod.lazy((): z.ZodTypeAny => CdmLegaldocumentationMasterClauseSchema)
        )
        .min(0)
        .optional(),
      additionalDisruptionEvents: zod
        .lazy(() => CdmLegaldocumentationMasterAdditionalDisruptionEventsSchema)
        .optional(),
      compositionOfCombinedConsideration: zod.boolean().optional(),
      delisting: zod
        .lazy(
          () =>
            CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema
        )
        .optional(),
      description: zod.string().optional(),
      failureToDeliver: zod.boolean().optional(),
      indexAdjustmentEvents: zod
        .lazy(() => CdmLegaldocumentationMasterIndexAdjustmentEventsSchema)
        .optional(),
      mergerEvents: zod
        .lazy(() => CdmLegaldocumentationMasterEquityCorporateEventsSchema)
        .optional(),
      name: zod.string().optional(),
      nationalizationOrInsolvency: zod
        .lazy(
          () =>
            CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema
        )
        .optional(),
      representations: zod
        .lazy(() => CdmLegaldocumentationMasterRepresentationsSchema)
        .optional(),
      tenderOfferEvents: zod
        .lazy(() => CdmLegaldocumentationMasterEquityCorporateEventsSchema)
        .optional(),
    })
  );

export type CdmLegaldocumentationMasterExtraordinaryEvents = z.infer<
  typeof CdmLegaldocumentationMasterExtraordinaryEventsSchema
>;
