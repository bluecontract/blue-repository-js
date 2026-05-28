import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationMasterFxAdditionalTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/FxAdditionalTerms']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmLegaldocumentationMasterFxAdditionalTerms = z.infer<
  typeof CdmLegaldocumentationMasterFxAdditionalTermsSchema
>;
