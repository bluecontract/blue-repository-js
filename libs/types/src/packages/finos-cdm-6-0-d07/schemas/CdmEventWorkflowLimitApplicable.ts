import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowCreditLimitUtilisationSchema } from './CdmEventWorkflowCreditLimitUtilisation';
import { CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema } from './CdmEventWorkflowFieldWithMetaCreditLimitTypeEnum';
import { CdmEventWorkflowVelocitySchema } from './CdmEventWorkflowVelocity';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmEventWorkflowLimitApplicableSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/LimitApplicable']
)(
  zod.object({
    amountRemaining: zod.number().optional(),
    amountUtilized: zod.number().optional(),
    clipSize: zod.number().optional(),
    currency: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    limitType: zod
      .lazy(() => CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema)
      .optional(),
    name: zod.string().optional(),
    utilization: zod
      .lazy(() => CdmEventWorkflowCreditLimitUtilisationSchema)
      .optional(),
    velocity: zod.lazy(() => CdmEventWorkflowVelocitySchema).optional(),
  })
);

export type CdmEventWorkflowLimitApplicable = z.infer<
  typeof CdmEventWorkflowLimitApplicableSchema
>;
