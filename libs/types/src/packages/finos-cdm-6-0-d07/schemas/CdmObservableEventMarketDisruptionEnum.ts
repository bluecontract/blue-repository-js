import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableEventMarketDisruptionEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/MarketDisruptionEnum']
)(
  zod.enum(['ModifiedPostponement', 'Omission', 'Postponement'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmObservableEventMarketDisruptionEnum = z.infer<
  typeof CdmObservableEventMarketDisruptionEnumSchema
>;
