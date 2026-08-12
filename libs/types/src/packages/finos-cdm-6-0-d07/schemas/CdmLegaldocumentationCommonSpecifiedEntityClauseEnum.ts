import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationCommonSpecifiedEntityClauseEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/SpecifiedEntityClauseEnum'
    ]
  )(
    zod.enum([
      'Bankruptcy',
      'CreditEventUponMerger',
      'CrossDefault',
      'DefaultUnderSpecifiedTransaction',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationCommonSpecifiedEntityClauseEnum = z.infer<
  typeof CdmLegaldocumentationCommonSpecifiedEntityClauseEnumSchema
>;
