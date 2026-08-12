import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowLimitLevelEnumSchema } from './CdmEventWorkflowLimitLevelEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmEventWorkflowFieldWithMetaLimitLevelEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/FieldWithMetaLimitLevelEnum']
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod.lazy(() => CdmEventWorkflowLimitLevelEnumSchema).optional(),
    })
  );

export type CdmEventWorkflowFieldWithMetaLimitLevelEnum = z.infer<
  typeof CdmEventWorkflowFieldWithMetaLimitLevelEnumSchema
>;
