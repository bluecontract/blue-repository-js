import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/NationalizationOrInsolvencyOrDelistingEventEnum'
    ]
  )(
    z.enum(['CancellationAndPayment', 'NegotiatedCloseout'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnum =
  z.infer<
    typeof CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema
  >;
