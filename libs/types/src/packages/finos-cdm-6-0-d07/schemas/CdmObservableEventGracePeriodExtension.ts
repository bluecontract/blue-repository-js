import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';

const zod = z as any;

export const CdmObservableEventGracePeriodExtensionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/GracePeriodExtension']
)(
  zod.object({
    applicable: zod.boolean(),
    gracePeriod: zod.lazy(() => CdmBaseDatetimeOffsetSchema).optional(),
    name: zod.string().optional(),
  })
);

export type CdmObservableEventGracePeriodExtension = z.infer<
  typeof CdmObservableEventGracePeriodExtensionSchema
>;
