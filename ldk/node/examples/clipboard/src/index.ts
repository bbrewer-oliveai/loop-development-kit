import { HostServices, Logger, Loop, serveLoop } from '../../../dist';
import { StoppableStream } from '../../../dist/hostClients/stoppables';

const logger = new Logger('olive-helps-node-example-clipboard');

class ClipboardLoop implements Loop {
  private _host: HostServices | undefined;

  private clipboardStream: StoppableStream<string> | undefined;

  start(host: HostServices): void {
    this._host = host;
    logger.info('Requesting Stream');
    try {
      this.host.clipboard.queryClipboard().then((response) => {
        logger.info(
          'Received Keyboard Event',
          'response',
          JSON.stringify(response),
        );
        if (response) {
          this.host.whisper.markdownWhisper({
            markdown: `Keyboard Text: ${response}`,
            icon: 'bathtub',
            label: 'Keyboard Event',
          });
        }
      }).catch(err => {
        logger.error(
          'Received Error',
          'response',
          JSON.stringify(err),
        );
      });
    } catch (e) {
      logger.error('Received Error', 'error', e);
    }
  }

  stop(): void {
    logger.info('Stopping');
    this.clipboardStream?.stop();
    this.clipboardStream = undefined;
    this._host = undefined;
    process.exit(0);
  }

  private get host(): HostServices {
    if (this._host == null) {
      throw new Error('Cannot Retrieve Host Before Set');
    }
    return this._host;
  }
}

const loop = new ClipboardLoop();
serveLoop(loop);
