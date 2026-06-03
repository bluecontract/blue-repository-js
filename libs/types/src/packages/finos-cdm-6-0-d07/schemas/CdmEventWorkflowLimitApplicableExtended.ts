import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowCreditLimitUtilisationSchema } from './CdmEventWorkflowCreditLimitUtilisation';
import { CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema } from './CdmEventWorkflowFieldWithMetaCreditLimitTypeEnum';
import { CdmEventWorkflowFieldWithMetaLimitLevelEnumSchema } from './CdmEventWorkflowFieldWithMetaLimitLevelEnum';
import { CdmEventWorkflowVelocitySchema } from './CdmEventWorkflowVelocity';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmEventWorkflowLimitApplicableExtendedSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/LimitApplicableExtended']
  )(
    zod.object({
      amountRemaining: zod.number().optional(),
      amountUtilized: zod.number().optional(),
      clipSize: zod.number().optional(),
      currency: zod
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      description: zod.string().optional(),
      limitAmount: zod.number().optional(),
      limitImpactDueToTrade: zod.number().optional(),
      limitLevel: zod
        .lazy(() => CdmEventWorkflowFieldWithMetaLimitLevelEnumSchema)
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

export type CdmEventWorkflowLimitApplicableExtended = z.infer<
  typeof CdmEventWorkflowLimitApplicableExtendedSchema
>;
