import { Fiscal } from "./fiscal.type"

export namespace FPrinter {

    export type Config = {
        host: string,
        timeout?: number,
        deviceId?: string
    };

    export type Response = {
        ok: boolean,
        body?: any,
        original?: {
            req: any,
            res: any
        }
    };

    export abstract class AbstractClient {

        private readonly config: Config;

        constructor(config: Config) {
            this.config = config;
        }

        getConfig(): Config {
            return this.config;
        }

        abstract printFiscalReceipt(receipt: Fiscal.Receipt): Promise<Response>;

        abstract printFiscalReport(report: Fiscal.Report): Promise<Response>;

        abstract printCancel(cancel: Fiscal.Cancel): Promise<Response>;

        // abstract printNonFiscal(nonfiscal: Fiscal.NonFiscal): Promise<Response>;

        // abstract printInvoice(invoice: Fiscal.Invoice): Promise<Response>;

        abstract executeCommand(...commands: Fiscal.Command[]): Promise<Response>;

    }

}