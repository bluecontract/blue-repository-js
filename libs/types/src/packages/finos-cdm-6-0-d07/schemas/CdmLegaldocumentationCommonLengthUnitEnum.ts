import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationCommonLengthUnitEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/LengthUnitEnum']
  )(
    zod.enum(['Pages', 'TimeUnit'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationCommonLengthUnitEnum = z.infer<
  typeof CdmLegaldocumentationCommonLengthUnitEnumSchema
>;
