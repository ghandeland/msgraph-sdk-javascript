import {DateTimeTimeZone} from '../../../../../../../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SnoozeReminderRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _newReminderTime?: DateTimeTimeZone | undefined;
    /**
     * Instantiates a new snoozeReminderRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the newReminderTime property value. 
     * @returns a dateTimeTimeZone
     */
    public get newReminderTime() {
        return this._newReminderTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["newReminderTime", (o, n) => { (o as unknown as SnoozeReminderRequestBody).newReminderTime = n.getObjectValue<DateTimeTimeZone>(DateTimeTimeZone); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<DateTimeTimeZone>("newReminderTime", this.newReminderTime);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the newReminderTime property value. 
     * @param value Value to set for the NewReminderTime property.
     */
    public set newReminderTime(value: DateTimeTimeZone | undefined) {
        this._newReminderTime = value;
    };
}