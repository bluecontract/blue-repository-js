import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowCreditLimitTypeEnumSchema } from './CdmEventWorkflowCreditLimitTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/event/workflow/FieldWithMetaCreditLimitTypeEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod.lazy(() => CdmEventWorkflowCreditLimitTypeEnumSchema).optional(),
    })
  );

export type CdmEventWorkflowFieldWithMetaCreditLimitTypeEnum = z.infer<
  typeof CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema
>;
