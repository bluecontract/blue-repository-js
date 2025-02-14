import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import {
  ContractInitializationEventSchema,
  ExternalContractSchema,
  JavascriptCodeStepSchema,
  TimelineEntrySchema,
  TriggerEventStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';
import { ChessMoveSchema } from './ChessMove';

export const ChessAssistedRemotelySchema = withTypeBlueId(
  blueIds.ChessAssistedRemotely
)(
  z.object({
    name: z.string().optional(),
    workflows: z
      .tuple([
        z.object({
          steps: z.tuple([UpdateStepSchema, TriggerEventStepSchema]).optional(),
          trigger: z
            .object({
              event: ContractInitializationEventSchema.optional(),
            })
            .optional(),
        }),
        z.object({
          name: z.string().optional(),
          steps: z
            .tuple([
              JavascriptCodeStepSchema,
              JavascriptCodeStepSchema,
              TriggerEventStepSchema,
              UpdateStepSchema,
            ])
            .optional(),
          trigger: z
            .object({
              event: TimelineEntrySchema.optional(),
            })
            .optional(),
        }),
        z.object({
          name: z.string().optional(),
          steps: z.tuple([TriggerEventStepSchema]).optional(),
          trigger: z
            .object({
              event: ChessMoveSchema.optional(),
              contract: ExternalContractSchema.optional(),
            })
            .optional(),
        }),
      ])
      .optional(),
    properties: z
      .object({
        winner: z.string().optional(),
        movesHistory: z.array(ChessMoveSchema).optional(),
        playerToMove: z
          .object({
            description: z.string().optional(),
          })
          .optional(),
        draw: z.boolean().optional(),
        chessboard: z.string().optional(),
        gameOver: z.boolean().optional(),
      })
      .optional(),
    messaging: z
      .object({
        participants: z
          .object({
            ['Player White']: z
              .object({
                description: z.string().optional(),
              })
              .optional(),
            ['Player Black']: z
              .object({
                description: z.string().optional(),
              })
              .optional(),
          })
          .optional(),
      })
      .optional(),
  })
);

export type ChessAssistedRemotely = z.infer<typeof ChessAssistedRemotelySchema>;
