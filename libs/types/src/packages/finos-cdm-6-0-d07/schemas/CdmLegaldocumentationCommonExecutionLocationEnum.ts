import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationCommonExecutionLocationEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/ExecutionLocationEnum'
    ]
  )(
    z.enum(['ExecutedInBelgium', 'ExecutedOutsideBelgium', 'OtherLocation'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationCommonExecutionLocationEnum = z.infer<
  typeof CdmLegaldocumentationCommonExecutionLocationEnumSchema
>;
