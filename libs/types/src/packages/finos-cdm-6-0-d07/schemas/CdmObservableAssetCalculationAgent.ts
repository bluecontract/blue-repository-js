import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema } from './CdmBaseDatetimeFieldWithMetaBusinessCenterEnum';
import { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
import { CdmObservableAssetPartyDeterminationEnumSchema } from './CdmObservableAssetPartyDeterminationEnum';

export const CdmObservableAssetCalculationAgentSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CalculationAgent']
  )(
    z.object({
      calculationAgentBusinessCenter: z
        .lazy(() => CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema)
        .optional(),
      calculationAgentParty: z
        .lazy(() => CdmBaseStaticdataPartyAncillaryRoleEnumSchema)
        .optional(),
      calculationAgentPartyEnum: z
        .lazy(() => CdmObservableAssetPartyDeterminationEnumSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmObservableAssetCalculationAgent = z.infer<
  typeof CdmObservableAssetCalculationAgentSchema
>;
