import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationMasterEquityCorporateEventsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/EquityCorporateEvents'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmLegaldocumentationMasterEquityCorporateEvents = z.infer<
  typeof CdmLegaldocumentationMasterEquityCorporateEventsSchema
>;
