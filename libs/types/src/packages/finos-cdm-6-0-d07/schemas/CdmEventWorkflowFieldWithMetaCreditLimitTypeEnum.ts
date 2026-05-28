import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowCreditLimitTypeEnumSchema } from './CdmEventWorkflowCreditLimitTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/event/workflow/FieldWithMetaCreditLimitTypeEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.lazy(() => CdmEventWorkflowCreditLimitTypeEnumSchema).optional(),
    })
  );

export type CdmEventWorkflowFieldWithMetaCreditLimitTypeEnum = z.infer<
  typeof CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema
>;
