// package: proto
// file: whisper.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class WhisperStyle extends jspb.Message { 
    getBackgroundcolor(): string;
    setBackgroundcolor(value: string): WhisperStyle;

    getPrimarycolor(): string;
    setPrimarycolor(value: string): WhisperStyle;

    getHighlightcolor(): string;
    setHighlightcolor(value: string): WhisperStyle;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperStyle.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperStyle): WhisperStyle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperStyle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperStyle;
    static deserializeBinaryFromReader(message: WhisperStyle, reader: jspb.BinaryReader): WhisperStyle;
}

export namespace WhisperStyle {
    export type AsObject = {
        backgroundcolor: string,
        primarycolor: string,
        highlightcolor: string,
    }
}

export class WhisperMeta extends jspb.Message { 
    getLabel(): string;
    setLabel(value: string): WhisperMeta;

    getIcon(): string;
    setIcon(value: string): WhisperMeta;


    hasStyle(): boolean;
    clearStyle(): void;
    getStyle(): WhisperStyle | undefined;
    setStyle(value?: WhisperStyle): WhisperMeta;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperMeta.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperMeta): WhisperMeta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperMeta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperMeta;
    static deserializeBinaryFromReader(message: WhisperMeta, reader: jspb.BinaryReader): WhisperMeta;
}

export namespace WhisperMeta {
    export type AsObject = {
        label: string,
        icon: string,
        style?: WhisperStyle.AsObject,
    }
}

export class WhisperMarkdownRequest extends jspb.Message { 

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): WhisperMeta | undefined;
    setMeta(value?: WhisperMeta): WhisperMarkdownRequest;

    getMarkdown(): string;
    setMarkdown(value: string): WhisperMarkdownRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperMarkdownRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperMarkdownRequest): WhisperMarkdownRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperMarkdownRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperMarkdownRequest;
    static deserializeBinaryFromReader(message: WhisperMarkdownRequest, reader: jspb.BinaryReader): WhisperMarkdownRequest;
}

export namespace WhisperMarkdownRequest {
    export type AsObject = {
        meta?: WhisperMeta.AsObject,
        markdown: string,
    }
}

export class WhisperConfirmRequest extends jspb.Message { 

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): WhisperMeta | undefined;
    setMeta(value?: WhisperMeta): WhisperConfirmRequest;

    getMarkdown(): string;
    setMarkdown(value: string): WhisperConfirmRequest;

    getRejectlabel(): string;
    setRejectlabel(value: string): WhisperConfirmRequest;

    getResolvelabel(): string;
    setResolvelabel(value: string): WhisperConfirmRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperConfirmRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperConfirmRequest): WhisperConfirmRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperConfirmRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperConfirmRequest;
    static deserializeBinaryFromReader(message: WhisperConfirmRequest, reader: jspb.BinaryReader): WhisperConfirmRequest;
}

export namespace WhisperConfirmRequest {
    export type AsObject = {
        meta?: WhisperMeta.AsObject,
        markdown: string,
        rejectlabel: string,
        resolvelabel: string,
    }
}

export class WhisperConfirmResponse extends jspb.Message { 
    getResponse(): boolean;
    setResponse(value: boolean): WhisperConfirmResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperConfirmResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperConfirmResponse): WhisperConfirmResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperConfirmResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperConfirmResponse;
    static deserializeBinaryFromReader(message: WhisperConfirmResponse, reader: jspb.BinaryReader): WhisperConfirmResponse;
}

export namespace WhisperConfirmResponse {
    export type AsObject = {
        response: boolean,
    }
}

export class WhisperFormRequest extends jspb.Message { 

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): WhisperMeta | undefined;
    setMeta(value?: WhisperMeta): WhisperFormRequest;

    getMarkdown(): string;
    setMarkdown(value: string): WhisperFormRequest;

    getSubmitlabel(): string;
    setSubmitlabel(value: string): WhisperFormRequest;

    getCancellabel(): string;
    setCancellabel(value: string): WhisperFormRequest;


    getInputsMap(): jspb.Map<string, WhisperFormInput>;
    clearInputsMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperFormRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperFormRequest): WhisperFormRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperFormRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperFormRequest;
    static deserializeBinaryFromReader(message: WhisperFormRequest, reader: jspb.BinaryReader): WhisperFormRequest;
}

export namespace WhisperFormRequest {
    export type AsObject = {
        meta?: WhisperMeta.AsObject,
        markdown: string,
        submitlabel: string,
        cancellabel: string,

        inputsMap: Array<[string, WhisperFormInput.AsObject]>,
    }
}

export class WhisperFormInput extends jspb.Message { 

    hasCheckbox(): boolean;
    clearCheckbox(): void;
    getCheckbox(): WhisperFormInput.Checkbox | undefined;
    setCheckbox(value?: WhisperFormInput.Checkbox): WhisperFormInput;


    hasEmail(): boolean;
    clearEmail(): void;
    getEmail(): WhisperFormInput.Email | undefined;
    setEmail(value?: WhisperFormInput.Email): WhisperFormInput;


    hasMarkdown(): boolean;
    clearMarkdown(): void;
    getMarkdown(): WhisperFormInput.Markdown | undefined;
    setMarkdown(value?: WhisperFormInput.Markdown): WhisperFormInput;


    hasNumber(): boolean;
    clearNumber(): void;
    getNumber(): WhisperFormInput.Number | undefined;
    setNumber(value?: WhisperFormInput.Number): WhisperFormInput;


    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): WhisperFormInput.Password | undefined;
    setPassword(value?: WhisperFormInput.Password): WhisperFormInput;


    hasRadio(): boolean;
    clearRadio(): void;
    getRadio(): WhisperFormInput.Radio | undefined;
    setRadio(value?: WhisperFormInput.Radio): WhisperFormInput;


    hasSelect(): boolean;
    clearSelect(): void;
    getSelect(): WhisperFormInput.Select | undefined;
    setSelect(value?: WhisperFormInput.Select): WhisperFormInput;


    hasTel(): boolean;
    clearTel(): void;
    getTel(): WhisperFormInput.Tel | undefined;
    setTel(value?: WhisperFormInput.Tel): WhisperFormInput;


    hasText(): boolean;
    clearText(): void;
    getText(): WhisperFormInput.Text | undefined;
    setText(value?: WhisperFormInput.Text): WhisperFormInput;


    hasTime(): boolean;
    clearTime(): void;
    getTime(): WhisperFormInput.Time | undefined;
    setTime(value?: WhisperFormInput.Time): WhisperFormInput;


    getInputOneofCase(): WhisperFormInput.InputOneofCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperFormInput.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperFormInput): WhisperFormInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperFormInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperFormInput;
    static deserializeBinaryFromReader(message: WhisperFormInput, reader: jspb.BinaryReader): WhisperFormInput;
}

export namespace WhisperFormInput {
    export type AsObject = {
        checkbox?: WhisperFormInput.Checkbox.AsObject,
        email?: WhisperFormInput.Email.AsObject,
        markdown?: WhisperFormInput.Markdown.AsObject,
        number?: WhisperFormInput.Number.AsObject,
        password?: WhisperFormInput.Password.AsObject,
        radio?: WhisperFormInput.Radio.AsObject,
        select?: WhisperFormInput.Select.AsObject,
        tel?: WhisperFormInput.Tel.AsObject,
        text?: WhisperFormInput.Text.AsObject,
        time?: WhisperFormInput.Time.AsObject,
    }


    export class Checkbox extends jspb.Message { 
        getLabel(): string;
        setLabel(value: string): Checkbox;

        getTooltip(): string;
        setTooltip(value: string): Checkbox;

        getValue(): boolean;
        setValue(value: boolean): Checkbox;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Checkbox.AsObject;
        static toObject(includeInstance: boolean, msg: Checkbox): Checkbox.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Checkbox, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Checkbox;
        static deserializeBinaryFromReader(message: Checkbox, reader: jspb.BinaryReader): Checkbox;
    }

    export namespace Checkbox {
        export type AsObject = {
            label: string,
            tooltip: string,
            value: boolean,
        }
    }

    export class Email extends jspb.Message { 
        getLabel(): string;
        setLabel(value: string): Email;

        getTooltip(): string;
        setTooltip(value: string): Email;

        getValue(): string;
        setValue(value: string): Email;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Email.AsObject;
        static toObject(includeInstance: boolean, msg: Email): Email.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Email, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Email;
        static deserializeBinaryFromReader(message: Email, reader: jspb.BinaryReader): Email;
    }

    export namespace Email {
        export type AsObject = {
            label: string,
            tooltip: string,
            value: string,
        }
    }

    export class Markdown extends jspb.Message { 
        getLabel(): string;
        setLabel(value: string): Markdown;

        getTooltip(): string;
        setTooltip(value: string): Markdown;

        getValue(): string;
        setValue(value: string): Markdown;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Markdown.AsObject;
        static toObject(includeInstance: boolean, msg: Markdown): Markdown.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Markdown, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Markdown;
        static deserializeBinaryFromReader(message: Markdown, reader: jspb.BinaryReader): Markdown;
    }

    export namespace Markdown {
        export type AsObject = {
            label: string,
            tooltip: string,
            value: string,
        }
    }

    export class Number extends jspb.Message { 
        getLabel(): string;
        setLabel(value: string): Number;

        getTooltip(): string;
        setTooltip(value: string): Number;

        getValue(): number;
        setValue(value: number): Number;

        getMin(): number;
        setMin(value: number): Number;

        getMax(): number;
        setMax(value: number): Number;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Number.AsObject;
        static toObject(includeInstance: boolean, msg: Number): Number.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Number, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Number;
        static deserializeBinaryFromReader(message: Number, reader: jspb.BinaryReader): Number;
    }

    export namespace Number {
        export type AsObject = {
            label: string,
            tooltip: string,
            value: number,
            min: number,
            max: number,
        }
    }

    export class Password extends jspb.Message { 
        getLabel(): string;
        setLabel(value: string): Password;

        getTooltip(): string;
        setTooltip(value: string): Password;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Password.AsObject;
        static toObject(includeInstance: boolean, msg: Password): Password.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Password, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Password;
        static deserializeBinaryFromReader(message: Password, reader: jspb.BinaryReader): Password;
    }

    export namespace Password {
        export type AsObject = {
            label: string,
            tooltip: string,
        }
    }

    export class Radio extends jspb.Message { 
        getLabel(): string;
        setLabel(value: string): Radio;

        getTooltip(): string;
        setTooltip(value: string): Radio;

        clearOptionsList(): void;
        getOptionsList(): Array<string>;
        setOptionsList(value: Array<string>): Radio;
        addOptions(value: string, index?: number): string;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Radio.AsObject;
        static toObject(includeInstance: boolean, msg: Radio): Radio.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Radio, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Radio;
        static deserializeBinaryFromReader(message: Radio, reader: jspb.BinaryReader): Radio;
    }

    export namespace Radio {
        export type AsObject = {
            label: string,
            tooltip: string,
            optionsList: Array<string>,
        }
    }

    export class Select extends jspb.Message { 
        getLabel(): string;
        setLabel(value: string): Select;

        getTooltip(): string;
        setTooltip(value: string): Select;

        clearOptionsList(): void;
        getOptionsList(): Array<string>;
        setOptionsList(value: Array<string>): Select;
        addOptions(value: string, index?: number): string;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Select.AsObject;
        static toObject(includeInstance: boolean, msg: Select): Select.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Select, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Select;
        static deserializeBinaryFromReader(message: Select, reader: jspb.BinaryReader): Select;
    }

    export namespace Select {
        export type AsObject = {
            label: string,
            tooltip: string,
            optionsList: Array<string>,
        }
    }

    export class Tel extends jspb.Message { 
        getLabel(): string;
        setLabel(value: string): Tel;

        getTooltip(): string;
        setTooltip(value: string): Tel;

        getValue(): string;
        setValue(value: string): Tel;

        getPattern(): string;
        setPattern(value: string): Tel;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Tel.AsObject;
        static toObject(includeInstance: boolean, msg: Tel): Tel.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Tel, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Tel;
        static deserializeBinaryFromReader(message: Tel, reader: jspb.BinaryReader): Tel;
    }

    export namespace Tel {
        export type AsObject = {
            label: string,
            tooltip: string,
            value: string,
            pattern: string,
        }
    }

    export class Text extends jspb.Message { 
        getLabel(): string;
        setLabel(value: string): Text;

        getTooltip(): string;
        setTooltip(value: string): Text;

        getValue(): string;
        setValue(value: string): Text;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Text.AsObject;
        static toObject(includeInstance: boolean, msg: Text): Text.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Text, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Text;
        static deserializeBinaryFromReader(message: Text, reader: jspb.BinaryReader): Text;
    }

    export namespace Text {
        export type AsObject = {
            label: string,
            tooltip: string,
            value: string,
        }
    }

    export class Time extends jspb.Message { 
        getLabel(): string;
        setLabel(value: string): Time;

        getTooltip(): string;
        setTooltip(value: string): Time;


        hasValue(): boolean;
        clearValue(): void;
        getValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setValue(value?: google_protobuf_timestamp_pb.Timestamp): Time;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Time.AsObject;
        static toObject(includeInstance: boolean, msg: Time): Time.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Time, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Time;
        static deserializeBinaryFromReader(message: Time, reader: jspb.BinaryReader): Time;
    }

    export namespace Time {
        export type AsObject = {
            label: string,
            tooltip: string,
            value?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }


    export enum InputOneofCase {
        INPUTONEOF_NOT_SET = 0,
    
    CHECKBOX = 1,

    EMAIL = 2,

    MARKDOWN = 3,

    NUMBER = 4,

    PASSWORD = 5,

    RADIO = 6,

    SELECT = 7,

    TEL = 8,

    TEXT = 9,

    TIME = 10,

    }

}

export class WhisperFormOutput extends jspb.Message { 

    hasCheckbox(): boolean;
    clearCheckbox(): void;
    getCheckbox(): WhisperFormOutput.Checkbox | undefined;
    setCheckbox(value?: WhisperFormOutput.Checkbox): WhisperFormOutput;


    hasEmail(): boolean;
    clearEmail(): void;
    getEmail(): WhisperFormOutput.Email | undefined;
    setEmail(value?: WhisperFormOutput.Email): WhisperFormOutput;


    hasMarkdown(): boolean;
    clearMarkdown(): void;
    getMarkdown(): WhisperFormOutput.Markdown | undefined;
    setMarkdown(value?: WhisperFormOutput.Markdown): WhisperFormOutput;


    hasNumber(): boolean;
    clearNumber(): void;
    getNumber(): WhisperFormOutput.Number | undefined;
    setNumber(value?: WhisperFormOutput.Number): WhisperFormOutput;


    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): WhisperFormOutput.Password | undefined;
    setPassword(value?: WhisperFormOutput.Password): WhisperFormOutput;


    hasRadio(): boolean;
    clearRadio(): void;
    getRadio(): WhisperFormOutput.Radio | undefined;
    setRadio(value?: WhisperFormOutput.Radio): WhisperFormOutput;


    hasSelect(): boolean;
    clearSelect(): void;
    getSelect(): WhisperFormOutput.Select | undefined;
    setSelect(value?: WhisperFormOutput.Select): WhisperFormOutput;


    hasTel(): boolean;
    clearTel(): void;
    getTel(): WhisperFormOutput.Tel | undefined;
    setTel(value?: WhisperFormOutput.Tel): WhisperFormOutput;


    hasText(): boolean;
    clearText(): void;
    getText(): WhisperFormOutput.Text | undefined;
    setText(value?: WhisperFormOutput.Text): WhisperFormOutput;


    hasTime(): boolean;
    clearTime(): void;
    getTime(): WhisperFormOutput.Time | undefined;
    setTime(value?: WhisperFormOutput.Time): WhisperFormOutput;


    getOutputOneofCase(): WhisperFormOutput.OutputOneofCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperFormOutput.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperFormOutput): WhisperFormOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperFormOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperFormOutput;
    static deserializeBinaryFromReader(message: WhisperFormOutput, reader: jspb.BinaryReader): WhisperFormOutput;
}

export namespace WhisperFormOutput {
    export type AsObject = {
        checkbox?: WhisperFormOutput.Checkbox.AsObject,
        email?: WhisperFormOutput.Email.AsObject,
        markdown?: WhisperFormOutput.Markdown.AsObject,
        number?: WhisperFormOutput.Number.AsObject,
        password?: WhisperFormOutput.Password.AsObject,
        radio?: WhisperFormOutput.Radio.AsObject,
        select?: WhisperFormOutput.Select.AsObject,
        tel?: WhisperFormOutput.Tel.AsObject,
        text?: WhisperFormOutput.Text.AsObject,
        time?: WhisperFormOutput.Time.AsObject,
    }


    export class Checkbox extends jspb.Message { 
        getValue(): boolean;
        setValue(value: boolean): Checkbox;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Checkbox.AsObject;
        static toObject(includeInstance: boolean, msg: Checkbox): Checkbox.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Checkbox, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Checkbox;
        static deserializeBinaryFromReader(message: Checkbox, reader: jspb.BinaryReader): Checkbox;
    }

    export namespace Checkbox {
        export type AsObject = {
            value: boolean,
        }
    }

    export class Email extends jspb.Message { 
        getValue(): string;
        setValue(value: string): Email;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Email.AsObject;
        static toObject(includeInstance: boolean, msg: Email): Email.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Email, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Email;
        static deserializeBinaryFromReader(message: Email, reader: jspb.BinaryReader): Email;
    }

    export namespace Email {
        export type AsObject = {
            value: string,
        }
    }

    export class Markdown extends jspb.Message { 
        getValue(): string;
        setValue(value: string): Markdown;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Markdown.AsObject;
        static toObject(includeInstance: boolean, msg: Markdown): Markdown.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Markdown, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Markdown;
        static deserializeBinaryFromReader(message: Markdown, reader: jspb.BinaryReader): Markdown;
    }

    export namespace Markdown {
        export type AsObject = {
            value: string,
        }
    }

    export class Number extends jspb.Message { 
        getValue(): number;
        setValue(value: number): Number;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Number.AsObject;
        static toObject(includeInstance: boolean, msg: Number): Number.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Number, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Number;
        static deserializeBinaryFromReader(message: Number, reader: jspb.BinaryReader): Number;
    }

    export namespace Number {
        export type AsObject = {
            value: number,
        }
    }

    export class Password extends jspb.Message { 
        getValue(): string;
        setValue(value: string): Password;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Password.AsObject;
        static toObject(includeInstance: boolean, msg: Password): Password.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Password, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Password;
        static deserializeBinaryFromReader(message: Password, reader: jspb.BinaryReader): Password;
    }

    export namespace Password {
        export type AsObject = {
            value: string,
        }
    }

    export class Radio extends jspb.Message { 
        getValue(): string;
        setValue(value: string): Radio;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Radio.AsObject;
        static toObject(includeInstance: boolean, msg: Radio): Radio.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Radio, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Radio;
        static deserializeBinaryFromReader(message: Radio, reader: jspb.BinaryReader): Radio;
    }

    export namespace Radio {
        export type AsObject = {
            value: string,
        }
    }

    export class Select extends jspb.Message { 
        getValue(): string;
        setValue(value: string): Select;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Select.AsObject;
        static toObject(includeInstance: boolean, msg: Select): Select.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Select, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Select;
        static deserializeBinaryFromReader(message: Select, reader: jspb.BinaryReader): Select;
    }

    export namespace Select {
        export type AsObject = {
            value: string,
        }
    }

    export class Tel extends jspb.Message { 
        getValue(): string;
        setValue(value: string): Tel;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Tel.AsObject;
        static toObject(includeInstance: boolean, msg: Tel): Tel.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Tel, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Tel;
        static deserializeBinaryFromReader(message: Tel, reader: jspb.BinaryReader): Tel;
    }

    export namespace Tel {
        export type AsObject = {
            value: string,
        }
    }

    export class Text extends jspb.Message { 
        getValue(): string;
        setValue(value: string): Text;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Text.AsObject;
        static toObject(includeInstance: boolean, msg: Text): Text.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Text, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Text;
        static deserializeBinaryFromReader(message: Text, reader: jspb.BinaryReader): Text;
    }

    export namespace Text {
        export type AsObject = {
            value: string,
        }
    }

    export class Time extends jspb.Message { 

        hasValue(): boolean;
        clearValue(): void;
        getValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setValue(value?: google_protobuf_timestamp_pb.Timestamp): Time;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Time.AsObject;
        static toObject(includeInstance: boolean, msg: Time): Time.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Time, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Time;
        static deserializeBinaryFromReader(message: Time, reader: jspb.BinaryReader): Time;
    }

    export namespace Time {
        export type AsObject = {
            value?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }


    export enum OutputOneofCase {
        OUTPUTONEOF_NOT_SET = 0,
    
    CHECKBOX = 1,

    EMAIL = 2,

    MARKDOWN = 3,

    NUMBER = 4,

    PASSWORD = 5,

    RADIO = 6,

    SELECT = 7,

    TEL = 8,

    TEXT = 9,

    TIME = 10,

    }

}

export class WhisperFormResult extends jspb.Message { 
    getSubmitted(): boolean;
    setSubmitted(value: boolean): WhisperFormResult;


    getOutputsMap(): jspb.Map<string, WhisperFormOutput>;
    clearOutputsMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperFormResult.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperFormResult): WhisperFormResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperFormResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperFormResult;
    static deserializeBinaryFromReader(message: WhisperFormResult, reader: jspb.BinaryReader): WhisperFormResult;
}

export namespace WhisperFormResult {
    export type AsObject = {
        submitted: boolean,

        outputsMap: Array<[string, WhisperFormOutput.AsObject]>,
    }
}

export class WhisperFormUpdate extends jspb.Message { 
    getKey(): string;
    setKey(value: string): WhisperFormUpdate;


    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): WhisperFormOutput | undefined;
    setOutput(value?: WhisperFormOutput): WhisperFormUpdate;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperFormUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperFormUpdate): WhisperFormUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperFormUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperFormUpdate;
    static deserializeBinaryFromReader(message: WhisperFormUpdate, reader: jspb.BinaryReader): WhisperFormUpdate;
}

export namespace WhisperFormUpdate {
    export type AsObject = {
        key: string,
        output?: WhisperFormOutput.AsObject,
    }
}

export class WhisperFormStreamResponse extends jspb.Message { 

    hasResult(): boolean;
    clearResult(): void;
    getResult(): WhisperFormResult | undefined;
    setResult(value?: WhisperFormResult): WhisperFormStreamResponse;


    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): WhisperFormUpdate | undefined;
    setUpdate(value?: WhisperFormUpdate): WhisperFormStreamResponse;

    getError(): string;
    setError(value: string): WhisperFormStreamResponse;


    getWhisperFormResponseOneofCase(): WhisperFormStreamResponse.WhisperFormResponseOneofCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhisperFormStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WhisperFormStreamResponse): WhisperFormStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhisperFormStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhisperFormStreamResponse;
    static deserializeBinaryFromReader(message: WhisperFormStreamResponse, reader: jspb.BinaryReader): WhisperFormStreamResponse;
}

export namespace WhisperFormStreamResponse {
    export type AsObject = {
        result?: WhisperFormResult.AsObject,
        update?: WhisperFormUpdate.AsObject,
        error: string,
    }

    export enum WhisperFormResponseOneofCase {
        WHISPERFORMRESPONSEONEOF_NOT_SET = 0,
    
    RESULT = 1,

    UPDATE = 2,

    }

}
