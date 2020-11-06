import { ConnInfo } from './grpc/broker_pb';
import { Session } from './grpc/session_pb';
import { HostServices } from './hostServices';
import WhisperClient from './hostClients/whisperClient';
import StorageClient from './hostClients/storageClient';
import KeyboardClient from './hostClients/keyboardClient';
import { ClipboardClient } from './hostClients/clipboardClient';
import { CursorClient } from './hostClients/cursorClient';
import { HoverClient } from './hostClients/hoverClient';
import { FileSystemClient } from './hostClients/fileSystemClient';
import { ProcessClient } from './hostClients/processClient';
import { WindowClient } from './hostClients/windowClient';
import { BrowserClient } from './hostClients/browserClient';
import { Logger } from './logging';
/**
 * @internal
 */
export default class HostClientFacade implements HostServices {
    private logger;
    whisper: WhisperClient;
    storage: StorageClient;
    keyboard: KeyboardClient;
    clipboard: ClipboardClient;
    cursor: CursorClient;
    hover: HoverClient;
    fileSystem: FileSystemClient;
    process: ProcessClient;
    window: WindowClient;
    browser: BrowserClient;
    constructor(logger: Logger);
    connect(connInfo: ConnInfo.AsObject, session: Session.AsObject): Promise<void[]>;
}
