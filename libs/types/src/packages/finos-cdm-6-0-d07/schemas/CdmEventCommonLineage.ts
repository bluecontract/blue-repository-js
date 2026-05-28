import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTrade';
import { CdmEventPositionMetafieldsReferenceWithMetaPortfolioStateSchema } from './CdmEventPositionMetafieldsReferenceWithMetaPortfolioState';
import { CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema } from './CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStep';

export const CdmEventCommonLineageSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/Lineage']
)(
  z.object({
    description: z.string().optional(),
    eventReference: z
      .array(
        z.lazy(
          () => CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema
        )
      )
      .min(0)
      .optional(),
    name: z.string().optional(),
    portfolioStateReference: z
      .array(
        z.lazy(
          () => CdmEventPositionMetafieldsReferenceWithMetaPortfolioStateSchema
        )
      )
      .min(0)
      .optional(),
    tradeReference: z
      .array(z.lazy(() => CdmEventCommonMetafieldsReferenceWithMetaTradeSchema))
      .min(0)
      .optional(),
  })
);

export type CdmEventCommonLineage = z.infer<typeof CdmEventCommonLineageSchema>;
