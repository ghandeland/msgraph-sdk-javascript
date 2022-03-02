import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerProgressTaskBoardTaskFormat extends Entity implements Parsable {
    /** Hint value used to order the task on the Progress view of the Task Board. The format is defined as outlined here.  */
    private _orderHint?: string | undefined;
    /**
     * Instantiates a new plannerProgressTaskBoardTaskFormat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the orderHint property value. Hint value used to order the task on the Progress view of the Task Board. The format is defined as outlined here.
     * @returns a string
     */
    public get orderHint() {
        return this._orderHint;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["orderHint", (o, n) => { (o as unknown as PlannerProgressTaskBoardTaskFormat).orderHint = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("orderHint", this.orderHint);
    };
    /**
     * Sets the orderHint property value. Hint value used to order the task on the Progress view of the Task Board. The format is defined as outlined here.
     * @param value Value to set for the orderHint property.
     */
    public set orderHint(value: string | undefined) {
        this._orderHint = value;
    };
}