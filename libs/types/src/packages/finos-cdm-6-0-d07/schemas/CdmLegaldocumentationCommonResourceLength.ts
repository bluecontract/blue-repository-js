import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonLengthUnitEnumSchema } from './CdmLegaldocumentationCommonLengthUnitEnum';

const zod = z as any;

export const CdmLegaldocumentationCommonResourceLengthSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/ResourceLength']
  )(
    zod.object({
      description: zod.string().optional(),
      lengthUnit: zod.lazy(
        () => CdmLegaldocumentationCommonLengthUnitEnumSchema
      ),
      lengthValue: zod.number(),
      name: zod.string().optional(),
    })
  );

export type CdmLegaldocumentationCommonResourceLength = z.infer<
  typeof CdmLegaldocumentationCommonResourceLengthSchema
>;
