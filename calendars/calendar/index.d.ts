import { GraphApis } from "../../lib/src/rest/graphAPIs";

import { operation1444, operation1548, operation1549, operation3345, operation3449, operation3450, operation3457, operation3458, operation3459, operation3460, operation3564, operation3565, operation3572, operation3573, operation3574, operation3575, operation3679, operation3680, operation3687, operation6358, operation6462, operation6463, operation6464, operation6465, operation6466, operation6467, operation6468, operation6469, operation6470, operation6471, operation6472, operation6473, operation6477, operation6478, operation6479, operation6480, operation6481, operation6482, operation6483, operation6484, operation6485, operation6486, operation6487, operation6488, operation6489, operation6490, operation6491, operation6492, operation6493, operation6494, operation6495, operation6496, operation6497, operation6498, operation6499, operation6500, operation6501, operation6502, operation6503, operation6504, operation6505, operation6506, operation6507, operation6508, operation6509, operation6510, operation6511, operation6512, operation6513, operation6514, operation6515, operation6516, operation6517, operation6518, operation6519, operation6520, operation6521, operation6522, operation6523, operation6524, operation6525, operation6526, operation6577, operation6578, operation6579, operation6580, operation6581, operation6582, operation6583, operation6584, operation6585, operation6586, operation6587, operation6588, operation6692, operation6693, operation6694, operation6695, operation6696, operation6697, operation6698, operation6699, operation6700 } from "../../lib/src/rest/operations";

declare module "../../lib/src/rest/graphAPIs" {
    export interface GraphApis {
        (api:"/groups/{group-id}/calendar",groupid: string):operation1444,
        (api:"/groups/{group-id}/calendar/microsoft.graph.allowedCalendarSharingRoles(User='{User}')",groupid: string,User: string):operation1548,
        (api:"/groups/{group-id}/calendar/microsoft.graph.getSchedule",groupid: string):operation1549,
        (api:"/me/calendar"):operation3345,
        (api:"/me/calendar/microsoft.graph.allowedCalendarSharingRoles(User='{User}')",User: string):operation3449,
        (api:"/me/calendar/microsoft.graph.getSchedule"):operation3450,
        (api:"/me/calendarGroups"):operation3457,
        (api:"/me/calendarGroups/{calendarGroup-id}",calendarGroupid: string):operation3458,
        (api:"/me/calendarGroups/{calendarGroup-id}/calendars",calendarGroupid: string):operation3459,
        (api:"/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}",calendarGroupid: string,calendarid: string):operation3460,    
        (api:"/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/microsoft.graph.allowedCalendarSharingRoles(User='{User}')",calendarGroupid: string,calendarid: string,User: string):operation3564,
        (api:"/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/microsoft.graph.getSchedule",calendarGroupid: string,calendarid: string):operation3565,
        (api:"/me/calendarGroups/{calendarGroup-id}/calendars/$count",calendarGroupid: string):operation3572,
        (api:"/me/calendarGroups/$count"):operation3573,
        (api:"/me/calendars"):operation3574,
        (api:"/me/calendars/{calendar-id}",calendarid: string):operation3575,
        (api:"/me/calendars/{calendar-id}/microsoft.graph.allowedCalendarSharingRoles(User='{User}')",calendarid: string,User: string):operation3679,
        (api:"/me/calendars/{calendar-id}/microsoft.graph.getSchedule",calendarid: string):operation3680,
        (api:"/me/calendars/$count"):operation3687,
        
        (api:"/users/{user-id}/calendar",userid: string):operation6358,
        (api:"/users/{user-id}/calendar/microsoft.graph.allowedCalendarSharingRoles(User='{User}')",userid: string,User: string):operation6462,
        (api:"/users/{user-id}/calendar/microsoft.graph.getSchedule",userid: string):operation6463,
        (api:"/users/{user-id}/calendar/multiValueExtendedProperties",userid: string):operation6464,
        (api:"/users/{user-id}/calendar/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",userid: string,multiValueLegacyExtendedPropertyid: string):operation6465,
        (api:"/users/{user-id}/calendar/multiValueExtendedProperties/$count",userid: string):operation6466,
        (api:"/users/{user-id}/calendar/singleValueExtendedProperties",userid: string):operation6467,
        (api:"/users/{user-id}/calendar/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",userid: string,singleValueLegacyExtendedPropertyid: string):operation6468,
        (api:"/users/{user-id}/calendar/singleValueExtendedProperties/$count",userid: string):operation6469,
        (api:"/users/{user-id}/calendarGroups",userid: string):operation6470,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}",userid: string,calendarGroupid: string):operation6471,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars",userid: string,calendarGroupid: string):operation6472,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}",userid: string,calendarGroupid: string,calendarid: string):operation6473,
        
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView",userid: string,calendarGroupid: string,calendarid: string):operation6477,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6478,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6479,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments/{attachment-id}",userid: string,calendarGroupid: string,calendarid: string,eventid: string,attachmentid: string):operation6480,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments/$count",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6481,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments/microsoft.graph.createUploadSession",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6482,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/calendar",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6483,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6484,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions/{extension-id}",userid: string,calendarGroupid: string,calendarid: string,eventid: string,extensionid: string):operation6485,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions/$count",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6486,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6487,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6488,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/attachments",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6489,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/attachments/{attachment-id}",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string,attachmentid: string):operation6490,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/attachments/$count",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6491,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/attachments/microsoft.graph.createUploadSession",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6492,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/calendar",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6493,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/extensions",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6494,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string,extensionid: string):operation6495,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/extensions/$count",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6496,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.accept",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6497,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.cancel",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6498,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.decline",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6499,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.dismissReminder",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6500,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.forward",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6501,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.snoozeReminder",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6502,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.tentativelyAccept",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6503,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6504,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string,multiValueLegacyExtendedPropertyid: string):operation6505,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties/$count",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6506,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6507,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string,singleValueLegacyExtendedPropertyid: string):operation6508,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties/$count",userid: string,calendarGroupid: string,calendarid: string,eventid: string,eventid1: string):operation6509,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/$count",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6510,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/microsoft.graph.delta()",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6511,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/microsoft.graph.accept",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6512,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/microsoft.graph.cancel",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6513,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/microsoft.graph.decline",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6514,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/microsoft.graph.dismissReminder",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6515,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/microsoft.graph.forward",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6516,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/microsoft.graph.snoozeReminder",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6517,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/microsoft.graph.tentativelyAccept",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6518,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/multiValueExtendedProperties",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6519,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",userid: string,calendarGroupid: string,calendarid: string,eventid: string,multiValueLegacyExtendedPropertyid: string):operation6520,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/multiValueExtendedProperties/$count",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6521,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/singleValueExtendedProperties",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6522,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",userid: string,calendarGroupid: string,calendarid: string,eventid: string,singleValueLegacyExtendedPropertyid: string):operation6523,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/singleValueExtendedProperties/$count",userid: string,calendarGroupid: string,calendarid: string,eventid: string):operation6524,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/$count",userid: string,calendarGroupid: string,calendarid: string):operation6525,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/microsoft.graph.delta()",userid: string,calendarGroupid: string,calendarid: string):operation6526,
        
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/microsoft.graph.allowedCalendarSharingRoles(User='{User}')",userid: string,calendarGroupid: string,calendarid: string,User: string):operation6577,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/microsoft.graph.getSchedule",userid: string,calendarGroupid: string,calendarid: string):operation6578,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/multiValueExtendedProperties",userid: string,calendarGroupid: string,calendarid: string):operation6579,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",userid: string,calendarGroupid: string,calendarid: string,multiValueLegacyExtendedPropertyid: string):operation6580,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/multiValueExtendedProperties/$count",userid: string,calendarGroupid: string,calendarid: string):operation6581,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/singleValueExtendedProperties",userid: string,calendarGroupid: string,calendarid: string):operation6582,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",userid: string,calendarGroupid: string,calendarid: string,singleValueLegacyExtendedPropertyid: string):operation6583,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/singleValueExtendedProperties/$count",userid: string,calendarGroupid: string,calendarid: string):operation6584,
        (api:"/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/$count",userid: string,calendarGroupid: string):operation6585,
        (api:"/users/{user-id}/calendarGroups/$count",userid: string):operation6586,
        (api:"/users/{user-id}/calendars",userid: string):operation6587,
        (api:"/users/{user-id}/calendars/{calendar-id}",userid: string,calendarid: string):operation6588,
        
        (api:"/users/{user-id}/calendars/{calendar-id}/microsoft.graph.allowedCalendarSharingRoles(User='{User}')",userid: string,calendarid: string,User: string):operation6692,
        (api:"/users/{user-id}/calendars/{calendar-id}/microsoft.graph.getSchedule",userid: string,calendarid: string):operation6693,
        (api:"/users/{user-id}/calendars/{calendar-id}/multiValueExtendedProperties",userid: string,calendarid: string):operation6694,
        (api:"/users/{user-id}/calendars/{calendar-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",userid: string,calendarid: string,multiValueLegacyExtendedPropertyid: string):operation6695,
        (api:"/users/{user-id}/calendars/{calendar-id}/multiValueExtendedProperties/$count",userid: string,calendarid: string):operation6696,
        (api:"/users/{user-id}/calendars/{calendar-id}/singleValueExtendedProperties",userid: string,calendarid: string):operation6697,
        (api:"/users/{user-id}/calendars/{calendar-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",userid: string,calendarid: string,singleValueLegacyExtendedPropertyid: string):operation6698,
        (api:"/users/{user-id}/calendars/{calendar-id}/singleValueExtendedProperties/$count",userid: string,calendarid: string):operation6699,
        (api:"/users/{user-id}/calendars/$count",userid: string):operation6700,
    }
}

export{};