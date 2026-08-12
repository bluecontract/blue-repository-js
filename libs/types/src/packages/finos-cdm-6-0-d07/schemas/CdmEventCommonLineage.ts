import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTrade';
import { CdmEventPositionMetafieldsReferenceWithMetaPortfolioStateSchema } from './CdmEventPositionMetafieldsReferenceWithMetaPortfolioState';
import { CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema } from './CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStep';

const zod = z as any;

export const CdmEventCommonLineageSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/Lineage']
)(
  zod.object({
    description: zod.string().optional(),
    eventReference: zod
      .array(
        zod.lazy(
          () => CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema
        )
      )
      .min(0)
      .optional(),
    name: zod.string().optional(),
    portfolioStateReference: zod
      .array(
        zod.lazy(
          () => CdmEventPositionMetafieldsReferenceWithMetaPortfolioStateSchema
        )
      )
      .min(0)
      .optional(),
    tradeReference: zod
      .array(
        zod.lazy(() => CdmEventCommonMetafieldsReferenceWithMetaTradeSchema)
      )
      .min(0)
      .optional(),
  })
);

export type CdmEventCommonLineage = z.infer<typeof CdmEventCommonLineageSchema>;
