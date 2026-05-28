import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowLimitLevelEnumSchema } from './CdmEventWorkflowLimitLevelEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmEventWorkflowFieldWithMetaLimitLevelEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/FieldWithMetaLimitLevelEnum']
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.lazy(() => CdmEventWorkflowLimitLevelEnumSchema).optional(),
    })
  );

export type CdmEventWorkflowFieldWithMetaLimitLevelEnum = z.infer<
  typeof CdmEventWorkflowFieldWithMetaLimitLevelEnumSchema
>;
