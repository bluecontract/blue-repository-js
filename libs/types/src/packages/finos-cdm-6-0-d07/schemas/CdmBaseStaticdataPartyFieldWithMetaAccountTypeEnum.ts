import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAccountTypeEnumSchema } from './CdmBaseStaticdataPartyAccountTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/party/FieldWithMetaAccountTypeEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmBaseStaticdataPartyAccountTypeEnumSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnum = z.infer<
  typeof CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnumSchema
>;
