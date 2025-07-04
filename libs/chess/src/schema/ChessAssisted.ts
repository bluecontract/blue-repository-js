import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import {
  ContractInitializationEventSchema,
  ContractSchema,
  JavaScriptCodeStepSchema,
  TimelineEntrySchema,
  TriggerEventStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';
import { SimulatorTimelineEntrySchema } from '@blue-repository/simulator';
import { ChessMoveSchema } from './ChessMove';

export const ChessAssistedSchema = withTypeBlueId(blueIds['Chess Assisted'])(
  ContractSchema.extend({
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
              JavaScriptCodeStepSchema,
              JavaScriptCodeStepSchema,
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
              event: SimulatorTimelineEntrySchema.optional(),
            })
            .optional(),
        }),
      ])
      .optional(),
    properties: z
      .object({
        winner: z.string().optional(),
        movesHistory: z.array(ChessMoveSchema).optional(),
        playerToMove: blueNodeField().optional(),
        draw: z.boolean().optional(),
        chessboard: z.string().optional(),
        gameOver: z.boolean().optional(),
      })
      .optional(),
    messaging: z
      .object({
        participants: z
          .object({
            ['Player Black']: blueNodeField().optional(),
            ['Player White']: blueNodeField().optional(),
            Assistant: blueNodeField().optional(),
          })
          .optional(),
      })
      .optional(),
  })
);

export type ChessAssisted = z.infer<typeof ChessAssistedSchema>;
