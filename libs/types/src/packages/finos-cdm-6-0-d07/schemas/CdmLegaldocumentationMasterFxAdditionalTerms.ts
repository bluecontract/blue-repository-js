import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationMasterFxAdditionalTermsSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/FxAdditionalTerms']
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmLegaldocumentationMasterFxAdditionalTerms = z.infer<
  typeof CdmLegaldocumentationMasterFxAdditionalTermsSchema
>;
