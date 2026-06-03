import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnumSchema } from './CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/FieldWithMetaMasterConfirmationAnnexTypeEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(
          () => CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnumSchema
        )
        .optional(),
    })
  );

export type CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnum =
  z.infer<
    typeof CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnumSchema
  >;
