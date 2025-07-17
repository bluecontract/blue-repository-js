import { processedTask } from './ProcessedTask';
import { makeChessMoveTask } from './MakeChessMoveTask';
import { chessAssistedTwoPlayers } from './ChessAssistedTwoPlayers';
import { chessAssistedRemotely } from './ChessAssistedRemotely';
import { chessGameMoveMadeEvent } from './ChessGameMoveMadeEvent';
import { chessGameStartedEvent } from './ChessGameStartedEvent';
import { chess } from './Chess';
import { chessAssisted } from './ChessAssisted';
import { chessMove } from './ChessMove';

export const contents = {
  '28zqhvDUrrYkjodDBRuCc63SrQD8hTDKqwS353E4DNsS': processedTask,
  '58URWFP2Z9W9RgqwxoXJDtv6LfoKDSHvSeWWjpDkz9BU': makeChessMoveTask,
  '5V3W5ZD5sGzQw1bgM9gooTx778XtmuxRf1kGVmT5KQxw': chessAssistedTwoPlayers,
  '85KVBga7k37DHrLyQR2riqxfsycwXxBCHjm34qrwZyQR': chessAssistedRemotely,
  EkEtUob9ZEKzd61Fk8u1KFDZVZAhCLmzxcvTLvYgp3iw: chessGameMoveMadeEvent,
  H6u17c2fXJnmshciJVjqxoHVH48YirQYVbFXCTk8ZSym: chessGameStartedEvent,
  HbtaSKMq4rEPVv4LbzbniLp5VKBtyn7wcBBa6Z7HtqzA: chess,
  Huc83h7n7pZnBMk4GBad3TSi8dHnNGhDLg1uz3h4FCkx: chessAssisted,
  MFGzp8CtRVLb9CF2xAc8kt3jwV99sag7jpdHemZmGz9: chessMove,
} as const;
