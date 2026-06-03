import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableEventMarketDisruptionEnumSchema } from './CdmObservableEventMarketDisruptionEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmObservableEventFieldWithMetaMarketDisruptionEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/event/FieldWithMetaMarketDisruptionEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmObservableEventMarketDisruptionEnumSchema)
        .optional(),
    })
  );

export type CdmObservableEventFieldWithMetaMarketDisruptionEnum = z.infer<
  typeof CdmObservableEventFieldWithMetaMarketDisruptionEnumSchema
>;
