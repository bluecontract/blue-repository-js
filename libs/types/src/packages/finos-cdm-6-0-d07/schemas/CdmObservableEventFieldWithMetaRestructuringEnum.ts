import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableEventRestructuringEnumSchema } from './CdmObservableEventRestructuringEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmObservableEventFieldWithMetaRestructuringEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/event/FieldWithMetaRestructuringEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.lazy(() => CdmObservableEventRestructuringEnumSchema).optional(),
    })
  );

export type CdmObservableEventFieldWithMetaRestructuringEnum = z.infer<
  typeof CdmObservableEventFieldWithMetaRestructuringEnumSchema
>;
