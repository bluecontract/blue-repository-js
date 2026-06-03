import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationMasterMasterConfirmationTypeEnumSchema } from './CdmLegaldocumentationMasterMasterConfirmationTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/FieldWithMetaMasterConfirmationTypeEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmLegaldocumentationMasterMasterConfirmationTypeEnumSchema)
        .optional(),
    })
  );

export type CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnum =
  z.infer<
    typeof CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnumSchema
  >;
