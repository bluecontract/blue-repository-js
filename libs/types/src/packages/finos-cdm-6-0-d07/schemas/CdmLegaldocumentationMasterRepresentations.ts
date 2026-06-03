import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationMasterRepresentationsSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/Representations']
  )(
    zod.object({
      name: zod.string().optional(),
    })
  );

export type CdmLegaldocumentationMasterRepresentations = z.infer<
  typeof CdmLegaldocumentationMasterRepresentationsSchema
>;
