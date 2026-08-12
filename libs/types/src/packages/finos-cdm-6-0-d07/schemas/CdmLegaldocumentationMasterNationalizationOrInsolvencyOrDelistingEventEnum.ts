import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/NationalizationOrInsolvencyOrDelistingEventEnum'
    ]
  )(
    zod.enum(['CancellationAndPayment', 'NegotiatedCloseout'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnum =
  z.infer<
    typeof CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema
  >;
