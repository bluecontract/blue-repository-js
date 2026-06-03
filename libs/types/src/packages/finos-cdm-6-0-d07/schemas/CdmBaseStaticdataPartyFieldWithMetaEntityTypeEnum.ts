import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyEntityTypeEnumSchema } from './CdmBaseStaticdataPartyEntityTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/party/FieldWithMetaEntityTypeEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmBaseStaticdataPartyEntityTypeEnumSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnum = z.infer<
  typeof CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnumSchema
>;
