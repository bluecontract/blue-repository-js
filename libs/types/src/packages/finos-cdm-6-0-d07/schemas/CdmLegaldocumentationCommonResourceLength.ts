import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonLengthUnitEnumSchema } from './CdmLegaldocumentationCommonLengthUnitEnum';

export const CdmLegaldocumentationCommonResourceLengthSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/ResourceLength']
  )(
    z.object({
      description: z.string().optional(),
      lengthUnit: z.lazy(() => CdmLegaldocumentationCommonLengthUnitEnumSchema),
      lengthValue: z.number(),
      name: z.string().optional(),
    })
  );

export type CdmLegaldocumentationCommonResourceLength = z.infer<
  typeof CdmLegaldocumentationCommonResourceLengthSchema
>;
