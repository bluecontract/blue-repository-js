import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableEventMarketDisruptionEnumSchema } from './CdmObservableEventMarketDisruptionEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmObservableEventFieldWithMetaMarketDisruptionEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/event/FieldWithMetaMarketDisruptionEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmObservableEventMarketDisruptionEnumSchema)
        .optional(),
    })
  );

export type CdmObservableEventFieldWithMetaMarketDisruptionEnum = z.infer<
  typeof CdmObservableEventFieldWithMetaMarketDisruptionEnumSchema
>;
