import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableEventFieldWithMetaRestructuringEnumSchema } from './CdmObservableEventFieldWithMetaRestructuringEnum';

const zod = z as any;

export const CdmObservableEventRestructuringSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/Restructuring']
)(
  zod.object({
    applicable: zod.boolean(),
    multipleCreditEventNotices: zod.boolean().optional(),
    multipleHolderObligation: zod.boolean().optional(),
    name: zod.string().optional(),
    restructuringType: zod
      .lazy(() => CdmObservableEventFieldWithMetaRestructuringEnumSchema)
      .optional(),
  })
);

export type CdmObservableEventRestructuring = z.infer<
  typeof CdmObservableEventRestructuringSchema
>;
