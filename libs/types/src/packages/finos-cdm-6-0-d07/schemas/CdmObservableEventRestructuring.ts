import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableEventFieldWithMetaRestructuringEnumSchema } from './CdmObservableEventFieldWithMetaRestructuringEnum';

export const CdmObservableEventRestructuringSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/Restructuring']
  )(
    z.object({
      applicable: z.boolean(),
      multipleCreditEventNotices: z.boolean().optional(),
      multipleHolderObligation: z.boolean().optional(),
      name: z.string().optional(),
      restructuringType: z
        .lazy(() => CdmObservableEventFieldWithMetaRestructuringEnumSchema)
        .optional(),
    })
  );

export type CdmObservableEventRestructuring = z.infer<
  typeof CdmObservableEventRestructuringSchema
>;
