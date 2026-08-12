import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationCommonClosedStateEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/ClosedStateEnum']
  )(
    zod.enum([
      'Allocated',
      'Cancelled',
      'Exercised',
      'Expired',
      'Matured',
      'Novated',
      'Terminated',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationCommonClosedStateEnum = z.infer<
  typeof CdmLegaldocumentationCommonClosedStateEnumSchema
>;
