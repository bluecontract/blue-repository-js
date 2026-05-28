import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowCreditLimitUtilisationSchema } from './CdmEventWorkflowCreditLimitUtilisation';
import { CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema } from './CdmEventWorkflowFieldWithMetaCreditLimitTypeEnum';
import { CdmEventWorkflowVelocitySchema } from './CdmEventWorkflowVelocity';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmEventWorkflowLimitApplicableSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/LimitApplicable']
  )(
    z.object({
      amountRemaining: z.number().optional(),
      amountUtilized: z.number().optional(),
      clipSize: z.number().optional(),
      currency: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      limitType: z
        .lazy(() => CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema)
        .optional(),
      name: z.string().optional(),
      utilization: z
        .lazy(() => CdmEventWorkflowCreditLimitUtilisationSchema)
        .optional(),
      velocity: z.lazy(() => CdmEventWorkflowVelocitySchema).optional(),
    })
  );

export type CdmEventWorkflowLimitApplicable = z.infer<
  typeof CdmEventWorkflowLimitApplicableSchema
>;
