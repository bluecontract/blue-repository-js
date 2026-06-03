import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableEventRestructuringEnumSchema } from './CdmObservableEventRestructuringEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmObservableEventFieldWithMetaRestructuringEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/event/FieldWithMetaRestructuringEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod.lazy(() => CdmObservableEventRestructuringEnumSchema).optional(),
    })
  );

export type CdmObservableEventFieldWithMetaRestructuringEnum = z.infer<
  typeof CdmObservableEventFieldWithMetaRestructuringEnumSchema
>;
