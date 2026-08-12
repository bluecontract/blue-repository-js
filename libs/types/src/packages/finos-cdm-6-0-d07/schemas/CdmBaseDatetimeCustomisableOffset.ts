import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';

const zod = z as any;

export const CdmBaseDatetimeCustomisableOffsetSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/CustomisableOffset']
)(
  zod.object({
    customProvision: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    offset: zod.lazy(() => CdmBaseDatetimeOffsetSchema).optional(),
  })
);

export type CdmBaseDatetimeCustomisableOffset = z.infer<
  typeof CdmBaseDatetimeCustomisableOffsetSchema
>;
