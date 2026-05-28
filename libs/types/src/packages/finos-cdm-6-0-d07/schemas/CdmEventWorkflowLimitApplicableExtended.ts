import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowCreditLimitUtilisationSchema } from './CdmEventWorkflowCreditLimitUtilisation';
import { CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema } from './CdmEventWorkflowFieldWithMetaCreditLimitTypeEnum';
import { CdmEventWorkflowFieldWithMetaLimitLevelEnumSchema } from './CdmEventWorkflowFieldWithMetaLimitLevelEnum';
import { CdmEventWorkflowVelocitySchema } from './CdmEventWorkflowVelocity';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmEventWorkflowLimitApplicableExtendedSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/LimitApplicableExtended']
  )(
    z.object({
      amountRemaining: z.number().optional(),
      amountUtilized: z.number().optional(),
      clipSize: z.number().optional(),
      currency: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      description: z.string().optional(),
      limitAmount: z.number().optional(),
      limitImpactDueToTrade: z.number().optional(),
      limitLevel: z
        .lazy(() => CdmEventWorkflowFieldWithMetaLimitLevelEnumSchema)
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

export type CdmEventWorkflowLimitApplicableExtended = z.infer<
  typeof CdmEventWorkflowLimitApplicableExtendedSchema
>;
